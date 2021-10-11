import { useState, useEffect } from 'react';

// custom hook
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
          
    // useEffect hook: runs code on every render, (can be used for fetching data)
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json(); // pass the json into the response object
                })
                .then(data => { 
                    setIsPending(false);
                    setData(data); 
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError'){
                        console.log('fetch aborted');
                    } else { // auto catches network / connection error
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 500);

         // abort the fetch
        return () => abortCont.abort();
    }, [url]); //useEffect Dependencies

    return { data, isPending, error } // objects
}

export default useFetch;


// // Click event
// const Home = () => {

//     const handleClick =(e) => {
//         console.log('Hello, world!', e);
//     }

//     const handleClickAgain = (name, e) => {
//         console.log('Hello, ' + name, e.target);
//     }

//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me!</button>
//             <button onClick={(e) => handleClickAgain('mario', e)}>Click me again.</button>
//         </div>
//      );
// }

// export default Home;


// // useState hook: allows us to change variales or data later or in reaction to some event
// import { useState } from 'react';

// const Home = () => {
//     // let name = 'mario';
//     // "const [initial value, changed value] =" to grab 2 values that this hook return
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('ben');
//         setAge(30);
//         // pass a new value, and reactive the state value(useState())
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old.</p>
//             <button onClick={handleClick}>Click me!</button>
//         </div>
//     );
// }

// export default Home;


// Outputting lists
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
     

  return (
    <div className="home">
      {/* props: pass data from a parent component into a child component */}

      { error && <div> { error } </div> }
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      {/* pass function into other components as props */}
      
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
      {/* filter() method, doesn't change the original data, just return a new filtered array. Can be useful for searching. */}
    </div>
  );
}
 
export default Home;



   

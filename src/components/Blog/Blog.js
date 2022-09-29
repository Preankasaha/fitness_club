import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='blog-title'>BLOG</h2>

            <div className='blog-container' >

                <div className='blog-info1'>
                    <h1>How react works?</h1>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering the code. Users can create a representation of a DOM node by declaring the Element function in React. Instead of using the traditional DOM class, React uses className</p>
                </div>
                <div className='blog-info-2'>
                    <h1>Difference between state and props in react</h1>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function). In React, both this.props and this.state represent the rendered values, i.e. what’s currently on the screen.</p>
                </div>
                <div className='blog-info-3'>
                    <h1>Which purposes useEffect is used?</h1>
                    <p>By using useEffect Hook, developers tell React that  component needs to do something after render. React will remember the function that is passed, and call it later after performing the DOM updates. The useEffect Hook lets developer run additional code after React has already updated the DOM. Most common use cases of useEffect are:</p>
                    <p>1. Add an event listener for a button.
                        2. Data fetching from API when component mounts.
                        3. Perform an action when state or props change.
                        4. Clean up event listeners when the component unmounts.</p>

                </div>

            </div >
        </div>
    );
};

export default Blog;
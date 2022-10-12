import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto mt-12'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-green-100 rounded-box">
                <div className="collapse-title text-xl font-bold bg-green-200">
                    What is the purpose of React Router?
                </div>
                <div className="collapse-content">
                    <p><br />
                        React Router enables "client side routing".
                        <br /> <br />
                        In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.
                        <br /><br />
                        Client side routing allows our app to update the URL from a link click without making another request for another document from the server. Instead, our app can immediately render some new UI and make data requests with `fetch` to update the page with new information.
                        <br /><br />
                        This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-yellow-100 rounded-box">
                <div className="collapse-title text-xl font-bold bg-yellow-200">
                    How does Context API works?
                </div>
                <div className="collapse-content">
                    <br />
                    <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                        <br /><br />
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.
                        <br /><br />
                        React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that has it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-red-100 rounded-box">
                <div className="collapse-title text-xl font-bold bg-red-200">
                    What you know about useRef() hook?
                </div>
                <div className="collapse-content">
                    <br />
                    <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                        <br /><br />
                        Syntax: <strong>const refContainer = useRef(initialValue);</strong>
                        <br /><br />
                        The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
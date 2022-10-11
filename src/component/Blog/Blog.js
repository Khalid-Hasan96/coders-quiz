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
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-yellow-100 rounded-box">
                <div className="collapse-title text-xl font-bold bg-yellow-200">
                    How does Context API works?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-red-100 rounded-box">
                <div className="collapse-title text-xl font-bold bg-red-200">
                    What you know about useRef() hook?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
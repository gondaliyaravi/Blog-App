import React, { useState } from 'react';

function Home () {

    let [tital, setTital] = useState("Hello Ravi !");

    const handleTital = () => {
        // setTital("Hello I'm Ravi")
        setTital(Ravi => {
            if(Ravi === "Hello Ravi !"){
                return("Hello world!")
                }else{
                    return("Hello Ravi !")
                }
        })
    }

    return(
        <>
        <div className="jumbotron">
           <div className="container text-center">
              <h1 className="display-3">{tital}</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <button className="btn btn-primary btn-lg" onClick={handleTital}>Learn more</button>
           </div>
        </div>
        </>
    );
};

export default Home;
// scrimba uses old 17 syntax
import React from "react";
import  ReactDOM  from "react-dom";


function PageEle() {
    return (
        <div>
            <h1>react facts</h1>
            <ul>
                <li>this is cool</li>
            </ul>
        </div>
    )
}


const root = document.getElementById('root')
ReactDOM.render(<PageEle />, root)
// scrimba uses 17 instead of 18. createRoot is better
import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <img src="./react-logo.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>released in 2013</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
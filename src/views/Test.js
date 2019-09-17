import React from 'react';
import { Link } from "react-router-dom";

export default function Test() {
    console.log(window.location.pathname)
    return (
        <div>
            <p>TEST</p>
            <Link to='/contact'> <button>test</button></Link>
        </div>
    )
}

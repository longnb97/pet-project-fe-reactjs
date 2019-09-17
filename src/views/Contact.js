import React from 'react';

export default function Contact(props) {
    return (
        <div>
            <p>contact</p>
            {props.extra}<br />
            {props.match.url}
            {/* {JSON.stringify(props)} */}
        </div>
    )
}
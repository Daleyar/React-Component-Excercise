import React from 'react';

const NamesList = (props) => {
    return (
        <div>
            <ul>
                {props.names.map(name => (
                    <li>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default NamesList
import React from 'react';

const AlertUser = (props) => {
    return (
            <div>
                <button onClick={() => props.alert()}>Click Me</button>
            </div>
    )
}

export default AlertUser
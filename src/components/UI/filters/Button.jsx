import React from 'react';

const Button = ({name, clickFoo, className}) => {
    return (
        <div className={className}>
            <button onClick={clickFoo}>{name}</button>
        </div>
    );
};

export default Button;
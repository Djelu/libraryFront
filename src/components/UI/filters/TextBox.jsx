import React from 'react';

const TextBox = ({name, id, defaultText=""}) => {
    return (
        <div>
            <label htmlFor={id}>{name}</label>
            <input id={id} value={defaultText}/>
        </div>
    );
};

export default TextBox;
import React from 'react';

const Message = ({text}) => {
    return (
        <div className='alert-primary'>
            {text}
        </div>
    );
};

export default Message;
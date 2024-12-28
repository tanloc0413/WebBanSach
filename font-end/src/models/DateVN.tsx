import React from 'react'

const DateVN: React.FC = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    
    return (
        <div id='dateVN'>
            <p>{date}/{month}/{year}</p>
        </div>
    )
}

export default DateVN;
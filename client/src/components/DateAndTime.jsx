import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DateAndTime = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const time = moment().format('ddd, Do MMM YYYY, h:mm:ss a');
            setDateTime(time);
        }, 1);
    }, []);

    return <div className="text-xl font-semibold">{dateTime}</div>;
};

export default DateAndTime;

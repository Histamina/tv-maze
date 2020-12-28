import React, { useState, useEffect } from 'react';
import { Image } from 'antd';

const MonthShow = () => {
    const [ popularShow, setPopularShow ] = useState({});
    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/1`)
        .then(data => data.json())
        .then(response => setPopularShow(response.image))
        .catch(error => console.error(error));
    }, [setPopularShow]);

    return (
        <>
            <div className="mont-show">
                <Image width={200} src={popularShow.medium} alt="Show Of The Month" />
                <h2 style={{fontSize:'2rem', textAlign: 'center', margin: '0 20px', color:' #cecece'}}>SHOW OF THE MONTH</h2>
            </div>
        </>
    );
};

export default MonthShow;
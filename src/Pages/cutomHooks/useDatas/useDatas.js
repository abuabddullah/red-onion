import React, { useEffect, useState } from 'react';

const useDatas = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    console.log(data);

    return [data, setData]
};

export default useDatas;
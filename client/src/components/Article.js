import React, {useState, useEffect} from 'react';
import {api} from "../api";

const Article = ({name, children = 'empty article'}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        api.get('/article', (data) => {
            if (data && data.success){
                setData(data);
            }
        }, {name: name})
    }, []);
    return (
        <div className='article'>
            {data.length > 0 ? data.toString(): children}
        </div>
    );
};

export default Article;
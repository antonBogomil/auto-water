import React, {useEffect, useState} from 'react';
import {api} from "../api";
export const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        setLoading(true);
        api.get(url,(data)=>{
            if (data &&data.success){
                setData(data);
                setLoading(false);
            }
            else {
                setError(data);
            }
        });
    }, [url]);
    return { error, loading, data };
};
import axios from 'axios';

export const api = {
    upload: (url, data, callback) => {
        const formData = toFormData(data);
        axios.post('/api' + url, formData).then((res) => {
                callback(res);
            }
        );
    },
    post: (url, data, callback) => {
        const json = data;
        const config = {
            method: 'POST',
            url: '/api' + url,
            headers: {'content-type': 'application/json'},
            data: json
        };
        return axios(config)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                if (typeof callback === 'function') {
                    callback(data);
                }
            })
            .catch((e) => {
                alert(`Server error: ${e}`)
            });
    },
    get: (url, callback, params) => {
        console.log(params);
        return axios.get('/api' + url,{params})
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                if (typeof callback === 'function') {
                    callback(data)
                }
            })
            .catch((e) => {
                callback();
            });
    }
};


function toFormData(data) {
    let formData = new FormData;
    for (let key in data) {
        formData.append(key, data[key]);
    }
    return formData
}
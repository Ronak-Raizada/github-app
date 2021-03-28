import React from 'react';

const Path = () => {
    React.useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code');
        const axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('client_id', '5a50a6cb1fcda4aefe22');
        data.append('client_secret', 'b441400b619ea8f506404a671672d7132c6208af');
        data.append('code', code);
        data.append('redirect_uri', 'http://localhost:3000/path');
        var config = {
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Content-Type":"multipart/form-data",
                "Accept":"*/*"
            },
            data: data,
        };
        const response = axios(config)
    }, [])
    return (
        <p>Path</p>
    )
}

export default Path;
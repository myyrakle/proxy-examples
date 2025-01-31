const axios = require('axios');

delete axios.defaults.headers.get['User-Agent'];
delete axios.defaults.headers.common['Accept'];
delete axios.defaults.headers.common['Content-Type'];

async function main(params) {
    // const headers = params.__ow_headers;
    // const method = params.__ow_method;
    // const path = params.__ow_path;
    // const query = params.__ow_query; // only available when 'raw-http' option is true

    // const name = params.name || 'World';
    // const place = params.place || 'Naver';

    const body = params.__ow_body; // base64 encoded body, only available when 'raw-http' option is true

    if (!body) {
        return {
            statusCode: 400,
            headers: { 'Content-Type': 'application/json' },
            body: {
                error: 'No body provided',
            },
        };
    }

    try {
        const decodedBody = Buffer.from(body, 'base64').toString('utf-8');
        const requestContext = JSON.parse(decodedBody);

        const url = requestContext.url;
        const method = requestContext.method || 'get';
        const headers = requestContext.headers;

        if (!url) {
            return {
                statusCode: 400,
                body: String('body.url is required'),
            };
        }

        let response;

        switch (String(method).toUpperCase()) {
            case 'GET':
            default:
                response = await axios.get(url, {
                    headers: headers,
                    validateStatus: function (status) {
                        return status >= 200 && status < 600; // 모든 상태코드를 정상 응답으로 처리
                    },
                });
        }

        let statusCode = 200;
        if (response) {
            statusCode = response?.status;
        }

        return {
            statusCode,
            headers: response.headers,
            body: response.data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: {
                error: String(error),
            },
        };
    }
}

exports.main = main;

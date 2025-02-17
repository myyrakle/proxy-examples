import axios from 'axios';

export const handler = async (event) => {
  // console.log(event);

  const body = event.body; 

  if(!body) {
    return {
      statusCode: 400,
      body: String('body is required'),
    };
  }

  try {
    const requestContext = JSON.parse(body);

    const url = requestContext.url; 
    const method = requestContext.method ?? 'get';
    const headers = requestContext.headers;

    if(!headers['User-Agent']) {
      headers['User-Agent'] = null;
    }
    
    if(!url) {
      return {
        statusCode: 400,
        body: String('body.url is required'),
      };
    }

    let response;
    
    switch(String(method).toUpperCase()) {
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
    if(response) {
      statusCode = response?.status;
    }
    
    return {
      statusCode,
      body: {
        response: {
          body: response.data,
          status: response.status, 
          header: response.headers,
        },
      },
    };
  } catch(error) {
    return {
      statusCode: 200,
      body: String(error),
    };
  }
};

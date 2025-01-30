addEventListener('fetch', event => {
  // NOTE: can’t use fetch here, as we’re not in an async scope yet
  event.respondWith(eventHandler(event));
});

async function eventHandler(event) {
  // console.log(event.request);
  const bodyParams = await event?.request?.json();

  // console.log(bodyParams);
  const url = bodyParams?.url;

  const method = bodyParams?.method ?? 'GET';
  const body = bodyParams?.body;

  if(!url) {
    const response = new Response('url is required');
    response.status = 400; 
    return response;
  }

  const headers = bodyParams?.headers ?? {};

  const response = await fetch(decodeURI(url), {
    method,
    headers,
    body,
  });

  const responseBody = await response.text();

  const newResponse = new Response(responseBody, {
    status: response.status,
    statusText: response.statusText,
  })

  console.log(responseBody)
  return newResponse;
}

import store from "../utils/local-storage";

export default (url, param, callback,method) => {
  store.getAuthToken((token) => {
    const authHeader = token ? { authorization: `Bearer ${token}` } : null;
    const params = {
      method: method ?? "post",

      headers: {
        "content-type": "application/json",
        ...authHeader,
      },
    }

    if (String(params.method).toLowerCase() === "post") params.body = JSON.stringify(param)
    fetch(url, params)
      .then((r) => {
        if (r.status === 200 || r.status === 201) return r.json();
        else throw new Error("bad status");
      })
      .then(callback)
      .catch(console.log);
  });
};

// fetch("http://localhost:1337/content-manager/content-types", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTkyOTA1MzY2LCJleHAiOjE1OTU0OTczNjZ9.JaXWX0O9GS0DA6qcD3tZqHMoV1i5cye3Xv2Qe449hY0",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "http://localhost:1337/admin/plugins/content-manager/collectionType/application::todo.todo",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

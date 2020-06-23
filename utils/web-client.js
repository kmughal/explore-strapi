export default (url, param, callback) => {
  fetch(url, {
    method: "post",
    body: JSON.stringify(param),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((r) => {
      if (r.status === 200 || r.status === 201) return r.json();
      else throw new Error("bad status")
    })
    .then(callback)
    .catch(console.log)
};

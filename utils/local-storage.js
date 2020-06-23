import React from "react"
const _setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const _getItem = (key) => JSON.parse(localStorage.getItem(key));

const store = {
  setStrapiUser(data) {
    _setItem("strapiUser", data);
  },
  getStrapiUser(setter) {
    React.useEffect(() => {
      setter(_getItem("strapiUser"))
    },[])
  },
};

export default store;

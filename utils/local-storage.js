import React from "react"
const _setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const _getItem = (key) => JSON.parse(localStorage.getItem(key));
const _strapiUserKey = "_strapiUser"
const store = {
  setStrapiUser(data) {
    _setItem(_strapiUserKey, data);
  },
  getStrapiUser(setter) {
    React.useEffect(() => {
      setter(_getItem(_strapiUserKey))
    },[])
  },
  getAuthToken(callback) {
    const strapiUser = _getItem(_strapiUserKey)
      callback(strapiUser?.jwt)
  },
  clearStrapiUser() {
    localStorage.removeItem(_strapiUserKey)
  }
};

export default store;

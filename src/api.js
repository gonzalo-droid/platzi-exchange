const url = 'https://api.coincap.io/v2' // api de bitcoints

//fetch 

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data) // obj data
}

export default {
  getAssets
}
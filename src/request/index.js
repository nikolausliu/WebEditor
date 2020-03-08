const baseUrl = 'http://localhost:3000'

const request = {
  baseUrl,
  get(url, data, options) {
    const opts = {
      method: 'GET',
      body: JSON.stringify(data),
      headers: Object.assign(
        {},
        { 'Content-Type': 'application/json' },
        (options && options.headers) || {}
      ),
    }
    const _url = url.startsWith('http') ? 'url' : baseUrl + url
    return fetch(_url, opts).then(response => {
      return response.json()
    })
  },
  post(url, data, options) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: Object.assign(
        {},
        { 'Content-Type': 'application/json' },
        (options && options.headers) || {}
      ),
    }
    const _url = url.startsWith('http') ? 'url' : baseUrl + url
    return fetch(_url, opts).then(response => {
      return response.json()
    })
  },
}

export default request

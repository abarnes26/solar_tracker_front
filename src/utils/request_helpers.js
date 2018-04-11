const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const postAccountHeaders = (userEmail, userPassword) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ user: { email: userEmail, password: userPassword }})
  }
}

const addAccount = (email, password) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/users`, postHeaders(email, password))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

module.exports = {
  postAccountHeaders,
  addAccount,
  handleResponse
}

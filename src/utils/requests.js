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

const postBranchHeaders = (branchStreet, branchCity, branchState, branchZipcode) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ branch: { street: branchStreet, city: branchCity, state: branchState, zipcode: branchZipcode }})
  }
}

const addAccount = (email, password) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com//api/v1/users`, postHeaders(email, password))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const addBranch = (street, city, state, zipcode) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com//api/v1/users`, postHeaders(email, password))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}



const postVehicleHeaders = (vehicleStreet, vehicleCity, vehicleState, vehicleZipcode) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ vehicle: { street: vehicleStreet, city: vehicleCity, state: vehicleState, zipcode: vehicleZipcode }})
  }
}

const updateVehicleHeaders = (attr, value) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ vehicle: { attr: value }})
  }
}

const deleteVehicleHeaders = id => {
  return {
    method: `DELETE`,
  }
}

const addVehicle = (street, city, state, zipcode) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles`, postHeaders(email, password))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getAllVehicles = () => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getVehicle = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updateVehicle = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`, updateVehicleHeaders(attr, value)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const deleteVehicle = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`, deleteVehicleHeaders()
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

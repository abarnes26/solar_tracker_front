

const postVehicleHeaders = (vehicleMake, vehicleModel, vehicleMpg) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ vehicle: { make: vehicleMake, model: vehicleModel, mpg: vehicleMpg }})
  }
}

const updateVehicleHeaders = (attr, value) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ vehicle: { attr: value }})
  }
}

const deleteVehicleHeaders = () => {
  return {
    method: `DELETE`,
  }
}

const addVehicle = (make, model, mpg) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles`, postHeaders(make, model, mpg))
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

const updateVehicle = (id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`, updateVehicleHeaders(attr, value)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const deleteVehicle = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`, deleteVehicleHeaders()
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

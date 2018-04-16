import handleResponse from './request_helpers'

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

export const postVehicle = (branchId, make, model, mpg) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/vehicles?vehicle[make]=${make}&vehicle[model]=${model}&vehicle[mpg]=${mpg}`, {method: 'POST'})
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const getAllVehicles = (branchId) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/vehicles`)
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const getVehicle = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/vehicles/${id}`)
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const updateVehicle = (branchId, id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/vehicles/${id}`, updateVehicleHeaders(attr, value))
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const deleteVehicle = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/vehicles/${id}`, deleteVehicleHeaders())
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

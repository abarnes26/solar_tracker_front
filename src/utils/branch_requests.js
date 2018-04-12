import { handleResponse } from './request_helpers'

const postBranchHeaders = (branchStreet, branchCity, branchState, branchZipcode) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ branch: { street: branchStreet, city: branchCity, state: branchState, zipcode: branchZipcode }})
  }
}

const updateBranchHeaders = (attr, value) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ branch: { attr: value }})
  }
}

const deleteBranchHeaders = () => {
  return {
    method: `DELETE`,
  }
}

export const postBranch = (street, city, state, zipcode) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches?branch[street]=${street}&branch[city]=${city}&branch[state]=${state}&branch[zipcode]=${zipcode}`, {method: 'POST'})
  // return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches`, postBranchHeaders(street, city, state, zipcode))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getAllBranches = () => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getBranch = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const updateBranch = (id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${id}`, updateBranchHeaders(attr, value))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const deleteBranch = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${id}`, deleteBranchHeaders())
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

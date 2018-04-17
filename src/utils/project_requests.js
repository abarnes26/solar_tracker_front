import handleResponse from './request_helpers'

const postProjectHeaders = (projectStreet, projectCity, projectState, projectZipcode, projectCustomer, projectSize, projectNumberOfMods, branch, moduleName, vehicleName) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify([{ project: { street:                projectStreet,
                                        city:                 projectCity,
                                        state:                projectState,
                                        zipcode:              projectZipcode,
                                        customer_name:        projectCustomer,
                                        size_kW:              projectSize,
                                        number_of_pv_modules: projectNumberOfMods,
                                        moduleName:           moduleName,
                                        vehicleName:          vehicleName,
                                        branch_id:            branch}}])
  }
}

const updateProjectHeaders = (attr, value) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ project: { attr: value }})
  }
}

const deleteProjectHeaders = () => {
  return {
    method: `DELETE`,
  }
}

export const postProject = (street, city, state, zipcode, customer_name, size_kW, number_of_pv_modules, branchId, moduleName, vehicleName) => {
    return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects?project[street]=${street}&project[city]=${city}&project[state]=${state}&project[zipcode]=${zipcode}&project[customer%5Fname]=${customer_name}&project[size%5FkW]=${size_kW}&project[branch%5Fid]=${branchId}&project[number_of_pv_modules]=${number_of_pv_modules}&project[vehicleName]=${vehicleName}&project[moduleName]=${moduleName}`, {method: 'POST'})
  // return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects`, postProjectHeaders(street, city, state, zipcode, customer_name, size_kW, number_of_pv_modules, branchId, moduleName, vehicleName))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getAllProjects = branchId => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects`)
    .then((response) => response.json())
    .catch((error) => console.error({ error }))
}

export const getProject = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const updateProject = (branchId, id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects/${id}?project[${attr}]=${value}`, {method: 'PATCH'})
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const deleteProject = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects/${id}`, deleteProjectHeaders())
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

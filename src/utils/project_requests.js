import handleResponse from './request_helpers'

const postProjectHeaders = (projectStreet, projectCity, projectState, projectZipcode, projectCustomer, projectSize, projectNumberOfMods, branch, pv_module) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify([{ project: { street:                projectStreet,
                                        city:                 projectCity,
                                        state:                projectState,
                                        zipcode:              projectZipcode,
                                        customer_name:        projectCustomer,
                                        size_kW:              projectSize,
                                        number_of_pv_modules: projectNumberOfMods}},
                                        {branch: {id: branch}},
                                        {pv_module: {id: pv_module}}])
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

export const postProject = (street, city, state, zipcode, customer_name, size_kW, number_of_pv_modules, branchId, pv_module_id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}`, postProjectHeaders(street, city, state, zipcode, customer_name, size_kW, number_of_pv_modules, branchId, pv_module_id))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getAllProjects = branchId => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getProject = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const updateProject = (branchId, id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects/${id}`, updateProjectHeaders(attr, value))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const deleteProject = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/projects/${id}`, deleteProjectHeaders())
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

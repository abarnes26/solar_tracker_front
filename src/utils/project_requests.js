

const postProjectHeaders = (projectStreet, projectCity, projectState, projectZipcode, projectCustomer, projectSize, projectNumberOfMods, branch, pv_module) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ project: { street:                 projectMake,
                                        city:                 projectModel,
                                        state:                projectState,
                                        zipcode:              projectZipcode,
                                        customer_name:        projectMpg,
                                        size_kW:              projectMpg,
                                        number_of_pv_modules: projectNumberOfMods},
                                        {branch: {id: branch}},
                                        {pv_module: {id: pv_module}}})
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

const addProject = (street, city, state, zipcode, customer_name, size_kW, number_of_pv_modules, branch_id, pv_module_id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/projects`, postHeaders(street, city, state, zipcode, customer_name, size_kW, number_of_pv_modules, branch_id, pv_module_id))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getAllProjects = branch_id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branch_id}/projects`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getProject = (branch_id, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branch_id}/projects/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updateProject = (branch_id, id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branch_id}/projects/${id}`, updateProjectHeaders(attr, value)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const deleteProject = (branch_id, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branch_id}/projects/${id}`, deleteProjectHeaders()
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

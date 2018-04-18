import handleResponse from './request_helpers'

const postPvModuleHeaders = (moduleOutput, moduleManufacturer, moduleModel, moduleEff, moduleWidth, moduleHeight, branchId) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ pv_module: { output: moduleOutput, manufacturer: moduleManufacturer, model: moduleModel, efficiency: moduleEff, width_mm: moduleWidth, height_mm: moduleHeight, branch_id: branchId }})
  }
}

const updatePvModuleHeaders = (attr, value) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ pv_module: { attr: value }})
  }
}

const deletePvModuleHeaders = () => {
  return {
    method: `DELETE`,
    headers: {
     'Access-Control-Allow-Origin':'DELETE',
     'Content-Type': 'application/json'
}
  }
}

export const postPvModule = (output_w, manufacturer, model, efficiency, width_mm, length_mm, branchId) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/pv_modules?pv_module[output%5Fw]=${output_w}&pv_module[manufacturer]=${manufacturer}&pv_module[model]=${model}&pv_module[efficiency]=${efficiency}&pv_module[width_mm]=${width_mm}&pv_module[length_mm]=${length_mm}`, {method: 'POST'})
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const getAllPvModules = (branchId) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/pv_modules`)
    .then(response => response.json())
    // .then((response) => console.log(response))
    // .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getPvModule = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/pv_modules/${id}`)
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const updatePvModule = (branchId, id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/pv_modules/${id}`, updatePvModuleHeaders(attr, value))
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

export const deletePvModule = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/pv_modules/${id}`, deletePvModuleHeaders())
    .then(response => response.json())
    .catch((error) => console.error({ error }))
}

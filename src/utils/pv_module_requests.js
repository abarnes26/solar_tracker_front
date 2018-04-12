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
  }
}

export const postPvModule = (output_w, manufacturer, model, efficiency, width_mm, length_mm, branchId) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/modules`, postPvModuleHeaders(output_w, manufacturer, model, efficiency, width_mm, length_mm, branchId))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getAllPvModules = (branchId) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/modules`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const getPvModule = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/modules/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const updatePvModule = (branchId, id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/modules/${id}`, updatePvModuleHeaders(attr, value))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

export const deletePvModule = (branchId, id) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches/${branchId}/modules/${id}`, deletePvModuleHeaders())
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

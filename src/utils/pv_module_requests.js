import handleResponse from './request_helpers'

const postPvModuleHeaders = (moduleOutput, moduleManufacturer, moduleModel, moduleEff, moduleWidth, moduleHeight, branchId) => {
  return {
    method: `POST`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ pv_module: { output: moduleOutput, manufacturer: moduleManufacturer, model: moduleModel, efficiency: moduleEff, width_mm: moduleWidth, height_mm: moduleHeight }, branch{ id: branchId}})
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

const addPvModule = (output_w, manufacturer, model, efficiency, width_mm, length_mm, branchId) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles`, postHeaders(output_w, manufacturer, model, efficiency, width_mm, length_mm, branchId))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getAllPvModules = () => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getPvModule = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updatePvModule = (id, attr, value) => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`, updatePvModuleHeaders(attr, value)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const deletePvModule = id => {
  return fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/vehicles/${id}`, deletePvModuleHeaders()
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

module.exports = {
  addPvModule,
  getAllPvModules,
  getPvModule,
  updatePvModule,
  deletePvModule
}

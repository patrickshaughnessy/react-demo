import API from '../API'

const TenantActions = {
  addNewTenant(tenant) {
    API.addNewTenant(tenant);
  }
}

export default TenantActions

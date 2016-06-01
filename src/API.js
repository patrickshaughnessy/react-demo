import { get, post, put } from 'jquery'
// import fetch from 'fetch'
import ServerActions from './actions/ServerActions'

const API = {
  getAllTenants() {
    get('/api/tenants')
      .done(response => { ServerActions.receiveTenants(response) })
  },

  addNewTenant(tenant) {
    post('/api/tenants', tenant)
      .done(response => { ServerActions.receiveOneTenant(response) })
  },

  updateTenant(tenant) {
    put('api/tenants', tenant)
      .done(response => { ServerActions.receiveTenants(response) })
  },

  deleteTenant(tenantID) {
    fetch('/api/tenants/' + tenantID, {
      method: 'DELETE'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        ServerActions.receiveTenants(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default API

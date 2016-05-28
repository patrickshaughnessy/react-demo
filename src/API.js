import { get, post} from 'jquery'
import ServerActions from './actions/ServerActions'

const API = {
  addNewTenant(tenant) {
    post('/api/tenants', tenant)
      .done(response => ServerActions.receiveTenants(response))
  }
}

export default API

import { get, post} from 'jquery'
import ServerActions from './actions/ServerActions'

const API = {
  addNewTenant(tenant) {
    post('http://localhost:4000/api/tenants', tenant)
      .done(response => ServerActions.receiveTenants(response))
  }
}

export default API

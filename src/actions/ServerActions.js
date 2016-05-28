import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveTenants(tenants) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_TENANTS',
      tenants
    });
  }
}

export default ServerActions

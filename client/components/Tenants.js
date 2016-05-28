import React, { Component } from 'react'
import AddTenantForm from './AddTenantForm'
import TenantsDisplay from './TenantsDisplay'

import TenantActions from '../actions/TenantActions'
import TenantStore from '../stores/TenantStore'

let _getComponentState = () => {
  return {
    tenants: TenantStore.getAllTenants()
  }
}

export default class Tenants extends Component {
  constructor(props){
    super(props);

    this.state = _getComponentState()
    this._onChange = this._onChange.bind(this)

    this.addTenant = this.addTenant.bind(this);
  }

  componentDidMount() {
    TenantStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TenantStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState(_getComponentState())
  }

  addTenant(tenant){
    console.log('Add this tenant to our register: ', tenant, TenantActions.addNewTenant)
    TenantActions.addNewTenant(tenant);
  }

  render() {
    let tenants = this.state.tenants.length ? this.state.tenants.map(tenant => {
      return (
        <tr>
          <td>{tenant.name}</td>
          <td>{tenant.email}</td>
          <td><button>Delete</button></td>
        </tr>
      )
    }) : []
    return (
      <div className="text-center row">
        <h1>Tenants</h1>

        <div className="col-xs-6 col-xs-offset-3">
          <AddTenantForm addTenant={this.addTenant} />
        </div>

        <div className="col-xs-12">
          <TenantsDisplay tenants={this.state.tenants} />
        </div>

      </div>
    )
  }
}

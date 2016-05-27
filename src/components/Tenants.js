import React, { Component } from 'react'
import AddTenantForm from './AddTenantForm'
import TenantsDisplay from './TenantsDisplay'

export default class Tenants extends Component {
  constructor(props){
    super(props);

    this.state = {
      tenants: []
    }

    this.addTenant = this.addTenant.bind(this);
  }

  addTenant(tenant){
    console.log('Add this tenant to our register: ', tenant)
    this.setState({tenants: this.state.tenants.concat(tenant)})
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

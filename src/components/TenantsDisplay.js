import React, { Component } from 'react'
import Tenant from './Tenant';

export default class TenantsDisplay extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let tenants = this.props.tenants.length ? this.props.tenants.map(tenant => {
      return <Tenant />
    }) : []
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {tenants}
        </tbody>
      </table>
    )
  }
}

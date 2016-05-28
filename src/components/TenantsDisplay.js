import React, { Component } from 'react'

export default class TenantsDisplay extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let tenants = this.props.tenants.length ? this.props.tenants.map(tenant => {
      return (
        <tr>
          <td>{tenant.name}</td>
          <td>{tenant.email}</td>
          <td><button>Delete</button></td>
        </tr>
      )
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

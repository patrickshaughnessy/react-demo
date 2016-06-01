import React, { Component } from 'react'

export default class Tenant extends Component {
  constructor(props){
    super(props);

  }

  deleteTenant(id) {
    this.props.deleteTenant(id);
  }

  editTenant(id) {

  }

  render() {
    let tenants = this.props.tenants.length ? this.props.tenants.map(tenant => {
      return (
        <tr key={tenant._id}>
          <td>{tenant.name}</td>
          <td>{tenant.email}</td>
          <td>
            <button onClick={() => this.editTenant(tenant._id)}>Edit</button>
          </td>
          <td>
            <button onClick={() => this.deleteTenant(tenant._id)}>Delete</button>
          </td>
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

import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    let {counter, addCount, minusCount, deleteCounter} = this.props
    return (
      <div>
        <h3>Counter {counter.id}: {counter.count}</h3>
        <button onClick={() => addCount(counter.id)}>+</button>
        <button onClick={() => minusCount(counter.id)}>-</button>
        <button onClick={() => deleteCounter(counter.id)}>Delete</button>
      </div>
    )
  }
}

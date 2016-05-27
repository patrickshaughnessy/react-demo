import React, { Component } from 'react'
import Welcome from './Welcome'
import Counter from './Counter'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      counters: [],
      index: 0
    }
  }

  addCount(id) {
    this.setState({counters: this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.count++
      }
      return counter;
    })})
  }

  minusCount(id) {
    this.setState({counters: this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.count--
      }
      return counter;
    })})
  }

  addCounter() {
    let counters = this.state.counters;
    let counterId = this.state.index;

    let newCounter = {
      id: counterId,
      count: 0
    }

    this.setState({
      counters: this.state.counters.concat(newCounter),
      index: counterId + 1
    })
  }

  deleteCounter(id) {
    this.setState({counters: this.state.counters.filter(counter => counter.id !== id)})
  }

  render() {

    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      deleteCounter: this.deleteCounter
    }

    return (
      <div>
        <Welcome />
        <button onClick={this.addCounter.bind(this)}>Add A Counter</button>
        {this.state.counters.map(counter => {
          return <Counter key={counter.id} counter={counter} {...counterProps} />
        })}


      </div>
    )
  }
}

const React = require('react');
const Welcome = require('./Welcome');
const Counter = require('./Counter');

var App = React.createClass({

  getInitialState: function(){
    return {
      count: 0,
      counters: [],
      index: 0
    }
  },

  addCount: function(id){
    this.setState({counters: this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.count++
      }
      return counter;
    })})
  },

  minusCount: function(id){
    this.setState({counters: this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.count--
      }
      return counter;
    })})
  },

  addCounter: function(){
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
  },

  deleteCounter: function(id){
    this.setState({counters: this.state.counters.filter(counter => counter.id !== id)})
  },

  render: function(){

    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      deleteCounter: this.deleteCounter
    }

    return (
      <div>
        <Welcome />
        <button onClick={this.addCounter}>Add A Counter</button>

        {this.state.counters.map(counter => {
          return <Counter key={counter.id} counter={counter} {...counterProps} />
        })}


      </div>
    )
  }
})

module.exports = App;

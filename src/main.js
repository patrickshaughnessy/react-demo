const React = require('react');
const ReactDOM = require('react-dom');

var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Demo timez!</h1>
        <p>Let's count stuff</p>
      </div>
    )
  }
})

var Counter = React.createClass({

  render: function(){
    let {addCount, minusCount, counter, deleteCounter} = this.props;

    return (
      <div>
        <button onClick={() => addCount(counter.id)}>+</button>
        <button onClick={() => minusCount(counter.id)}>-</button>
        <h3>Counter {counter.id}: {counter.count}</h3>
        <button onClick={() => deleteCounter(counter.id)}>Delete this counter</button>
      </div>
    )
  }
})

var Root = React.createClass({

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

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

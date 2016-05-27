
var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Demo timez</h1>
        <p>Let's count stuff</p>
      </div>
    )
  }
})

var Counter = React.createClass({

  render: function(){
    let {addCount, minusCount, count, counter, deleteCounter} = this.props;

    return (
      <div>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
        <h3>Counter {counter.id + 1}: {count}</h3>
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

  addCount: function(event){
    this.setState({count: this.state.count + 1})
  },

  minusCount: function(arg, event){
    this.setState({count: this.state.count - 1})
  },

  addCounter: function(){
    let counters = this.state.counters;
    let counterId = this.state.index;
    this.setState({
      counters: this.state.counters.concat({id: counterId}),
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
      count: this.state.count,
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

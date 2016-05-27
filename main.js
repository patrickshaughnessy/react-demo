
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

  componentDidMount: function() {
    console.log('counter props: ', this.props)
  },

  render: function(){
    let {addCount, minusCount, counter, id, deleteCounter} = this.props;

    return (
      <div>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
        <h3>Counter {id + 1}: {counter}</h3>
        <button onClick={() => deleteCounter(id)}>Delete this counter</button>
      </div>
    )
  }
})

var Root = React.createClass({

  getInitialState: function(){
    return {
      counter: 0,
      counters: []
    }
  },

  addCount: function(event){
    this.setState({counter: this.state.counter + 1})
  },

  minusCount: function(arg, event){
    this.setState({counter: this.state.counter - 1})
  },

  addCounter: function(){
    let counters = this.state.counters;
    let nextCounterId = counters.length ? counters[counters.length - 1] : 1;
    this.setState({counters: this.state.counters.concat({id: nextCounterId})})
  },

  deleteCounter: function(idx){
    console.log('here', idx);
    this.setState({counters: this.state.counters.slice(0, idx).concat(this.state.counters.slice(idx + 1))})
  },

  render: function(){

    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      counter: this.state.counter,
      deleteCounter: this.deleteCounter
    }

    return (
      <div>
        <Welcome />
        <button onClick={this.addCounter}>Add A Counter</button>

        {this.state.counters.map((counter, idx) => {
          return <Counter key={idx} id={idx} {...counterProps} />
        })}


      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

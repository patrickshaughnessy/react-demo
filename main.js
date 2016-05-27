
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
    let {addCount, minusCount, counter} = this.props;

    return (
      <div>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
        <h3>Counter 2: {counter}</h3>
      </div>
    )
  }
})

var Root = React.createClass({

  getInitialState: function(){
    return {
      counter: 0
    }
  },

  addCount: function(event){
    this.setState({counter: this.state.counter + 1})
  },

  minusCount: function(arg, event){
    this.setState({counter: this.state.counter - 1})
  },

  render: function(){

    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      counter: this.state.counter
    }

    return (
      <div>
        <Welcome />

        <button id="one" onClick={this.addCount}>+</button>
        <button onClick={this.minusCount.bind(this, 'one')}>-</button>
        <h3>Counter 1: {this.state.counter}</h3>

        <Counter {...counterProps} />

      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

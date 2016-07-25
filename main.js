var Root = React.createClass({

  getInitialState: function(){
    return {
      counters: {
        'one': 0,
        'two': 0
      }
    }
  },

  addCount: function(event){
    console.log('event target:', event.target);
    // this.setState({ count: this.state.count + 1 })
  },

  minusCount: function(arg, event){
    console.log('arg', arg, '\nevent', event)
    // this.setState({ count: this.state.count - 1 })
  },

  render: function(){
    return (
      <div>
        <h1>Hello from React</h1>
        <p>Let's count stuff</p>

        <h3>Counter 1: {this.state.counters.one}</h3>
        <button id="one" onClick={this.addCount}>+</button>
        <button onClick={this.minusCount.bind(this, 'one')}>-</button>

        <h3>Counter 2: {this.state.counters.two}</h3>
        <button id="two" onClick={this.addCount}>+</button>
        <button onClick={this.minusCount.bind(this, 'two')}>-</button>
      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

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
    var id = event.target.id;
    var newState = Object.assign({}, this.state);
    newState.counters[id]++;
    this.setState(newState);
  },

  minusCount: function(arg, event){
    console.log('arg', arg, '\nevent', event)
    var id = arg;
    var newState = Object.assign({}, this.state);
    newState.counters[id]--;
    this.setState(newState);
  },

  render: function(){
    return (
      <div>
        <h1>Demo timez</h1>
        <p>Let's count stuff</p>

        <button id="one" onClick={this.addCount}>+</button>
        <button onClick={this.minusCount.bind(this, 'one')}>-</button>
        <h3>Counter 1: {this.state.counters.one}</h3>

        <button onClick={this.addCount}>+</button>
        <button onClick={this.minusCount}>-</button>
        <h3>Counter 2: {this.state.count}</h3>
      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

var Root = React.createClass({

  getInitialState: function(){
    return {
      count: 0
    }
  },

  addCount: function(){
    this.setState({ count: this.state.count + 1 })
  },

  minusCount: function(){
    this.setState({ count: this.state.count - 1 })
  },

  render: function(){
    return (
      <div>
        <h1>Hello from React</h1>
        <p>Let's count stuff</p>

        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.minusCount}>-</button>
      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

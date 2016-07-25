var Welcome = React.createClass({
  render: function(){

    let message = this.props.message

    return (
      <div>
        <h1>{message}</h1>
        <p>Let's count stuff</p>
      </div>
    )
  }
});

var Root = React.createClass({
  render: function(){

    let message = 'Hello from React'

    return (
      <Welcome message={message} />
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

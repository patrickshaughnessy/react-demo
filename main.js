var Root = React.createClass({

  render: function(){
    return (
      <h1>Hello from React!</h1>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

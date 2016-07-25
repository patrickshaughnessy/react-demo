var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello from React</h1>
        <p>Let's count stuff</p>
      </div>
    )
  }
});

var Root = React.createClass({

  render: function(){
    return (
      <Welcome />
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

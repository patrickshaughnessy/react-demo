var Root = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    }
  },

  addMessage: function(message){
    console.log('message: ', message);
  },

  render: function(){
    return (
      <div>
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

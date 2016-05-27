const React = require('react');

var Counter = React.createClass({

  render: function(){
    let {addCount, minusCount, counter, deleteCounter} = this.props;

    return (
      <div>
        <button onClick={() => addCount(counter.id)}>+</button>
        <button onClick={() => minusCount(counter.id)}>-</button>
        <h3>Counter {counter.id}: {counter.count}</h3>
        <button onClick={() => deleteCounter(counter.id)}>Delete this counter</button>
      </div>
    )
  }
});

module.exports = Counter;

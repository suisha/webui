var React = require('react')
var Config = require('../views/config.jsx')

var Config = React.createClass({
  getInitialState: function () {
    var t = this
    t.props.ipfs.config.show(function (err, config) {
      console.log(err, config)
      if (!err) t.setState({ config: config })
    })

    return { config: null }
  },

  render: function () {
    var config = this.state.config ?
      <Config config={this.state.config} ipfs={this.props.ipfs} />
      : null

    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          {config}
        </div>
      </div>
    )
  }
})

module.exports = Config

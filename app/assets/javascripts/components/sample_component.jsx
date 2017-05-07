var SampleComponent = React.createClass({
  propTypes: {
    isSample: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return ({
      isSample: this.props.isSample
    })
  },

  render() {
    var element = <h1>Hello from React!</h1>;

    return(
      element
    );
  }

});
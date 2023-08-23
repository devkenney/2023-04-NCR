const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
  render() {
    return (
      <DefaultLayout title="Fruits Show Page">
        The { this.props.fruit.name } is { this.props.fruit.color } and { this.props.fruit.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
      </DefaultLayout>
    )
  }
}

module.exports = Show
const React = require('react');
const DefaultLayout = require('./layout/Default');

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Fruits New Page">
        <form action="/fruits" method="POST">
          Name: <input type="text" name="name" /><br/>
          Color: <input type="text" name="color" /><br/>
          Is REady To Eat: <input type="checkbox" name="readyToEat" /><br/>
          <input type="submit" name="" value="Create Fruit" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;
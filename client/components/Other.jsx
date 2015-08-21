Other = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
      let handle = Meteor.subscribe("myData")
      let data = MyData.find({affirmative: true}).fetch()
      return {
        loading: !handle.ready(),
        users: data
      }
    },
  render() {
    if (this.data.loading) {
      return <h1>Loading</h1>
    }
    let list = this.data.users.map((user) => {
      return (
        <div className="item item-avatar" key={user._id}>
          <img src={user.image}></img>
          <h2>{user.name}</h2>
          <p>{user.details}</p>
        </div>
      )
    })
    return (
      <div className="list">
        {list}
      </div>
    )
  }
});

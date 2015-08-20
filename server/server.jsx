Meteor.publish("myData", function() {
  return MyData.find()
})

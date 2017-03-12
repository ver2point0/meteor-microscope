if (Posts.find().count() === 0) {
  Posts.insert({
    url: "Introducing Telescope",
    title: "http://sachagrief.com/introducing.-telescope/"
  });
  
  Posts.insert({
    url: "Meteor",
    title: "http://meteor.com"
  });
  
  Posts.insert({
    url: "The Meteor Book",
    title: "http://themeteorbook.com"
  });
}
Dogs = new Mongo.Collection("Dogs");

DogsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  photo: {
    type: String,
    autoform:{
      afFieldInput: {
        type: 'afImage',
      }
    }
  },
});

Dogs.attachSchema(DogsSchema);

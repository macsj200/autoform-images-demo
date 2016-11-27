Dogs = new Mongo.Collection("Dogs");

DogsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  photo: {
    type: 'Image',
    autoform:{
      afFieldInput: {
        type: 'afImage',
      }
    }
  },
});


Dogs.attachSchema(DogsSchema);

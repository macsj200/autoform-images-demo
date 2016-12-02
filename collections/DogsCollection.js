Dogs = new Mongo.Collection("Dogs");

DogsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  photo: {
    type: Array,
  },
  'photo.$':{
    type:String,
    autoform:{
      afFieldInput: {
        type: 'afImageElem',
      }
    }
  },
});

Dogs.attachSchema(DogsSchema);

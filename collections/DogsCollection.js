Dogs = new Mongo.Collection("Dogs");

DogsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  photo: {
    type: Array,
    autoform:{
      template:'addImageParentTemplate',
      afFieldInput: {
        type: 'afImageParent',
      }
    }
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

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.listDogs.helpers({
  dogs(){
    return Dogs.find();
  },
});

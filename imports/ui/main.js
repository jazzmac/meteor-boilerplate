import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import './main.html'
import './main.less'

Template.hello.onCreated(function helloOnCreated () {
  // counter starts at 0
  this.counter = new ReactiveVar(0)
})

Template.hello.helpers({
  counter: () => Template.instance().counter.get()
})

Template.hello.events({
  'click button': (event, templateInstance) => {
    // increment the counter when button is clicked
    templateInstance.counter.set(templateInstance.counter.get() + 1)
  }
})

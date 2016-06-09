import Ember from 'ember';

export default Ember.Controller.extend({
  //count: Ember.computed('items.@each', function() {
    //return this.get('items').length;
  //}),
  todos: [
    Ember.Object.create({ isDone: true }),
    Ember.Object.create({ isDone: false }),
    Ember.Object.create({ isDone: true })
  ],
  subtotal: Ember.computed('todos.@each.isDone', function() {
    let subtotal = 0;
    var items = this.get('todos');

    console.log("items: " + items);
    return subtotal;
  }),
});

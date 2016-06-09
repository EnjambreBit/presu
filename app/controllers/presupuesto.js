import Ember from 'ember';

export default Ember.Controller.extend({
  precioTotal: Ember.computed('model.items.@each.subtotal', function() {
    let total = 0;
    let items = this.get("model.items");

    items.forEach((item) => {
      total += item.get("subtotal");
    });

    return total;
  }),
});

import Ember from 'ember';

export default Ember.Controller.extend({
  ganancia: 50,
  iva: true,
  precioTotal: Ember.computed('model.items.@each.subtotal', function() {
    let total = 0;
    let items = this.get("model.items");

    items.forEach((item) => {
      total += item.get("subtotal");
    });

    return total;
  }),
  precioMasGanancia: Ember.computed('ganancia', 'precioTotal', function() {
    let ganancia = this.get("ganancia");
    var gan = ganancia / 100.0;
    var precioTotal = this.get("precioTotal");
    var total = precioTotal * (1 + gan);

    return total;
  }),

  importe_ganancia: Ember.computed("precioTotal", "ganancia", function() {
    return this.get("precioTotal") * this.get("ganancia");
  }),

  precioFinal: Ember.computed('precioMasGanancia', 'iva', 'importe_iva', function() {
    if (this.get("iva")) {
      return this.get("precioMasGanancia") + this.get("importe_iva");
    } else {
      return this.get("precioMasGanancia");
    }
  }),

  importe_iva: Ember.computed("precioMasGanancia", function() {
    return this.get("precioMasGanancia") * 0.21;
  })

});

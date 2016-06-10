import Ember from 'ember';

export default Ember.Controller.extend({
  iva: true,
  precioTotal: Ember.computed('model.items.@each.subtotal', function() {
    let total = 0;
    let items = this.get("model.items");

    items.forEach((item) => {
      total += item.get("subtotal");
    });

    return total;
  }),
  precioMasGanancia: Ember.computed('ganancia','precioTotal', function() {
    let ganancia = 0;
    ganancia = this.get("ganancia");
    if (isNaN(ganancia)) {
      ganancia = 50;
      this.set("ganancia", ganancia);
    }
    var gan = ganancia / 100;
    var precioTotal = this.get("precioTotal");
    var importe_ganancia = precioTotal * gan;
    this.set("importe_ganancia", importe_ganancia);
    var total = precioTotal * (1 + gan);

    return total;
  }),
  precioFinal: Ember.computed('precioMasGanancia','iva', function() {
    var precioMasGanancia = this.get("precioMasGanancia");
    var total = precioMasGanancia;
    var iva = this.get("iva");

    // Si se aplica IVA
		if (iva===true) {
			total = precioMasGanancia * 1.21;
      var importe_iva = precioMasGanancia * 0.21;
      this.set("importe_iva", importe_iva);
		} else {
			total = precioMasGanancia;
		}

    return total;
  }),

});

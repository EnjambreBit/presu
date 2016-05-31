import Ember from 'ember';

export default Ember.Controller.extend({
	updateSubtotal: function() {
		// Cargamos los valores de los campos
		var valhora = this.get('valhora');
		var canthoras = this.get('canthoras');
		var ganancia = this.get('ganancia');
		var iva = this.get('iva');
		
		
		if (isNaN(valhora)) { valhora = 0; }
		if (isNaN(canthoras)) { canthoras = 0; }
		if (isNaN(ganancia)) { ganancia = 0; }
		
		// Subtotal 1: bruto de horas x valor
		var subtotal1 = valhora * canthoras;
		this.set('subtotal1', subtotal1);
		
		// Subtotal 2: bruto + ganancia para Enjambre
		var gan = ganancia / 100;
		var importe_ganancia = subtotal1 * gan;
		var subtotal2 = subtotal1 * (1 + gan);
		this.set('importe_ganancia', importe_ganancia);
		this.set('subtotal2', subtotal2);
		
		// Si se aplica IVA
		if (iva===true) {
			var total = subtotal2 * 1.21;
		} else {
			var total = subtotal2;
		}

		this.set('total', total);
		
		
	}.observes('valhora','canthoras', 'iva', 'ganancia')
});

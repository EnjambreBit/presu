import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  concepto: attr('string'),
  horas: attr('number'),

  /* extra y valor son dos campos que casi
  siempre van a estar vacíos, y se van
  a usar en casos particulares, como por ejemplo
  el hosting o mantenimiento. */
  extra: attr('string'),
  valor: attr('number'),

  presupuesto: belongsTo('presupuesto', {async: true}),
  tipo: belongsTo('tipo', {async: true}),

  subtotal: Ember.computed("horas", "tipo.precioPorHora", function() {
    return this.get("tipo.precioPorHora") * this.get("horas");
  })
});

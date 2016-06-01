import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  concepto: attr('string'),
  horas: attr('number'),

  /* extra y valor son dos campos que casi
  siempre van a estar vacíos, y se van
  a usar en casos particulares, como por ejemplo
  el hosting o mantenimiento. */
  extra: attr('string'),
  valor: attr('number')
});

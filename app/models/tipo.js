import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  descripcion: attr('string'),
  precioPorHora: attr('number'),

  item: belongsTo('item', {async: true})
});

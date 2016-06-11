import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  descripcion: attr('string'),
  precioPorHora: attr('number'),

  item: hasMany('item', {async: true})
});

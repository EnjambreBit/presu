import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  titulo: attr('string'),
  descripcion: attr('string'),
  cliente: attr('string'),
  ganancia: attr('string'),

  items: hasMany('item', {async: true}),
});

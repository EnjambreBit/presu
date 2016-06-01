import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  titulo: attr('string'),
  descripcion: attr('string'),
  cliente: attr('string'),
  ganancia: attr('string')
});

import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  presupuesto: belongsTo('presupuesto'),
  tipo: belongsTo('tipo')
});

import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  titulo: "demo",
  cliente: "demo",

  items: hasMany('item')
});

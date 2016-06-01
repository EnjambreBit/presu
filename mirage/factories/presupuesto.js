import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  titulo(i) {
    return `Presupuesto de prueba: ${i}`;
  },
  cliente(i) {
    return faker.name.firstName();
  },
});

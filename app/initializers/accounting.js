import { currency } from "accounting/settings";



export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'accounting.js',
  initialize: function() {
    currency.symbol = "$ ";
    currency.decimal = ",";
    currency.thousand = ".";
  }
};

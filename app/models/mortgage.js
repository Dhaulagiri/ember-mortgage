import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  rate: attr(),
  amount: attr(),
  term: attr(),
});

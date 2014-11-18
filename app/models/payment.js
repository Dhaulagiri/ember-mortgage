import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  interest: attr(),
  principal: attr(),
  balance: attr(),
  mortgage: DS.belongsTo('mortgage')
});

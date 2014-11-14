import Ember from 'ember';
import Mortgage from 'ember-mortgage/models/mortgage'

export default Ember.Route.extend({
  model : function(){
    var store = this.store;
    return store.createRecord('mortgage', {});
  }
});

import calculator from 'ember-mortgage/utils/calculator';
import Ember from 'ember';

export default Ember.ObjectController.extend({

  isTyping: false,
  isValid: false,
  monthlyPayment: null,

  calculate: function() {
    if (arguments.length === 2) {
      this.set('isTyping', true);
      Ember.run.debounce(this, this.calculateVal, 300);
    }
  }.observes('rate', 'amount', 'term'),

  calculateVal: function() {
    var rate = this.get('rate');
    var amount = this.get('amount');
    var term = this.get('term');

    this.set('isTyping', false);

    if (rate && amount && term) {
      this.set('isValid', true);
      this.set('monthlyPayment', calculator(rate, term, amount));
    } else {
      this.set('monthlyPayment', null);
    }
  }
});

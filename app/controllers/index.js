//import { calculator } from '../utils/calculator';
import calculator from 'ember-mortgage/utils/calculator';
import Ember from 'ember';

export default Ember.ObjectController.extend({

  isTyping: false,
  isValid: false,

  calculate: function() {
    if (arguments.length === 2) {
      this.set('isTyping', true);
      Ember.run.debounce(this, this.calculateVal, 350);
    }
  }.observes('interestRate', 'loanAmount', 'loanTerm'),

  calculateVal: function() {

    var interestRate = this.get('interestRate');
    var loanAmount = this.get('loanAmount');
    var loanTerm = this.get('loanTerm');

    this.set('isTyping', false);

    if (interestRate && loanAmount && loanTerm) {

      var mortgage = calculator(interestRate, loanTerm, loanAmount);

      this.set('isValid', true);
      this.model.set('monthlyPayment', mortgage.monthlyPayment);
      this.model.set('totalInterest', mortgage.totalInterest);
      this.model.set('totalPayments', mortgage.totalPayments);
      this.model.set('payments', mortgage.payments);

    } else {
      //this.model.set('monthlyPayment', null);
    }
  }
});

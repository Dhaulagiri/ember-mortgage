import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  homeValue: attr(),
  interestRate: attr(),
  loanAmount: attr(),
  loanTerm: attr(),
  monthlyPayment: attr(),
  totalInterest: attr(),
  totalPayments: attr(),
  payments: DS.hasMany('payment'),
});

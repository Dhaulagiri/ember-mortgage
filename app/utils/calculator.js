export default function calculator(interestRate, loanTerm, loanAmount) {

  interestRate = interestRate / 100 / 12;
  loanTerm = loanTerm * 12;
  //amountBorrowed = 200000;

  var monthlyPayment = (interestRate / (1 - (Math.pow((1 + interestRate), -(loanTerm))))) * loanAmount;
  monthlyPayment = round(monthlyPayment);


  var mortgage = {
      monthlyPayment: monthlyPayment,
      totalPayments: null,
      totalInterest: null,
      payments: []
    };

  for (var i=0; i< loanTerm; i++) {

    var interestForMonth = round(loanAmount * interestRate);
    //console.log('Interest ' + round(interestForMonth));

    var principalForMonth = round(monthlyPayment - interestForMonth);
    //console.log('Principal ' + round(principalForMonth));

    loanAmount -= principalForMonth;
    //console.log('Balance ' + amountBorrowed + ' | ' + round(amountBorrowed));
    //console.log(amountBorrowed);

    var payment = {
      id: i + 1,
      interest: interestForMonth,
      principal: principalForMonth,
      balance: round(loanAmount)
    };

    mortgage.payments.push(payment);
    mortgage.totalInterest += round(interestForMonth);
    mortgage.totalPayments += round(monthlyPayment);
  }

  return mortgage;

}

// rounding convenience helper
function round(value) {
  return Math.round(value * 100) / 100;
}


// Monthly payment 1264.14 ember-mortgage/utils/calculator.js:14
// Balance 200000 ember-mortgage/utils/calculator.js:15
// Interest 1083.33 ember-mortgage/utils/calculator.js:19
// Principal 180.81 ember-mortgage/utils/calculator.js:22
// Balance 199819.19333333333 | 199819.19
//
// Monthly payment 1264.1360469859321 ember-mortgage/utils/calculator.js:14
// Balance 200000 ember-mortgage/utils/calculator.js:15
// Interest 1083.3333333333333 ember-mortgage/utils/calculator.js:19
// Principal 180.80271365259887 ember-mortgage/utils/calculator.js:22
// Balance 199819.1972863474 | 199819.1972863474

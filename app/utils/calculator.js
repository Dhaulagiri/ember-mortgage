export default function calculator(rate, numPayments, amountBorrowed) {

  rate = rate / 100 / 12;
  numPayments = numPayments * 12;
  //amountBorrowed = 200000;

  var monthlyPayment = (rate / (1 - (Math.pow((1 + rate), -(numPayments))))) * amountBorrowed;
  monthlyPayment = round(monthlyPayment);

  //console.log('Monthly payment ' + round(monthlyPayment));
  //console.log('Balance ' + amountBorrowed);

  for (var i=0; i< numPayments; i++) {

    var interestForMonth = round(amountBorrowed * rate);
    //console.log('Interest ' + round(interestForMonth));

    var principalForMonth = round(monthlyPayment - interestForMonth);
    //console.log('Principal ' + round(principalForMonth));

    amountBorrowed -= principalForMonth;
    //console.log('Balance ' + amountBorrowed + ' | ' + round(amountBorrowed));
    //console.log(amountBorrowed);
  }
  debugger
  return monthlyPayment;

}

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

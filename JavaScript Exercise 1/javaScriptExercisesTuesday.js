// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: 
// (name)'s favorite subject in school is (subject).
function madLib(student, subject) {

    var result = student + "'s" + " favorite subject in school is " + subject + ".";
    return result;
  }

madLib('Anushka', 'art');

// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) 
// and returns the dollar amount for the tip.
function tipAmount(bill, service) {
    var service = ['good', 'fair', 'bad'];

    if (service == 'good') {
        tip = bill * .20;
    // return total;
    }   else if (service == 'fair') {
            tip = bill * .15;
        // return total;
    }   else { 
        (service == 'bad') 
            tip = bill * .10;
        // return total;
    }
    return tip;
}
tipAmount(10, 'good');
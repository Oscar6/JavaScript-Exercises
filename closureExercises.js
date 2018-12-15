// Closure Exercises

// Counter 1
var count1 = counter();
var count2 = counter();

function counter() {
    var count = 0;
    var otherCount = function () {
      count++;
      return count;
    }
    return otherCount;
  };
console.log(count1());
console.log(count2());


// Counter 2
var count1 = counter(6);
var count2 = counter(10);

function counter(i) {
    var count = i;
    var otherCount = function () {
      count++;
      return count;
    }
    return otherCount;
  };
console.log(count1());
console.log(count2());



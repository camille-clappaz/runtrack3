function fizzbuzz() {
    for (let nb = 1; nb < 152; nb++) {
        if (nb % 3 == 0 && nb % 5 == 0) {
          console.log("FizzBuzz");
        }
        else if  (nb % 5 == 0) {
            console.log("Buzz");
        }
        else if (nb % 3 == 0 ) {
            console.log("Fizz");
        }
        else {
        console.log(nb);}
    }
    
}

fizzbuzz();
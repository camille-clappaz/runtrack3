function tri(numbers, order){
    if(order == "ASC"){
        let byValue = (a,b) => a - b;
        let sorted = numbers.sort(byValue);
    return console.log(sorted);
    }
    else{
        let byValue = (a,b) => a - b;
        let sorted = numbers.sort(byValue);
      return  console.log(sorted.reverse());
    }
    };

let numbers = [13,8,2,21,5,1,3,1];
let order = "ASC"; 
tri(numbers, order);
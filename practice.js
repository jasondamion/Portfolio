var numbers = [];
var uniqueNums = [];

function check(number,len) {
    for (var i = 0; i <= len; i++) {
        console.log(uniqueNums)
        if (number === uniqueNums[i]) {
            return false
        }
        else {
            return true
        }
    }
}

async function unique(array) {
     for(let element of array){
      var result = await check(element,array.length);
      console.log(result)
      if(result === true){
        uniqueNums.push(element)
      }
      else{console.log("Already used.")}
    };
    console.log("Unique numbers are " + uniqueNums)
    console.log("All numbers: " + array)
}

unique([1,2,3,4,5,4,3,2,1])
 
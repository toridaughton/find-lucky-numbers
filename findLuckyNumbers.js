// Write your code below this line.
function luckyNumbers(n){
    let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let newArray = [];
    if( n > 0 && n <= 10 ){
      for(let i = 0; i < n; i++){
        let randNum = Math.floor(Math.random()*10) 
        while( randNum )
        if( randNum >= 0 && randNum < intArray.length){
          newArray = intArray.splice(randNum, 1)
        }// else {
         
        }
              
      }
      return newArray;
    //} else {
      //return 'error';
    //}
  }
  
  const randArray = luckyNumbers(5);
  console.log(randArray)
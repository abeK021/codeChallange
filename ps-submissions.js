 const findSum = function(array) {
    // your code here - don't forget to return a number!
     
    // a place to store the sum of array
    let totalSum = 0;
    
    //loop through the passed in array
    for(i = 0; i < array.length; i++){
        //get the sum of array and store it in totalSum
        totalSum += array[i];
    }
    // divide the total by the length of the array
    let finalAvg = totalSum / array.length;

    return finalAvg;

  };
  
  const findFrequency = function(array) {
    // your code here - don't forget to return an object!
    let mostFreq = array[0], maxCount = 0,finalObj = {};
    let lessFreq = array[0], minCount = 0;

// -----------------------------------------------------------
   for (i = 0; i < array.length; i++){

    let mostCount = 0;

    for (j = i+1; j < array.length; j++){

        if(array[i] === array[j]){
            mostCount++;
        }

        if (maxCount < mostCount){
            maxCount = mostCount;
            mostFreq = array[i];
    
        }

    }


   }
// -----------------------------------------------------------
     for(i = 0; i < array.length; i++){
         let lessCount = 0;

         for(j = i+1; j < array.length; j++){
             if(array[i] === array[j]){
                 lessCount++
             }
             if(minCount > lessCount){
                 minCount = lessCount;
                 lessFreq = array[i];
             }
         }
     }

// -----------------------------------------------------------
   finalObj["most"] = mostFreq;
   finalObj["least"] = lessFreq;

   return finalObj;


  };
  
  const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!

    //make it into an array
    let splitStr = str.split("");

    //reverse the array then turn it back into a string
    let reverseStr = splitStr.reverse().join("");

    //compare the two values with a boolean 
    let finalBoolean = str === reverseStr;

    return finalBoolean;
  };
  
  const largestPair = function(array) {
    // your code here - don't forget to return a number!

    //initiate the initial adjacent numbers
    let initial = array[0] * array[1];
    
    // create a var for the final result
    let finalProd = initial;

     // loop through the array to get the rest of the values
    for(let i = 1; i < array.length; i++){
        
         // check adjacent elements 
        initial = array[i] * array[i+1];

        //conditional to check if the inital is the highest
        if(initial > finalProd){
            
            //if initital is not the highest store in the final answer
            finalProd = initial;
        };
    };
    return finalProd;
  };
  
  const removeParenth = function(str) {
    // your code here - don't forget to return a string!
    
    //use regexpressions had to research the modirators
    str = str.replace(/ *\([^)]*\) */g, " ");

    return str;
  };
  
  const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
   
    //make the score chart
    let score = { 
        a:1,e:1,i:1,o:1,u:1,l:1,n:1,r:1,s:1,t:1,
        d:2,g:2,
        b:3,c:3,m:3,p:3,
        f:4, h:4, v:4, w:4, y:4,
        k:5,
        j:8, x:8,
        q:10, z:10
    };
        //store the counter
        total = 0;
        //loop through the string
    for (i = 0; i < str.length; i++) {
        // store the sum into total
        total += score[str[i]];
    }
    return total;

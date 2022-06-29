// // Write a JavaScript program which iterates the integers from 1 to 100. But for
// // multiples of three print "Fizz" instead of the number and for the multiples of five print
// // "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

  for(n=1;n<100;n++){

  if(n%3==0 && n%5 ==0){
    console.log("Fizz Buzz");
  }
  else if(n%3==0){
    console.log("Fizz");
    }
  else if(n%5==0){
        console.log("Buzz");
        }
  else{
    console.log(n);
     }
}

// // 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum=0
for(i=0;i<1000;i++){
if (i%3==0 && i%5==0){
    sum+=i
    console.log(sum)
}
}



// // 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// // check if the current number is odd or even, and display a message to the screen.
// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even"
for (let number=0; number<20; number++){
    if(number%2==0){
        console.log( number + " is even.")
    }
    else{
        console.log( number + "is odd.")
    }
}


// // 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// // given array.
// // Let num = [-2, 4,-5, 6,0]
var number1=10
var number2=20
if (number1 > number2){
    console.log(number1 + " is greater than "+ number2)
}
else if(number1< number2){
    console.log(number2 + " is greater than "+ number1)
}
else{
    console.log(number1 + " is equal to " + number2)
}



// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function largest(a,b){
    if (a>b){
        console.log(a);
    }else{
        console.log(b);
    }

}
largest(10,40);






//  6. Write a JavaScript program to find leap years from 2000 to 2022

 for (let year=2000; year<=2022; year++){

     if((year%400==0) || (year%4==0) && (year%100!=0)){
       
        console.log(year)
    }
}
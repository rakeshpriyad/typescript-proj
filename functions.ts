/* function syntax
function function_name (param1[:type], param2[:type], param3[:type])

parameter type are optional
*/
/**
 * 
 * @param id 
 * @param name 
 * @param mail_id 
 */
function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

/* 
Rest Parameters
Rest parameters are similar to variable arguments in Java. Rest parameters don’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type.

To declare a rest parameter, the parameter name is prefixed with three periods. Any nonrest parameter should come before the rest parameter.

*/
/**
 * Example Rest parameter 
 * @param nums 
 */
function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)


/* Default paramter: 
Function parameters can also be assigned values by default. However, such parameters can also be explicitly passed values.

Syntax
function function_name(param1[:type],param2[:type] = default_value) { 
}
*/
function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

/* 
Anonymous Function
Functions that are not bound to an identifier (function name) are called as anonymous functions. These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs, just as standard functions do. An anonymous function is usually not accessible after its initial creation.

Variables can be assigned an anonymous function. Such an expression is called a function expression.

Syntax
var res = function( [arguments] ) { ... }
*/
var msg = function() { 
   return "hello world";  
} 
console.log(msg())

/* Recursion Example */
function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));      // outputs 720 

/*Example: Anonymous Recursive Function */
(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()      // the function invokes itself using a pair of parentheses ()



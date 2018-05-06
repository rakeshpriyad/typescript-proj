/*
TypeScript - Union:
TypeScript 1.4 gives programs the ability to combine one or two types. Union types are a powerful way to express a value that can be one of the several types. Two or more data types are combined using the pipe symbol (|) to denote a Union Type. In other words, a union type is written as a sequence of types separated by vertical bars.

*/

/*Syntax: Union literal
Type1|Type2|Type3 
Example: Union Type Variable
*/
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)


function disp(name:string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
disp("mark") 
console.log("Printing names array....") 
disp(["Mark","Tom","Mary","John"])
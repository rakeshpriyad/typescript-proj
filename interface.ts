/*
TypeScript - Interfaces:

An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that
 any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface. 
Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. 
It often helps in providing a standard structure that the deriving classes would follow.




Declaring Interfaces
The interface keyword is used to declare an interface. Here is the syntax to declare an interface −

Syntax
interface interface_name { 
}
*/
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName) 
console.log(employee.lastName)


interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age) 
console.log("Instrument:  "+drummer.instrument)


/*Example: Multiple Interface Inheritance */
interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
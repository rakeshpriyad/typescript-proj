/*
Lambda Function - Anatomy
There are 3 parts to a Lambda function −

Parameters − A function may optionally have parameters

The fat arrow notation/lambda notation (=>) − It is also called as the goes to operator

Statements − represent the function’s instruction set

Tip − By convention, the use of single letter parameter is encouraged for a compact and precise function declaration.
Lambda Expression
It is an anonymous function expression that points to a single line of code. Its syntax is as follows −

( [param1, parma2,…param n] )=>statement;
*/
var foo = function (x) { return 10 + x; };
console.log(foo(100));
/*Lambda Statement
Lambda statement is an anonymous function declaration that points to a block of code. This syntax is used when the function body spans multiple lines. Its syntax is as follows −

( [param1, parma2,…param n] )=> {
 
   //code block
}
Example: Lambda statement
*/
var foo1 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo1(100);

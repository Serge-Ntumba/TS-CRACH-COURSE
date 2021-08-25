// Basic Types
let id: number = 5;
let firstName: string = "serge";
let isMale: boolean = true;
let x: any = "Hello";

// Arrays and Tuples
let ids: number[] = [1, 3, 4, 4]; //number[]: this means arrays that contain only numbers and we can't push any other types
// ids.push("hello") this wont work
let arr: any[] = [1, true, "hi"]; // this can be used when you dont know whattype is going to be there

// Tuple: you can specifise the exact type inside the array
let person: [number, string, boolean] = [3, "serge", true]; // the order is very important
// Tuple Array
let employee: [number, string][];

// By: Arthur Mouradian
// Student ID: 23299658

// forEach *
// Map *
// Filter *
// Some *
// Every *
// Reduce *
// Includes *
// indexOf *
// Push *
// lastIndexOf *
// Object.keys() *
// Object.values() *

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const arr = [1,2,,4];
const arrWords = ["hi :D","otherTest",,"test","hi :D"];
console.log("The code compiled and ran!");
obj1 = {
    "a": 1,
    "b": 2,
    "c": 3
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// forEach
// Applies a callback function to each value in an array
Array.prototype.myEach = function (callbackFn){
    for (let i = 0; i< this.length; i++){
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Map
// Applies a callback function to each value in an array
// returns a new array with the callback function applied to each element of the original array
Array.prototype.myMap = function (callbackFn){
    for (let i = 0; i< this.length; i++){
        if(this[i] === undefined) continue;
        this[i] = callbackFn(this[i], i, this);
    }
};
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Filter
// Applies a callback function to each value in an array
// returns a new array that conforms to the calllback function applied
Array.prototype.myFilter = function (callbackFn){
    const myArr = [];
    idx = 0;
    for (let i = 0; i< this.length; i++){
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i, this)){
            myArr[idx] = this[i];
            idx++;
        }
    }
    return myArr;
};
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Some
// tests whether at least one element in the array passes the test implemented by the callback function
// returns boolean
Array.prototype.mySome = function (callbackFn){
    for(let i = 0; i < this.length;i++){
        if(this[i] === undefined) continue;
        if(callbackFn(this[i],i,this))
            return true;
    }
    return false;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Every
// tests whether all elements in the array pass the test implemented by the callback function
// returns boolean
Array.prototype.myEvery = function (callbackFn){
    for(let i = 0; i < this.length;i++){
        if(this[i] === undefined) continue;
        if(!callbackFn(this[i],i,this))
            return false;
    }
    return true;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Reduce
// executes a reducer function that executes on each element of the array
// returns a single value
Array.prototype.myReduce = function (callbackFn, startingVal = 0){
    sum = startingVal;
    for(let i = 0; i < this.length;i++){
        if(this[i] === undefined) continue;
        sum = callbackFn(this[i],sum)
    }
    return sum;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Includes
// Includes method determines whether an array includes a certain value among its entries
// returns a boolean
Array.prototype.myIncludes = function (val){
    
    for(let i = 0; i < this.length;i++){
        if(this[i] === undefined) continue;
        if(this[i] === val){
            return true;
        }
    }
    return false;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// indexOf
// indexOf method returns the first index at which a given element can be found in the array, or -1 if its not present
// returns an int val representing index of value searched for in array
Array.prototype.myIndexOf = function (val){
    
    for(let i = 0; i < this.length;i++){
        if(this[i] === undefined) continue;
        if(this[i] === val){
            return i;
        }
    }
    return -1;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// push
// push method adds one or more elements to the end of an array and returns the new length of the array
// returns length of new array
Array.prototype.myPush = function (val){
    for(let i = 0; i < arguments.length;i++){
        this[this.length] = arguments[i];
    }
    return this.length;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// lastIndexOf
// lastIndexOf method returns the last index at which a given element can be found in the array or -1 if it is not present.
// returns an int
Array.prototype.myLastIndexOf = function (val){
    index = -1;
    for(let i = 0; i <this.length;i++){
        if(this[i] === val){
            index = i;
        }
    }
    return index;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Object.keys()
// object.keys method returns an array of a given objects own enumerable property names.
// returns an array of "keys"
Object.grabKeys = function (obj){
    keys = [];
    for(const property in obj){
        keys.myPush(property)
    }
    return keys;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Object.Values()
// object.values() method returns an array of a given objects own enumerable property values, in the same order as that provided by a for in loop.
// returns an array of "values"
Object.grabValues = function (obj){
    values = [];
    for(const property in obj){
        values.myPush(obj[property])
        
    }
    return values;
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// TESTS //


// myEach test
let myarr = arr.slice();
console.log("myEach Test:")
myarr.myEach((x)=> console.log(x));
console.log("\n")

// myMap test
myarr = arr.slice();
console.log("myMap Test:")
myarr.myMap((x) => x*2)
console.log(myarr,"\n")

// myFilter test
mywordarr = arrWords.slice();
console.log("myFilter Test:")
console.log(mywordarr.myFilter(word => word.length > 6),"\n")

// mySome test
myarr = arr.slice();
console.log("mySome Test:")
console.log(myarr.mySome((x) => x%7 === 0),"\n");

// myEvery test
myarr = arr.slice();
console.log("myEvery Test:")
console.log(myarr.myEvery((x) => x%1 === 0),"\n");

// myReduce test
myarr = arr.slice();
console.log("myReduce Test:")
console.log(myarr.myReduce((accumulator, currentValue) => accumulator + currentValue),"\n");

// myIncludes test
mywordsarr = arrWords.slice();
console.log("myIncludes Test:")
console.log(mywordsarr.myIncludes("tests"),"\n");

// myIndexOf test
mywordsarr = arrWords.slice();
console.log("myIndexOf Test:")
console.log(mywordsarr.myIndexOf("test"),"\n");

// myPush test
mywordsarr = arrWords.slice();
console.log("myPush Test:")
console.log(mywordsarr.myPush("ahhhhh","i hope this works", "this too?"),"\n");
console.log(mywordsarr,"\n")

// myLastIndexOf test
mywordsarr = arrWords.slice();
console.log("myLastIndexOf Test:")
console.log(mywordsarr.myLastIndexOf("hi :D"),"\n");

// grabKeys test
console.log("grabKeys Test:")
console.log(Object.grabKeys(obj1),"\n");

// grabValues test
console.log("grabValues Test:")
console.log(Object.grabValues(obj1),"\n");
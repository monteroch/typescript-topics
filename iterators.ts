/*
ITERATORS AND GENERATORS

An object is deemed iterable if it has an implementatios for the Symbol.iterator property. Some built-in types like Array, Map, Set, String, Int32Array, Unit32Array, etc. Have their Symbol.iterator property already implemented. Symbol.iterator function on an object is responsible for returning  the list of values to iterate on.

for .. of statements
for .. of loops over an iterable object, invoking the Symbol.iterator porperty on the object.

for .. of vs for .. in statements
Both for .. of and for .. in statements iterate over lists, the values iterated on are different though for .. in returns a list of keys on the object being iterated, whereas for .. of returns a list of the values of the numeric properties of the object being iterated.

Here is an example:
*/

let list = [4, 5, 6];
let obj = {
    name: "Christian", 
    lastName: "Montero", 
    age: 27,

    // [Symbol.iterator]: function * () {
    //     for (let key in this) {
    //       yield [key, this[key]] // yield [key, value] pair
    //     }
    // }
}

for(let i in list){
    console.log(i); // 0, 1, 2
}

for(let i of list){
    console.log(i); //4, 5, 6
}

/*
Another distinction is that for .. in operates on any object; it serves as a way to inspect properties on this object. for .. of on the other hand, is mainly interested in values of iterable objects. Built-in objects like Map and Set implement Symbol.iterator property allowing access tos tored values.
*/
// TypeScript Map

let map = new Map();

map.set("1", "name1");
map.set(1, "www.abc.com");
map.set(true, "bool1");
map.set("2", "name2");

console.log("Value1= " + map.get(1));
console.log("Value2= " + map.get("1"));
console.log("Key is Present= " + map.has(3));
console.log("Size= " + map.size);
console.log("Delete value= " + map.delete(1));
console.log("New Size= " + map.size);

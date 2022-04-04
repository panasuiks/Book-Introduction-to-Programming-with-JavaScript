/*
let myArray = {
  0: 'test',
  1: 'hi',
  2: 1,
  3: 20,
  length: 4
}

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

let obj = {
  b: 2,
  a: 1,
  c: 3,
}
let newobj = {};
let objKeys = Object.keys(obj);
console.log(objKeys)
console.log(typeof (objKeys))
objKeys.forEach(inp => {
  let inp1 = inp.toUpperCase()
  newobj[inp1] = obj[inp]
}
)

console.log(newobj);

let myProtoObj = {
  foo: 1,
  bar: 2,
}

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

objKeys = Object.keys(myObj);
objKeys.forEach(key => {
  console.log(key);
})

for (let key in myObj) {
  console.log(key);
}
*/
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
}

function objFactory(template, keys) {
  let returnObj = {}
  console.log(typeof keys)
  if (keys === undefined) {
    return template
  }
  keys.forEach(function(key) {
    if (template.hasOwnProperty(key)) { 
      returnObj[key] = template[key];
    }
  }
  )
  return returnObj
}

let newObj = objFactory(objToCopy);
let newObj2 = objFactory(objToCopy, ['foo', 'qux']);
let newObj3 = objFactory(objToCopy, ['bar']);
console.log(newObj);
console.log(newObj2);
console.log(newObj3);


let obj = {
  foo: {a: 'hello', b: 'world'},
  bar: ['example', 'mem', null, {xyz: 6}, 88],
  qux: [4,8,12],
}

obj.bar[3].xyz = 606
console.log(obj);
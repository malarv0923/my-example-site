const validator = require('validator')
const tripleMe = require('./tripleMe')
const fs = require('fs')


console.log(tripleMe(10))

fs.readFile('./context.txt', 'UTF-8', function(err, data){
if (err) throw err
fs.writeFile('./index.html', `<h1>${data}</1>`, function(err, data){
if (err) throw err
console.log("file was successfuly created")

})

})

console.log(validator.isEmail('malar.v09@gmail.com'))
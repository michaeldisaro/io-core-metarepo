const fs = require('fs');


const args = process.argv.slice(2);
const exampleEnvVars = fs.readFileSync(args[0]+".env.example", 'utf8').split("\n").filter(l => l.indexOf('#') < 0 && l.length > 0).map(l => l.split("=")[0]);
const privateEnvVars = fs.readFileSync(args[0]+".env", 'utf8').split("\n").filter(l => l.indexOf('#') < 0 && l.length > 0).map(l => l.split("=")[0]);
const missing = exampleEnvVars.filter(l => !privateEnvVars.includes(l));


console.log(missing);

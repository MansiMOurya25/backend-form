const bcrypt = require("bcrypt");
async function convert(){
    const myPassword ="123456";
    const hashPassword = await bcrypt.hash(myPassword , 10);
    console.log('original password:' ,myPassword);
    console.log('Hash password:' , hashPassword);
// how to compare them 
const match = await bcrypt.compare(myPassword , hashPassword);
if(match){
    console.log('password matched');
}else{
    console.log('Invalid password');
}
}

convert();
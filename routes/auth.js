const jwt = require('jsonwebtoken');
const auth = (req, res , next)=>{
    const token = req.headers.authorization ;
    console.log(token);
    if(token){
        const ogToken = token.split(' ')[1];
        const data = jwt.verify(ogToken , process.env.JWT_SECRET);
        console.log(data);
        req.user = data;
        next();
    }
    else{
        return res.send('login first');
    }
}
module.exports = auth;
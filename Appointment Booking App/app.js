const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./routes/userRoute')
const sequelize = require('./data/database')


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json())

app.set('views', 'views');

app.use(userRoute);

app.post('/users', userRoute);

app.use('/*',(req, res)=>{
    res.send('<h1> Page Not Found </h1>')
})

sequelize.sync()
.then(() => {
    app.listen('3000', () => {
        console.log("listening on post 3000");
    })
})
.catch(err => {
    console.log(err);
})




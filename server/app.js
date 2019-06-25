const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
 
//cors
app.use(cors())

mongoose.connect("mongodb+srv://oldmo86617:_oo0981833393@graphql-xkrt7.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true })
mongoose.connection.once('open',() => {
    console.log('connected to db')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000,() => {
    console.log('listening on 4000')
})
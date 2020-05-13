const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const morgan=require("morgan")


const app = express();

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://localhost:27017/Lyrical';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
const connectDB=async()=>{
  await mongoose.connect(MONGO_URI,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:false
  })
}

connectDB().then(data=>console.log("Connection to DB Sucessful")).catch(err=>console.log(err))

//
app.use(morgan("dev"))
app.use(bodyParser.json());


app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;

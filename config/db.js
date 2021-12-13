require("dotenv").config();

const  DB_HOST  = process.env.DB_HOST;
const db ={
    url: DB_HOST
}
module.exports = db;
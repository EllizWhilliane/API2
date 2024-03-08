const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createDatabase(){
    try{
        const connection = await mysql.createConnection({
            hoat: databaseConfig.host,
            user: databaseConfig.user,
            pasword: databaseConfig.pasword,
        });    
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`
        );    
        await connection.end();    
        console.log("Database created!");
    }catch (error){
        console.log(`Error creating database: $(error)`)
    }
}

createDatabase();
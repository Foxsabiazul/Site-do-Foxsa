import mysql from 'mysql2';

export const db= mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "db_server"
});

db.connect((err)=> {
    if(err){
        console.log(`Erro ao conectar ao banco de dados: ${err}`);
        return
    }

    console.log(`Conexão bem-sucedida ao banco de dados MySQL`);
});
import { Db, MongoClient } from "mongodb";
require("dotenv").config();
const uri = `mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@${process.env.CLUSTERNAME}.hdy8jr1.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.CLUSTERNAME}`;


const client = new MongoClient(uri);

let dbconnection: Db | undefined;
export async function connectToDatabase(): Promise<Db> {

    if (!dbconnection) {

        try {
            await client.connect();
            dbconnection = client.db("heal-database");
            console.log({ success: "Conectado ao MongoDB com sucesso" });
        } catch (err) {
            console.error({ Error: "Erro ao conectar-se com o MongoDB" }, err);
            throw err;
        }
    }
    return dbconnection;
}

export async function disconnectToDatabase(): Promise<void> {
    if (client) {
        try {
            await client.close()
            console.log({ success: "Desconectado do MongoDB com sucesso" })
            dbconnection = undefined

        } catch (err) {
            console.error({ Error: "Erro ao desconectar do MongoDB" }, err)
        }
    }
}

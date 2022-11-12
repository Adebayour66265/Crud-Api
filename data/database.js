const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('crud-api');
}

function getDb() {
    if (!database) {
        throw new Error('Database not Connected!');
    }

    return database;

}
module.exports = {
    initDb: initDb,
    getDb: getDb
}
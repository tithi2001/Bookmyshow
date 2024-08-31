import { MongoClient } from "mongodb";

async function main() {
  const uri =
    "mongodb+srv://tithid943:6Xt6gPkp5AXPXFr7@cluster0.jsmiz.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases(); // Declare databasesList with const

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}


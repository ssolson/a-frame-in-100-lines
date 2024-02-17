// utils/dbUtils.js

import { getClientAndDb } from "./mongo/db";

async function getEpisodeData(episodeNumber: number) {
    const { client, db } = await getClientAndDb();
    const collection = db.collection("thedailygweiRecap");
    const episodeData = await collection.findOne({ episode_number: episodeNumber });
    // await client.close();
    return episodeData;
  }
  
  export default getEpisodeData;
  
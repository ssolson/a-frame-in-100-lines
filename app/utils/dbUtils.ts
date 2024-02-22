// app/utils/dbUtils.js

import { getClientAndDb } from './mongo/db';

async function getEpisodeData(episodeNumber?: number) {
  const { client, db } = await getClientAndDb();
  const collection = db.collection('thedailygweiRecap');

  let episodeData;

  // Check if episodeNumber is provided
  if (episodeNumber !== undefined) {
    // If episodeNumber is provided, find the episode by number
    episodeData = await collection.findOne({ episode_number: episodeNumber });
  } else {
    // If no episodeNumber is provided, find the latest episode
    episodeData = await collection.findOne({}, { sort: { episode_date: -1 } });
  }

  return episodeData;
}

export default getEpisodeData;

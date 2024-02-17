// app/components/frame/postURL.ts
import { encodedEpisodeNumber } from './image';

export const framePostUrl = `${process.env.NEXT_PUBLIC_URL}/api/frame?episode_number=${encodedEpisodeNumber}`;
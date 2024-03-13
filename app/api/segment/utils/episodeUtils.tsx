// episodeUtils.tsx

import getEpisodeData from '../../../utils/dbUtils';
import { EpisodeProps, SegmentProps } from '../../../../types';

export const fetchAndPrepareEpisodeData = async (
  episodeNumberStr: string | null,
): Promise<EpisodeProps | null> => {
  if (!episodeNumberStr) {
    return null;
  }

  let episodeDataResult;
  if (episodeNumberStr === 'latest') {
    episodeDataResult = await getEpisodeData();
  } else {
    const episodeNumberInt = parseInt(episodeNumberStr, 10);
    episodeDataResult = await getEpisodeData(episodeNumberInt);
  }

  if (!episodeDataResult) {
    return null;
  }

  // Modify episode_data property to exclude Introductory song
  episodeDataResult = episodeDataResult as unknown as EpisodeProps;
  let episodeData = {
    ...episodeDataResult,
    episode_data: episodeDataResult.episode_data.slice(1),
  };

  return episodeData;
};

export const validateSegmentNumber = (
  segmentNumberStr: string | null,
  episodeData: EpisodeProps,
): boolean => {
  if (!segmentNumberStr) return false;
  const segmentNumberInt = parseInt(segmentNumberStr, 10);
  return segmentNumberInt > 0 && segmentNumberInt <= episodeData.episode_data.length;
};

export const extractSegmentData = (
  segmentNumberStr: string,
  episodeData: EpisodeProps,
): SegmentProps => {
  const segmentNumberInt = parseInt(segmentNumberStr, 10);
  return episodeData.episode_data[segmentNumberInt - 1];
};

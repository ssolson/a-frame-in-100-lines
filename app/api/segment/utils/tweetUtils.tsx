// tweetUtils.ts

import { getTweet } from 'react-tweet/api';

export async function fetchTweetById(tweetId: string) {
  const tweet = await getTweet(tweetId);
  let quotedTweet = undefined;

  if (tweet?.quoted_tweet) {
    const quotedTweetId = tweet.quoted_tweet.id_str;
    quotedTweet = await getTweet(quotedTweetId);
  }

  return { tweet, quotedTweet };
}

export function extractTweetIdFromUrl(url: string): string | undefined {
  let tweetId = undefined;

  const urlObject = new URL(url);
  const hostname = urlObject.hostname;
  const pathParts = urlObject.pathname.split('/').filter(Boolean); // Remove any empty strings

  if ((hostname === 'twitter.com' || hostname === 'x.com') && pathParts.length >= 3) {
    tweetId = pathParts[2];
  }

  return tweetId;
}

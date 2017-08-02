import TweetResolver from './tweet-resolver';
import GraphQLDate from 'graphql-date';

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolver.getTweet,
    getTweets: TweetResolver.getTweets,
  },
  Mutation: {
    createTweet: TweetResolver.createTweet,
    updateTweet: TweetResolver.updateTweet,
    deleteTweet: TweetResolver.deleteTweet
  }
};

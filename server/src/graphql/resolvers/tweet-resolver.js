import Tweet from '../../models/Tweet';

export default {
  getTweet: (_, { _id }) => Tweet.findById(_id),
  getTweets: () => Tweet.find({}).sort({ createdAt: -1 }),
  createTweet: (_, args, ctx) => {
    console.log(`CONTEXT ${ctx}`);
    return Tweet.create(args)
  },
  updateTweet: (_, { _id, ...rest }) => Tweet.findByIdAndUpdate(_id, rest, { new: true }),
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findOneAndRemove(_id);
      return {
        message: 'Delete success!'
      }
    } catch (error) {
      throw error;
    }
  }
};

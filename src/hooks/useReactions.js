import { reactionEnum } from '../resources/reactions';

const { STAR, UP, DOWN } = reactionEnum;

// Typically you would use this with react-redux but using mock data here for now
export const useReactions = () => {
  const isSelfReacted = true;
  const totalReactions = 2335;
  const topReactions = [STAR, UP, DOWN];

  return {
    isSelfReacted,
    totalReactions,
    topReactions,
  };
};

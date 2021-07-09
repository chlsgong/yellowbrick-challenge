import { state } from '../mockState';

// Typically you would use this with react-redux but using mock data here for now
export const useReactions = () => {
  const isSelfReacted = state.isSelfReacted;
  const totalReactions = state.totalReactions;
  const topReactions = state.topReactions;

  return {
    isSelfReacted,
    totalReactions,
    topReactions,
  };
};

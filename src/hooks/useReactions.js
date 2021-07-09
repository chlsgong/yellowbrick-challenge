import { mockState } from '../mockState';

// Typically you would use this with react-redux but using mock data here for now
export const useReactions = () => {
  const isSelfReacted = mockState.isSelfReacted;
  const totalReactions = mockState.totalReactions;
  const topReactions = mockState.topReactions;

  return {
    isSelfReacted,
    totalReactions,
    topReactions,
  };
};

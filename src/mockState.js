import { reactionEnum } from './resources/reactions';
const { STAR, UP, DOWN } = reactionEnum;

export let state = {
  isSelfReacted: true,
  totalReactions: 2335,
  topReactions: [STAR, UP, DOWN],
};

export const setMockState = (newState) => state = newState;

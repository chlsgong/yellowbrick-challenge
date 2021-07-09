import { reactionEnum } from './resources/reactions';
const { STAR, UP, DOWN } = reactionEnum;

export let mockState = {
  // Boolean: this determines if the user themself reacted with this button
  isSelfReacted: true,
  // Number: the number of total reactions to be displayed by this button
  totalReactions: 2335,
  // Array<reactionEnum>: an array of reactionEnum representing the top three reactions
  topReactions: [STAR, UP, DOWN],
};

export const setMockState = (newMockState) => {
  mockState = {
    ...mockState,
    ...newMockState
  }
}

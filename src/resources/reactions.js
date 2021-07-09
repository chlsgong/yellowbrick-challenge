import starFilled from '../assets/reactionIcons/star_filled.svg';
import upFilled from '../assets/reactionIcons/up_filled.svg';
import downFilled from '../assets/reactionIcons/down_filled.svg';
import cashFilled from '../assets/reactionIcons/cash_filled.svg';
import wowEmoji from '../assets/reactionIcons/wow_emoji.svg';
import hahaEmoji from '../assets/reactionIcons/haha_emoji.svg';
import starHint from '../assets/textHints/star_hint.svg';
import upHint from '../assets/textHints/up_hint.svg';
import downHint from '../assets/textHints/down_hint.svg';
import cashHint from '../assets/textHints/cash_hint.svg';
import wowHint from '../assets/textHints/wow_hint.svg';
import hahaHint from '../assets/textHints/haha_hint.svg';

export const reactionEnum = {
  STAR: 'star',
  UP: 'up',
  DOWN: 'down',
  CASH: 'cash',
  WOW: 'wow',
  HAHA: 'haha',
};

export const reactionIconMap = {
  [reactionEnum.STAR]: {
    title: 'Star',
    icon: starFilled,
    hint: starHint,
    color: '#FDDC64',
  },
  [reactionEnum.UP]: {
    title: 'Up',
    icon: upFilled,
    hint: upHint,
    color: '#45F850',
  },
  [reactionEnum.DOWN]: {
    title: 'Down',
    icon: downFilled,
    hint: downHint,
    color: '#F87045',
  },
  [reactionEnum.CASH]: {
    title: 'Cash',
    icon: cashFilled,
    hint: cashHint,
    color: '#4562F8',
  },
  [reactionEnum.WOW]: {
    title: 'Wow',
    icon: wowEmoji,
    hint: wowHint,
    color: '#F5CF40',
  },
  [reactionEnum.HAHA]: {
    title: 'Haha',
    icon: hahaEmoji,
    hint: hahaHint,
    color: '#F5CF40',
  },
};

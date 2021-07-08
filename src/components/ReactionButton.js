import React, { useState } from 'react';
import './ReactionButton.css';
import starFilled from '../assets/reactionIcons/star_filled.svg'; // TODO: make a icon component
import upFilled from '../assets/reactionIcons/up_filled.svg'; // TODO: make a icon component
import downFilled from '../assets/reactionIcons/down_filled.svg'; // TODO: make a icon component
import cashFilled from '../assets/reactionIcons/cash_filled.svg'; // TODO: make a icon component
import wowEmoji from '../assets/reactionIcons/wow_emoji.svg'; // TODO: make a icon component
import hahaEmoji from '../assets/reactionIcons/haha_emoji.svg';
import starHint from '../assets/textHints/star_hint.svg';
import upHint from '../assets/textHints/up_hint.svg';
import downHint from '../assets/textHints/down_hint.svg';
import cashHint from '../assets/textHints/cash_hint.svg';
import wowHint from '../assets/textHints/wow_hint.svg';
import hahaHint from '../assets/textHints/haha_hint.svg';

const ReactionButton = (props) => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringReactionMenu, setIsHoveringReactionMenu] = useState(false);
  const [focusedReaction, setFocusedReaction] = useState('');
  const [selectedReaction, setSelectedReaction] = useState('star');

  // TODO: put in props or hooks
  const isSelfReacted = true;
  const totalReactions = 2335;

  let buttonHoverTimer = null;
  let menuHoverTimer = null;

  const reactionIconMap = {
    'star': {
      title: 'Star',
      icon: starFilled,
      hint: starHint,
      color: '#FDDC64',
    },
    'up': {
      title: 'Up',
      icon: upFilled,
      hint: upHint,
      color: '#45F850',
    },
    'down': {
      title: 'Down',
      icon: downFilled,
      hint: downHint,
      color: '#F87045',
    },
    'cash': {
      title: 'Cash',
      icon: cashFilled,
      hint: cashHint,
      color: '#4562F8',
    },
    'wow': {
      title: 'Wow',
      icon: wowEmoji,
      hint: wowHint,
      color: '#F5CF40',
    },
    'haha': {
      title: 'Haha',
      icon: hahaEmoji,
      hint: hahaHint,
      color: '#F5CF40',
    },
  };

  // TODO: move to util file
  const numToString = (n, locale = 'en-US') => {
    return n.toLocaleString(locale);
  };

  const getReactionIndicatorText = () => {
    const totalReactionsString = numToString(totalReactions);
    const selfReactedString = isSelfReacted ? `You and `: ''; // TODO: put strings in resource file
    return selfReactedString + totalReactionsString;
  };

  const renderReactionMenuButton = (reactionKey) => {
    const reaction = reactionIconMap[reactionKey];
    const hintText = focusedReaction === reactionKey // TODO: put reaction in enum
      ? <img className='ReactionMenuHint' src={reaction.hint} alt="noIcon" />
      : null;

    return (
      <button
        className='ReactionMenuButton'
        onMouseEnter={() => setFocusedReaction(reactionKey)}
        onMouseLeave={() => setFocusedReaction('')}
        onClick={() => {
          // show icon in button
          setSelectedReaction(reactionKey)
          // log reaction
          console.log(`${reaction.title} tapped`);
          // close menu
          setIsHoveringReactionMenu(false);
          // change color of button text
          const reactionButtonLabel = document.getElementById('reactionButtonLabel');
          reactionButtonLabel.style.color = reaction.color;
        }}
      >
        {hintText}
        <img className='ReactionMenuIcon' src={reaction.icon} alt="noIcon" />
      </button>
    );
  };

  const renderReactionMenu = () => {
    if (!isHoveringButton && !isHoveringReactionMenu) return null;

    return (
      <div
        className='ReactionMenu'
        onMouseEnter={() => {
          if (menuHoverTimer) clearTimeout(menuHoverTimer);
          setIsHoveringReactionMenu(true);
        }}
        onMouseLeave={() => {
          menuHoverTimer = setTimeout(() => setIsHoveringReactionMenu(false), 500)
        }}
      >
        {renderReactionMenuButton('star')}
        {renderReactionMenuButton('up')}
        {renderReactionMenuButton('down')}
        {renderReactionMenuButton('cash')}
        {renderReactionMenuButton('wow')}
        {renderReactionMenuButton('haha')}
      </div>
    );
  };

  const renderReactionIndicator = () => {
    const isReactionIndicatorHidden = isHoveringButton || isHoveringReactionMenu;
    const className = ['ReactionIndicator', isReactionIndicatorHidden && 'ReactionIndicatorHidden'].join(' ');

    // TODO: use props or hooks
    return (
      <div className={className}>
        <div className='ReactionIndicatorIcons'>
          <img className='ReactionIndicatorIcon' src={downFilled} alt="noIcon" />
          <img className='ReactionIndicatorIcon' src={upFilled} alt="noIcon" />
          <img className='ReactionIndicatorIcon' src={starFilled} alt="noIcon" />
        </div>
        <label className='ReactionIndicatorLabel'>
          {getReactionIndicatorText()}
        </label>
      </div>
    );
  };

  const renderButton = () => {
    const reaction = reactionIconMap[selectedReaction];

    return (
      <button
        className='ReactionButton'
        type='button'
        onClick={props.onClick}
        onMouseEnter={() => {
          if (buttonHoverTimer) clearTimeout(buttonHoverTimer);
          setIsHoveringButton(true);
        }}
        onMouseLeave={() => {
          buttonHoverTimer = setTimeout(() => setIsHoveringButton(false), 500);
        }}
      >
        <img className='ReactionButtonIcon' src={reaction.icon} alt="noIcon" />
        <label id='reactionButtonLabel' className='ReactionButtonLabel'>
          {reaction.title}
        </label>
      </button>
    );
  };

  return (
    <div className='ReactionButtonContainer'>
      {renderReactionMenu()}
      {renderReactionIndicator()}
      {renderButton()}
    </div>
  );
}

export default ReactionButton;

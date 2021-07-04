import React, { useState } from 'react';
import './ReactionButton.css';
import starFilled from '../assets/reactionIcons/star_filled.svg'; // TODO: make a icon component
import upFilled from '../assets/reactionIcons/up_filled.svg'; // TODO: make a icon component
import downFilled from '../assets/reactionIcons/down_filled.svg'; // TODO: make a icon component
import cashFilled from '../assets/reactionIcons/cash_filled.svg'; // TODO: make a icon component
import wowEmoji from '../assets/reactionIcons/wow_emoji.svg'; // TODO: make a icon component
import hahaEmoji from '../assets/reactionIcons/haha_emoji.svg';

const ReactionButton = (props) => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringReaction, setIsHoveringReaction] = useState(false);

  const isSelfReacted = true;
  const totalReactions = 2335;

  // TODO: move to util file
  const numToString = (n, locale = 'en-US') => {
    return n.toLocaleString(locale);
  };

  const getReactionIndicatorText = () => {
    const totalReactionsString = numToString(totalReactions);
    const selfReactedString = isSelfReacted ? `You and `: ''; // TODO: put strings in resource file
    return selfReactedString + totalReactionsString;
  };

  const renderReactionMenu = () => {
    if (!isHoveringButton && !isHoveringReaction) return null;

    return (
      <div className='ReactionMenu'>
        <button
          className='ReactionMenuButton'
          type='button'
          onMouseEnter={() => {
            console.log('hover reaction')
            setIsHoveringReaction(true)
          }}
          onMouseLeave={() => setIsHoveringReaction(false)}
        >
          <img className='ReactionMenuIcon' src={starFilled} alt="star" />
        </button>
        <img className='ReactionMenuIcon' src={upFilled} alt="up" />
        <img className='ReactionMenuIcon' src={downFilled} alt="down" />
        <img className='ReactionMenuIcon' src={cashFilled} alt="cash" />
        <img className='ReactionMenuIcon' src={wowEmoji} alt="wow" />
        <img className='ReactionMenuIcon' src={hahaEmoji} alt="haha" />
      </div>
    );
  };

  const renderReactionIndicator = () => {
    if (isHoveringButton || isHoveringReaction) return null;

    return (
      <div className='ReactionIndicator'>
        <div className='ReactionIndicatorIcons'>
          <img className='ReactionIndicatorIcon' src={downFilled} alt="down" />
          <img className='ReactionIndicatorIcon' src={upFilled} alt="up" />
          <img className='ReactionIndicatorIcon' src={starFilled} alt="star" />
        </div>
        <label className='ReactionIndicatorLabel'>
          {getReactionIndicatorText()}
        </label>
      </div>
    );
  };

  return (
    <div className='ReactionButtonContainer'>
      {renderReactionMenu()}
      {renderReactionIndicator()}
      <button
        className='ReactionButton'
        type='button'
        onClick={props.onClick}
        onMouseEnter={() => {
          console.log('hover button')
          setIsHoveringButton(true)
        }}
        onMouseLeave={() => {
          console.log('leave button')
          setTimeout(() => setIsHoveringButton(false), 500)
        }}
      >
        <img className='ReactionButtonIcon' src={starFilled} alt="star" />
        <label className='ReactionButtonLabel'>
          {props.title}
        </label>
      </button>
    </div>
  );
}

export default ReactionButton;

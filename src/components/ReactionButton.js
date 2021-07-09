import React, { useState } from 'react';
import './ReactionButton.css';
import { reactionIconMap, reactionEnum } from '../resources/reactions';
import { reactionButtonStrings } from '../resources/strings';
import { useReactions } from '../hooks/useReactions';
import { numToString } from '../utils';

const {
  STAR,
  UP,
  DOWN,
  CASH,
  WOW,
  HAHA,
} = reactionEnum;

const ReactionButton = (props) => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringReactionMenu, setIsHoveringReactionMenu] = useState(false);
  const [focusedReaction, setFocusedReaction] = useState('');
  const [selectedReaction, setSelectedReaction] = useState(STAR);
  const { isSelfReacted, totalReactions, topReactions } = useReactions();

  let buttonHoverTimer = null;
  let menuHoverTimer = null;

  const renderReactionMenuButton = (reactionKey) => {
    const reaction = reactionIconMap[reactionKey];
    // Show the reaction hint text if the user hovers the reaction
    const hintText = focusedReaction === reactionKey
      ? <img className='ReactionMenuHint' src={reaction.hint} alt="noIcon" />
      : null;

    return (
      <button
        className='ReactionMenuButton'
        onMouseEnter={() => setFocusedReaction(reactionKey)}
        onMouseLeave={() => setFocusedReaction('')}
        onClick={() => {
          // Show icon in button
          setSelectedReaction(reactionKey)
          // Log reaction
          console.log(`${reaction.title} tapped`);
          // Close menu
          setIsHoveringReactionMenu(false);
          // Change color of button text
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
        {renderReactionMenuButton(STAR)}
        {renderReactionMenuButton(UP)}
        {renderReactionMenuButton(DOWN)}
        {renderReactionMenuButton(CASH)}
        {renderReactionMenuButton(WOW)}
        {renderReactionMenuButton(HAHA)}
      </div>
    );
  };

  const getReactionIndicatorText = () => {
    const totalReactionsString = numToString(totalReactions);
    const selfReactedString = isSelfReacted ? reactionButtonStrings.indicatorText : '';
    return selfReactedString + totalReactionsString;
  };

  const renderReactionIndicatorIcon = (reactionKey, index) => {
    const reaction = reactionIconMap[reactionKey];
    return <img key={index} className='ReactionIndicatorIcon' src={reaction.icon} alt="noIcon" />;
  };

  const renderReactionIndicator = () => {
    const isReactionIndicatorHidden = isHoveringButton || isHoveringReactionMenu;
    const className = ['ReactionIndicator', isReactionIndicatorHidden && 'ReactionIndicatorHidden'].join(' ');
    // Copy and reverse the top reactions array
    const indicators = topReactions.slice().reverse();

    return (
      <div className={className}>
        <div className='ReactionIndicatorIcons'>
          {indicators.map((reaction, index) => renderReactionIndicatorIcon(reaction, index))}
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

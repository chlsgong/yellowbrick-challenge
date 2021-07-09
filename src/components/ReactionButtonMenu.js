import React, { useState } from 'react';
import './ReactionButton.css';
import { reactionIconMap, reactionEnum } from '../resources/reactions';

const {
  STAR,
  UP,
  DOWN,
  CASH,
  WOW,
  HAHA,
} = reactionEnum;

const ReactionButtonMenu = (props) => {
  const [focusedReaction, setFocusedReaction] = useState('');

  let menuHoverTimer = null;

  const renderReactionMenuButton = (reactionKey) => {
    const reaction = reactionIconMap[reactionKey];
    // Show the reaction hint text if the user hovers the reaction
    const hintText = focusedReaction === reactionKey
      ? <img data-testid={`reactionMenuHint-${reactionKey}`} className='ReactionMenuHint' src={reaction.hint} alt="noIcon" />
      : null;

    return (
      <button
        data-testid={`reactionMenuButton-${reactionKey}`}
        className='ReactionMenuButton'
        onMouseEnter={() => setFocusedReaction(reactionKey)}
        onMouseLeave={() => setFocusedReaction('')}
        onClick={() => {
          // Show icon in button
          props.setSelectedReaction(reactionKey)
          // Log reaction
          console.log(`${reaction.title} tapped`);
          // Close menu
          props.setIsHoveringReactionMenu(false);
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
    if (!props.isHoveringButton && !props.isHoveringReactionMenu) return null;

    return (
      <div
        data-testid='reactionMenu'
        className='ReactionMenu'
        onMouseEnter={() => {
          if (menuHoverTimer) clearTimeout(menuHoverTimer);
          props.setIsHoveringReactionMenu(true);
        }}
        onMouseLeave={() => {
          menuHoverTimer = setTimeout(() => props.setIsHoveringReactionMenu(false), 500)
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

  return renderReactionMenu();
}

export default ReactionButtonMenu;

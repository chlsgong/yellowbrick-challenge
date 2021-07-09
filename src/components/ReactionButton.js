import React, { useState } from 'react';
import './ReactionButton.css';
import ReactionButtonMenu from './ReactionButtonMenu';
import ReactionButtonIndicator from './ReactionButtonIndicator';
import { reactionIconMap, reactionEnum } from '../resources/reactions';

const { STAR } = reactionEnum;

const ReactionButton = (props) => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringReactionMenu, setIsHoveringReactionMenu] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(STAR);

  let buttonHoverTimer = null;

  const renderButton = () => {
    const reaction = reactionIconMap[selectedReaction];

    return (
      <button
        data-testid='reactionButton'
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
    <div data-testid='reactionButtonContainer' className='ReactionButtonContainer'>
      <ReactionButtonMenu
        setSelectedReaction={setSelectedReaction}
        setIsHoveringReactionMenu={setIsHoveringReactionMenu}
        isHoveringReactionMenu={isHoveringReactionMenu}
        isHoveringButton={isHoveringButton}
      />
      <ReactionButtonIndicator
        isHoveringButton={isHoveringButton}
        isHoveringReactionMenu={isHoveringReactionMenu}
      />
      {renderButton()}
    </div>
  );
}

export default ReactionButton;

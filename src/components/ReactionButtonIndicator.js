import React from 'react';
import './ReactionButton.css';
import { reactionIconMap } from '../resources/reactions';
import { reactionButtonStrings } from '../resources/strings';
import { useReactions } from '../hooks/useReactions';
import { numToString } from '../utils';

const ReactionButtonIndicator = (props) => {
  const { isSelfReacted, totalReactions, topReactions } = useReactions();

  const getReactionIndicatorText = () => {
    const totalReactionsString = numToString(totalReactions);
    const selfReactedString = isSelfReacted ? reactionButtonStrings.indicatorText : '';
    return selfReactedString + totalReactionsString;
  };

  const renderReactionIndicatorIcon = (reactionKey, index) => {
    const reaction = reactionIconMap[reactionKey];
    return <img data-testid={`reactionIndicatorIcon-${reactionKey}`} key={index} className='ReactionIndicatorIcon' src={reaction.icon} alt="noIcon" />;
  };

  const renderReactionIndicator = () => {
    const isReactionIndicatorHidden = props.isHoveringButton || props.isHoveringReactionMenu;
    const className = ['ReactionIndicator', isReactionIndicatorHidden && 'ReactionIndicatorHidden'].join(' ');
    // Copy and reverse the top reactions array
    const indicators = topReactions.slice().reverse();

    return (
      <div data-testid='reactionIndicator' className={className}>
        <div data-testid='reactionIndicatorIcons' className='ReactionIndicatorIcons'>
          {indicators.map((reaction, index) => renderReactionIndicatorIcon(reaction, index))}
        </div>
        <label data-testid='reactionIndicatorLabel' className='ReactionIndicatorLabel'>
          {getReactionIndicatorText()}
        </label>
      </div>
    );
  };

  return renderReactionIndicator();
}

export default ReactionButtonIndicator;

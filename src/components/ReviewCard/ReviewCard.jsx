import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'assets/icons';
import { Content, H3, Li } from './reviewCard.styled';

const ReviewCard = ({ author, content }) => {
  return (
    <Li>
      <H3>
        <Icon id="unknownComentator" /> {author}
      </H3>
      <Content>{content}</Content>
    </Li>
  );
};

ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewCard;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Card = styled.li`
  width: 192px;
  list-style-type: none;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  max-height: 282px;
  border-radius: 10px;
  box-sizing: border-box;
  outline: 1px solid #505050;
  outline-offset: -1px;
  transition: 0.3s background-color, 0.3s border-color;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    border: 6px solid #ff8600;
    border-radius: 10px;
    transition: 0.3s visibility, 0.3s opacity;
  }
`;

export const ImgLink = styled(Link)`
  &:hover > div {
    background-color: #0000008a;
  }

  &:hover > div::after {
    visibility: visible;
    opacity: 1;
  }

  &:hover > div > img {
    transform: scale(1.1);
  }
`;

export const Img = styled(LazyLoadImage)`
  display: block;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  max-height: 290px;
  object-fit: cover;
  transition: 0.3s transform;
`;

export const TitleLink = styled(Link)`
  transition: 0.3s color;
  font-size: 14px;
  font-weight: bold;
  color: #fff;

  &:hover {
    color: #ff8600;
    text-decoration: underline;
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  background-color: #071c31;
  padding-top: 84px;
  padding-bottom: 20px;
`;

export const MovieContainer = styled.div`
  display: flex;
  color: white;
  border-radius: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
`;

export const MovieInfo = styled.div`
  padding: 0 20px;
`;

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) > td {
    background-color: #041629;
  }
`;

export const Td = styled.td`
  padding: 14px 10px;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const GoBackBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  width: 110px;
  margin-top: 0px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #ff8600;
  color: #fff;
  border-radius: 5px;
  transition: 0.3s background-color, 0.2s transform;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    border-width: 16px 16px 0 0;
    border-style: solid;
    border-color: #ef7900 #071c31;
    box-shadow: -1px -1px 1px rgba(0, 0, 0, 0), -1px -1px 1px rgba(0, 0, 0, 0.2);
    background: #658e15;
    border-radius: 5px 0 0 0;
    transition: 0.3s border-color;
    content: '';
  }

  &:hover {
    background-color: #fba647;
  }

  &:hover::after {
    border-color: #fba647 #071c31;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Hr = styled.hr`
  margin-bottom: 0;
  margin-top: 30px;
  border: 0;
  border-top: 2px solid #ff8600;
  height: 0;
`;

export const ExtrasList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 20px 0;
  & > li {
    list-style-type: none;
  }
`;

export const ExtraBtn = styled(Link)`
  display: block;
  background-color: #ff8600;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  transition: 0.3s background-color, 0.2s transform;

  &:hover {
    background-color: #fba647;
  }

  &:active {
    transform: scale(0.9);
  }
`;

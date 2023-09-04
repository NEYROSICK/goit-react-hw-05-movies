import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export const HeaderSection = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(255, 0, 91);
  background: linear-gradient(
    135deg,
    rgba(255, 0, 91, 1) 0%,
    rgba(255, 137, 27, 1) 58%,
    rgba(255, 134, 0, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
  color: white;
  padding: 8px 0;
`;

export const LogoIcon = styled.svg`
  width: 48px;
  height: 48px;
`;

export const Search = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 4px solid transparent;
  border-radius: 10px;
  transition: 0.3s border, 0.3s background-color, 0.2s transform;

  &:hover {
    border-color: #ff9e00;
    background-color: #f0f8ff47;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 22px;
  color: white;
`;

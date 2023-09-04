import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  // visibility: visible;
  background-color: #1f0825d9;
  transition: 0.5s visibility, 0.5s opacity;
`;

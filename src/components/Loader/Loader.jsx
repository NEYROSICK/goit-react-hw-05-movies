import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';

const Loader = ({ visible }) => {
  return (
    <LoaderContainer visible={visible}>
      <ColorRing
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderContainer>
  );
};

export default Loader;

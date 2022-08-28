import React from 'react';
import styled from 'styled-components/native';

// 흠...
function ModalBase({Component, ...rest}) {
  return (
    <Container>
      <Component {...rest} />
    </Container>
  );
}

const Container = styled.View`
  //flex: 1;
  //align-items: center;
  //justify-content: center;
`;

export default ModalBase;

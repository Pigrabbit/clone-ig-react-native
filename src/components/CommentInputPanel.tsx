import React from 'react';
import styled from 'styled-components/native';
import TouchableIcon from './TouchableIcon';

const CommentInputPanel: React.FC = () => {
  return (
    <Container>
      <CommentInput placeholder="Write comment here..." />
      <TouchableIcon
        iconName="sendIcon"
        onPress={() => console.log('submit comment')}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 0 5px 0 0;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentInput = styled.TextInput`
  height: 36px;
  width: 85%;
  border-color: #000000;
  border-bottom-width: 1px;
`;

export default CommentInputPanel;

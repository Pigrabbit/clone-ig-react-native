import TouchableIcon from 'components/TouchableIcon';
import { COLOR } from 'constants/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import { AppTheme } from 'stores/theme/types';
import styled from 'styled-components/native';

const PostWriterScreen: React.FC = () => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  return (
    <Container>
      <Header>
        <TouchableIcon
          iconName="closeIcon"
          onPress={() => console.log('back')}
          tintColor={COLOR[theme].text}
          width={24}
          height={24}
        />
        <HeaderTitle theme={theme}>New Post</HeaderTitle>
        <HeaderNextButton onPress={() => console.log('next')}>
          <HeaderNextButtonText>Next</HeaderNextButtonText>
        </HeaderNextButton>
      </Header>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  padding: 15px;
`;

const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => COLOR[props.theme].text};
`;

const HeaderNextButton = styled.TouchableOpacity`
  margin: 0 5px;
`;

const HeaderNextButtonText = styled.Text`
  font-size: 17px;
  color: #00a8ff;
`;

export default PostWriterScreen;

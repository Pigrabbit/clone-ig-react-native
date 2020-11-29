import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOR } from 'constants/styles';
import React, { useState } from 'client/node_modules/react';
import { Switch } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'client/node_modules/react-redux';
import { RootState } from 'stores';
import { toggleTheme } from 'stores/theme/actions';
import { AppTheme, DARK_MODE, LIGHT_MODE } from 'stores/theme/types';
import styled from 'client/node_modules/styled-components/native';

const MyPageScreen: React.FC = () => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkmode] = useState<boolean>(theme === DARK_MODE);

  const handleSwitchToggle = async () => {
    dispatch(toggleTheme(isDarkMode ? LIGHT_MODE : DARK_MODE));
    await AsyncStorage.setItem('theme', isDarkMode ? LIGHT_MODE : DARK_MODE);
    setIsDarkmode(!isDarkMode);
  };

  return (
    <Container>
      <Header theme={theme}>
        <HeaderTitle theme={theme}>My Page</HeaderTitle>
      </Header>
      <Body>
        <OptionRow>
          <OptionRowLabel theme={theme}>Dark mode</OptionRowLabel>
          <Switch
            trackColor={{ true: COLOR.YELLOW_GREEN, false: COLOR.GREY }}
            onValueChange={handleSwitchToggle}
            value={isDarkMode}
          />
        </OptionRow>
      </Body>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  padding: 15px;
`;

const Header = styled.View`
  padding: 10px 0;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${(props) => COLOR[props.theme].text};
`;

const HeaderTitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => COLOR[props.theme].text};
`;

const Body = styled.ScrollView`
  padding: 10px;
`;

const OptionRow = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OptionRowLabel = styled.Text`
  font-size: 18px;
  color: ${(props) => COLOR[props.theme].text};
`;

export default MyPageScreen;

import { createStackNavigator } from 'client/node_modules/@react-navigation/stack';
import { COLOR } from 'constants/styles';
import React from 'client/node_modules/react';
import { useSelector } from 'client/node_modules/react-redux';
import ImagePickerScreen from 'screens/imagePicker';
import { RootState } from 'stores';
import { AppTheme } from 'stores/theme/types';

export type PostWriterParamList = {
  ImagePicker: undefined;
  PostWriter: undefined;
};

const Stack = createStackNavigator<PostWriterParamList>();

const PostWriterStack: React.FC = () => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  return (
    <Stack.Navigator
      initialRouteName="ImagePicker"
      screenOptions={{
        headerStyle: { backgroundColor: COLOR[theme].backgroundColor },
        headerTitleStyle: { color: COLOR[theme].text },
        cardStyle: { backgroundColor: COLOR[theme].backgroundColor },
      }}>
      <Stack.Screen
        name="ImagePicker"
        component={ImagePickerScreen}
        options={{ title: 'New Post' }}
      />
    </Stack.Navigator>
  );
};

export default PostWriterStack;

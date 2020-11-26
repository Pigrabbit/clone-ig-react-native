import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import TouchableIcon from 'components/TouchableIcon';
import { COLOR } from 'constants/styles';
import { RootTabParamList } from 'navigators';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import { AppTheme } from 'stores/theme/types';
import styled from 'styled-components/native';
import ImagePicker, { ImagePickerOptions } from 'react-native-image-picker';
import { Alert, Image } from 'react-native';
import { useState } from 'react';
import { Maybe } from 'components/Maybe';

interface Props {
  navigation: BottomTabNavigationProp<RootTabParamList, 'PostWriter'>;
}

const PostWriterScreen: React.FC<Props> = ({ navigation }) => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  const [imageMetaData, setImageMetaData] = useState({
    uri: '',
    width: 0,
    height: 0,
  });

  useEffect(() => {
    chooseImageFile();
  }, []);

  const chooseImageFile = () => {
    const options: ImagePickerOptions = {
      title: 'Select Image to post',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        navigation.goBack();
      } else if (response.error) {
        console.error(`ImagePickerError: ${response.error}`);
      } else {
        const { uri, width, height } = response;
        setImageMetaData({ uri, width, height });
      }
    });
  };

  return (
    <Container>
      <Header>
        <TouchableIcon
          iconName="closeIcon"
          onPress={() => navigation.goBack()}
          tintColor={COLOR[theme].text}
          width={24}
          height={24}
        />
        <HeaderTitle theme={theme}>New Post</HeaderTitle>
        <HeaderNextButton onPress={() => console.log('next')}>
          <HeaderNextButtonText>Next</HeaderNextButtonText>
        </HeaderNextButton>
      </Header>
      <Body>
        <Maybe isVisible={imageMetaData.uri !== ''}>
          <Image
            source={{ uri: imageMetaData.uri }}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: imageMetaData.width / imageMetaData.height,
            }}
          />
        </Maybe>
      </Body>
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

const Body = styled.View`
  align-items: center;
  padding: 0 16px;
`;

export default PostWriterScreen;

import { BottomTabNavigationProp } from 'client/node_modules/@react-navigation/bottom-tabs';
import { StackNavigationProp } from 'client/node_modules/@react-navigation/stack';
import { Maybe } from 'components/Maybe';
import { COLOR } from 'constants/styles';
import { RootTabParamList } from 'navigators';
import { PostWriterParamList } from 'navigators/PostWriterStack';
import React, { useEffect, useState } from 'client/node_modules/react';
import { Image } from 'client/node_modules/react-native';
import ImagePicker, { ImagePickerOptions } from 'client/node_modules/react-native-image-picker';
import { useSelector } from 'client/node_modules/react-redux';
import { RootState } from 'stores';
import { AppTheme } from 'stores/theme/types';
import styled from 'client/node_modules/styled-components/native';

// interface Props {
//   navigation: BottomTabNavigationProp<RootTabParamList, 'PostWriter'>;
// }

interface Props {
  navigation: StackNavigationProp<PostWriterParamList, 'ImagePicker'>;
}

const ImagePickerScreen: React.FC<Props> = ({ navigation }) => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );
  const initialImageMetaData = {
    uri: '',
    width: 0,
    height: 0,
  };
  const [imageMetaData, setImageMetaData] = useState(initialImageMetaData);

  useEffect(() => {
    if (imageMetaData == initialImageMetaData) chooseImageFile();
  }, [imageMetaData]);

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
        setImageMetaData(initialImageMetaData);
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
      {/* <Header>
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
      </Header> */}
      <Maybe isVisible={imageMetaData.uri !== ''}>
        <Body>
          <Image
            source={{ uri: imageMetaData.uri }}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: imageMetaData.width / imageMetaData.height,
            }}
          />
        </Body>
        <ConfirmButton
          activeOpacity={0.8}
          onPress={() => navigation.navigate('PostWriter')}>
          <ConfirmButtonText>Next</ConfirmButtonText>
        </ConfirmButton>
      </Maybe>
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
  padding: 16px 0;
`;

const ConfirmButton = styled.TouchableOpacity`
  margin: 16px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: pink;
  border-radius: 4px;
`;

const ConfirmButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export default ImagePickerScreen;

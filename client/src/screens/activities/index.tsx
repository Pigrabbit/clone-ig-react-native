import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOR } from 'constants/styles';
import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import { AppTheme } from 'stores/theme/types';
import styled from 'styled-components/native';
import Geolocation, {
  GeolocationError,
  GeolocationOptions,
  GeolocationResponse,
} from '@react-native-community/geolocation';

type CoordsType = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
};

const ActivitiesScreen: React.FC = () => {
  const theme = useSelector<RootState, AppTheme>(
    (rootState) => rootState.theme,
  );

  const [velocity, setVelocity] = useState(0);
  const initialCoords = {
    latitude: 37,
    longitude: 126,
    altitude: 0,
    accuracy: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  };
  const [coords, setCoords] = useState<CoordsType>(initialCoords);

  useEffect(() => {
    fetchLocationAuthorization();
  }, []);

  Geolocation.watchPosition(
    (info) => {
      console.log(info);
    },
    (err) => console.error(err),
    {
      maximumAge: 1000,
      distanceFilter: 1,
    },
  );

  const fetchLocationAuthorization = useCallback(async () => {
    const locationAuthorization = await AsyncStorage.getItem(
      'LocationAutorization',
    );
    if (locationAuthorization !== 'true') {
      Geolocation.requestAuthorization();
      await AsyncStorage.setItem('LocationAuthorization', 'true');
    }
  }, []);

  return (
    <Container>
      <Header theme={theme}>
        <HeaderTitle theme={theme}>Activities</HeaderTitle>
      </Header>
      <Body>
        <VelocityLabel theme={theme}>Current Speed</VelocityLabel>
        <Velocity theme={theme}>{velocity}</Velocity>
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

const Body = styled.View`
  padding: 10px;
  align-items: center;
`;

const VelocityLabel = styled.Text`
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => COLOR[props.theme].text};
`;

const Velocity = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => COLOR[props.theme].text};
`;

export default ActivitiesScreen;

import React from 'react';
import { ScrollView, Text } from 'react-native';
import Boat from './Boats';

export default function App() {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        GetABoat - For Sale
      </Text>

      <Boat
        name="Sea Ray 500 Sundancer"
        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
        picture={require('./img/sea_ray.jpg')}
      />

      <Boat
        name="Four Winns Horizon 180"
        description="A sporty look and refined details truly set the Horizon 180 above all others."
        picture={require('./img/four_winns.jpg')}
      />

      <Boat
        name="Flipper 640 ST"
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
        picture={require('./img/flipper.jpg')}
      />

      <Boat
        name="Princess V48"
        description="There is the option for an open design with a full-length cockpit and sunroof."
        picture={require('./img/princess.jpg')}
      />

      <Boat
        name="Bayliner 175 Bowrider"
        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
        picture={require('./img/bayliner.jpg')}
      />
    </ScrollView>
  );
}
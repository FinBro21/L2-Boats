import React from 'react';
import { View, Text, Image } from 'react-native';

const Boat = (props) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 24 }}>
        ⛵ {props.name}
      </Text>

      <Text style={{ color: 'gray', marginBottom: 10 }}>
        {props.description}
      </Text>

      <Image
        source={props.picture}
        style={{
          width: 350,
          height: 200,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default Boat;
import React, {useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';

import IMAGES from '../../assets/images/images';

const StarSelector = ({changeValue}) => {
  const [stars, setStars] = useState(0);

  const handleStars = value => {
    setStars(value);
    changeValue(value);
  };

  return (
    <View style={styles.RowRealEstate}>
      <Pressable onPress={() => handleStars(1)}>
        {stars >= 1 ? (
          <IMAGES.SVG.STAR_FILL width={31} height={31} />
        ) : (
          <IMAGES.SVG.STAR width={31} height={31} />
        )}
      </Pressable>
      <Pressable onPress={() => handleStars(2)}>
        {stars >= 2 ? (
          <IMAGES.SVG.STAR_FILL width={31} height={31} />
        ) : (
          <IMAGES.SVG.STAR width={31} height={31} />
        )}
      </Pressable>
      <Pressable onPress={() => handleStars(3)}>
        {stars >= 3 ? (
          <IMAGES.SVG.STAR_FILL width={31} height={31} />
        ) : (
          <IMAGES.SVG.STAR width={31} height={31} />
        )}
      </Pressable>
      <Pressable onPress={() => handleStars(4)}>
        {stars >= 4 ? (
          <IMAGES.SVG.STAR_FILL width={31} height={31} />
        ) : (
          <IMAGES.SVG.STAR width={31} height={31} />
        )}
      </Pressable>
      <Pressable onPress={() => handleStars(5)}>
        {stars >= 5 ? (
          <IMAGES.SVG.STAR_FILL width={31} height={31} />
        ) : (
          <IMAGES.SVG.STAR width={31} height={31} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  RowRealEstate: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    columnGap: 8,
  },
});

export default StarSelector;

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import IMAGES from '../../assets/images/images';

const StarShow = ({stars, starSize = 'M'}) => {
  const starSizes = StyleSheet.create({
    L: 23,
    M: 17,
    S: 14,
  });

  const switchTypeOfStar = amount => {
    if (stars >= amount) {
      return (
        <IMAGES.SVG.STAR_FILL
          width={starSizes[starSize]}
          height={starSizes[starSize]}
        />
      );
    } else if (stars > amount - 1) {
      return (
        <IMAGES.SVG.STAR_HALF
          width={starSizes[starSize]}
          height={starSizes[starSize]}
        />
      );
    } else {
      return (
        <IMAGES.SVG.STAR
          width={starSizes[starSize]}
          height={starSizes[starSize]}
        />
      );
    }
  };

  return (
    <View style={styles.RowRealEstate}>
      {switchTypeOfStar(1)}
      {switchTypeOfStar(2)}
      {switchTypeOfStar(3)}
      {switchTypeOfStar(4)}
      {switchTypeOfStar(5)}
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

export default StarShow;

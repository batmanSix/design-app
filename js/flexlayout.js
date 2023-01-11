// ? 响应式布局
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={style.container}>
      <View style={[style.itemBase]}>
        <Text style={[style.itemFont]}>付款嘛</Text>
      </View>
      <View style={[style.itemBase]}>
        <Text style={[style.itemFont]}>卡包</Text>
      </View>
      <View style={[style.itemBase]}>
        <Text style={[style.itemFont]}>出行</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: Dimensions.get('window').width / 2,
    height: 90,
    borderWidth: 1,
    borderColor: 'red',
  },
  itemFont: {
    fontSize: 24,
  },
});

export default Index;

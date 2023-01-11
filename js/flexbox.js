import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// flexbox reactnative 布局
//? flexDirection row(web 方向) ｜ column(rn默认)
//? justifycontent 在主轴上的对其方式
//? alignitems 在交叉轴上的对其方式
//? view 只能显示固定区域的内容
const FlexDemo = () => {
  return (
    <View>
      <View>
        <Text>flexdirection:'column'(列)</Text>
        <View style={[styles.container, styles.flexColumnReverse]}>
          <Text style={[styles.itemBase]}>刘备</Text>
          <Text style={[styles.itemBase]}>关于</Text>
          <Text style={[styles.itemBase]}>张飞</Text>
        </View>
      </View>

      <View>
        <Text>flexdirection:'row'(列)</Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase]}>刘备</Text>
          <Text style={[styles.itemBase]}>关于</Text>
          <Text style={[styles.itemBase]}>张飞</Text>
        </View>
      </View>

      <View>
        <Text>flexdirection:'rowrReverse'(列)</Text>
        <View style={[styles.container, styles.flexRowReverse]}>
          <Text style={[styles.itemBase]}>刘备</Text>
          <Text style={[styles.itemBase]}>关于</Text>
          <Text style={[styles.itemBase]}>张飞</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    padding: 4,
    backgroundColor: '#edd',
    textAlign: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
});

export default FlexDemo;

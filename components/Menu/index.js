import React from 'react';
import styled from 'styled-components';
import {Animated, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuItem from '../MenuItem';
import {connect} from 'react-redux';
const screensHeight = Dimensions.get('window').height;

const mapStateToProps = state => {
  return {
    action: state.action,
  };
};

const mapDispatchProps = dispatch => {
  return {
    closeMenu: () => {
      dispatch({
        type: 'CLOSE_MENU',
      });
    },
  };
};
class Menu extends React.Component {
  state = {
    top: new Animated.Value(screensHeight),
  };

  toggleMenu = () => {
    if (this.props.action === 'openMenu') {
      Animated.spring(this.state.top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }

    if (this.props.action === 'closeMenu') {
      Animated.spring(this.state.top, {
        toValue: screensHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  componentDidMount() {
    this.toggleMenu();
  }
  componentDidUpdate() {
    this.toggleMenu();
  }
  render() {
    return (
      <AnimatedContainer style={{top: this.state.top}}>
        <Cover>
          <Image source={require('../../assets/background2.jpg')} />
          <Title>meng to</Title>
          <Subtitle>Designers at Designers+code</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={[styles.closeBtn]}>
          <CloseView>
            <Icon name="close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((it, index) => (
            <MenuItem
              key={index}
              icon={it.icon}
              title={it.title}
              text={it.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Menu);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(225, 255, 225, 0.5);
  margin-top: 8px;
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  height: ${screensHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const styles = StyleSheet.create({
  closeBtn: {
    position: 'absolute',
    top: 120,
    left: '50%',
    marginLeft: -22,
    zIndex: 1,
  },
});

const items = [
  {
    icon: 'cog',
    title: 'Account',
    text: 'setting',
  },
  {
    icon: 'credit-card',
    title: 'Billing',
    text: 'payments',
  },
  {
    icon: 'compass',
    title: 'Lear React',
    text: 'start course',
  },
  {
    icon: 'power-off',
    title: 'login out',
    text: 'see you soon!',
  },
];

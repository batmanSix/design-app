import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    action: state.action,
  };
};

const mapDispatchProps = dispatch => {
  return {
    openMenu: () => {
      dispatch({
        type: 'OPEN_MENU',
      });
    },
  };
};
class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  toggleMenu = () => {
    if (this.props.action === 'openMenu') {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle('light-content', true);
    }

    if (this.props.action === 'closeMenu') {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      StatusBar.setBarStyle('dark-content', true);
    }
  };

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{scale: this.state.scale}],
            opacity: this.state.opacity,
          }}>
          <SafeAreaView>
            <ScrollView style={styles.container}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{position: 'absolute', top: 0, left: 20}}>
                  <Avatar source={require('../assets/avatar-default.jpg')} />
                </TouchableOpacity>
                <Title>欢迎回来</Title>
                <Name>康博</Name>

                <Icon
                  name="bell"
                  size={32}
                  color="#4775f2"
                  style={styles.icon}
                />
              </TitleBar>
              <ScrollView
                style={styles.logo}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {logos.map((item, index) => (
                  <Logo key={index} image={item.image} text={item.text} />
                ))}
              </ScrollView>
              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{paddingBottom: 30}}
                showsHorizontalScrollIndicator={false}>
                {cards.map((item, index) => (
                  <Card
                    title={item.title}
                    image={item.image}
                    caption={item.captions}
                    subtitle={item.subtitle}
                    logo={item.logo}
                  />
                ))}
              </ScrollView>
              <Subtitle>popular course</Subtitle>
              {courses.map((item, index) => (
                <Course
                  key={index}
                  image={item.image}
                  logo={item.logo}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  avatar={item.avatar}
                  caption={item.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

const RootView = styled.View`
  background-color: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  /* margin-left: 20px; */
  /* position: absolute;
  left: 0;
  top: 0; */
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 5,
  },
  logo: {
    flexDirection: 'row',
    horizontal: true,
    padding: 20,
    paddingLeft: 12,
  },
});

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'framerx',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'figma',
  },
  {
    image: require('../assets/logo-dc.png'),
    text: 'dc',
  },
  {
    image: require('../assets/logo-vue.png'),
    text: 'vue',
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'sketch',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'studio',
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'swift',
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'react',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    captions: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    captions: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Props and Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    captions: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    captions: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
];

const courses = [
  {
    title: 'prototype in inversion studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'meng to',
    avatar: require('../assets/avatar.jpg'),
    caption: 'design and interactive prototype',
  },
  {
    title: 'prototype in inversion studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'meng to',
    avatar: require('../assets/avatar.jpg'),
    caption: 'design and interactive prototype',
  },
  {
    title: 'prototype in inversion studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'meng to',
    avatar: require('../assets/avatar.jpg'),
    caption: 'design and interactive prototype',
  },
];

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen);

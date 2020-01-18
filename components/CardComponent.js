import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {
      '1': require('../assets/feed_images/1.jpg'),
      '2': require('../assets/feed_images/2.jpg'),
      '3': require('../assets/feed_images/3.jpg'),
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.png')} />
            <Body>
              <Text>Dhruv </Text>
              <Text note>Jan 18, 2020</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: 'black' }} />
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({});

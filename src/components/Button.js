import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: '#6c3586',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Button;

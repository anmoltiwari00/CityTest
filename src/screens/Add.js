//core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

//components
import Button from '../components/Button';

//actions
import addCatsActions from '../actions/AddAction';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {
        id: '',
        name: '',
        breed: '',
        color: '',
        description: ''
      },
      list: []
    }
  }

  componentDidMount() {
    let p = this.props;
    if(p && p.catsList && p.catsList.catsList) {
      let catsList = p.catsList.catsList;
      let l = catsList.length;
      let lastIndex = p.catsList.catsList[l-1];
      let cat = {...this.state.cat};
      cat.id = lastIndex + 1;
      this.setState({list: catsList, cat})
    } else {
      let cat = {...this.state.cat};
      cat.id = 1;
      this.setState({cat});
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.props.navigation.navigate('Home');
    }
  }

  _saveCatState(e, key) {
    let cat = {...this.state.cat};
    cat[key] = e;
    this.setState({cat})
  }

  _addCat() {
    let catState = this.state.cat;
    let enable = this._checkIfButtonPressValid(catState);
    if(enable) {
      let catsList = this.state.list;
      catsList.push(catState);
      this.props.addCat(catsList);
    } else {
      Alert.alert('Please!!', 'Please fill all the details of the cat');
    }
  }

  _checkIfButtonPressValid(state) {
    if(!state.name || !state.color || !state.breed || !state.description)
      return false;

    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add a cat</Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          onChangeText={(e) => this._saveCatState(e, 'name')}
        />
        <TextInput
          style={styles.input}
          placeholder='Breed'
          onChangeText={(e) => this._saveCatState(e, 'breed')}
        />
        <TextInput
          style={styles.input}
          placeholder='Color'
          onChangeText={(e) => this._saveCatState(e, 'color')}
        />
        <TextInput
          style={styles.input}
          placeholder='Description'
          onChangeText={(e) => this._saveCatState(e, 'description')}
        />
        <Button
          text='Add this cat'
          onPress={() => this._addCat()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 20
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'darkgrey',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    width: '90%'
  }
});

const mapStateToProps = (state) => ({...state});

const mapDispatchToProps = dispatch => {
  return {
    addCat: (data) => dispatch(addCatsActions(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);

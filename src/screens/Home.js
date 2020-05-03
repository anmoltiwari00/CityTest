//core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

//components
import Button from '../components/Button';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _getItem(data) {
    return (
      <View style={styles.listItem}>
        <Text>
          <Text style={styles.itemName}>Name:</Text> {data.name}
        </Text>
        <Text>
          <Text style={styles.itemName}>Color:</Text> {data.color}
        </Text>
        <Text>
          <Text style={styles.itemName}>Breed:</Text> {data.breed}
        </Text>
        <Text>
          <Text style={styles.itemName}>Description:</Text> {data.description}
        </Text>
      </View>
    );
  }

  _goToAdd() {
    this.props.navigation.navigate('Add');
  }

  render() {
    const list = this.props && this.props.catsList && this.props.catsList.catsList;
    return (
      <View style={styles.container}>
        {
          !list ?
          <View style={styles.centerContainer}>
            <Text style={styles.heading}>You havent added any cats yet</Text>
          </View> :
          <View style={styles.listContainer}>
            <Text style={styles.heading}>List of cats</Text>
            <FlatList
              data={list}
              renderItem={({ item }) => this._getItem(item)}
              keyExtractor={item => item.id}
            />
          </View>
        }
        <View style={styles.centerContainer}>
          <Button
            text='Add a cat'
            onPress={() => this._goToAdd()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20
  },
  heading: {
    fontSize: 25
  },
  listContainer: {
    height: '90%'
  },
  listItem: {
    marginVertical: 10
  },
  itemName: {
    color: 'grey',
    fontSize: 15
  },
  centerContainer: {
    width: '100%',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Home);

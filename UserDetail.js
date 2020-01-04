import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';

import ListItem from '../components/ListItem';

import Config from "../Config";

export default class DemandListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      selectedId: -1,
      data: [],
      filteredData: []
    };
  }

  async componentDidMount() {
    let data = await fetch(`${Config.apiUrl}/items`)
      .then(response => response.json());

    this.setState({data: data});
  }
  
  search = (searchText) => {
    this.setState({searchText: searchText});

    let filteredData = this.state.data.filter(function (item) {
      return item.aciklama.includes(searchText);
    });

    this.setState({filteredData: filteredData});
  };

  render() {
    return (
      <View style={styles.container}>
      
        <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Search..."
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.search}
          value={this.state.searchText}
        />

        <FlatList
          data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data}
          keyExtractor={(item) => `item-${item.id}`}
          renderItem={({item}) => <ListItem
            id={item.id}
            code={item.code}
            description={item.description}
          />}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  separator: {
    flex: 2,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});
// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'


class Search extends React.Component {

  
    _loadFilms() {
        console.log(this.state.searchedText) // Un log pour v�rifier qu'on a bien le texte du TextInput
        if (this.state.searchedText.length > 0) { // Seulement si le texte recherch� n'est pas vide
            getSearchedtext(this.state.searchedText).then(data => {this.setState({ films: data.results })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text // Modification du texte recherch� � chaque saisie de texte, sans passer par le setState comme avant
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Name' onChangeText={(text) => this._searchTextInputChanged(text)} />
                    <Button title='Search' onPress={() => this._loadFilms() } />
                <FlatList 
                    data={films }
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search
import api from '../utils/api';
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { LEVEL_EASY, LEVEL_NORMAL, LEVEL_HARD } from '../constants'
import { initGame } from '../actions'
import { getImagesUri } from '../utils/api'

import {
    StyleSheet, Text, View,
    TouchableHighlight,
} from 'react-native';


class Choose extends Component {

    constructor(props) {
        super(props);
    }

    _startGame(level) {
        this.props.initGame(level);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Choose Level</Text>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._startGame.bind(this, LEVEL_EASY)}
                >
                    <Text style={styles.buttonText}>Easy</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._startGame.bind(this, LEVEL_NORMAL)}
                >
                    <Text style={styles.buttonText}>Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._startGame.bind(this, LEVEL_HARD)}
                >
                    <Text style={styles.buttonText}>Hard</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width : "100%",
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50,
        textAlign : 'center',
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#e59a13',
        fontSize: 16,
    }
});

function mapStateToProps (state) {
  return {
    player: state.game.player
  }
}

function mapDispatchToProps (dispatch) {
  return {
    initGame: (propsGame) => dispatch(initGame(propsGame))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choose)
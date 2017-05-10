import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet, Text, View,
    TouchableHighlight
} from 'react-native';

import {startAgain, anotherPlayer} from '../actions'


class Finish extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.player}! Your score is {this.props.score} from {this.props.questionsCount}
                </Text>
                <TouchableHighlight style={styles.button} onPress={this.props.startAgain} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Play Again</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.props.anotherPlayer} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Another Player</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cb860',
        width: '98%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50,
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#5cb860',
        fontSize: 16,
    }
});

function mapStateToProps (state) {
  return {
    player: state.game.player,
    score: state.game.score,
    questionsCount : state.game.questionsCount
  }
}

function mapDispatchToProps (dispatch) {
  return {
    startAgain: () => dispatch(startAgain()),
    anotherPlayer: () => dispatch(anotherPlayer())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finish)
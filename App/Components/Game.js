import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet, Text, View,
    TouchableHighlight, Image
} from 'react-native';

import { finishGame } from '../actions'
import api from '../utils/api';


class Game extends Component {

    constructor(props){
        super(props);
        this.state = { start: 0, score: 0 };
    }

    _reset() { 
        this.setState({ start: 0, score: 0 });
    }

    _handleAnswer(answer) {
        var start = this.state.start;
        var score = this.state.score;

        if(this.props.data[start].correct == answer) {
            score++;
        }
        this.setState({ start: ++start, score: score });
        if(this.props.questionsCount === start) {
            this.props.finishGame({ score: score });
            this._reset();
        }
    }

    render() {
        var question = this.props.data[this.state.start];
        var answers = question.answers.map((answer, index) => {
            return (
                <TouchableHighlight
                    key={index}
                    style={styles.button}
                    onPress={this._handleAnswer.bind(this, answer.id)}
                    underlayColor="#333"
                >
                    <Text style={styles.buttonText}>{answer.answer}</Text>
                </TouchableHighlight>
            )
        });

        var uriImage = this.props.images_uri + question.image;

        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.images_uri + question.image }} style={styles.image} />
                { answers }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%"
    },
    image: {
        height: 250
    },
    button: {
        justifyContent: 'center',
        backgroundColor:'#fff',
        marginBottom:3,
        marginTop:3,
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        height:50,
        flex: 1,
        borderRadius: 10
    },
    buttonText: {
        color: '#e59a13',
        alignSelf: 'center',
        fontSize: 16
    }
});

function mapStateToProps (state) {
  return {
    player: state.game.player,
    data: state.game.data,
    questionsCount : state.game.questionsCount,
    images_uri: state.game.images_uri
  }
}

function mapDispatchToProps (dispatch) {
  return {
    finishGame: (propsGame) => dispatch(finishGame(propsGame))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
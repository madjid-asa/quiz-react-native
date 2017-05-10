import React,   { Component } from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet, Text, View,
    TouchableHighlight, TextInput,
} from 'react-native';

import Choose from './Choose'
import Finish from './Finish'
import Game from './Game'
import Welcome from './Welcome'

import { STEP_NAME, STEP_DIFFICULTY, STEP_GAME, STEP_FINISH } from '../constants'
import { saveName } from '../actions'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { player: '', error: '',  isLoading: false };
    }

    _getView() {
        switch(this.props.step){
            case STEP_DIFFICULTY:
                return <Choose />;
            case STEP_GAME:
                return <Game />;
            case STEP_FINISH:
                return <Finish />;
            default:
                return <Welcome />;
        }
    }

    render() {
        var actualView = this._getView();
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Quizy go</Text>
                {actualView}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7d669e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#fff',
        fontSize: 25,
        marginBottom: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function mapStateToProps (state) {
    return {
        player: state.game.player,
        step: state.game.step,
        party: state.game.party 
    }
}

function mapDispatchToProps (dispatch) {
  return {
    saveName: (name)=>dispatch(saveName(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
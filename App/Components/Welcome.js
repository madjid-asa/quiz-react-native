import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet, Text, View,
    TouchableHighlight, TextInput,
} from 'react-native';

import { fetchData, saveName } from '../actions'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '', error: '', isLoading: false
        };
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(event) {
        this.setState({
            error: '', player: event.nativeEvent.text
        });
    }

    _handleSubmit() {
        this.setState({ isLoading: true });
        var player = this.state.player;
        this.setState({ player: '' });
        if( !player ) {
            this.setState({
                error: 'Player name is required',
                isLoading: false
            });
        } else {
            this.props.saveName(player);
            this.setState({ error: '', isLoading: false });
        }

    }

    render() {
        var showError = (
            this.state.error ? <View style={styles.errorContainer}><Text style={styles.error}>{this.state.error}</Text></View> : <View></View>
        );
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.playerInput}
                    value={this.state.player}
                    onChange={this._handleChange}
                    placeholder="Type Your Name"
                    placeholderTextColor="#fff"
                    maxLength={20}
                />
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._handleSubmit}>
                        <Text style={styles.buttonText}>Start Game</Text>
                </TouchableHighlight>
                { showError }
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width : "100%"
    },
    playerInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 10
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
        color: '#7d669e',
        fontSize: 16,
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 10,
        height: 60,
        backgroundColor: '#e15258',
    },
    error: {
        color: '#fff',
        fontSize: 14,
    }
});

function mapStateToProps (state) {
  return {
    playerSaved: state.game.player
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
)(Welcome)
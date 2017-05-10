import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { SAVE_NAME_PLAYER, PLAY_AGAIN, ANOTHER_PLAYER} from './constants'
import { START_GAME, FINISH_GAME } from './constants'
import {getQuestions, getImagesUri} from './utils/api'

export function saveName(name) {
  return {
    type: SAVE_NAME_PLAYER,
    player: name
  }
}

export function initGame(level) {
  return (dispatch) => {
    var questions = getQuestions(level);
    questions.then((data) => {
        var propsGame = {
            data: data,
            questionsCount: data.length,
            images_uri: getImagesUri(level)
        };
        dispatch(startGame(propsGame));
      })
      .catch((err) => console.log('err:', err))
  }
}

export function startGame(data) {
  return {
    type: START_GAME,
    ...data
  }
}

export function finishGame(data){
  return {
    type: FINISH_GAME,
    ...data
  }
}

export function startAgain() {
  return {
    type: PLAY_AGAIN
  }
}

export function anotherPlayer() {
  return {
    type: ANOTHER_PLAYER
  }
}
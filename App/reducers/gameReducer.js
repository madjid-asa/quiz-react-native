import { SAVE_NAME_PLAYER, PLAY_AGAIN, ANOTHER_PLAYER} from '../constants'
import { STEP_NAME, STEP_DIFFICULTY, STEP_GAME, STEP_PLAY, STEP_FINISH, START_GAME, FINISH_GAME } from '../constants'


const initialState = {
  step : STEP_NAME,
  difficulty : "",
  player: ""
}


export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_NAME_PLAYER:
      return Object.assign({}, state, {
          player : action.player,
          step : STEP_DIFFICULTY
      });
    case PLAY_AGAIN:
      return Object.assign({}, initialState, {
          player : action.player,
          step : STEP_DIFFICULTY
      });
    case ANOTHER_PLAYER:
      return Object.assign({}, initialState, {});
    case START_GAME:
        return Object.assign({}, state, {
            questionsCount : action.questionsCount,
            images_uri : action.images_uri,
            data : action.data,
            step : STEP_GAME
        });
    case FINISH_GAME:
        console.log('FINISH_GAME');
        return Object.assign({}, state, {
            score : action.score,
            step : STEP_FINISH
        });
    default:
      return state
  }
}
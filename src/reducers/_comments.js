import _ from 'lodash';

import * as types from '../actions/_types';

export default (state=[],  action) => {
    switch(action.type) {
        case types.FETCH_COMMENTS: 
         const data = action.payload.data.slice(0,10);
         const comments = _.map(data, comment=> comment.name);
          return  [...state, ...comments];
       case types.SAVE_COMMENT: 
          return [ action.payload, ...state];
          default:
              return state;   
    }
}
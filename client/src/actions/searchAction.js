export const searchAction = () => dispatch => {
    dispatch({
     type: 'SEARCH_ACTION',
     payload: {dep: 'GB', dest: 'DE'}
    })
   }
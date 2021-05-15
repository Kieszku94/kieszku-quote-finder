import * as api from '../api/index.js';

export const search = (quote) => async (dispatch) => {
    try {
        const { data } = await api.search(quote);

        dispatch({ data });
    } catch (error) {
        console.log(error);
    }

}
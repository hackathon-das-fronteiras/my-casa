import axiosClient from '../../config/axiosClient'
import { GET_MARKETS} from './constants'

export function getHashtags() {
    const token = localStorage.getItem('jwt');
    const headers = {headers: {
    Authorization: `Bearer ${token}`,
  }}
    const request = axiosClient.get('/markets', headers)

    return (dispatch) => {
        request.then(
            resp => dispatch({ 
                type: GET_MARKETS,
                payload: resp.data
            }, console.log(resp))
        )
    };
}
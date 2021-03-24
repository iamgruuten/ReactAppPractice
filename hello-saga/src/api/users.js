import axios from 'axios'

export const getUsersFromServer = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}
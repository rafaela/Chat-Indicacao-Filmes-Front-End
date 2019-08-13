import axios from 'axios'
import consts from '../../main/consts'

export const obterFilmes = () => {
    const request = axios.get(`${consts.BASE_URL}/filmes`)

    return {
        type: 'PRODUTOS_FETCHED',
        payload: request
    }
}
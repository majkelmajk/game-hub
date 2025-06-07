import axios from 'axios';

export interface FetchResponse<T> {
    count: number
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35e75bfe4089411e99aa44d391b2cc68'
    },
})
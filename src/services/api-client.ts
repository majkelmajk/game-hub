import axios, {AxiosRequestConfig} from 'axios';

export interface FetchResponse<T> {
    count: number
    next: string | null
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35e75bfe4089411e99aa44d391b2cc68'
    },
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)

    get = (id: string | number) => axiosInstance
        .get<T>(this.endpoint + '/' + id)
        .then(res => res.data)
}

export default APIClient
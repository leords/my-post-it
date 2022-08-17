import { ULR_API, ULR_API2 } from '@env'
import axios from 'axios'


export const api = axios.create({
    // uso do back-end local
    baseURL: ULR_API2
})
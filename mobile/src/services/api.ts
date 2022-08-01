import { ULR_API } from '@env'
import axios from 'axios'

export const api = axios.create({
    baseURL: ULR_API
})
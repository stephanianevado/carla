import axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_URL

export const getAxios = () => axios.create()

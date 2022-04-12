import {useDispatch} from 'react-redux'
import type {AppDispatch } from '../redux/rootReducer/rootReducer'

export const useTypedDispatch = () => useDispatch<AppDispatch>()
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = useReduxDispatch.withTypes<AppDispatch>()
export const useSelector = useReduxSelector.withTypes<RootState>()
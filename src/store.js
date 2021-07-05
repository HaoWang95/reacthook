import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './component/reduxComponent/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})
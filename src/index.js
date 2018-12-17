import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {put as dispatch, call, takeEvery} from 'redux-saga/effects';


function* getProjects() {
    try {
   const allProjects = yield call(axios.get, '/projects')
    yield dispatch({ type:'SET_PROJECTS', payload: allProjects})
    } catch (error){
        console.log('error getting projects saga',  error);
        
    } 
    
} // to server get call back with projects to local reducer

function* addProject(action) {
    try{
        console.log('hitting add project');
        console.log(action.payload);
        yield call(axios.post, '/add/project', action.payload );
        yield dispatch({ type: 'FETCH_PROJECTS'})
        
    } catch(error) {

    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', getProjects) // to get projects
    yield takeEvery('ADD_PROJECT', addProject )
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// let trial = [ // object for testing reducers 
//     {
//         id: 1,
//         name: 'john',
//         description: 'trial data',
//         thumbnail: '/images/goat_small.jpg',
//         website: 'https://www.google.com',
//         github: 'https://www.github.com',
//         date_completed: '05/05/1994',
//         tag_id: 'react'

//     }, 
    

// ]
// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return  action.payload.data; // need .data because we had nested data, duh.
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();

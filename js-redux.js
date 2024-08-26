const redux = require("redux");


// Actions
const ADD_TODO = "add TODO"
const TOGGLE_TODO = "toggle TODO"

// Actions creators
const addToDo =(text)=>({text, type:ADD_TODO });
const toggleToDo =(index)=>({index, type:TOGGLE_TODO });

// Initial state
const initialState = {
    todos: []
}

// Reducers
// Must return updated state
function todoreducer(state= initialState, action){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if(i === action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo  
                })
            }
        default:
            return state;
    }
}


// Creating store
const store = redux.createStore(todoreducer);

// Dispatch actions
store.dispatch(addToDo("Learn Redux at 8"));
store.dispatch(addToDo("Learn React at 9"));
store.dispatch(addToDo("Dinner at 11 pm"));
store.dispatch(toggleToDo(0));


// Read data from store
console.log(store.getState());

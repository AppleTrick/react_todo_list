import { createContext, useReducer, useContext, useRef } from "react";

const initialTodos = [
    {
        id : 1,
        text : '프로젝트 시작하기',
        done : true,
    },
    {
        id : 2,
        text : '컴포넌트 스타일링하기',
        done : true,
    },
    {
        id : 3,
        text : 'context 만들기',
        done : false,
    },
    {
        id : 4,
        text : '기능구현하기',
        done : false,
    }
]

const todoReducer = ({state, action}) => {
    switch(action.type){
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOOGLE' : 
            return state.map((todo) => 
                todo.id === action.id ? {...todo, done : !todo.done} : todo
            );
        case 'REMOVE' :
            return state.filter((todo) => todo.id !== action.id)
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer,initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={{nextId}}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

const useTodoState = () => {
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

const useTodoNextId = () => {
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export {
    TodoProvider,
    useTodoState,
    useTodoDispatch,
    useTodoNextId,
}

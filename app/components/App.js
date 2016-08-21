import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comments/box';
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

const App = ()  => (
    <div>
        <CommentBox />
        <br />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
export default App

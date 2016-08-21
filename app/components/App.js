import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comments/box';
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import SelectableUserList from '../containers/SelectableUserList';

const App = ()  => (
    <div>
    <aside className="sidebar" style={{width: '30%', float: 'left'}}>
        <SelectableUserList />
    </aside>
    <section id="content" style={{width: '70%', float: 'left'}}>
        <CommentBox />
        <br />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </section>

    </div>
)
export default App

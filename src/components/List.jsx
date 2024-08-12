import './List.css';
import { useState , useMemo } from 'react';
import TodoItem from './TodoItem';

const List = ({todos, onUpdate, onDelete}) => {
    const [search,setSearch]= useState("");

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredDate = () =>{
        if(search ===''){
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredTodos = getFilteredDate();

    const {totalCount, doneCount, notDoneCount } = useMemo (()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return (totalCount, doneCount, notDoneCount);
    },[todos]);

    return (
        <div className="List">
            <h4>Todo List❤️</h4>
            <div>totalCount : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>
            <input value={search} onChange={onSearch} placeholder="검색어를 입력하세요"/>
            <div className='todos_wrapper'>
                {filteredTodos.map((todo) =>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    );
}

export default List;
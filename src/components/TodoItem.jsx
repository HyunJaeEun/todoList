import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className='TodoItem'>
            <input onChange={onChangeCheckbox} type='checkbox' checked={isDone}/>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onDeleteButton}>삭제</button>
        </div>
    );
}

export default memo(TodoItem);
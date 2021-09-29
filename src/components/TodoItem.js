

export default function TodoItem({todo, onChange, onDelete}){
    return (
        <div>
            <input type='checkbox' checked={todo.isCompleted} onChange={evt => {
                onChange({
                    ...todo,
                    isCompleted: evt.target.checked
                });
            }}/>
            {todo.text}
            <button onClick={() => {
                onDelete(todo);
            }}>X</button>
        </div>
    )
}
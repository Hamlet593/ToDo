import TodoItem from './TodoItem'

export default function TodoList({todos, onChange, onDelete}){
    console.log(todos)
    return (
        <div>
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
}
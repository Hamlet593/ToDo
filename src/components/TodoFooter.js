export default function TodoFooter({todos, onClearCompleted}){
    const completedSize = todos.filter(todo => todo.isCompleted).length;
    return (
        <div>
            <span>{completedSize}/{todos.length}completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
import { useState } from "react"

export default function TodoForm({onAdd}){

    const [text, setText] = useState('')


    return (
        <form onSubmit={evt => {
            evt.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input type='text' value={text} onChange={evt => {
                setText(evt.target.value)
            }}/>
            <button>Add</button>
        </form>
    )
}
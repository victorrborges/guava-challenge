import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { editTodo, deleteTodo, editTodoStatus } from "../../../../api/Todo";
import TodoInfo from "./TodoInfo";
import * as C from "../../..";
import * as S from "./styles";

const TodoListItem = ({ todo }) => {
    const [editMode, setEditMode] = useState(false);
    const { register, handleSubmit, reset } = useForm({});

    useEffect(() => {
        if (editMode) reset({ text:todo.text });
    }, [editMode, todo, reset])

    const onSubmit = (data) => {
        if (!data.text || data.text.trim() === '') return;
        editTodo(todo.id, data.text);
        setEditMode(false);
    };

    return (
        <S.Container>
            {!editMode && 
                <TodoInfo todo={todo} editMode={editMode} setEditMode={setEditMode} deleteTodo={deleteTodo} editTodoStatus={editTodoStatus} />
            }
            {editMode &&
                <C.TodoInput onSubmit={handleSubmit(onSubmit)} register={register} setEditMode={setEditMode} />
            }
        </S.Container>
    )

}

export default TodoListItem;
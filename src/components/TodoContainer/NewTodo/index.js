import * as S from "./styles";
import { useForm } from "react-hook-form";
import { addTodo } from "../../../api/Todo";
import * as C from "../..";

const NewTodo = ({ userId, pendingQty, doneQty }) => {
    const { register, handleSubmit, reset } = useForm({});

    const onSubmit = (data) => {
        if (!data.text || data.text.trim() === '') return;
        addTodo(userId, data.text);
        reset();
    };

    const label = 
        pendingQty === 0 
            ? doneQty === 0 
                ? 'Um passo de cada vez'
                : 'Pera, tem mais uma coisa'
            : 'Cuidado com o Burnout, viu?';

    return (
        <S.Container>
            <C.TodoInput onSubmit={handleSubmit(onSubmit)} label={label} register={register} />
        </S.Container>
    )

}

export default NewTodo;
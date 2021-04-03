import * as S from "./styles";
import { useForm } from "react-hook-form";
import { addTodo } from "../../../api/Todo";
import * as C from "../..";

const NewTodo = ({ userId }) => {
    const { register, handleSubmit, reset } = useForm({});

    const onSubmit = (data) => {
        addTodo(userId, data.text);
        reset();
    };

    return (
        <S.Container>
            <C.TodoInput onSubmit={handleSubmit(onSubmit)} label="Pera, tem mais uma coisa" register={register} />
        </S.Container>
    )

}

export default NewTodo;
import * as S from "./styles";
import * as C from "../../components";
import EnterSign from "./EnterSign";
import { useState } from "react";

const TodoInput = ({onSubmit, register, label, setEditMode}) => {

    const [hasFocus, setHasFocus] = useState(false);
    const onBlur = () => {
        setHasFocus(false)
        setEditMode && setEditMode(false);
    }

    return (
        <S.Form onSubmit={onSubmit}>
            <C.Checkbox />
            <S.Input placeholder={label} name="text" ref={register} autoFocus onFocus={() => setHasFocus(true)} onBlur={onBlur}/>
            {hasFocus && <EnterSign />}
        </S.Form>
    )

}

export default TodoInput;
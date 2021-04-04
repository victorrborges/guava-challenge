import { useState } from "react";
import * as S from "./styles";
import * as C from "../../components";
import EnterSign from "./EnterSign";

const TodoInput = ({ onSubmit, register, label, setEditMode }) => {

    const [hasFocus, setHasFocus] = useState(false);
    const ESC_KEY_CODE = 27;

    const handleEscPress = (event) => {
        if (setEditMode && event.keyCode === ESC_KEY_CODE) {
            event.preventDefault();
            onBlur();
        }
    }

    const onBlur = () => {
        setHasFocus(false)
        setEditMode && setEditMode(false);
    }

    return (
        <S.Form onSubmit={onSubmit}>
            <C.Checkbox />
            <S.Input placeholder={label} name="text" ref={register} autoFocus onFocus={() => setHasFocus(true)} onBlur={onBlur} onKeyDown={(e) => handleEscPress(e)} />
            {hasFocus && <EnterSign />}
        </S.Form>
    )

}

export default TodoInput;
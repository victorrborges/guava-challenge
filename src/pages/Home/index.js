import { useEffect, useState } from "react";
import { fetchUserTodos } from "../../api/Todo";
import { auth, getUserId } from "../../api/Auth";
import * as GS from "../../assets/GlobalStyles";
import * as C from "../../components";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [userId, setUserId] = useState(undefined);

    useEffect(() => {
        auth(setUserAuthenticated);
    }, [])

    useEffect(() => {
        if (userAuthenticated) {
            getUserId(setUserId);
        }
    }, [userAuthenticated])

    useEffect(() => {
        if (userId) {
            fetchUserTodos(userId, setTodos);
        }
    }, [userId])

    return (
        <GS.PageContainer>
            <C.Logo />
            <C.TodoContainer userId={userId} todos={todos} />
            <C.Footer />
        </GS.PageContainer>
    )
}

export default Home;
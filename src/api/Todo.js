import { db } from "../firebase-config";

export const fetchUserTodos = (userId, setTodos) => {
    db.collection("todos").where("userId", "==", userId)
        .onSnapshot((querySnapshot) => {
            setTodos(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                userId: userId,
                text: doc.data().text,
                done: doc.data().done,
                creationDate: doc.data().creationDate,
                lastModificationDate: doc.data().lastModificationDate
            })));
        });
};

export const addTodo = (userId, text) => {
    db.collection("todos").add({
        userId: userId,
        text: text,
        done: false,
        creationDate: + new Date(),
        lastModificationDate: + new Date()
    });
};

export const editTodoStatus = (todoId, done) => {
    db.collection("todos").doc(todoId).update({
        done: done,
        lastModificationDate: + new Date()
    });
}

export const editTodo = (todoId, todoText) => {
    db.collection("todos").doc(todoId).update({
        text: todoText,
        lastModificationDate: + new Date()
    });
}

export const deleteTodo = (id) => {
    db.collection("todos").doc(id).delete();
}
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Todo = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([])

  const handleAddTodo = () => {
    const newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    const updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  };

  const handleDeleteTodo = (index) => {
    const reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    const now = new Date();
    const dd = now.getDate() + 1;
    const mm = now.getMonth();
    const yyyy = now.getFullYear();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const completedOn = dd + '-' + mm + '-' + yyyy + 'at' + h + ':' + m + ':' + s ;

    const filteredItem = {
        ...allTodos[index],
        completedOn: completedOn
    }

    const updatedCompleteArr = [...completedTodos];
    updatedCompleteArr.push(filteredItem);
    setCompletedTodos(updatedCompleteArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompleteArr));

  };

  const handleDeleteCompletedTodo = (index) =>{
    const reducedTodo = [...completedTodos];
    reducedTodo.splice(index,1);

    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }


  useEffect(() => {
    const saveTodo = JSON.parse(localStorage.getItem('todolist'));
    const saveCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if(saveTodo){
        setTodos(saveTodo);
    }
    if (saveCompletedTodo){
      setCompletedTodos(saveCompletedTodo)
    }
  }, [])

  return (
    <div className="w-2/3 mt-20 m-auto space-y-6">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label>Title:</label>
          <input
            className="border w-72 p-2"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Whats the task title?"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Description:</label>
          <input
            className="border w-72 p-2"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Whats the task description?"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleAddTodo}
          className="btn bg-slate-400 w-72"
        >
          Add
        </button>
      </div>

      <div className="flex">
        <button
          className={`p-3 bg-gray-400 ${
            isCompleteScreen === false && "active:bg-green-600"
          }`}
          onClick={() => setIsCompleteScreen(false)}
        >
          Todo
        </button>
        <button
          className={`p-3 bg-gray-400 ${
            isCompleteScreen === true && "active:bg-green-600"
          }`}
          onClick={() => setIsCompleteScreen(true)}
        >
          Ongoing
        </button>
        <button
          className={`p-3 bg-gray-400 ${
            isCompleteScreen === true && "active:bg-green-600"
          }`}
          onClick={() => setIsCompleteScreen(true)}>
          Completed
        </button>
      </div>
      {isCompleteScreen===false && allTodos.map((item, index) => {
        return (
          <div className="flex justify-between p-6 bg-slate-300" key={index}>
            <div className="flex flex-col ">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Completed on: {item.completedOn}</small></p>
            </div>
            <div className="flex justify-between gap-4 mt-3">
              <MdDeleteForever className="text-red-600 text-2xl" onClick={() => handleDeleteTodo(index)} title="Delete?" />
              <FaCheck className="text-green-500 text-2xl" onClick={() => handleComplete(index)} title="Delete?"/>
            </div>
          </div>
        );
      })}

{isCompleteScreen===true && completedTodos.map((item, index) => {
        return (
          <div className="flex justify-between p-6 bg-slate-300" key={index}>
            <div className="flex flex-col ">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Completed on: {item.completedOn}</small></p>
            </div>
            <div className="flex justify-between gap-4 mt-3">
              <MdDeleteForever className="text-red-600 text-2xl" onClick={() => handleDeleteCompletedTodo(index)} title="Delete?" />
              {/* <FaCheck className="text-green-500 text-2xl" onClick={() => handleComplete(index)} title="Delete?"/> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;

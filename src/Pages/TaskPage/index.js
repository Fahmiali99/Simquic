import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteTodoItem, setTodoList } from "../../Store/todolist";

import Fitur from "../../Components/Modules/Task/Fitur";
import TodoList from "../../Components/Modules/Task/TodoList";
import CreateTask from "./Detail/CreateTask";
import { getTodoList } from "../../Lib/fetchApiTodo";
import Loading from "../../Components/Common/Loading";

function TaskPage() {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const { todolist } = useSelector((state) => state.todolist);
  const [delet, setDelet] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [checkedItems, setCheckedItems] = useState(() => {
    const storedItems = localStorage.getItem("checkedItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [selectedArrow, setSelectedArrow] = useState([]);
  const [selectedHideDot, setSelectedHideDot] = useState(null);

  useEffect(() => {
    getTodoList().then((data) => {
      dispatch(setTodoList(data));
    });
  }, [dispatch]);

  const toggleArrow = (idx) => {
    if (selectedArrow.includes(idx)) {
      setSelectedArrow((e) => e.filter((selectedIdx) => selectedIdx !== idx));
    } else {
      setSelectedArrow((e) => e.concat(idx));
    }
  };

  const toggleDelete = (idx) => {
    setSelectedHideDot(idx);
    setDelet(!delet);
  };

  const toggleOpenTask = () => {
    setOpenTask(!openTask);
  };

  const handleCheckboxChange = (idx) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter((item) => item !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  const handleDelete = (idx) => {
    const newTodoList = todolist.filter((item) => item.id !== idx);
    dispatch(setDeleteTodoItem(newTodoList));
  };

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDelet(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  return (
    <div className="bg-white py-6 rounded-lg">
      <Fitur toggleOpenTask={toggleOpenTask} />

      <div
        id="messages"
        className="flex flex-col space-y-4  overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        style={{ height: "400px" }}
      >
        <div className=" px-8 ">
          {todolist.length ? (
            todolist.map((item) => (
              <TodoList
                key={item.id}
                idx={item.id}
                name={item.title}
                body={item.body}
                date={item.date}
                toggleArrow={toggleArrow}
                selectedHideDot={selectedHideDot}
                delet={delet}
                toggleDelete={toggleDelete}
                dropdownRef={dropdownRef}
                handleCheckboxChange={handleCheckboxChange}
                checkedItems={checkedItems}
                selectedArrow={selectedArrow}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <Loading status={"Task List"} />
          )}
        </div>
        <div className=" px-8 ">
          <CreateTask openTask={openTask} />
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

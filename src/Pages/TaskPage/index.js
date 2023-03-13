import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "../../Store/todolist";
import { getTodoList } from "../../Lib/fetchApiTodo";
import Fitur from "../../Components/Modules/Task/Fitur";
import TodoList from "../../Components/Modules/Task/TodoList";

function TaskPage() {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const { todolist } = useSelector((state) => state.todolist);
  const [hide, setHide] = useState(false);
  const [delet, setDelet] = useState(false);
  const [selectedHideDot, setSelectedHideDot] = useState(null);
  const [selectedHideArrow, setSelectedHideArrow] = useState(null);

  useEffect(() => {
    getTodoList().then((data) => {
      dispatch(setTodoList(data));
    });
  }, [dispatch]);

  function toggleArrow(hideId) {
    setSelectedHideArrow(hideId);
    setHide(!hide);
  }

  function toggleDelete(hideId) {
    setSelectedHideDot(hideId);
    setDelet(!delet);
  }

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
    <div
      className="border-2 rounded-lg bg-white  py-6 px-8 overflow-x-auto"
      style={{ height: "450px" }}
    >
      <Fitur />
      <div className="pt-[22px] ">
        {todolist.length ? (
          todolist
            .slice(0, 3)
            .map((item, idx) => (
              <TodoList
                key={idx}
                idx={item.id}
                name={item.title}
                body={item.body}
                toggleArrow={toggleArrow}
                selectedHideDot={selectedHideDot}
                selectedHideArrow={selectedHideArrow}
                hide={hide}
                delet={delet}
                toggleDelete={toggleDelete}
                dropdownRef={dropdownRef}
              />
            ))
        ) : (
          <h1>Data is null</h1>
        )}
      </div>
    </div>
  );
}

export default TaskPage;

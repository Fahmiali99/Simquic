import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteTodoItem, setTodoList } from "../../Store/todolist";
import { getTodoList } from "../../Lib/fetchApiTodo";
import Fitur from "../../Components/Modules/Task/Fitur";
import TodoList from "../../Components/Modules/Task/TodoList";

function TaskPage() {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const { todolist } = useSelector((state) => state.todolist);
  const [delet, setDelet] = useState(false);
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
    <div
      className="border-2 rounded-lg bg-white  py-6 px-8 overflow-x-auto"
      style={{ height: "500px" }}
    >
      <Fitur />

      <div className="pt-[22px] ">
        {todolist.length ? (
          todolist
            .slice(0, 1)
            .map((item) => (
              <TodoList
                key={item.id}
                idx={item.id}
                name={item.title}
                body={item.body}
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
          <h1>Data is null</h1>
        )}
      </div>
    </div>
  );
}

export default TaskPage;

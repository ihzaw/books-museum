"use client";

import { Edit, X } from "react-feather";
import { useState } from "react";
import Modal from "./Modal";
import CheckBox from "@/components/commons/CheckBox";
import { patchTodo, getTodos, deleteTodo } from "../actions";

const Card = (props) => {
  const { todo } = props;

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({ id: "", name: "" });
  const getTime = (isoTime) => {
    const parsedDate = new Date(isoTime);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    const formattedDate = parsedDate.toLocaleString("en-US", options);
    return formattedDate;
  };

  const handleEdit = (todo) => {
    setSelected(todo);
    setShow(true);
  };

  const handleCheckBox = async (id) => {
    try {
      await patchTodo(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Modal show={show} toggle={() => setShow(!show)} selected={selected} />
      <div className="transition-all p-4 bg-yellow-100 text-yellow-600 rounded-xl flex justify-between gap-2 mb-4 relative">
        <X
          onClick={() => handleDelete(todo.id)}
          className="absolute right-2 w-5 h-5 cursor-pointer"
        />
        <div className="w-3/4 flex items-center">
          <CheckBox
            checked={todo.isComplete}
            onClick={() => handleCheckBox(todo.id)}
          />
          <div className="ml-4">
            <h3 className="text-lg font">{todo.name}</h3>
            <p className="italic text-xs font-normal">
              last updated at <span>{getTime(todo.updatedAt)}</span>
            </p>
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center gap-2">
          <Edit className="cursor-pointer" onClick={() => handleEdit(todo)} />
        </div>
      </div>
    </>
  );
};

export default Card;

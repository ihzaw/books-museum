"use client";
import Button from "@/components/commons/Button";
import Modal from "@/app/todo/Modal";
import { useState } from "react";

const EmptyTodoSection = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal show={show} toggle={() => setShow(!show)} />
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl">Looks like you don't have anything yet!</h3>
        <Button onClick={() => setShow(true)}>Add a new Todo</Button>
      </div>
    </>
  );
};

export default EmptyTodoSection;

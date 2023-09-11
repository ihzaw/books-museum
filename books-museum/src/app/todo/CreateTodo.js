"use client";
import { useState } from "react";
import Modal from "./Modal";
import Button from "@/components/commons/Button";

const CreateTodoButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal show={show} toggle={() => setShow(!show)} />
      <div className="flex justify-center">
        <div className="w-48">
          <Button onClick={() => setShow(true)}>Add new</Button>
        </div>
      </div>
    </>
  );
};

export default CreateTodoButton;

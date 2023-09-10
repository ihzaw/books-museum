"use client";
import { useState } from "react";
import Modal from "./Modal";
import Button from "@/components/commons/Button";

const CreateTodoButton = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal show={show} toggle={() => setShow(!show)} />
      <Button onClick={() => setShow(true)}>Add new</Button>
    </>
  );
};

export default CreateTodoButton;

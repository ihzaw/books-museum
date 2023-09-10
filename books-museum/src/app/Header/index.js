"use client";

import { useEffect, useState } from "react";
import Button from "../../components/commons/Button";
import Link from "next/link";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState("todo");

  const changeMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="w-full grid grid-cols-12 p-1 border-2 border-orange-400 rounded-full gap-2">
      <div className="col-span-4">
        <Link href={"/"}>
          <Button
            onClick={() => changeMenu("home")}
            type={selectedMenu === "home" ? "active" : ""}
          >
            Books Museum
          </Button>
        </Link>
      </div>
      <div className="col-span-4">
        <Link href={'/todo'}>
          <Button
            onClick={() => changeMenu("todo")}
            type={selectedMenu === "todo" ? "active" : ""}
          >
            Todo
          </Button>
        </Link>
      </div>
      {selectedMenu === "todo" && (
        <div className="col-start-11 col-span-2">
          <Button type="static">Add a new Todo</Button>
        </div>
      )}
    </div>
  );
};

export default Header;

"use client";

import { useEffect, useState } from "react";
import Button from "../../components/commons/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()

  return (
    <div className="w-full grid grid-cols-12 p-1 border-2 border-orange-400 rounded-full gap-2">
      <div className="col-span-4">
        <Link href={"/"}>
          <Button
            type={pathname === "/" ? "active" : ""}
          >
            Books Museum
          </Button>
        </Link>
      </div>
      <div className="col-span-4">
        <Link href={'/todo'}>
          <Button
            type={pathname === "/todo" ? "active" : ""}
          >
            Todo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

"use server";

import { revalidateTag } from "next/cache";

export const getBooks = async () => {
  const formattedBookData = [];
  const res = await fetch(
    "https://openlibrary.org/search.json?title=dune&fields=title,key&limit=3&format=json"
  );
  const booksList = await res.json();

  for (const book of booksList.docs) {
    const detailUrl = `https://openlibrary.org${book.key}.json`;
    const detailRes = await fetch(detailUrl);
    const bookDetail = await detailRes.json();
    formattedBookData.push(bookDetail);
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return formattedBookData;
};

export const getTodos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      next: { tags: ["todos"] },
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const updateTodos = async (payload) => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("todos");
    return res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const patchTodo = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PATCH",
    });
    revalidateTag("todos");
    return { message: "ok" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const deleteTodo = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("todos");
    return { message: "ok" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

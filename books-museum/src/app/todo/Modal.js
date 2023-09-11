"use client";

import { useEffect, useState } from "react";
import { updateTodos } from "../actions";

const Modal = (props) => {
  const formDefault = { id: "", name: "" };
  const { show, toggle, selected = formDefault } = props;
  const [form, setForm] = useState(formDefault);
  const [error, setError] = useState(false);
  const formType = selected.id ? "Update" : "Create";

  const handleChange = (e) => {
    setForm({ id: form.id ? form.id : "", name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await updateTodos(form)
      toggle();
      setForm(formDefault)
    } catch (err) {
      console.log(err)
      setError(true);
    }
  };

  const handleCancel = () => {
    setForm(formDefault);
    toggle();
  };

  useEffect(() => {
    if (selected.id) {
      const newForm = {
        id: selected.id,
        name: selected.name,
      };
      setForm(newForm);
    }
  }, [selected]);

  if (!show) {
    return null;
  }
  return (
    <div
      className="relative z-10 transition-all"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div>
                  <div className="my-3 text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900 mb-8 border-b-2"
                      id="modal-title"
                    >
                      {formType} Todo
                    </h3>
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="What's on your to do list?"
                        className="mt-1 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                        value={form.name}
                        onChange={(e) => handleChange(e)}
                      />
                      {error && (
                        <div className="mt-3 text-xs text-red-500">
                          Something went wrong, please try again later
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 sm:ml-3 sm:w-auto transition"
                >
                  {formType}
                </button>
                <button
                  onClick={() => handleCancel()}
                  type="button"
                  className="transition mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;

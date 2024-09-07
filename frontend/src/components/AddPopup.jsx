import React, { useState } from "react";
import customFetch from "../utils/customFetch";
import { useDispatch } from "react-redux";
import { addElement } from "../features/tableSlice";

function AddPopup({ setIsOpenPopup }) {
  const [item, setItem] = useState({ name: "", model: "", color: "", code: 0 });
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await customFetch.post("/table", item);
    console.log(response.data.item);
    dispatch(addElement({ item: response.data.item }));
    setIsOpenPopup(false);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-[20%]"></div>
      <form
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-96 bg-white flex rounded-xl"
        onSubmit={handleSubmit}
      >
        <button
          className="absolute top-1 right-3 font-bold text-slate-200 cursor-pointer text-xl"
          onClick={() => {
            setIsOpenPopup(false);
          }}
        >
          X
        </button>
        <div className="flex flex-col mx-auto w-[80%] my-6 gap-2">
          <h2 className="font-bold text-2xl text-orange-500 mb-3">Add Car</h2>
          <div className="flex items-center mt-2 justify-between">
            <h4 className="text-lg">Name</h4>
            <input
              type="text"
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              placeholder="Product name"
              className="bg-zinc-200 p-1 px-2 rounded-lg placeholder:text-zinc-700"
            />
          </div>
          <div className="flex items-center  justify-between">
            <h4 className="text-lg">Model</h4>
            <input
              type="text"
              onChange={(e) => setItem({ ...item, model: e.target.value })}
              placeholder="Product model"
              className="bg-zinc-200 p-1 px-2 rounded-lg placeholder:text-zinc-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg">Color</h4>
            <input
              type="text"
              onChange={(e) => setItem({ ...item, color: e.target.value })}
              placeholder="Product color"
              className="bg-zinc-200 p-1 px-2 rounded-lg placeholder:text-zinc-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg">Code</h4>
            <input
              type="number"
              onChange={(e) => setItem({ ...item, code: +e.target.value })}
              placeholder="Product code"
              className="bg-zinc-200 p-1 px-2 rounded-lg placeholder:text-zinc-700"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 w-fit self-end p-1 px-2 rounded-lg text-white"
          >
            Add item
          </button>
        </div>
      </form>
    </>
  );
}

export default AddPopup;

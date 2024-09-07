import Header from "../components/Header";
import Table from "../components/Table";
import customFetch from "../utils/customFetch";
import {
  editElement,
  resetToDefault,
  setInitalState,
} from "../features/tableSlice";
import Pagination from "../components/Pagination";
import { useLoaderData } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";

export const loader =
  (store) =>
  async ({ request }) => {
    let params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch.get(`/table/?page=${params["page"]}`);
    const { currentPage, items } = response.data.data;
    store.dispatch(setInitalState(items));
    return response.data.data;
  };
function TablePage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const editedElements = useSelector((state) => state.table.editedElements);
  const handlaSubmitButton = async (e) => {
    e.preventDefault();
    setLoading(true);
    const objectToSend = Object.entries(editedElements).map(([id, item]) => ({
      id,
      item,
    }));

    if (objectToSend.length === 0) {
      toast.error("no edits occured", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    await customFetch.patch("/table", JSON.stringify(objectToSend));
    toast.success("items edited successfully", {
      position: "top-center",
      autoClose: 3000,
    });
    dispatch(resetToDefault());
    setLoading(false);
  };
  return (
    <div className="m-auto mt-10 flex flex-col  w-full px-5 max-w-screen-sm lg:max-w-screen-md gap-2">
      <Header />
      <Table />
      <Pagination />
      <button
        className={`bg-yellow-400 w-[100px] self-end p-2 capitalize rounded-md ${
          loading ? "cursor-wait" : "cursor-pointer"
        }`}
        onClick={handlaSubmitButton}
        disabled={loading}
      >
        {loading ? "submitting..." : "submit"}
      </button>
    </div>
  );
}

export default TablePage;

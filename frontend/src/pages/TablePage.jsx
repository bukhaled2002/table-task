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
import { useEffect } from "react";
export const loader =
  (store) =>
  async ({ request }) => {
    let params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch.get(`/table/?page=${params["page"]}`);
    const { currentPage, items } = response.data.data;
    store.dispatch(setInitalState({ page: currentPage, items: items }));
    return response.data.data;
  };
function TablePage() {
  const dispatch = useDispatch();
  const editedElements = useSelector((state) => state.table.editedElements);
  const handlaSubmitButton = async (e) => {
    e.preventDefault();
    const objectToSend = Object.entries(editedElements).map(([id, item]) => ({
      id,
      item,
    }));
    const response = await customFetch.patch(
      "/table",
      JSON.stringify(objectToSend)
    );
    dispatch(resetToDefault());
  };
  useEffect(() => {
    console.log(editedElements);
  }, [editedElements]);
  return (
    <div className="m-auto mt-10 flex flex-col  w-full px-5 max-w-screen-sm lg:max-w-screen-md gap-2">
      <Header />
      <Table />
      <Pagination />
      <button
        className="bg-green-600 w-[100px] self-end p-2"
        onClick={handlaSubmitButton}
      >
        submit
      </button>
      {/* <button
        className="bg-zinc-500 w-[100px] self-end p-2"
        onClick={() => dispatch(resetToDefault())}
      >
        reset
      </button> */}
    </div>
  );
}

export default TablePage;

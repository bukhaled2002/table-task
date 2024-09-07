import { CiExport, CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import AddPopup from "./AddPopup";

function Header() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <p className="text-zinc-500">March24</p>
      <div className="flex items-end justify-between mt-2">
        <h2 className="font-bold text-3xl">Cars</h2>
        <div className="flex gap-1">
          <button className="bg-zinc-300 p-2 transition-colors duration-300 ease-in-out  rounded-lg hover:bg-amber-500 hover:text-white">
            <CiSearch className="text-xl" />
          </button>
          <button className="bg-zinc-300 p-2 transition-colors duration-300 ease-in-out  rounded-lg hover:bg-amber-500 hover:text-white">
            <CiExport className="text-xl" />
          </button>
          <button
            className="bg-zinc-300 p-2 transition-colors duration-300 ease-in-out  rounded-lg hover:bg-amber-500 hover:text-white"
            onClick={() => setIsOpenPopup(true)}
          >
            <IoMdAdd className="text-xl" />
          </button>
        </div>
      </div>
      {isOpenPopup && <AddPopup setIsOpenPopup={setIsOpenPopup} />}
    </>
  );
}

export default Header;

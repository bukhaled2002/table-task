import { useSelector } from "react-redux";
import Col from "./Col";
import { useLocation } from "react-router";
import { useState } from "react";
function Table() {
  const { search } = useLocation();
  const page = search.split("=")[1] || 1;
  let items = useSelector((state) => state.table.table);
  console.log(items);
  const headers = ["name", "model", "color", "code"];
  return (
    <div className="bg-yellow-300 mt-3 flex border-4 ">
      <div className="flex flex-col flex-1">
        {headers.map((header) => {
          return (
            <p key={header} className="p-1 capitalize font-semibold border ">
              {header}
            </p>
          );
        })}
      </div>
      {!items ? (
        <span className="ag-loading" />
      ) : (
        <>
          {items[page].map((item) => {
            console.log(item.id);
            return <Col key={item.id} item={item} />;
          })}
        </>
      )}
    </div>
  );
}

export default Table;

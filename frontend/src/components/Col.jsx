import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editElement } from "../features/tableSlice";

function Col({ item: p }) {
  const [item, setItem] = useState(p);
  const dispatch = useDispatch();

  const handleBlur = (field, value, id) => {
    // Dispatch the editElement action with the specific field and value
    dispatch(editElement({ id, field, value }));
  };

  const handleKeyDown = (event, field) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleBlur(field, event.target.value, item.id);
      event.target.blur();
    }
  };
  const editedElements = useSelector((state) => state.table.editedElements);
  console.log(item);
  return (
    <div key={item.id} className="flex flex-col flex-1">
      <p className="p-1 capitalize border">{item.name}</p>
      <input
        className={`p-1 capitalize border w-full ${
          editedElements[item.id]?.model ? "bg-red-300" : "bg-yellow-300"
        }`}
        defaultValue={editedElements[item.id]?.model || item.model}
        // onChange={(e) => setItem({ ...item, model: e.target.value })}
        onChange={(e) => handleBlur("model", e.target.value, item.id)}
        // onKeyDown={(e) => handleKeyDown(e, "model")}
      />
      <input
        className={`p-1 capitalize border w-full ${
          editedElements[item.id]?.color ? "bg-red-300" : "bg-yellow-300"
        }`}
        defaultValue={editedElements[item.id]?.color || item.color}
        // onChange={(e) => setItem({ ...item, color: e.target.value })}
        onChange={(e) => handleBlur("color", e.target.value, item.id)}
        // onKeyDown={(e) => handleKeyDown(e, "color")}
      />
      <input
        type="number"
        className={`p-1 capitalize border w-full ${
          editedElements[item.id]?.code ? "bg-red-300" : "bg-yellow-300"
        }`}
        // onChange={(e) => setItem({ ...item, code: e.target.value })}
        defaultValue={+editedElements[item.id]?.code || +item.code}
        onChange={(e) => handleBlur("code", +e.target.value, item.id)}
        // onKeyDown={(e) => handleKeyDown(e, "code")}
      />
    </div>
  );
}

export default Col;

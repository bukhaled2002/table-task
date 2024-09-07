import { editElement } from "../features/tableSlice";
import { useDispatch, useSelector } from "react-redux";

function Col({ header, paginatedData }) {
  const dispatch = useDispatch();

  const handleBlur = (field, value, id) => {
    dispatch(editElement({ id, field, value }));
  };

  const editedElements = useSelector((state) => state.table.editedElements);

  return (
    <>
      {header.map((key) => (
        <tr key={key} className="border-b">
          <td className="px-4 py-2 font-medium text-gray-700">{key}</td>
          {paginatedData.map((item) => {
            return (
              <td key={item.id} className="px-4 py-2 text-gray-600">
                <input
                  type={key === "code" ? "number" : "text"}
                  className={`p-1 capitalize  w-full ${
                    editedElements[item.id]?.[key] ? "bg-red-300" : ""
                  }`}
                  defaultValue={
                    key === "code"
                      ? +editedElements[item.id]?.[key] || +item[key]
                      : editedElements[item.id]?.[key] || item[key]
                  }
                  onChange={(e) =>
                    handleBlur(
                      key,
                      key === "code" ? +e.target.value : e.target.value,
                      item.id
                    )
                  }
                />
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}

export default Col;

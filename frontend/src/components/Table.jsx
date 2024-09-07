import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Col from "./Col";

function Table() {
  const { search } = useLocation();
  const itemsPerPage = 4;
  const page = Number(search.split("=")[1]) || 1;

  let items = useSelector((state) => state.table.table);

  items = Object.values(items);
  items = items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  let paginatedData = items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  paginatedData = paginatedData.length === 0 ? items : paginatedData;
  const header = Object.keys(items[0]).filter(
    (i) => !["id", "createdAt", "name"].includes(i)
  );

  if (!items) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="bg-yellow-300 mt-3 border-4 border-yellow-400 rounded-lg shadow-lg">
      <table className="w-full table-auto">
        <thead className="bg-yellow-400">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            {paginatedData.map((item) => (
              <th key={item.id} className="px-4 py-2 font-semibold text-left">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          <Col header={header} paginatedData={paginatedData} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;

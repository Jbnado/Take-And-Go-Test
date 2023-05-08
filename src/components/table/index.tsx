import { ReactNode, useState } from "react";
import { TableHeader } from "./header";
import { TableFooter } from "./footer";

export interface Columns<T> {
  dataIndex: keyof T;
  title: string;
  render?: (text: string, record: T) => ReactNode;
}

interface TableProps<T> {
  title: string;
  columns: Array<Columns<T>>;
  dataSource: Array<T>;
  rowId?: keyof T;
  searchKey?: keyof T;
  rowClick?: (id: string) => void;
}

export function Table<T>({
  title,
  columns,
  dataSource = [],
  rowId,
  searchKey,
  rowClick,
}: TableProps<T>) {
  const [data, setData] = useState([...dataSource]);

  const handleSearch = (searchTerm: string) => {
    setData(() => {
      if (!searchKey || !searchTerm) return [...dataSource];
      return dataSource.filter((item) =>
        String(item[searchKey]).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  return (
    <div className="py-5 px-8 flex-1">
      <TableHeader title={title} onSearch={handleSearch} />
      <div className="rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full table-auto divide-y-2 divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              {columns.map(({ dataIndex, title }: Columns<T>) => {
                return (
                  <th
                    key={dataIndex as string}
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-500"
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((record: T, index) => {
              return (
                <tr
                  key={rowId ? String(record[rowId]) : index}
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    rowClick && rowId && rowClick(String(record[rowId]))
                  }
                >
                  {columns.map(({ dataIndex, render }: Columns<T>) => {
                    return render ? (
                      <td
                        key={dataIndex as string}
                        className="px-4 py-2 whitespace-nowrap"
                      >
                        {render(String(record[dataIndex]), record)}
                      </td>
                    ) : (
                      <td
                        key={dataIndex as string}
                        className="px-4 py-2 text-gray-700 whitespace-nowrap"
                      >
                        {String(record[dataIndex])}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <TableFooter />
    </div>
  );
}

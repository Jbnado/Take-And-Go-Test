import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export function TableFooter() {
  const page = 1;
  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            className="block p-2 ml-0 leading-tight bg-white border border-gray-300 rounded-l-lg hover:bg-blue-600 hover:text-white mr-1"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft size={20} />
          </a>
        </li>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <a
              href="#"
              className={`block py-2 px-3 leading-tight ${
                index + 1 === page ? "bg-blue-600 text-white" : "bg-white"
              } border border-gray-300 hover:bg-blue-600 hover:text-white rounded-lg mr-1`}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="block p-2 ml-0 leading-tight bg-white border border-gray-300 rounded-r-lg hover:bg-blue-600 hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <ChevronRight size={20} />
          </a>
        </li>
      </ul>
      <span className="text-sm dark:text-gray-400 flex gap-1">
        Mostrando
        <span className="font-semibold">8</span>
        de
        <span className="font-semibold">547</span>
      </span>
    </nav>
  );
}

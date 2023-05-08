import { useCallback, useRef } from "react";
import { Plus, Search, Sliders } from "react-bootstrap-icons";

export function TableHeader({
  title,
  onSearch,
}: {
  title: string;
  onSearch?: (value: string) => void;
}) {
  const inputValue = useRef<HTMLInputElement | null>(null);

  const handleSearch = useCallback(() => {
    onSearch?.(inputValue.current?.value as string);
  }, [onSearch, inputValue]);

  const handleSearchButtonClick = useCallback(() => {
    handleSearch();
  }, [handleSearch]);

  const handleSearchKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 h-50 mb-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {onSearch ? (
          <div className="relative sm:block hidden">
            <label className="sr-only" htmlFor="search"></label>
            <input
              className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="text"
              placeholder="Buscar por veículo"
              ref={inputValue}
              onKeyDown={handleSearchKeyDown}
            />
            <button
              type="button"
              onClick={handleSearchButtonClick}
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <Search />
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex gap-2 items-center rounded border border-blue-600 bg-white sm:px-6 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:text-white">
          <Sliders size={18} />
          Filtrar
        </button>
        <button className="flex gap-2 items-center rounded border border-blue-600 bg-blue-600 sm:px-6 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-600">
          <Plus size={20} />
          Adicionar
        </button>
      </div>
    </header>
  );
}

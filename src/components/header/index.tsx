import {
  House,
  ChevronDown,
  Bell,
  Gear,
  PersonFill,
} from "react-bootstrap-icons";

export function Header() {
  return (
    <header aria-label="Page Header" className="bg-white shadow py-4 px-5">
      <div className="flex items-center sm:justify-between gap-4">
        <div className="flex gap-4 items-center">
          <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
          <div className="sm:flex hidden h-5 w-5 group shrink-0 items-center justify-center rounded-full transition text-blue-600 border-2 border-blue-600">
            <House size={14} />
          </div>
          <div className="sm:flex hidden gap-2 items-center cursor-pointer">
            <span className="font-medium">Dryve - Ribeirão Preto</span>
            <ChevronDown size={12} />
          </div>
        </div>
        <div className="flex sm:gap-7 gap-5 items-center">
          <a
            href="#"
            className="block shrink-0 text-gray-600 hover:text-gray-700"
          >
            <span className="sr-only">Notificações</span>
            <Bell size={16} />
          </a>
          <a
            href="#"
            className="block shrink-0 text-gray-600 hover:text-gray-700"
          >
            <span className="sr-only">Configurações</span>
            <Gear size={16} />
          </a>
          <button
            type="button"
            className="p-1 group flex shrink-0 items-center justify-center rounded-full transition text-blue-400 shadow-sm hover:text-blue-500 border-2 border-blue-600"
          >
            <div className="rounded-full bg-blue-200 p-1">
              <span className="sr-only">Usuário</span>
              <PersonFill size={20} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

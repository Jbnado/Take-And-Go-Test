import { useState } from "react";
import {
  ColumnsGap,
  Tags,
  Calendar,
  CarFront,
  RocketTakeoff,
  PersonCircle,
  GraphUpArrow,
  Bank,
  ChevronLeft,
} from "react-bootstrap-icons";

export function Sidenav({ isOpen = true }: { isOpen?: boolean }) {
  const [collapse, setcollapse] = useState(isOpen);
  const Items = [
    { title: "Dashboard", icon: <ColumnsGap size={20} /> },
    { title: "Oportunidades", icon: <Tags size={20} /> },
    { title: "Agenda", icon: <Calendar size={20} /> },
    { title: "Veículos ", icon: <CarFront size={20} /> },
    { title: "Publicação", icon: <RocketTakeoff size={20} /> },
    { title: "Contatos", icon: <PersonCircle size={20} /> },
    { title: "Analytics ", icon: <GraphUpArrow size={20} /> },
    { title: "Financiamento", icon: <Bank size={20} /> },
  ];

  return (
    <aside
      className={` ${
        collapse ? "w-64 p-8" : "w-20 p-6"
      } h-screen relative duration-300 shadow-md bg-white`}
    >
      <ChevronLeft
        className={`absolute cursor-pointer -right-3 top-9 w-7
           border rounded-full  ${!collapse && "rotate-180"}`}
        onClick={() => setcollapse(!collapse)}
      />
      <nav>
        <ul>
          {Items.map(({ title, icon }, index) => {
            return (
              <li
                key={index}
                className={
                  "flex rounded-full py-1 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mb-5"
                }
              >
                {icon}
                <span
                  className={`${
                    !collapse && "hidden"
                  } origin-left duration-200`}
                >
                  {title}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

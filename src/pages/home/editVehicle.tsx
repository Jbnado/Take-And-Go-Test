import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowClockwise, ChevronLeft, CircleFill } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { VehicleType, getVehicles } from "@/api";
import { Header, Sidenav } from "@/components";

// The form is not complete, it is just a sample, I'm not using any form library or checking changes on the inputs
// Hire me then I will finish it :D and any more you want :)

function InputComponent({ label, value, placeholder, classes }: any) {
  return (
    <div className={classes}>
      <div className="relative h-10 w-full">
        <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder={placeholder}
          value={value}
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {label}
        </label>
      </div>
    </div>
  );
}

function SelectComponent({ label, value, placeholder, classes, options }: any) {
  return (
    <div className={`relative h-10 ${classes}`}>
      <select
        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        value={value}
        placeholder={placeholder}
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
}

function RadioComponent({ value, label, classes, name, checked }: any) {
  return (
    <div className={`${classes} inline-flex items-center`}>
      <label className="relative flex cursor-pointer items-center rounded-full p-3">
        <input
          value={value}
          name={name}
          checked={checked === value}
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
          <CircleFill className="h-3.5 w-3.5" />
        </div>
      </label>
      <label className="mt-px cursor-pointer select-none font-light text-gray-700">
        {label}
      </label>
    </div>
  );
}

function SelectionItemsComponent({ items }: any) {
  return (
    <div className="w-full">
      <div className="relative right-0">
        <ul
          className="relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1"
          data-tabs="tabs"
          role="list"
        >
          {items.map(({ label }: any) => (
            <li className="z-30 flex-auto text-center">
              <a
                className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                data-tab-target=""
                role="tab"
                aria-selected="true"
              >
                <span className="ml-1">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EditVehicle() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<VehicleType>();

  // should use react-query here but getting just the vehicle by id
  const { isLoading: isLoadingVehicles } = useQuery(["vehicles"], getVehicles, {
    onSuccess: (data) => {
      const vehicle = data.find((vehicle) => vehicle.vehicle_uuid === id);
      if (vehicle) {
        setVehicle(vehicle);
      }
    },
  });

  const checked = (vehicle?.mileage as number) === 0 ? "novo" : "usado";

  if (isLoadingVehicles) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ArrowClockwise className="animate-spin w-12 h-12" />
        <span className="text-sm mt-2">Carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <section className="flex flex-1">
        <Sidenav isOpen={false} />
        <div className="py-5 px-8 flex-1">
          <header className="flex flex-col lg:flex-row lg:items-center gap-4 h-50 mb-4">
            <Link to="/">
              <ChevronLeft className="fill-blue-600" />
            </Link>
            <h1 className="text-2xl font-semibold">Editar Veículo</h1>
          </header>
          <main className="flex md:flex-row flex-col gap-4">
            {/* Create two cards, first one with inputs to edit this vehicle and the other one with the picture */}
            <section className="flex-1 rounded-lg bg-white shadow-lg">
              <h2 className="font-semibold mb-4 border-b-[1px] p-4">
                Informações
              </h2>
              <form action="" className="flex flex-col p-6 lg:p-8 gap-4">
                <h2 className="text-blue-600 font-semibold">
                  Dados do Veículo
                </h2>
                <div className="flex gap-10">
                  <RadioComponent
                    value="novo"
                    label="0 km"
                    name="km"
                    checked={checked}
                  />
                  <RadioComponent
                    value="usado"
                    label="Seminovo"
                    name="km"
                    checked={checked}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                  <InputComponent label="Placa" value={vehicle?.vehicle_uuid} />
                  <InputComponent
                    label="Renavam"
                    value={vehicle?.version_uuid}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <SelectComponent
                    label="Marca"
                    value={vehicle?.brand_name}
                    placeholder="Marca"
                    options={[
                      { label: "Fiat", value: "fiat" },
                      { label: "Ford", value: "ford" },
                      { label: "Chevrolet", value: "chevrolet" },
                      { label: "Volkswagen", value: "volkswagen" },
                    ]}
                  />
                  <SelectComponent
                    label="Modelo"
                    value={vehicle?.model_name}
                    placeholder="Modelo"
                    options={[
                      { label: "Uno", value: "uno" },
                      { label: "Palio", value: "palio" },
                      { label: "Toro", value: "toro" },
                      { label: "Strada", value: "strada" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                  <SelectComponent
                    label="Carroceria"
                    value="hatchback"
                    placeholder="Carroceria"
                    options={[{ label: "Hatchback", value: "hatchback" }]}
                    classes="col-span-2"
                  />
                  <SelectComponent
                    label="Ano Fabricação"
                    value={vehicle?.manufacturing_year}
                    placeholder="Ano Fabricação"
                    options={[
                      { label: "2021", value: "2021" },
                      { label: "2020", value: "2020" },
                      { label: "2019", value: "2019" },
                      { label: "2018", value: "2018" },
                    ]}
                  />
                  <SelectComponent
                    label="Ano Modelo"
                    value={vehicle?.model_year}
                    placeholder="Ano Modelo"
                    options={[
                      { label: "2021", value: "2021" },
                      { label: "2020", value: "2020" },
                      { label: "2019", value: "2019" },
                      { label: "2018", value: "2018" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <SelectComponent
                    label="Versão"
                    value={vehicle?.version_name}
                    placeholder="Versão"
                    options={[
                      { label: "1.0", value: "1.0" },
                      { label: "1.4", value: "1.4" },
                      { label: "1.6", value: "1.6" },
                      { label: "1.8", value: "1.8" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <SelectComponent
                    label="Combustível"
                    value={vehicle?.fuel_type}
                    placeholder="Combustível"
                    options={[
                      { label: "Gasolina", value: "gasolina" },
                      { label: "Etanol", value: "etanol" },
                      { label: "Flex", value: "flex" },
                    ]}
                  />
                  <SelectComponent
                    label="Câmbio"
                    value={vehicle?.transmission_type}
                    placeholder="Câmbio"
                    options={[
                      { label: "Manual", value: "manual" },
                      { label: "Automático", value: "automatico" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <InputComponent
                    label="Quilometragem"
                    value={vehicle?.mileage}
                  />
                  <InputComponent label="Cor" value="Cinza" />
                </div>
                <h2 className="text-blue-600 font-semibold">Acessórios</h2>
                <div className="grid grid-cols-1 gap-4">
                  <SelectComponent
                    label="Acessórios"
                    value="Acessórios"
                    placeholder="Acessórios"
                    options={[
                      { label: "Ar Condicionado", value: "ar-condicionado" },
                      {
                        label: "Direção Hidráulica",
                        value: "direcao-hidraulica",
                      },
                      { label: "Vidro Elétrico", value: "vidro-eletrico" },
                      { label: "Trava Elétrica", value: "trava-eletrica" },
                      { label: "Alarme", value: "alarme" },
                    ]}
                  />
                </div>
                <h2 className="text-blue-600 font-semibold">Características</h2>
                <div className="grid grid-cols-1 gap-4">
                  <SelectComponent
                    label="Características"
                    value="Características"
                    placeholder="Características"
                    options={[
                      { label: "Único Dono", value: "unico-dono" },
                      { label: "IPVA Pago", value: "ipva-pago" },
                      { label: "Licenciado", value: "licenciado" },
                      { label: "Revisões em Dia", value: "revisoes-em-dia" },
                    ]}
                  />
                </div>
                <h2 className="text-blue-600 font-semibold">Localização</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                  <SelectComponent
                    label="Estado"
                    value="Estado"
                    placeholder="Estado"
                    options={[
                      { label: "São Paulo", value: "sao-paulo" },
                      { label: "Rio de Janeiro", value: "rio-de-janeiro" },
                      { label: "Minas Gerais", value: "minas-gerais" },
                      { label: "Paraná", value: "parana" },
                    ]}
                  />
                  <SelectComponent
                    label="Cidade"
                    value="Cidade"
                    placeholder="Cidade"
                    classes="col-span-3"
                    options={[
                      { label: "São Paulo", value: "sao-paulo" },
                      { label: "Rio de Janeiro", value: "rio-de-janeiro" },
                      { label: "Belo Horizonte", value: "belo-horizonte" },
                      { label: "Curitiba", value: "curitiba" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h2 className="text-blue-600 font-semibold">
                      Classificação
                    </h2>
                    <SelectionItemsComponent
                      items={[
                        { label: "A" },
                        { label: "B" },
                        { label: "C" },
                        { label: "D" },
                      ]}
                    />
                  </div>
                  <div>
                    <h2 className="text-blue-600 font-semibold">
                      Condição Geral do Veículo
                    </h2>
                    <SelectionItemsComponent
                      items={[
                        { label: "Razoável" },
                        { label: "Bom" },
                        { label: "Excelente" },
                      ]}
                    />
                  </div>
                </div>
                <h2 className="text-blue-600 font-semibold">Tags</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-white border border-blue-600 rounded-full px-4 py-2">
                      <span className="text-gray-600">Carro</span>
                    </div>
                    <div className="bg-white border border-blue-600 rounded-full px-4 py-2">
                      <span className="text-gray-600">Sedan</span>
                    </div>
                    <div className="bg-white border border-blue-600 rounded-full px-4 py-2">
                      <span className="text-gray-600">Automático</span>
                    </div>
                  </div>
                </div>
              </form>
            </section>
            <section className="flex-1 grid grid-rows-5 gap-4">
              <section className="row-span-2 rounded-lg bg-white shadow-lg">
                <h2 className="font-semibold mb-4 border-b-[1px] p-4">
                  Notas de Inspeção
                </h2>
                <div className="flex items-center justify-center">
                  <img src={vehicle?.image} alt="Missing images in api" />
                </div>
              </section>
              <section className="row-span-2 rounded-lg bg-white shadow-lg">
                <h2 className="font-semibold mb-4 border-b-[1px] p-4">
                  Fotos do Veículo
                </h2>
                <div className="flex items-center justify-center">
                  <img src={vehicle?.image} alt="" />
                </div>
              </section>
              <section className="rounded-lg bg-white shadow-lg">
                <h2 className="font-semibold mb-4 border-b-[1px] p-4">
                  Contatos Vinculados
                </h2>
              </section>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}

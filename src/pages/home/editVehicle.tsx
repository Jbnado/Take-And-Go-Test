import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowClockwise, ChevronLeft } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { VehicleType, getVehicles } from "@/api";
import { formatCurrency } from "@/utils";
import { Header, Sidenav } from "@/components";

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

  if (isLoadingVehicles) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ArrowClockwise className="animate-spin w-12 h-12" />
        <span className="text-sm mt-2">Carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
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
          <main className="flex md:flex-row flex-col">
            {/* Create two cards, first one with inputs to edit this vehicle and the other one with the picture */}
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="brand">
                    Marca
                  </label>
                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm"
                    id="brand"
                    type="text"
                    placeholder="Marca"
                    value={vehicle?.brand_name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="model">
                    Modelo
                  </label>
                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm"
                    id="model"
                    type="text"
                    placeholder="Modelo"
                    value={vehicle?.model_name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="year">
                    Ano
                  </label>
                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm"
                    id="year"
                    type="text"
                    placeholder="Ano"
                    value={vehicle?.model_year}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="price">
                    Preço
                  </label>
                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm"
                    id="price"
                    type="text"
                    placeholder="Preço"
                    value={formatCurrency(vehicle?.ad_selling_price as number)}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" htmlFor="picture">
                    Foto
                  </label>
                  <img
                    className="h-40 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm"
                    src={vehicle?.image}
                    alt="Foto do veículo"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowClockwise } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { VehicleType, getVehicles } from "@/api";
import { formatCurrency } from "@/utils";

export function EditVehicle() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<VehicleType>();

  // should use react-query here but getting just the vehicle by id
  const { data: vehicles, isLoading: isLoadingVehicles } = useQuery(
    ["vehicles"],
    getVehicles
  );

  if (isLoadingVehicles) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ArrowClockwise className="animate-spin w-12 h-12" />
        <span className="text-sm mt-2">Carregando...</span>
      </div>
    );
  }

  setVehicle(
    vehicles && vehicles.find((vehicle) => vehicle.vehicle_uuid === id)
  );

  return (
    <div>
      <h1>
        {vehicle?.brand_name} {vehicle?.model_name}
      </h1>
      <p>Year: {vehicle?.model_year}</p>
      <p>Price: {formatCurrency(vehicle?.ad_selling_price as number)}</p>
      <img className="w-28" src={vehicle?.image} alt={vehicle?.model_name} />
    </div>
  );
}

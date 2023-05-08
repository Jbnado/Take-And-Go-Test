import { useQuery } from "@tanstack/react-query";
import { useHistory } from "react-router-dom";
import { Columns, Table } from "@/components";
import { VehicleType, getVehicles } from "@/api";
import { ArrowClockwise } from "react-bootstrap-icons";
import { formatCurrency, formatMileage } from "@/utils";

export function VehicleTable() {
  const history = useHistory();

  const handleRowClick = (id: string) => {
    history.push(`/vehicle/${id}`);
  };

  const { data: vehicles, isLoading: isLoadingVehicles } = useQuery(
    ["vehicles"],
    getVehicles
  );

  const columns: Array<Columns<VehicleType>> = [
    {
      dataIndex: "model_name",
      title: "Dados do veículo",
      render: (_, record: VehicleType) => (
        <div className="flex sm:flex-row flex-column items-start gap-2">
          <img className="w-28" src={record.image} alt={record.model_name} />
          <div className="flex flex-col flex-1">
            <div className="text-sm font-semibold">
              {record.brand_name} {record.model_name}
            </div>
            <div className="text-sm">{record.version_name}</div>
            <div className="text-sm flex gap-2">
              <div className="flex flex-col">
                <div>
                  {record.model_year}/{record.manufacturing_year}
                </div>
                <div>{formatMileage(record.mileage)}</div>
              </div>
              <div className="flex flex-col">
                <div>{record.fuel_type}</div>
                <div>{formatCurrency(record.ad_selling_price)}</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "REF",
      dataIndex: "vehicle_uuid",
    },
    {
      title: "Placa",
      dataIndex: "version_uuid",
    },
    {
      title: "Data",
      dataIndex: "manufacturing_year",
    },
  ];

  if (isLoadingVehicles) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ArrowClockwise className="animate-spin w-12 h-12" />
        <span className="text-sm mt-2">Carregando...</span>
      </div>
    );
  }

  return (
    <Table
      title="Veículos"
      rowId="vehicle_uuid"
      searchKey="model_name"
      columns={columns}
      dataSource={vehicles as VehicleType[]}
      rowClick={handleRowClick}
    />
  );
}

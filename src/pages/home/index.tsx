import { Header, Sidenav } from "@/components";
import { VehicleTable } from "./vehicleTable";

export function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1">
        <Sidenav />
        <VehicleTable />
      </main>
    </div>
  );
}

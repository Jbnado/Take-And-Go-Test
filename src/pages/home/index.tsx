import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, Sidenav } from "@/components";
import { VehicleTable } from "./vehicleTable";

const queryClient = new QueryClient();

export function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-1">
          <Sidenav />
          <VehicleTable />
        </main>
      </div>
    </QueryClientProvider>
  );
}

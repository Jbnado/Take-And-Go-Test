import axios from "axios";
import { VehicleType } from "./vehicle";

export async function getVehicles(): Promise<VehicleType[]> {
  try {
    return (await axios.get("http://www.mocky.io/v2/5eb553df31000060006994a8"))
      .data as VehicleType[];
  } catch (error) {
    console.error(error);
    return [] as VehicleType[];
  }
}

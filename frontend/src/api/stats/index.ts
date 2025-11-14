import { HttpClient } from ".."
import { StatEndpoint } from "./index.enum";
import type { StatResponse } from "./index.type";

export const getStat = () => {
    return HttpClient.get<StatResponse>(StatEndpoint.getStat).then((res)=>res.data);
}
import { HttpClient } from ".."

export const getStat = () => {
    return HttpClient.get("/stats/get").then((res)=>res.data);
}
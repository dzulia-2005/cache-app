import { useQuery } from "@tanstack/react-query"
import { getStat } from "../../api/stats"

export const useGetStatQuery = () => {
    return useQuery({
        queryFn:getStat,
        queryKey:["get-stats"]
    })
}
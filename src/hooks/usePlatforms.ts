import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiclient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform{
    id:number;
    name:string
    slug:string
}

const usePlatforms=()=>useQuery({
    queryKey: ['platforms'],
    queryFn: apiclient.getAll, 
    staleTime: ms('24h') ,// 24h
    initialData:platforms
});

export default usePlatforms;
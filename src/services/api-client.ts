import axios from "axios";
 
export interface FetchResponse<T>{
    count:number;
    results:T[];
}

export default axios.create({
    baseURL:'https://api.rawg.io/api' , 
    params:{
        key: '7bde8211a36140048ecda356bd878173'
    }
})
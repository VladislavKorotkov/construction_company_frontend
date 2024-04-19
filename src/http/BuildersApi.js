import { $authHost } from ".";

export const getBuilders = async () =>{
    const {data} = await $authHost.get("/api/builders")
    return data;
}
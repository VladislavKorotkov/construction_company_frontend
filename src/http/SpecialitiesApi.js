import { $authHost } from ".";

export const getSpecialities = async () =>{
    const {data} = await $authHost.get("/api/specializations")
    return data;
}
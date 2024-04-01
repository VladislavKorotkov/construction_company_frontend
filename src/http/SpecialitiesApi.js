import { $authHost } from ".";

export const getSpecialities = async () =>{
    const {data} = await $authHost.get("/api/specializations")
    return data;
}

export const addSpeciality = async (name) =>{
    const {data} = await $authHost.post('/api/spicializations', name)
    return data;
}
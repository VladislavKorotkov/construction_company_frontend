import { $authHost } from ".";

export const getSpecialities = async () =>{
    const {data} = await $authHost.get("/api/specializations")
    return data;
}

export const addSpeciality = async (name) =>{
    const {data} = await $authHost.post('/api/specializations', {name: name})
    return data;
}

export const deleteSpeciality = async (id) => {
    const {data} = await $authHost.delete("/api/specializations/" + id)
    return data;
}
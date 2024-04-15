
import { $authHost, $host } from ".";

export const getMaterials = async () =>{
    const {data} = await $authHost.get('/api/materials/available')
    return data
}
export const addMaterial = async (material) =>{
    const {data} = await $authHost.post('/api/materials', material)
    return data;
}

export const deleteMaterial = async (id) => {
    const {data} = await $authHost.delete("/api/materials/" + id)
    return data;
}

export const updateMaterial = async (id) =>{
    
}
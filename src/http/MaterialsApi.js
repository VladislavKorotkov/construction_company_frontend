
import { $authHost, $host } from ".";

export const getMaterials = async () =>{
    const {data} = await $authHost.get('/api/materials/available')
    return data
}
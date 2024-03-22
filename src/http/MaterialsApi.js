
import { $authHost, $host } from ".";

export const getMaterials = async (username, password, name, surname, phoneNumber) =>{
    const {data} = await $authHost.get('/api/materials/available')
    return data
}
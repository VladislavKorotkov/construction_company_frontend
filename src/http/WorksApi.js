
import { $authHost, $host } from ".";

export const getWorks = async () =>{
    const {data} = await $authHost.get('/api/works')
    return data
}
export const addWork = async (work) =>{
    const {data} = await $authHost.post('/api/works', work)
    return data;
}

export const deleteWork = async (id) => {
    const {data} = await $authHost.delete("/api/works/" + id)
    return data;
}

export const updateWork = async (id) =>{
    
}
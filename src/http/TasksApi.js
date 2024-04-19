import { $authHost } from "."

export const deleteTask = async(projectId, taskId)=>{
    const {data} = await $authHost.delete("/api/tasks/"+taskId+"/project/"+projectId)
    return data
}

export const createTask = async(projectId, req)=>{
    const {data} = await $authHost.post("/api/tasks/project/"+projectId, req)
    return data
}

import { $authHost } from "."

export const deleteTask = async(projectId, taskId)=>{
    const {data} = await $authHost.delete("/api/tasks/"+taskId+"/project/"+projectId)
    return data
}

export const createTask = async(projectId, req)=>{
    const {data} = await $authHost.post("/api/tasks/project/"+projectId, req)
    return data
}

export const getTasks = async()=>{
    const {data} = await $authHost.get("/api/tasks/builder")
    return data
}

export const confirmTask = async(taskId)=>{
    const {data} = await $authHost.put("/api/tasks/"+taskId, {taskStatus: "COMPLETED"})
    return data
}
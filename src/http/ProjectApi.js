import { $authHost, $host } from ".";

export const getProjectsForUser = async () =>{
    const {data} = await $authHost.get('/api/projects/user')
    return data
}

export const getProjectsForAdmin = async () =>{
  const {data} = await $authHost.get('/api/projects')
  return data
}

export const getProjectsForForeman = async () =>{
  const {data} = await $authHost.get('/api/projects/foreman')
  return data
}

export const getProject = async(id)=>{
    const {data} = await $authHost.get('/api/projects/'+id)
    return data
}

export const getEstimateXlsx = async(id)=>{
    try {
        const response = await $authHost.get(`/api/projects/${id}/estimate/xlsx`, {
          responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'estimate.xlsx');
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error('Ошибка скачивания файла:', error);
      }
}

export const getContract = async(id)=>{
  try {
      const response = await $authHost.get(`/api/projects/${id}/contract`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'contract.docx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert('Ошибка скачивания файла');
    }
}

export const getProjectEstimate = async(id)=>{
  const {data} = await $authHost.get('/api/projects/'+id +'/estimate')
  return data
}
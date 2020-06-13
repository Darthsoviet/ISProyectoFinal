export async function getSO(url, signal) {
   let res = await fetch(`http://${url}/api/v1/get/so`, {
      signal: signal
   })
   let data = await res.json()

   return data

}

export async function deleteSO(url, id, signal) {
   await fetch(`http://${url}/api/v1/delete/sistemasOperativos/${id}`, {
      method: "DELETE",
      signal: signal
   })

}
export async function findByName(url, nombre) {
   let res = await fetch(`http://${url}/api/v1/get/sistemasOperativos/nombre/${nombre}`)
   let data = await res.json()

   return data


}

export async function postSO(url, data) {
   await fetch(`http://${url}/api/v1/post`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
         "Content-Type": "application/json"
      }
   })
   return await getSO(url)

}

export async function patchSO(url, data, id) {
   await fetch(`http://${url}/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
         "Content-type": "application/json"
      }
   })
   return await getSO(url)
}
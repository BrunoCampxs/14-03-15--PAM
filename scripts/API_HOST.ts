const API_HOST = 'http://dattebayo-api.onrender.com';
export default async function fetchCharacters(){

try{
const response = await fetch(`${API_HOST}/characters`)
if(!response.ok){
    throw new Error("Não foi possível buscar os personagens");
}
return await response.json();
} catch(error){
    console.log("error ao buscar personagens", error);
    return[];
}
}
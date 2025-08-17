//Este será el archivo para crear los fetchs que utilizaremos en la app

const urlBAse = "https://playground.4geeks.com/todo/"

// GET
//Hagamos un get de todos los usuarios de la API 
export const GetUsers = async ( )=>{
    try {
        const response = await fetch(`${urlBAse}users`)
        if(!response.ok){
            throw new Error("Hemos tenido un error en la solicitud",response.status)            
        };
        const data = await response.json()
        console.log(data)
        return data
        
    } catch (error) {
        console.log("Error",error)
    }
}






// PUT
// POST
// DELETE
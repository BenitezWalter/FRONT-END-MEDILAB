export const ctrlUser = {
    postLogin : async (url, DNI, contraseña) =>{

        console.log(url)
        console.log(DNI)
        console.log(contraseña)

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
        },
            method: 'POST',
            body: JSON.stringify({
            "nombreyape" : DNI,
            "password" : contraseña
        })
        })

        if (!json.ok){
            return alert('Error al hacer la peticion');
        }

        const data = await json.json()
        console.log(data.token)
        localStorage.setItem("Token", data.token)
    },

    postUser : async (url, rawUser) =>{

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
        },
            method: 'POST',
            body: rawUser
        })

        if (!json.ok){
            return alert('Error al hacer la peticion');
        }

        const data = await json.json()
        return console.log(data)
    }
}
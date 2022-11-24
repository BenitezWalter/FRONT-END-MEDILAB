// import {setHiddenAdmin, setHiddenMedic, setRole, setCodAdmin, setMatricula} from '../components/ModalRegistro'

export const ctrlForm = {
    campoUser : ()=>{
        console.log("user")
        setHiddenMedic(true);
        setHiddenAdmin(true);
        setRole("user");
        setMatricula("");
        setCodAdmin(""); 
        document.getElementById('MatriLabel').value = ""; 
        document.getElementById('CodLabel').value = ""
    },

    campoMedic : () => {
        setHiddenMedic(false);
        if(hiddenAdmin==false){
            setHiddenAdmin(true)
        };
        console.log("medic")
        setRole("medic");
        setCodAdmin(""); 
        document.getElementById('CodLabel').value = ""
    },

    campoAdmin : () => {
        setHiddenAdmin(false);
        if(hiddenMedic==false){
            setHiddenMedic(true)
        };
        setRole("admin"); 
        setMatricula(""); 
        document.getElementById('MatriLabel').value = ""
        console.log("admin")
    }
}
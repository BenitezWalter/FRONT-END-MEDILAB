import { useReducer } from "react";

export const authReducer = (state, action) => {
    switch (action.type) {
        case "[setRole]":
            if (state.role == "admin"){
                alert("notAdmin")
                return {...state, role:"notAdmin"}
            }else{
                alert("admin")
                return {...state, role:"admin"}
            }
        default:
            alert(action)
            return state
    }
}

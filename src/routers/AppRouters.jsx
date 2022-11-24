import { BrowserRouter, Route, Routes } from "react-router-dom"
import {PublicRoutes} from "./PublicRoutes"
import {PrivateRoutes} from "./PrivateRoutes"
import MainHistoriaClinica from '../pages/MainHistoriaClinica'

export const AppRouter = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ 
            <PublicRoutes>
                <MainHistoriaClinica/>
            </PublicRoutes>
            }/>

            <Route path='/home' element={ 
            <PrivateRoutes>
                <MainHistoriaClinica/>
            </PrivateRoutes>
            }/>
        </Routes>
    </BrowserRouter>
    )
}
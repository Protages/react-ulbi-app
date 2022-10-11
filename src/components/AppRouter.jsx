import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/routers'
import {AuthContext} from '../context/index'

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <>
        {isAuth
            ?<Routes>
                {privateRoutes.map(rout => 
                    <Route 
                        path={rout.path} 
                        element={rout.element} 
                        key={rout.path} 
                    />    
                )}
                <Route path="/*" element={<Navigate to="/posts" replace/>}/>
            </Routes>

            :<Routes>
                {publicRoutes.map(rout => 
                    <Route 
                        path={rout.path} 
                        element={rout.element} 
                        key={rout.path} 
                    />    
                )}
                <Route path="/*" element={<Navigate to="/login" replace/>}/>
            </Routes>
        }
        </>
    )
}

export default AppRouter

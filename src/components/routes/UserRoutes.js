import React from 'react'
import { Route,Links } from 'react-router-dom'
import { useSelector }  from 'react-redux'
import LoadingToRedirect  from './LoadingToRedirect'

const UserRoutes = ({children, ...rest}) => {
    const { user } = useSelector((state) => ({ ...state}))
    return user && user.token ?
     <Route { ...rest} /> 
     :
     (<LoadingToRedirect />)
    
}

export default UserRoutes

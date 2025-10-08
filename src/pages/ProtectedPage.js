import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

export const ProtectedPage = () => {
    const navigate = useNavigate();

    const isAuthed = false ;

    useEffect(()=>{
        if(!isAuthed) {
            navigate('/')
        }
    })

    return  (
        <h1>Only authenticated users can reach this page!</h1>
    )
}
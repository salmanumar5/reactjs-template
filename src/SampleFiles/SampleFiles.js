import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function SampleFiles() {
    const dispatch = useDispatch()
    const reduxData = useSelector(state => state.SampleReducer)
    
    useEffect(() => {
        
    }, [reduxData])

    return (
        <div className='border-red-500 text-center bg-red-600 border '>SampleFiles</div>
    )
}

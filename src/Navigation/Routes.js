import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SampleFiles from '../SampleFiles/SampleFiles'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/sample" exact element={<SampleFiles />} />
            
        </Routes>
    )
}

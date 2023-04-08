import React from "react"
import NavigationsBar from "../Navigations-Bar"
import { Route, Routes, useLocation } from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import HomePage from "../Pages/Home"
import ContentsPage from "../Contents-Page"
import ReadArtikel from "../Pages/Baca-Artikel"


const RouterPageTransitions = () => {

    const location = useLocation()

    return (
        <>
            <NavigationsBar>
                <AnimatePresence mode='wait'>
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/ContentsPage" element={<ContentsPage />} />
                        <Route path="/read-artikel" element={<ReadArtikel />} />
                    </Routes>
                </AnimatePresence>
            </NavigationsBar>
        </>
    )
}

export default RouterPageTransitions
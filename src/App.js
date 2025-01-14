import { useState, useEffect } from "react"

import Header from "./components/Header"
import Main from "./components/Main"

import data from "./data"

const App =()=> {

    // useState [container, setter function]
    const [ myData, setMyData ] = useState([])

    // useEffect(callback function, dependency array)
    useEffect(()=> {
        setMyData(data)
    }, [])


    return (
        <>
            <Header />
            <Main data={myData} />
        </>
    )
}

export default App
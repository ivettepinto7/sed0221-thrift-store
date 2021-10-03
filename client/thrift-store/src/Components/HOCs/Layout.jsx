import React from "react"
import Customnavbar from "../Customnavbar";

function Layout(props){
    return (
        <>
        <Customnavbar />
            {
                props.children
            }
        </>
    )
}

export default Layout

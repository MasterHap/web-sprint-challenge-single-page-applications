import React from "react";

const Completion = (props) => {
    console.log(props)
    return(
        <>Thanks for ordering {JSON.stringify(props.size)}</>
    )
    }
export default Completion
import React from "react";
import CollectorButton from "./CollectorButton";
import StylesContext from "../contexts/StylesContext";

export default function UserInterface (props) {
    const buttonStyle = React.useContext(StylesContext)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (<form onSubmit={handleSubmit}>
        <label>Name of Comic</label>
        <input type='text'></input>
        <label>Year of Release</label>
        <input type='text'></input>
        <label>Your Email</label>
        <input type='text'></input>
        <CollectorButton />
        <input type='submit' style={buttonStyle}/>
    </form>)
}

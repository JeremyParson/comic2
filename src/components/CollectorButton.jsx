import React, { useContext } from 'react'
import StylesContext from '../contexts/StylesContext'

export default function CollectorButton (props) {
    const buttonStyle = React.useContext(StylesContext)
    
    return (
        <div>
            <button style={buttonStyle}>
                Click Here!
            </button>
        </div>
    )
}
import React from 'react'
import M from 'materialize-css'

export default function Typography() {
    return (
        <div>
            <h1>Heading1</h1>
            <h2>Heading2</h2>
            <h3>Heading3</h3>
            <h4>Heading4</h4>
            <h5>Heading5</h5>
            <h6>Heading6</h6>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when

            <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</blockquote>
        
            <p className="flow-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>

            <p className="left-align">left aligned text</p>
            <p className="right-align">right aligned text</p>
            <p className="center-align">center aligned text</p>
        </div>
    )
}
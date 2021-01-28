import React from "react"

import "./IssueOptions.css"

const IssueOptions = props => {
    const options = [
        {
            text: "Sofa",
            handler: () => { },
            id: 1
        },
        { text: "Leather Sofa", handler: props.actionProvider.handleLeatherSofa, id: 2 },
        { text: "Carpet", handler: () => { }, id: 3 },
        { text: "House Cleaning", handler: () => { }, id: 4 },
        { text: "Kitchen", handler: () => { }, id: 5 },
        { text: "Bathroom", handler: () => { }, id: 6 },
        { text: "Full House", handler: () => { }, id: 7 },
    ]


    const optionsMarkup = options.map((option) => (
        <button
            className="issue-option-button"
            key={option.id}
            onClick={option.handler}>
            {option.text}
        </button>
    ))

    return <div className="issue-options-container">{optionsMarkup}</div>
}

export default IssueOptions 
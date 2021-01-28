import React from "react"

import "./IssueOptions.css"

const IssueOptions = props => {
    const options = [
        {
            text: "Sofa",
            handler: props.actionProvider.handlerSofa,
            id: 1
        },
        {
            text: "Leather Sofa",
            handler: props.actionProvider.handlerLeatherSofa,
            id: 2
        },
        {
            text: "Carpet",
            handler: props.actionProvider.handlerCarpet,
            id: 3
        },
        {
            text: "House Cleaning",
            handler: props.actionProvider.handlerHouseCleaning,
            id: 4
        },
        {
            text: "Kitchen",
            handler: props.actionProvider.handlerKitchen,
            id: 5
        },
        {
            text: "Bathroom",
            handler: props.actionProvider.handlerBathroom,
            id: 6
        },
        {
            text: "Full House",
            handler: props.actionProvider.handlerFullHouse,
            id: 7
        },
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
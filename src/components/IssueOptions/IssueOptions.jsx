import React from "react"

import "./IssueOptions.css"

const IssueOptions = props => {
    const options = [
        {
            text: "Not Enough ADM's",
            handler: () => { },
            id: 1
        },
        { text: "Not Enough Agency Associates", handler: () => { }, id: 2 },
        { text: "Low Recruiter Participation", handler: () => { }, id: 3 },
        { text: "Low Hiring Per Recruiter", handler: () => { }, id: 4 },
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
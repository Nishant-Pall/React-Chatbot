// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import IssueOptions from "./components/IssueOptions/IssueOptions"
import LinkList from "./components/LinkList/LinkList";

const config = {
    botName: "Sophie",
    initialMessages: [createChatBotMessage("Hi I'm Sophie from Clean Fanatic! What type of services do you need?", {
        widget: "issueOptions"
    })],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "issueOptions",
            widgetFunc: (props) => <IssueOptions {...props} />
        },
        {
            widgetName: "leathersofa",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Process of Cleaning",
                        url:
                            "",
                        id: 1,
                    },
                    {
                        text: "Charges",
                        url:
                            "",
                        id: 2,
                    },
                ],
            },
        },
    ],
}

export default config
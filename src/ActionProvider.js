// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }

    handlerSofa = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "leathersofa",
            }
        )
        this.updateChatbotState(message)
    }
    handleLeatherSofa = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "sofa",
            }
        )
        this.updateChatbotState(message)
    }
    handlerCarpet = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "carpet",
            }
        )
        this.updateChatbotState(message)
    }
    handlerKitchen = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "kitchen",
            }
        )
        this.updateChatbotState(message)
    }
    handlerBathroom = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "bathroom",
            }
        )
        this.updateChatbotState(message)
    }
    handlerFullHouse = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "fullhouse",
            }
        )
        this.updateChatbotState(message)
    }
    handlerHouseCleaning = () => {
        const message = this.createChatBotMessage(
            "What do you want to know?",
            {
                widget: "housecleaning",
            }
        )
        this.updateChatbotState(message)
    }

    updateChatbotState(message) {
        // NOTE: This function is set in the constructor, and is passed in
        // from the top level Chatbot component. The setState function here
        // actually manipulates the top level state of the Chatbot so it's
        // important that we make sure that we preserve the previous state.

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;
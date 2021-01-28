// MessageParser starter code
// We control two things, how the message is parsed, and what action to take based on said parsing
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("Leather Sofa")) {
            console.log("Clicked")
            this.actionProvider.handleLeatherSofa()
        }
    }
}

export default MessageParser;
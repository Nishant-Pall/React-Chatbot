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
            this.actionProvider.handlerLeatherSofa()
        }
        if (lowerCaseMessage.includes("Sofa")) {
            this.actionProvider.handlerSofa()
        }
        if (lowerCaseMessage.includes("Carpet")) {
            this.actionProvider.handlerCarpet()
        }
        if (lowerCaseMessage.includes("House Cleaning")) {
            this.actionProvider.handlerHouseCleaning()
        }
        if (lowerCaseMessage.includes("Kitchen")) {
            this.actionProvider.handlerKitchen()
        }
        if (lowerCaseMessage.includes("Bathroom")) {
            this.actionProvider.handlerBathroom()
        }
        if (lowerCaseMessage.includes("Full House")) {
            this.actionProvider.handlerFullHouse()
        }
    }
}

export default MessageParser;
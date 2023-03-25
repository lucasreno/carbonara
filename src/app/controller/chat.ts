import { Message } from "../interface/message";

export class Chat {
    messages: Message[] = [];

    pushMessage(message: Message) {
        this.messages.push(message);
    }

    addMessage(role: string, content: string) {
        const message: Message = {
            role: role,
            content: content
        };
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }

    toString() {
        return JSON.stringify(this.messages);
    }

    clearMessages() {
        this.messages = [];
    }

    getLastMessage() {
        return this.messages[this.messages.length - 1];
    }
}
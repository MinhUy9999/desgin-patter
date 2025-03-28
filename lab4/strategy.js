class Notifier {
    send(message) {
        throw new Error("Method 'send' must be implemented");
    }
}

class EmailNotifier extends Notifier {
    send(message) {
        console.log(`Sending message: ${message} (Sender: Email)`);
    }
}

class SMSNotifier extends Notifier {
    send(message) {
        console.log(`Sending message: ${message} (Sender: SMS)`);
    }
}

class NotificationService {
    constructor(notifier) {
        this.notifier = notifier;
    }

    sendNotification(message) {
        this.notifier.send(message);
    }
}

const service = new NotificationService(new SMSNotifier());
service.sendNotification("Hello world");
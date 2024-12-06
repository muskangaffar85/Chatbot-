document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // User input ko chat box mein add karna
    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);

        // Chat box ko scroll down karna taake latest message dikhai de
        chatBox.scrollTop = chatBox.scrollHeight;

        // User input ko clear karna
        userInput.value = '';

        // Bot response dena
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('chat-message', 'bot-message');
            botMessage.textContent = 'Thank you for your message! How can I assist you further?';
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
});


const greetings = {
    English: "Hello",
    Spanish: "¡Hola",
    French: "Bonjour"
  };
  
  const generateGreeting = (name, language = 'English') => {
    const greeting = greetings[language] || greetings['English'];
    return `${greeting}, ${name}!`;
  };
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  
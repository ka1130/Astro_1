import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  const handleClick = () => {
    console.log("click");
    setGreeting(randomMessage());
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleClick}>New Greeting</button>
    </div>
  );
}

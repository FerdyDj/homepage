"use client"
import { TypeAnimation } from 'react-type-animation';
 
export default function ExampleComponent() {
  return (
    <TypeAnimation
    sequence={[
        // Same substring at the start will only be typed once, initially
        "I'm Ferdy",
        1000,
        "I'm a Full Stack Web Developer",
        1000,
        "I'm a Front End Developer",
        1000,
        "I'm a Back End Developer",
        1000,
      ]}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
  );
};
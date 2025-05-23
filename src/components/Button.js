// src/components/Button.jsx
import React from 'react'; // Always needed for JSX
import './Button.css'; // Optional: for component-specific styles

function Button(props) {
  // props might include things like:
  // props.text (the button label)
  // props.onClick (a function to call when clicked)
  // props.type ('button', 'submit', 'reset' - defaults to 'button')
  // props.variant ('primary', 'secondary') for styling

  return (
    <button
      className={`custom-button ${props.variant ? `button-${props.variant}` : ''}`} // Example of dynamic class
      onClick={props.onClick}
      type={props.type || 'button'} // Default to 'button' if type isn't provided
    >
      {props.children || props.text || 'Click Me'} {/* props.children is powerful! */}
    </button>
  );
}

export default Button; // Makes the component available for import elsewhere
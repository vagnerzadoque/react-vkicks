// Ripple.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled component para o efeito de ondulação
const RippleContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const RippleEffect = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
type RippleType = {
    x: number;
    y: number;
    size: number;
  };
export const Ripple = ({ children, duration = 600 }) => {
    const [ripples, setRipples] = useState<RippleType[]>([]);

  useEffect(() => {
    if (ripples.length !== 0) {
      const timer = setTimeout(() => {
        setRipples(ripples.slice(1));
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [ripples, duration]);

  const addRipple = event => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };

    setRipples([...ripples, newRipple]);
  };

  return (
    <RippleContainer onMouseDown={addRipple}>
      {ripples.map((ripple, index) => (
        <RippleEffect
          key={index}
          style={{
            top: `${ripple.y}px`,
            left: `${ripple.x}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
          }}
        />
      ))}
      {children}
    </RippleContainer>
  );
};

export default Ripple;

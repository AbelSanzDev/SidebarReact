import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export const Button = ({
  children,
  onClick,
  StartSvg,

  RippleColor = "bg-[#ffffffb5]",

  className,
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples([]);
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, [ripples]);

  const createRipple = (event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
    };

    setRipples([...ripples, newRipple]);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <div>
        <button
          ref={buttonRef}
          className={`ripple-button ${className} p-2`}
          onClick={createRipple}
        >
          <div className="flex items-center gap-2">
            {!!StartSvg ? <div>{StartSvg}</div> : null}

            {children}
          </div>

          <div className="ripple-container">
            {ripples.map((ripple, index) => (
              <span
                key={index}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size,
                }}
                className={`ripple ${RippleColor}`}
              />
            ))}
          </div>
        </button>
      </div>
    </>
  );
};

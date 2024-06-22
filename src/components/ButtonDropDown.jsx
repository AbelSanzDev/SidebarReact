import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Button } from "./Button";
import { DropDownOptions } from "./DropDownOptions";

export const ButtonDropDown = ({
  children,
  onClick,
  StartSvg,
  isOpen,
  RippleColor = "bg-[#ffffffb5]",
  BgColor = "bg-[#a87abe]",
  className,
  Name,
  handleChangeDirectionTrue,
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);
  const [openDrop, setOpenDrop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples([]);
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, [ripples]);
  useEffect(() => {
    if (!isOpen) {
      setOpenDrop(false);
    }
  }, [isOpen]);
  const createRipple = (event) => {
    if (!isOpen) {
      handleChangeDirectionTrue();
    }

    setOpenDrop(!openDrop);
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
          className={`ripple-button  ${className} p-2`}
          onClick={createRipple}
        >
          <div className="flex items-center gap-2">
            {!!StartSvg ? <div>{StartSvg}</div> : null}

            {Name}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7l10 10L22 7"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
            </svg>
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
        <div className="grid  place-items-center ">
          <div
            className={`transition-all duration-300 w-[90%] delay-0 overflow-hidden ${BgColor} rounded-b-md ${
              openDrop ? "max-h-screen" : "max-h-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

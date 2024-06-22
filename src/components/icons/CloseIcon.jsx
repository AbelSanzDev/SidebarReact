export const CloseIconSvg = ({ isOpen }) => {
  return (
    <div className={`w-8 `}>
      <svg
        className={`transition-all duration-500 ${
          isOpen ? "" : "transform rotate-180"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4V20M8 12H20M8 12L12 8M8 12L12 16"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export function MyBuntton({ children, className, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#fff] shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] transition duration-200 ease-in-out max-[500px]:h-8 max-[500px]:w-8 ${className || ""} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-[#8351fe]"}`}
    >
      {children}
    </button>
  );
}

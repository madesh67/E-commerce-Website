function Button({
  text,
  variant = "primary",
  classes = 'px-6 py-3 rounded-[4px]',
}) {
  const styles = {
    primary: "bg-[#7B5EA7] hover:bg-[#5B457B] text-white",
    secondary:
      "border border-white/10 bg-transparent hover:bg-white/5 text-white",
  };

  return (
    <button
      className={`${classes} text-[15px] font-semibold transition-all duration-300 cursor-pointer ${styles[variant]}`}
    >
      {text}
    </button>
  );
}

export default Button;

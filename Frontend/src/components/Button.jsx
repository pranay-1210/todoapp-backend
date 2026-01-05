const Button = ({ btnType, btnText, handler }) => {
  let baseClasses =
    "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  let typeClasses = "";

  if (btnType === "success") {
    typeClasses =
      "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 focus:ring-emerald-400 shadow-md";
  } else if (btnType === "danger") {
    typeClasses =
      "bg-gradient-to-r from-rose-500 to-red-600 text-white hover:from-rose-600 hover:to-red-700 focus:ring-rose-400 shadow-md";
  } else {
    typeClasses =
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:ring-indigo-400 shadow-md";
  }

  return (
    <button
      onClick={handler}
      className={`${baseClasses} ${typeClasses}`}
    >
      {btnText}
    </button>
  );
};

export default Button;

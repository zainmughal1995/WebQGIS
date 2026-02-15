// src/components/ToolButton.jsx

export default function ToolButton({
  icon,
  tooltip,
  active,
  disabled,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      title={tooltip}
      disabled={disabled}
      className={`
        w-[24px] h-[24px]
        flex items-center justify-center m-1
        border border-transparent
        hover:bg-[#e6e6e6]
        active:bg-[#dcdcdc]
        ${active ? "bg-[#d0d0d0]" : ""}
        ${disabled ? "opacity-40 pointer-events-none" : ""}
      `}
    >
      <img
        src={icon}
        alt=""
        draggable={false}
        className="w-[30px] h-[30px] pointer-events-none"
      />
    </button>
  );
}

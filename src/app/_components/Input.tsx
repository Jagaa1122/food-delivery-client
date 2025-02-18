export default function Input({
  placeholder,
  errortext,
  name,
  onChange,
  type,
}: Inputprops) {

  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      <p className="text-[#334155] text-[14px] font-semibold">
       
      </p>
      <input
        onChange={onChange}
        name={name}
        type={type}
        className={`text-black ${type == "file" ? "h-[100px]" : "" } flex p-3 items-center self-stretch rounded-lg border-[1px] border-solid  ${
          errortext ? "border-[#e14942]" : "border-[#8b8e95]"
        }
         focus:outline-none focus:border-[#0ca5e9]  `}
        placeholder={placeholder}
      />
      <p className="text-[#e14942] text-[13px]">{errortext}</p>
      {/* {errormessage} */}
    </div>
  );
}
//

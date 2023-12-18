import * as React from "react";
type InputProps<T> = {
  value: T;
  placeholder: string;
  setter: React.Dispatch<React.SetStateAction<T>>;
  type: string | null;
};

const Input: React.FC = (props: InputProps) => {
  const { value, placeholder, setter, type } = props;
  //   console.log(value,placeholder,setter);
  //   console.log(props);
  return (
    <div className="w-full mb-2.5">
      <input
        className="trans w-full text-zinc-300 px-3 py-4 rounded rounded-[9px] bg-[#2e2e2e] border border-[.15rem] border-zinc-600 focus:outline-none focus:border-zinc-400"
        type={type ?? "text"}
        // type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setter(e?.target?.value)}
        onBlur={() => console.log(value)}
      />
    </div>
  );
};
    
export default Input;

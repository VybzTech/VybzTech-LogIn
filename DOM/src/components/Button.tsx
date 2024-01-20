/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import { Puff } from "react-loading-icons";

type ButtonProp = {
  name: string;
  fnc: Object;
  //   clicked: Function;
};
const Button = (props: ButtonProp) => {
  const { name, fnc } = props;
  //   return <div className="px-7 py-3.5">{name}</div>;
  const [clicked, setClicked] = React.useState(false);
  return (
    <button type="submit"
      className="btn trans flex justify-center text-zinc-300 w-full px-7 py-4 rounded rounded-xl text-center hover:tracking-tight"
      onClick={(e) => {
        e.target?.classList.toggle("animate-bounce");
        setClicked((c) => (c = !c));
        // console.log(e.target?.classList.toggle('animate-bounce'));
        e.preventDefault();
        fnc;
      }}
      onBlur={(e) => {
        e.target?.classList.toggle("animate-bounce");
        // setClicked((c) => (c = !c));
      }}
    >
      {clicked ? <Puff speed={0.75} width={20} height={24} /> : name}
    </button>
  );
};

export default Button;

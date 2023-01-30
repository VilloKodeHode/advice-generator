import "./App.css";
import { useState, useEffect } from "react";
import DIVIDERDESKTOP from "./assets/pattern-divider-desktop.svg";
import DIVIDERMOBILE from "./assets/pattern-divider-mobile.svg";
import DICE from "./assets/icon-dice.svg";

const advice = "https://api.adviceslip.com/advice";

const FetchAdvice = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getAdvice() {
      const response = await fetch(advice);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getAdvice();
  }, [count]);
  return (
    <>
      <div className="h-screen w-screen grid items-center relative bg-design-DarkBlue font-Manrope">
        <div className="mm:w-96 w-80 h-fit p-4 bg-design-DarkGrayishBlue grid m-auto rounded-xl">
          <div className="h-full w-full grid items-center grid-flow-row bg-design-DarkGrayishBlue m-auto relative ">
            <p className="text-design-NeonGreen text-xs tracking-[0.2rem] p-6">
              ADVICE # {data ? data.slip.id : ""}
            </p>
            <p className="text-design-LightCyan text-[24px]">
              “{data ? data.slip.advice : "Loading..."}”
            </p>
            <div>
              <div className="divider">
                <img
                  src={DIVIDERDESKTOP}
                  className="absolute mm:block hidden"
                />
                <img src={DIVIDERMOBILE} className="absolute mm:hidden block" />
              </div>
            </div>
          </div>
          <div className="h-6 content-center">
            <button
              className="h-14 w-14 z-50 rounded-full bg-design-NeonGreen translate-y-[20%]"
              onClick={() => {
                setCount(count + 1);
                console.log("click");
              }}
            >
              <img src={DICE} className="m-auto h-5 w-5 animate-DiceSpin" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchAdvice;

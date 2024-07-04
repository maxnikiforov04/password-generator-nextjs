import Image from "next/image";
import copyIcon from "../../public/10-filecopy.svg";
import { useState } from "react";
import { Slider, colors } from "@mui/material";
import { Checkbox } from "@mui/material";
import usePassword from "@/hooks/use-password";

const PassGen = () => {
  const [copied, setCopied] = useState(false);
  const [checkArray, setCheckArray] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckBoxChange = (i: number, check: any) => {
    let updatedCheckboxData = [...check];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckArray(updatedCheckboxData);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const [passLen, setPassLen] = useState<any>(4);
  const { password, errorMessage, generatePassword } = usePassword();
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-row justify-center items-center">
      <div className="w-1/4 h-4/5">
        <div className="appName w-full flex justify-center pb-5">
          <h1 className="text-3xl">Password Generator</h1>
        </div>
        <div className="mainContainer w-full h-full ">
          <div className="passContainer opacity-100 bg-zinc-900 w-full h-20 flex">
            <div className="password w-4/5 h-full flex pl-10 items-center text-2xl">
              {password}
            </div>
            <div className="copy w-1/5 h-full  flex justify-center items-center">
              <Image
                priority
                src={copyIcon}
                alt="123"
                width={40}
                height={40}
                className="cursor-pointer"
                onClick={handleCopy}
              ></Image>
            </div>
          </div>
          <div className="settings w-full h-4/5 bg-zinc-900 mt-5">
            <div className="flex justify-between text-2xl pt-10">
              <div className="pl-10">Characters length</div>
              <div className="pr-10 text-pink-400">{passLen}</div>
            </div>
            <div className="pl-10 pr-10 pt-10">
              <Slider
                defaultValue={1}
                shiftStep={1}
                step={1}
                min={4}
                max={12}
                onChange={(_, value) => setPassLen(value)}
                color="secondary"
              ></Slider>
              {checkArray.map((cbox, index) => (
                <div className="flex justify-between mt-5 ">
                  <Checkbox
                    key={index}
                    checked={cbox.state}
                    sx={{ color: "white", width: "20px" }}
                    onChange={() => handleCheckBoxChange(index, checkArray)}
                  ></Checkbox>
                  <div className="flex items-center">{cbox.title}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-20">
              <div
                className="bg-pink-400 w-4/5 h-20 text-fuchsia-50 text-3xl rounded-lg flex items-center justify-center cursor-pointer"
                onClick={() => generatePassword(checkArray, passLen)}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PassGen };

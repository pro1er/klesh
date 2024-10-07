import React from "react";

export default function AboutUs() {
  return (
    <div className="h-[60vh] w-full bg-gray-200 flex p-14 min-[1920px]:px-[200px] min-[2400px]:px-[400px]  min-[3000px]:px-[700px]" id="about">
      <div className="bg-white px-[212px] flex justify-center flex-col gap-8 w-2/3">
        <h1 className=" text-[56px] font-bold">About us</h1>
        <p className="text-[18px] leading-10">
          At Klesh, we are passionate about delivering superior <br/>cleaning
          solutions to our customers. Our mission is to offer <br/> innovative German
          technology products that elevate your<br/> cleaning experience.
        </p>
      </div>
      <img src="/logo/3.png" className="h-full w-1/3"/>
    </div>
  );
}

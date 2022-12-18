import React from "react";
import Haan from "../../../Assets/Images/main_Haan_senitaizers.webp";

const Main = () => {
  return (
    <section className="border-b-2">
      <div className="contianer grid grid-cols-1 sm:grid-cols-12">
        <div className="grid col-span-7 sm:order-2">
          <img src={Haan} alt="" />
        </div>
        <div className="col-span-5 border-r-2 flex flex-col justify-center items-center sm:order-1">
          <div>
            <h1 className="flex flex-col text-4xl">
              <span className="font-bold">Haan</span>
              <span className="font-bold">Sanitaizers</span>
            </h1>
            <p>Turning care around</p>
          </div>
          <div className="flex flex-row border-t-2">
            <div></div>
            <div>
                <p>3-5 working days delivery</p>
            </div>
            <div>
                <p>Free shipping over 35C</p>
            </div>
            <div>
                <p>Within all Europe</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

"use client";
import Image from "next/image";
import React from "react";
import { CustomButton } from ".";

function Hero() {
  const handleScroll = (e: any): void => {
    console.log("e-------------------------->", e);
  };

  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find, Book or Rent a Car - Quickly and easily!
          </h1>
          <p className="hero__subtitle">
            Streamline your car Rental Exprience with our effortless booking
            process.
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

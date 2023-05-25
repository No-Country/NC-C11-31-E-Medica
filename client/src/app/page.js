"use client";
import { Hero } from "./components/Hero/Hero";
import TurnSteps from "./components/turnSteps/TurnSteps";
import WrapperGrid from "./components/specialties/Wrapper-grid";
import Gallery from "./components/Gallery/Gallery";
import ChatBotComponent from "./components/Chatbot/Chatbot";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("das");
    const queryParams = new URLSearchParams(window.location.search); //window is not defined deploy fallido
    const codeValue = queryParams.get("code");
    console.log(codeValue);
    console.log("asd");
  }, []);
  return (
    <>
      <Hero />
      <WrapperGrid />
      <TurnSteps />
      <Gallery />
      <ChatBotComponent />
    </>
  );
};

export default Page;

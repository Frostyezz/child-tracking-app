import React from "react";
import StepCarousel from "./components/StepCarousel";
import ParentRegisterAccount from "./components/ParentRegisterAccount";

const ParentRegister: React.FC = () => {
  return (
    <StepCarousel>
      <ParentRegisterAccount />
      <div>saa</div>
    </StepCarousel>
  );
};

export default ParentRegister;

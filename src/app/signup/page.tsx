"use client";
import { useState } from "react";
import SignUp1 from "../_components/SignUp1";
import SignUp2 from "../_components/SignUp2";
import { UploadCloudinary } from "../_components/CloudinaryUpload";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [SignUp1, SignUp2][currentStep];
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center pt-[182px] px-[480px] pb-[187px] ">
      <FormSteps
        currentStep={currentStep}
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
        goBack={() => {
          setCurrentStep(currentStep - 1);
        }}
      />
      {/* <UploadCloudinary /> */}
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";


export default function SignUp2({ currentStep, onClick, goBack } : singupprops) {
    const [formValues, setFormValues] = useState({
      email: ""
     
    });
  
    const [formErrors, setFormErrors] = useState({
      email: ""
      
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      setFormValues((prev) => ({ ...prev, [name]: value }));
    };
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = { ...formErrors };
  
      if (!formValues.email.trim()) {
        newErrors.email = "Email address is required";
        isValid = false;
      } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
        newErrors.email = "Enter valid email";
        isValid = false;
      }
  
    

  
      setFormErrors(newErrors);
      return isValid;
    };
  
    const handleClick = () => {
      const isValid = validateForm();
  
      if (isValid) {
        onClick();
      }
    };
  

  return (
    <div className="w-[416px] h-[288px] absolute top-[326px] left-[100px] flex flex-col gap-6">
      <Button variant="outline" className="w-5">
        <ChevronLeft />
      </Button>
      <div>
        <h1 className="text-[#202124] font-bold text-[26px]">
         Create a strong password
        </h1>
        <p className="text-[#8E8E8E] mb-5">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <Input 
      placeholder="Password"/>
        <Input 
      placeholder="Confirm"/>
    
      <Button  className="bg-slate-400 text-white" onClick={handleClick}>
          Let's Go
        </ Button>
      <p className="self-center">
        {" "}
        Already have an account? {""}
        <span className="text-blue-500 cursor-pointer">Log in</span>
      </p>
    </div>
  );
}


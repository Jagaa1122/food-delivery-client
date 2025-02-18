"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  //   const [formValues, setFormValues] = useState({
  //     email: "",
  //     phoneNumber: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  return (
    <div className="w-[416px] h-[288px] absolute top-[326px] left-[100px] flex flex-col gap-6">
      <Button variant="outline" className="w-5">
        <ChevronLeft />
      </Button>
      <div>
        <h1 className="text-[#202124] font-bold text-[26px]">
          Create your account 😎
        </h1>
        <p className="text-[#8E8E8E] mb-5">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <Input />
      <Button variant="outline" className="bg-slate-400 text-white">
        Let's Go
      </Button>
      <p className="self-center">
        {" "}
        Already have an account? {""}
        <span className="text-blue-500 cursor-pointer">Log in</span>
      </p>
    </div>
  );
}

import React,{ ReactNode } from "react";
import Logo from "./_components/Logo";


type Props= { children: ReactNode;
};

const Sidebar = () => {
    return (
      <div className="w-[205px] min-h-[100vh]">
        <Logo/>
  
      </div>
    );
  };
   
const Layout = (props: Props) => {
    return (
    <div className="flex">
        <Sidebar/>
    {props.children}
    </div>
    );
};

export default Layout;
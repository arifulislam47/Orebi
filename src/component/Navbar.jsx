import React from "react";
import Container from "../layer/Container";

import { FaBars, FaBeer, FaRegWindowClose, FaWindowClose } from "react-icons/fa";
import Li from "../layer/Li";
import DropdownButton from "./DropDown";

function Navbar() {
  return (
    <nav>
      <Container>
        <div className="main flex items-center phone:justify-between">
          <div>
            <img className="py-[31px]" src="/Logo.png" alt="Logo.png" />
          </div>
          <ul className=" justify-center gap-10 w-full flex ipadmini:flex  phone:hidden">
            <Li
              to="/"
              className=" text-[#262626] font-dmSans font-bold text-[16px]"
              litext="Home"
            />
            <Li
              to="/Shop"
              className=" text-[#767676] font-dmSans font-bold text-[16px]"
              litext="Shop"
            />
            <Li
              to="/About"
              className=" text-[#767676] font-dmSans font-bold text-[16px]"
              litext="About"
            />
            <Li
              to="/contacts"
              className=" text-[#767676] font-dmSans font-bold text-[16px]"
              litext="Contacts"
            />
            <Li
              to="/Journal"
              className=" text-[#767676] font-dmSans font-bold text-[16px]"
              litext="Journal"
            />
          </ul>
          <div className=" ipadmini:hidden">
            <DropdownButton />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

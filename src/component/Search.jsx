import React, { useState } from "react";
import Container from "../layer/Container";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

function Search() {
  const [Hover, setHover] = useState(false);

  let Category = [
    "Accesories",
    "Furniture",
    "Electronics",
    "Clothes",
    "Bags",
    "Home appliances",
  ];

  return (
    <div className="bg-[#F5F5F3] ">
      <Container>
        <div className="flex justify-between py-[25px] items-center">
          <details className="relative">
            <summary className="flex gap-[11px] items-center cursor-pointer z-50">
              <HiOutlineMenuAlt2
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                className="text-[20px] "
              />
              <div className="font-dmSans text-[14px] phone:hidden desktop:block text-[#262626]">
                Shop by Category
              </div>
            </summary>

            <ul className=" absolute text-left top-[100%] mt-[23px] left-0 z-50 ">
              {Category.map((item, index) => (
                <li
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={index}
                  className="cursor-pointer hover:pl-[31px] duration-300 py-4 pl-5 w-[263px] bg-black hover:text-white  text-white font-dmSans text-[14px] hover:font-bold border-b-2 border-[#2d2d2d]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </details>

          <div className="relative">
            <FaSearch className="text-[20px] absolute right-[21px] cursor-pointer bottom-[50%] translate-y-[50%]" />
            <input
              className=" ipadmini:block phone:hidden py-[16px] phone:w-[150px]  ipadmini:w-[300px] desktop:w-[601px] pl-[23px]"
              placeholder="Search Products"
              type="text"
            />
          </div>

          <div className="flex gap-[42px] items-center">
            <details className="relative">
              <summary className="flex gap-[11px] items-center cursor-pointer z-50">
                <FaUser className="text-[20px] " />
                <FaCaretDown cslassName="text-[20px] " />
              </summary>

              <ul className=" absolute text-center top-[100%] mt-[15.60px] left-full -translate-x-[100%] z-50">
                <li className=" cursor-pointer pt-[17px] pb-[15px] w-[200px] hover:bg-black hover:text-white bg-[#ebebeb] text-black font-dmSans text-[14px] font-bold border-b-2 border-[#c3c3c3]">
                  My Account
                </li>
                <li className="cursor-pointer pt-[17px] pb-[15px] w-[200px] hover:bg-black hover:text-white bg-[#ebebeb] text-black font-dmSans text-[14px] font-bold ">
                  Log Out
                </li>
              </ul>
            </details>
            <FaShoppingCart className="text-[20px] cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;

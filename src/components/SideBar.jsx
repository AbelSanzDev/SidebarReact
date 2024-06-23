import { useContext, useState } from "react";
import { Button } from "./Button";
import { CloseIconSvg } from "./icons/CloseIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ButtonDropDown } from "./ButtonDropDown";
import { AppContex } from "./AppContex";

export const SideBar = ({
  children,
  ButtonColor = "bg-[#a87abe]",
  BgColor = "bg-[#1c1c1c]",
  BgImage = "",
  Name = "",
  src = "",
  Icon = <HomeIcon />,
  TxtColor,
}) => {
  const { isOpen, setIsOpen } = useContext(AppContex);
  const handleChangeDirection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {" "}
      <div
        className={` transition-all duration-500 ${
          isOpen ? "md:w-[280px] w-[40px]" : "lg:w-[120px] w-[40px]"
        } `}
      >
        <div className=" fixed">
          <div
            className={`${
              isOpen ? " lg:static relative" : "lg:static relative"
            } `}
          >
            <div
              className={` transition-all duration-500 lg:w-full ${
                isOpen ? "w-[230px]" : "w-[8px]"
              } `}
            >
              <div className=" relative">
                <div className=" absolute -right-7  mt-[1px] z-10">
                  <Button
                    onClick={() => {
                      handleChangeDirection();
                    }}
                    className={`${ButtonColor} text-white w-auto rounded-full`}
                  >
                    <CloseIconSvg isOpen={isOpen} />
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={` transition-all duration-500 ${
                isOpen ? "w-[240px]" : "lg:w-[5rem] w-[1rem]"
              } h-lvh ${BgImage === "" ? BgColor : BgImage}   ${
                isOpen ? " lg:static absolute" : "lg:static absolute"
              } overflow-scroll `}
            >
              <div className=" relative">
                <div
                  className={` transition-all lg:block ${
                    isOpen ? "block" : "hidden"
                  } `}
                >
                  <div className="">
                    <div
                      className={` ${isOpen ? "mx-[10%]" : "mx-0"} ${
                        Name === "" && src === ""
                          ? ""
                          : "border-b border-gray-500 pt-5"
                      }  `}
                    >
                      <div className="grid place-items-center">
                        {src === "" ? null : (
                          <>
                            <img
                              className={` transition-all duration-500 ${
                                isOpen ? "w-[7rem]" : "w-[4rem]"
                              }   pt-4`}
                              src={src}
                              alt="Logo"
                            />
                          </>
                        )}
                        {Name === "" ? null : (
                          <>
                            <h1
                              className={` transition-all duration-500 ${TxtColor} ${
                                isOpen ? "text-3xl" : "text-md"
                              }  font-thin mb-4`}
                            >
                              {Name}
                            </h1>
                          </>
                        )}
                      </div>
                    </div>
                    {/**Button--nav */}
                    <div className="">
                      <div className="mt-4 pl-0 ">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";

function Experiance() {
    const cardItem = [
        {
          id: 1,
          logo: html,
          name: "html",
        },
        {
          id: 2,
          logo: css,
          name: "CSS",
        },
        {
          id: 3,
          logo: javascript,
          name: "JavaScript",
        },
        
        
        
    ];
  return (
    <>
        <div name='Experiance' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experiance</h1>
                <p className="  ">
                    I've done Two Month Internship in below technologies from Indian Metrological Department, Delhi.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                            key={id}
                            >
                            <img src={logo} className="w-[150px] rounded-full" alt="" />
                            <div>
                                <div className="">{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="  ">
                    I've done One Month Online Internship in below technologies from CODSOFT.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    <div className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300">
                        <img src={java} className="w-[150px] rounded-full" alt="" />
                        <div>
                            <div className="">Java</div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Experiance
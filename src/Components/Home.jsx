import React from 'react';
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialYoutube, TiSocialTwitter  } from "react-icons/ti";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { SiExpress } from "react-icons/si";
import { DiMongodb, DiNodejsSmall } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import Profile from "../assets/photo.avif"
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
        <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-28'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className='text-xl'>Welcome In My Feed</span>
              <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello, I am</h1>
                
                <ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />
              <p className='text-sm md:text-md text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda 
                eius! Voluptas totam voluptates accusamus architecto. Nihil expedita temporibus
                 totam, nisi iure quas, sequi dolores quia, corrupti ducimus pariatur sapiente!
              </p>
              <br />
              {/* Social media icon */}
              <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className=' space-y-2'>
                  <h1 className='font-bold text-left md:text-center'>Available on :</h1>
                  <div className='flex space-x-5'>
                    <a href="https://www.facebook.com/" target="_blank"><TiSocialFacebookCircular className='text-2xl cursor-pointer' /></a>
                    <a href="https://www.instagram.com/" target="_blank"><TiSocialInstagram className='text-2xl cursor-pointer' /></a>
                    <a href="https://www.youtube.com/" target="_blank"><TiSocialYoutube className='text-2xl cursor-pointer' /></a>
                    <a href="https://www.linkedin.com/" target="_blank"><SlSocialLinkedin className='text-2xl cursor-pointer' /></a>
                    <a href="https://www.github.com/" target="_blank"><SlSocialGithub className='text-2xl cursor-pointer' /></a>
                    <a href="https://www.x.com/" target="_blank"><TiSocialTwitter className='text-2xl cursor-pointer' /></a>
                  </div>
                </div>
                <div className=' space-y-2'>
                  <h1 className='font-bold text-left md:text-center'>Currently Working on :</h1>
                  <div className='flex space-x-5'>
                    <DiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <DiNodejsSmall className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
              <img
                src={Profile}
                className="rounded-full md:w-[450px] md:h-[450px]"
                alt="pic"
              />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

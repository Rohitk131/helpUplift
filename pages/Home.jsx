import React from "react";
import Navbar from "../src/Components/Navbar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import socialWorkImage from "/social-work.png";
import userImage from "/user.png";
import teamworkImage from "/teamwork.png";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <img
          src="https://img.freepik.com/free-vector/volunteering-concept-illustration_114360-2466.jpg?w=740&t=st=1706989475~exp=1706990075~hmac=f8ebbf3c8c422b1e945a0dbe726f30b7882c5180026745255a7cfaa7110d86d9"
          className="w-auto h-[650px] float-right pr-24 pt-20 "
        />
        <div className="font-poppins absolute top-[200px] left-[100px] text-black text-7xl font-bold">
          Welcome to
          <br />
          <span className="text-green-400 text-8xl font-poppins"> HelpUplift</span>
        </div>
        <p className="font-poppins absolute top-[400px] left-[-280px] right-[280px] text-gray-700 text-2xl font-semibold px-96 text-start mt-2">
          Empowering Change Through Volunteerism
          <br />
          <br />
          Join us in making a difference. HelpUplift is your platform to
          discover and engage in meaningful volunteer opportunities. Together,
          let's create positive change in our communities and beyond.
        </p>
      </div>
      <div className="bg-green-300 rounded-3xl flex justify-evenly m-10 shadow-xl shadow-gray-400">
        <Card className="rounded-2xl w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <img
              src={socialWorkImage}
              className="w-fit h-[100px] mx-auto "
            ></img>
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto font-pixelify-sans">2000+</p>
          </CardContent>
          <CardFooter>
            <p className="text-3xl w-fit mx-auto font-poppins">Volunteers</p>
          </CardFooter>
        </Card>
        <Card className="rounded-2xl w-[20vw] h-[300px] my-[100px] ">
          <CardHeader>
            <img src={userImage} className="w-fit h-[100px] mx-auto "></img>
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto font-pixelify-sans">100+</p>
          </CardContent>
          <CardFooter>
            <p className="text-3xl w-fit mx-auto font-poppins">Organizations</p>
          </CardFooter>
        </Card>
        <Card className="rounded-2xl w-[20vw] h-[300px] my-[100px] ">
          <CardHeader>
            <img src={teamworkImage} className="w-fit h-[100px] mx-auto"></img>
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto font-pixelify-sans">60+</p>
          </CardContent>
          <CardFooter>
            <p className="text-3xl w-fit mx-auto font-poppins">Social Causes</p>
          </CardFooter>
        </Card>
      </div>

      <div className=" shadow-xl shadow-gray-400 bg-sky-950 bg-blue-500 rounded-3xl justify-evenly m-10 py-10">
        <h1 className="text-6xl font-bold w-fit mx-auto text-white font-poppins">
          About our Program
        </h1>
        <div className="m-10">
          <h2 className="font-bold text-2xl mb-5 text-white font-poppins">
            Welcome to Our Social Impact Platform
          </h2>
          <p className="font-semibold text-white font-poppins">
            Our platform is a dedicated space for connecting passionate
            individuals and organizations committed to making a difference in
            their communities. Whether you're an organization with a social
            project in need of volunteers or an individual looking to lend a
            helping hand, our platform is designed to facilitate meaningful
            collaborations and drive positive change.
          </p>
          <h2 className="font-bold text-2xl mt-10 mb-5 text-white font-poppins">
            Join Us in Making a Difference
          </h2>
          <p className="font-semibold text-white font-poppins">
            Whether you're an organization with a vision for change or an
            individual eager to contribute, we invite you to join our community
            and be part of the collective effort to create a positive social
            impact. Together, we can make a difference and create a brighter
            future for all.
          </p>
        </div>
      </div>

      <div className="rounded-3xl m-0 pt-16">
        <h1 className="text-6xl font-extrabold w-fit mx-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-poppins">Our Sponsers</h1>
        <div className="flex justify-evenly mt-[-10px]">
          <Card className=" w-[20vw] h-[300px] my-[100px] shadow-lg shadow-gray-300 rounded-3xl">
            <CardHeader>
              <SiGithub className="w-fit h-[100px] mx-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl w-fit mx-auto mt-10 font-poppins">Github</p>
            </CardContent>
          </Card>
          <Card className=" w-[20vw] h-[300px] my-[100px] shadow-lg shadow-gray-300 rounded-3xl">
            <CardHeader>
              <FaLinkedin className="w-fit h-[100px] mx-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl w-fit mx-auto mt-10 font-poppins">LinkedIn</p>
            </CardContent>
          </Card>
          <Card className=" w-[20vw] h-[300px] my-[100px] shadow-lg shadow-gray-300 rounded-3xl">
            <CardHeader>
              <SiFigma className="w-fit h-[100px] mx-auto " />
            </CardHeader>
            <CardContent>
              <p className="text-5xl w-fit mx-auto mt-10 font-poppins">Figma</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className=" w-[90vw] mx-auto bg-gray-500 rounded-2xl my-10 pt-10 pb-10 ">
        <div className="text-6xl font-extrabold w-fit mx-auto underline text-white font-poppins">FAQ's</div>
        <Accordion type="single" collapsible className="m-20 text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-poppins">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-poppins">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-poppins">Is it styled?</AccordionTrigger>
            <AccordionContent className="font-poppins">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-poppins">Is it animated?</AccordionTrigger>
            <AccordionContent className="font-poppins">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;

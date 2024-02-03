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
import { IoEarth } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";




const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <img
          src="../src/assets/cover.jpg"
          className="w-full h-[774px] z-[-1]"
        />
        <div className="absolute top-[650px] left-[200px] text-white text-7xl font-bold">
          helpUplift
        </div>
      </div>
      <div className="border border-black rounded-md flex justify-evenly m-10">
        <Card className="border border-black w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <FaUserAlt className="w-fit h-[100px] mx-auto" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto">2000+</p>
          </CardContent>
          <CardFooter>
            <p className="text-3xl w-fit mx-auto">Volunteers</p>
          </CardFooter>
        </Card>
        <Card className="border border-black w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <BsBuildings className="w-fit h-[100px] mx-auto" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto">100+</p>
          </CardContent>
          <CardFooter>
            <p className="text-3xl w-fit mx-auto">Organizations</p>
          </CardFooter>
        </Card>
        <Card className="border border-black w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <IoEarth className="w-fit h-[100px] mx-auto" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto">50+</p>
          </CardContent>
          <CardFooter>
            <p className="text-3xl w-fit mx-auto">Social Causes</p>
          </CardFooter>
        </Card>
      </div>

      <div className="border border-black rounded-md w-[70vw] mx-auto my-10">
        <h1 className="text-6xl font-bold w-fit mx-auto underline">
          About our Program
        </h1>
        <div className="m-10">
          <h2 className="font-bold text-2xl mb-5">
            Welcome to Our Social Impact Platform
          </h2>

          <p>
            Our platform is a dedicated space for connecting passionate
            individuals and organizations committed to making a difference in
            their communities. Whether you're an organization with a social
            project in need of volunteers or an individual looking to lend a
            helping hand, our platform is designed to facilitate meaningful
            collaborations and drive positive change.
          </p>
          <h2 className="font-bold text-2xl mt-10 mb-5">
            Join Us in Making a Difference
          </h2>
          <p>
            Whether you're an organization with a vision for change or an
            individual eager to contribute, we invite you to join our community
            and be part of the collective effort to create a positive social
            impact. Together, we can make a difference and create a brighter
            future for all.
          </p>
        </div>
      </div>

      <div className="border border-black rounded-md m-10">
        <h1 className="text-6xl font-bold w-fit mx-auto">Our Sponsers</h1>
        <div className="flex justify-evenly">
        <Card className="border border-black w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <SiGithub className="w-fit h-[100px] mx-auto" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto">Github</p>
          </CardContent>
        </Card>
        <Card className="border border-black w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <FaLinkedin className="w-fit h-[100px] mx-auto" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto">LinkedIn</p>
          </CardContent>
        </Card>
        <Card className="border border-black w-[20vw] h-[300px] my-[100px]">
          <CardHeader>
            <SiFigma className="w-fit h-[100px] mx-auto" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl w-fit mx-auto">Figma</p>
          </CardContent>
        </Card>
        </div>
      
      </div>
      <div className=" w-[90vw] mx-auto border border-black rounded-md my-10">
        <div className="text-6xl font-bold w-fit mx-auto underline">FAQ's</div>
        <Accordion type="single" collapsible className="m-20">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
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

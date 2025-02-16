import React from "react";
import Navbar from "../src/Components/Navbar";
import { Link } from "react-router-dom";

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
import Footer from '../src/Components/Footer'

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
          <span className="text-green-400 text-8xl font-poppins">
            {" "}
            HelpUplift
          </span>
        </div>
        <p className="font-poppins absolute top-[400px] left-[-280px] right-[280px] text-gray-700 text-2xl font-semibold px-96 text-start mt-2">
          Empowering Change Through Volunteerism
          <br />
          <br />
          Join us in making a difference. HelpUplift is your platform to
          discover and engage in meaningful volunteer opportunities. Together,
          let's create positive change in our communities and beyond.
        </p>
        <Link to="/login">
          <button className="font-poppins bg-green-400 text-2xl absolute bottom-[80px] left-[100px] p-4 rounded-xl">
            Join Our Community
          </button>
        </Link>
        <Link to="/contact">
          <button className="font-poppins bg-black text-white text-2xl absolute bottom-[80px] left-[400px] p-4 rounded-xl">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="bg-green-300 rounded-3xl flex justify-evenly m-10 shadow-xl shadow-gray-400">
        <Card className="bg-white rounded-2xl w-[20vw] h-[300px] my-[100px]">
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
        <Card className=" bg-white rounded-2xl w-[20vw] h-[300px] my-[100px] ">
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
        <Card className="bg-white rounded-2xl w-[20vw] h-[300px] my-[100px] ">
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
        <h1 className="text-6xl font-extrabold w-fit mx-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-poppins">
          Our Sponsers
        </h1>
        <div className="flex justify-evenly mt-[-10px]">
          <Card className=" w-[20vw] h-[300px] my-[100px] shadow-lg shadow-gray-300 rounded-3xl">
            <CardHeader>
              <SiGithub className="w-fit h-[100px] mx-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl w-fit mx-auto mt-10 font-poppins">
                Github
              </p>
            </CardContent>
          </Card>
          <Card className=" w-[20vw] h-[300px] my-[100px] shadow-lg shadow-gray-300 rounded-3xl">
            <CardHeader>
              <FaLinkedin className="w-fit h-[100px] mx-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl w-fit mx-auto mt-10 font-poppins">
                LinkedIn
              </p>
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
        <div className="text-6xl font-extrabold w-fit mx-auto underline text-white font-poppins">
          FAQ's
        </div>
        <Accordion type="single" collapsible className="m-20 text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-poppins">
              What is HelpUplift and what is its purpose?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              HelpUplift is an online platform dedicated to connecting
              volunteers with organizations to collaborate on social cause-based
              projects. Our purpose is to facilitate meaningful volunteering
              experiences and drive positive social impact in communities
              worldwide.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-poppins">
              How can I get involved as a volunteer?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              To get involved as a volunteer, simply create a profile on our
              website, browse through the available projects posted by
              organizations, and apply to those that match your interests and
              skills. Once selected by the organization, you can start
              contributing to the project and making a difference in your
              community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-poppins">
              How do organizations post projects on HelpUplift?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              Organizations can post projects on HelpUplift by registering for
              an account, creating a profile, and submitting project details
              such as the social cause, objectives, required skills, time
              commitment, and location (if applicable). Our platform makes it
              easy for organizations to reach volunteers and manage project
              applications efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-poppins">
              Can I volunteer remotely or virtually?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              Yes, HelpUplift offers virtual volunteering opportunities for
              those who prefer to contribute remotely. You can participate in
              virtual projects such as online tutoring, digital advocacy,
              research, content creation, and more from the comfort of your
              home.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-poppins">
              How can I track my volunteer hours and contributions?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              Your volunteer hours and contributions are tracked automatically
              through your profile dashboard on HelpUplift. You can view your
              total volunteer hours, projects participated in, and impact
              achieved, providing you with a record of your contributions to the
              community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-poppins">
              How are volunteers selected for projects?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              Volunteers are selected for projects based on their
              qualifications, skills, availability, and fit for the project as
              determined by the organization. Organizations review volunteer
              applications submitted through the platform and select volunteers
              who best match the project's needs and objectives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-poppins">
              Are there any requirements or qualifications to volunteer?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              The requirements and qualifications to volunteer vary depending on
              the specific projects posted by organizations. Some projects may
              require specific skills or experience, while others may be open to
              volunteers of all backgrounds and abilities. You can find detailed
              information about project requirements in the project
              descriptions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="font-poppins">
              How can I stay updated on new projects and volunteering
              opportunities?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              To stay updated on new projects and volunteering opportunities,
              regularly check our website for project listings, subscribe to our
              newsletter for notifications, and follow us on social media for
              the latest updates and announcements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="font-poppins">
              Is there any training or support available for volunteers?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              HelpUplift provides resources, training materials, and support for
              volunteers to enhance their skills and knowledge. Additionally,
              organizations may offer training or orientation sessions for
              volunteers participating in specific projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="font-poppins">
              How can I provide feedback or report issues on the website?
            </AccordionTrigger>
            <AccordionContent className="font-poppins">
              If you have any feedback, questions, or issues regarding the
              website, please contact our support team through the contact form
              or email provided on the website. We welcome your feedback and are
              committed to continuously improving our platform to better serve
              our community.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

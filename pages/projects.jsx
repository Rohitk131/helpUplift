import React, { useEffect, useState } from 'react'
import Navbar from '../src/Components/Navbar';
import { Carousel } from 'flowbite-react';
import Footer from '../src/Components/Footer'
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const data = [
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      cover:
        "https://www.collegetransitions.com/wp-content/uploads/2023/06/blog-100ExamplesCommunityServiceProjects-1460x822-1.webp",
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      cover:
        "https://ourgoodbrands.com/wp-content/uploads/2020/01/social-enterprise-vs-nonprofit-charities-sustainable-economy3-390x220.jpg",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      cover:
        "https://ourgoodbrands.com/wp-content/uploads/2020/03/mpowerd-solar-portable-light-empowers-humanity-electricity-2-390x220.jpg",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      cover:
        "https://ourgoodbrands.com/wp-content/uploads/2018/07/how-address-world-water-inequality-crisis-humanity-390x220.jpg",
    },
    {
      name: "Thinking Components",
      artist: "Lena Logic",
      cover:
        "https://images.ctfassets.net/81iqaqpfd8fy/4k9ITW4kDW5liLFiqD36om/d3037a94e6a6bebe4acd06b76d0d88cf/communityservicecover.jpg?fm=webp&h=620&w=1440",
    },
    {
      name: "Functional Fury",
      artist: "Beth Binary",
      cover:
        "https://t4.ftcdn.net/jpg/05/70/77/33/240_F_570773304_UG3aEn2zVnYFHu1EjvJGsCklx5ExEXXH.jpg",
    },
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      cover:
        "https://projectnile.in/wp-content/uploads/2021/04/social-justice.jpg",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaU6GQBmZMRmyCB9D6Kga8P8fntQ6tCkHlxg&usqp=CAU",
    },
  ]

  const CardP = ({ name, image }) => {

    return (
      <div className='relative card h-[20rem] rounded-xl border-4 overflow-hidden transition hover:scale-105 hover:-translate-y-5 ease-in-out hover:shadow-2xl hover:shadow-green-300 bg-black cursor-pointer' onClick={() => {setActive(false) ; handleOpen() }}>
        <img src={image} className='imgLogo peer h-[20rem] w-[15rem] object-cover hover:opacity-50'></img>
        <h4 className='opacity-0 text-2xl font-bold text-white text-center absolute top-1/4 w-[100%] peer-hover:opacity-[100%] pointer-events-none'>{name}<br /><br />{<p variant="gradient" className=' bg-green-500 mx-10 py-1 rounded-xl'>Enroll Now</p>}</h4>
        <br />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="h-40 m-5 sm:h-64 xl:h-80 2xl:h-80 2xl:m-10 mb-5 border rounded-xl overflow-hidden">
        <Carousel slideInterval={2000}>
          <img className='h-[100%] object-fill' src="https://www.divyam.org/wp-content/uploads/2021/04/Greyscale-City-Photo-Banner-Facebook-Cover-2.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.divyam.org/wp-content/uploads/2021/04/1.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.divyam.org/wp-content/uploads/2021/04/3.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/real-impact-social-media.jpg" alt="..." />
          <img className='h-[100%] object-fill' src="https://assets.skyfilabs.com/images/blog/revolve-mini-project-around-a-social-cause.jpg" alt="..." />
        </Carousel>
      </div>
      <Dialog
        styles={theme}
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Join or Create team
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              To join the team , you must be have the team code provided to team leader
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Team Code
            </Typography>
            <div className='flex items-center gap-1'>
              <Input label="eg:- dff085445" size="lg" onInput={(e)=>{e.target.value.length > 0 ? setActive(true) : setActive(false)}}/>
              <Button variant="gradient" className={` rounded px-10 w-[40%] py-4 ${active ? "bg-black pointer-events-auto":"bg-gray-400 pointer-events-none"}`} onClick={handleOpen} fullWidth>
                Join Team
              </Button>
            </div>
            <Typography className='mt-5' variant="h6">
              Team Name
            </Typography>
            <Input size="lg"/>
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Add participants in next step" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" className='bg-black rounded' onClick={handleOpen} fullWidth>
              Create Team
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      <div className="container p-10">
        <div className='flex flex-wrap gap-x-20 gap-y-8 justify-center'>
          {
            data.map((i, index) => (
              <CardP name={i.name} image={i.cover} key={index} />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

const theme = {
  dialog: {
    defaultProps: {
      size: "md",
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      className: "",
    },
    valid: {
      sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
    },
    styles: {
      base: {
        backdrop: {
          display: "grid",
          placeItems: "place-items-center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "w-screen",
          height: "h-screen",
          backgroundColor: "bg-black",
          backgroundOpacity: "bg-opacity-60",
          backdropFilter: "backdrop-blur-sm",
        },
        container: {
          position: "relative",
          bg: "bg-white",
          m: "m-4",
          borderRadius: "rounded-lg",
          boxShadow: "shadow-2xl",
          color: "text-blue-gray-500",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-base",
          fontWeight: "font-light",
          lineHeight: "leading-relaxed",
        },
      },
      sizes: {
        xs: {
          width: "w-full md:w-3/5 lg:w-2/5 2xl:w-1/4",
          minWidth: "min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]",
          maxWidth: "max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]",
        },
        sm: {
          width: "w-full md:w-2/3 lg:w-2/4 2xl:w-1/3",
          minWidth: "min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]",
          maxWidth: "max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]",
        },
        md: {
          width: "w-full md:w-3/4 lg:w-3/5 2xl:w-2/5",
          minWidth: "min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]",
          maxWidth: "max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]",
        },
        lg: {
          width: "w-full md:w-5/6 lg:w-3/4 2xl:w-3/5",
          minWidth: "min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]",
          maxWidth: "max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]",
        },
        xl: {
          width: "w-full md:w-5/6 2xl:w-3/4",
          minWidth: "min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]",
          maxWidth: "max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]",
        },
        xxl: {
          display: "flex",
          flexDirection: "flex-col",
          width: "w-screen",
          minWidth: "min-w-[100vw]",
          maxWidth: "max-w-[100vw]",
          height: "h-screen",
          minHeight: "min-h-[100vh]",
          maxHeight: "max-h-[100vh]",
          m: "m-0",
          borderRadius: "rounded-none",
        },
      },
    },
  },
};

export default Projects

import React, { useEffect, useState } from 'react'
import Navbar from '../src/Components/Navbar';
import { Carousel } from 'flowbite-react';
import Footer from '../src/Components/Footer'

const Projects = () => {
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

  return (
    <>
      <Navbar />
      <h1 className='font-poppins text-black text-5xl font-bold p-10'>
      Discover nearby social events.
      </h1>
      <div className="h-40 m-5 sm:h-64 xl:h-80 2xl:h-80 2xl:m-10 mb-5 border rounded-2xl overflow-hidden">
        <Carousel slideInterval={1000}>
          <img className='h-[100%] object-fill' src="https://as2.ftcdn.net/v2/jpg/05/51/81/81/1000_F_551818124_eskTTOoHGoKb8mkDHcLysCagGOLhKGJQ.jpg" alt="..." />
          <img className='h-[100%] object-fill' src="https://volunteeralive.org/photos/POL_Conference.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.volunteeringwa.org.au/assets/nvw2022/website-banner-nvw-2022.png" alt="..." />
          <img className='h-[100%] object-cover bottom-20' src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/12/07/1876701-2059735583.jpg?itok=ta1nU_G4" alt="..." />
          <img className='h-[100%] object-cover' src="https://image.khaleejtimes.com/?uuid=464c0a77-b540-565d-bab1-2b58953088b0&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84535&x=0&y=0&width=1200&height=675" alt="..." />
        </Carousel>
      </div>

      <div className="container p-20">
        <div className='flex flex-wrap gap-x-20 gap-y-10 justify-center'>
          {
            data.map((i, index) => (
              <Card name={i.name} image={i.cover} key={index} />
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}


const Card = ({ name, image }) => {

  return (
    <div className='relative card h-[20rem] rounded-2xl border-0 overflow-hidden transition shadow-xl shadow-gray-400 hover:scale-102 hover:-translate-y-5 ease-in-out hover:shadow-2xl hover:shadow-green-500 bg-black cursor-pointer'>
      <img src={image} className='imgLogo peer h-[20rem] w-[15rem] object-cover hover:opacity-50'></img>
      <h4 className='opacity-0 text-2xl font-bold text-white text-center absolute top-1/4 w-[100%] peer-hover:opacity-[100%] pointer-events-none'>{name}<br /><br />{<p className=' bg-green-500 mx-10 py-1 rounded-xl'>Enroll Now</p>}</h4>
      <br />
    </div>
  )
}

export default Projects

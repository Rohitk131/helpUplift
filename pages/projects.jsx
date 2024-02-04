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
      <div className="h-40 m-5 sm:h-64 xl:h-80 2xl:h-80 2xl:m-10 mb-5 border rounded-xl overflow-hidden">
        <Carousel slideInterval={2000}>
          <img className='h-[100%] object-fill' src="https://www.divyam.org/wp-content/uploads/2021/04/Greyscale-City-Photo-Banner-Facebook-Cover-2.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.divyam.org/wp-content/uploads/2021/04/1.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.divyam.org/wp-content/uploads/2021/04/3.png" alt="..." />
          <img className='h-[100%] object-fill' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/real-impact-social-media.jpg" alt="..." />
          <img className='h-[100%] object-fill' src="https://assets.skyfilabs.com/images/blog/revolve-mini-project-around-a-social-cause.jpg" alt="..." />
        </Carousel>
      </div>

      <div className="container p-10">
        <div className='flex flex-wrap gap-x-20 gap-y-8 justify-center'>
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
    <div className='relative card h-[20rem] rounded-xl border-4 overflow-hidden transition hover:scale-105 hover:-translate-y-5 ease-in-out hover:shadow-2xl hover:shadow-green-300 bg-black cursor-pointer'>
      <img src={image} className='imgLogo peer h-[20rem] w-[15rem] object-cover hover:opacity-50'></img>
      <h4 className='opacity-0 text-2xl font-bold text-white text-center absolute top-1/4 w-[100%] peer-hover:opacity-[100%] pointer-events-none'>{name}<br /><br />{<p className=' bg-green-500 mx-10 py-1 rounded-xl'>Enroll Now</p>}</h4>
      <br />
    </div>
  )
}

export default Projects

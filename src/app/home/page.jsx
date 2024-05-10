"use client"
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { DataContext } from '@/context/DataProvider'

import profilePic from "../../assets/images/portfolio image.png"

function Home1() {
  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  
  const { color } = useContext(DataContext);

  const careers = ["Web Developer", "UX / UI Designer", "Freelancer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacterIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        if (newIndex === careers[careerIndex].length + 1) {
          setCareerIndex(prevCareerIndex => (prevCareerIndex + 1) % careers.length);
          return 0;
        }
        return newIndex;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [careerIndex]);

  return (
    <section className={`home active section`}>
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello text-[28px] mx-0 my-[15px]">
              {" "}
              Hello, my name is{" "}
              <span className={`text-3xl font-semibold`} style={{ color: color }}>
                Salman Iqbal
              </span>{" "}
            </h3>
            <h3 className="my-profession text-affect">
              <span className="text-white-700">I&apos;m a</span>{" "}
              <span className={`font-semibold`} style={{ color: color }}>
                {careers[careerIndex].substring(0, characterIndex)}
              </span>
            </h3>
            <p className="text-xl mb-[70px]">
              {" "}
              I am a professional web developer with 1 years of extensive experience.
              My expertise lies in create engaging website design, developing mobile applications and much more...
            </p>
            <Link
              href={"/contact"}
              className={`
              bg-[${color}] 
              font-medium 
              text-[white] 
              inline-block 
              px-[38px] 
              py-[13px] 
              rounded-[40px] 
              ease-in duration-300
              hover:bg-blue-400
              border-[none]`}
            >
              Hire Me
            </Link>
          </div>
          <div className="home-img padd-15">
            <Image src={profilePic} alt="profile" className='img' height={300} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home1
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // Core Swiper styles
import "swiper/css/effect-coverflow"; // Styles specific to coverflow effect
import "swiper/css/pagination"; // Styles for pagination

// Import Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ image, heading, description }) => {
  // Refs for the elements to animate
  const launchInfoRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonsRef = useRef([]);
  const videoContainerRef = useRef(null);
  const statsRef = useRef([]);
  // useEffect(() => {
  //   // Animation for the "newly launched" section
  //   gsap.fromTo(
  //     launchInfoRef.current,
  //     { opacity: 0, y: -50 }, // from state
  //     { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // to state
  //   );

  //   // Animation for the headline
  //   gsap.fromTo(
  //     headlineRef.current,
  //     { opacity: 0, y: -50 },
  //     { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
  //   );

  //   // Animation for buttons
  //   gsap.fromTo(
  //     buttonsRef.current,
  //     { opacity: 0, y: -50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       delay: 1,
  //       stagger: 0.2,
  //     }
  //   );

  //   // Animation for the video container
  //   gsap.fromTo(
  //     videoContainerRef.current,
  //     { opacity: 0, y: -50 },
  //     { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 1.5 }
  //   );

  //   // Animation for the stats section
  //   gsap.fromTo(
  //     statsRef.current,
  //     { opacity: 0, y: -50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       delay: 2,
  //       stagger: 0.2,
  //     }
  //   );
  // }, []);

const word = "Investment";
const [displayedWord, setDisplayedWord] = useState("");
const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < word.length) {
    const timeout = setTimeout(() => {
      setDisplayedWord((prev) => prev + word[index]);
      setIndex((prev) => prev + 1);
    }, 200); // Adjust timing for letter appearance speed

    return () => clearTimeout(timeout);
  } else {
    // Reset after the animation completes
    const resetTimeout = setTimeout(() => {
      setDisplayedWord("");
      setIndex(0);
    }, 1000); // Wait for 1 second before restarting

    return () => clearTimeout(resetTimeout);
  }
}, [index, word]);


  const cardData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663013296014-93202773e968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "New York",
      description: "Discover luxury living in the heart of New York.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Paris",
      description: "Experience elegance and charm in Paris.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1700860838212-10c44393f9e5?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Dubai",
      description: "Explore ultra-modern living spaces in Dubai.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681429766562-fffa63d382c2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Tokyo",
      description: "Find the perfect balance of culture and luxury in Tokyo.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681429766540-f05bd18b4002?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Sydney",
      description: "Enjoy breathtaking views and luxury homes in Sydney.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681429767035-28d193b510bd?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "London",
      description: "Live in the iconic and prestigious areas of London.",
    },
  ];

  // Card component
  const Card = ({ image, heading, description }) => {
    return (
      <div className="border border-gray-300 p-5 m-2 rounded-lg w-full sm:w-1/3 transition-transform transform hover:scale-105 duration-300 ease-in-out will-change-transform">
        <img
          src={image}
          alt={heading}
          className="w-full h-80 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out will-change-transform"
        />
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  // CardList component
  const CardList = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-10 ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    );
  };

  const faqData = [
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. You must keep the receipt and the item should be in its original condition.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking number provided in the confirmation email, or through our website under 'Track Order'.",
    },
    {
      question: "Can I purchase items online and pick up in store?",
      answer:
        "Yes, we offer a 'Buy Online, Pick Up In Store' option at checkout for your convenience.",
    },
    {
      question: "Can I purchase items online and pick up in store?",
      answer:
        "Yes, we offer a 'Buy Online, Pick Up In Store' option at checkout for your convenience.",
    },
    {
      question: "Can I purchase items online and pick up in store?",
      answer:
        "Yes, we offer a 'Buy Online, Pick Up In Store' option at checkout for your convenience.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  


  useEffect(() => {

 var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-3",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub:2
  }
 })
 tl
  

 .to('.box1',{
  bottom:'0%'
 })
 .to('.box2',{
  bottom:'0%'
 })
 .to('.box3',{
  bottom:'0%'
 })
 .to('.box4',{
  bottom:'0%'
 })

  
  }, []);
  
  return (
    <div className="w-full overflow-hidden relative">
      <div className="page-1 flex items-center justify-start bg-[#EBECF0] min-h-screen w-full flex-col pt-16 rounded-t-2xl ">
        <div
          ref={launchInfoRef}
          className="h-[5vh] w-[90%] sm:w-[50%] md:w-[30%] lg:w-[19%] mb-5 border-gray-300 border flex items-center justify-center gap-4 rounded-lg"
        >
          <div className="h-[2vh] w-[2vh] bg-[#059669] rounded-full"></div>
          Minimum Investment: $100.
        </div>

        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-[600] leading-tight lg:leading-[6rem] ">
            Start Your Global Real Estate <br />
            <span className="text-emerald-600 border-b-4 border-emerald-600 absolute">
              {displayedWord}
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Today, One Brick at a Time
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-10 sm:mb-20">
          <button
            ref={(el) => (buttonsRef.current[0] = el)}
            className="px-2 py-2 sm:px-7 sm:py-4 rounded-xl scale-[1] border border-black"
          >
            View Properties
          </button>
          <button
            ref={(el) => (buttonsRef.current[1] = el)}
            className="px-2 py-2 sm:px-7 sm:py-4 rounded-xl scale-[1] text-white bg-emerald-600"
          >
            Book a Call
          </button>
        </div>

        <div
          ref={videoContainerRef}
          className="h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] w-[90%] md:w-[80%] rounded-2xl bg-black overflow-hidden border border-white mb-10"
        >
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="h-auto sm:h-[30vh] w-[90%] md:w-[80%] mx-auto flex flex-col sm:flex-row py-10 gap-10 sm:gap-0">
  <div
    ref={(el) => (statsRef.current[0] = el)}
    className="flex-1 flex items-center justify-center flex-col border-b sm:border-b-0 sm:border-r-2 border-black text-center pb-10 sm:pb-0"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 sm:mb-4">
      55+
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl">Locations</p>
  </div>
  <div
    ref={(el) => (statsRef.current[1] = el)}
    className="flex-1 flex items-center justify-center flex-col border-b sm:border-b-0 sm:border-r-2 border-black text-center pb-10 sm:pb-0"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 sm:mb-4">
      $800M
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl">Sold</p>
  </div>
  <div
    ref={(el) => (statsRef.current[2] = el)}
    className="flex-1 flex items-center justify-center flex-col border-b sm:border-b-0 sm:border-r-2 border-black text-center pb-10 sm:pb-0"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 sm:mb-4">
      500+
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl">Customers</p>
  </div>
  <div
    ref={(el) => (statsRef.current[3] = el)}
    className="flex-1 flex items-center justify-center flex-col text-center"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 sm:mb-4">
      9.8/10
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl">Ratings</p>
  </div>
</div>

      </div>
      <div className="page-2 h-screen w-full relative bg-[#EBECF0] flex flex-col md:flex-row items-center md:items-end justify-center p-5">
        {/* Left Section */}
        <div className="h-auto  md:h-screen w-full md:w-1/2 flex flex-col items-start p-5 md:pl-10 md:pt-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 sm:mb-6 md:mb-10">
            LET'S GET IN <br />
            <span className="text-emerald-600">TOUCH</span>
          </h1>
          {/* Swiper Section */}
          <div className="w-full md:w-4/5 lg:w-3/4 h-[26vh] md:h-[50vh] ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: false }}
              autoplay={{
                delay: 2000, // 3 seconds delay
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              className="mySwiper"
            >
              {/* Slides */}
              <SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 1"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 2"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Right Section */}
        <div className="h-auto md:h-screen w-full md:w-1/2 md:mt-0">
          <div
            className="relative h-[60vh] md:h-full w-full bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/1600x900/?realestate')",
            }}
          >
            {/* Content Section */}
            <div className="relative z-10 flex items-center justify-center h-full p-5">
              <div className="rounded-lg p-5 md:p-10 max-w-xl w-full bg-opacity-75  ">
                {/* Form Section */}
                <form className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                    />
                  </div>

                  {/* Country Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Country"
                      className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Mobile Number"
                      className="w-full px-4 py-3 bg-transparent border-b border-emerald-600 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition duration-300">
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-3 h-screen w-full bg-[#EBECF0] flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden">
  <div className="p-4 md:p-0 md:w-1/2">
    <h1 className="text-3xl md:ml-16 mb-10 md:text-[4rem] mt-10 md:mt-20">Our <span className="text-emerald-600">Home</span></h1>
    <p className="w-full  md:ml-16  md:w-2/3 text-lg md:text-2xl mt-4">
      Discover a diverse range of luxurious homes, from secluded villas to exclusive penthouses, tailored to your discerning taste.
    </p>
  </div>
  <div className="box-container h-64 md:h-screen w-full md:w-1/2 bg-yellow-500 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1602205265393-06b5d1ee8ab7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mt-4 md:mt-0">
    <div className="box1 h-[100%] w-full bg-green-500 absolute bottom-[-100%]">
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="box2 h-[100%] w-full bg-red-500 absolute bottom-[-100%]">
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="box3 h-[100%] w-full bg-emerald-200 absolute bottom-[-100%]">
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552051263-6eb5bb6905b9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="box4 h-[100%] w-full bg-blue-500 absolute bottom-[-100%]">
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  </div>
</div>

     

<div className="page-5 bg-[#EBECF0] min-h-screen w-full flex flex-col items-center pt-20 px-4 sm:px-6 md:px-8">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 text-black">
    What Is Fractional <span className="text-emerald-600">Ownership?</span>
  </h1>
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-center mb-10 max-w-xl md:max-w-2xl">
    Fractional ownership has democratized the real estate world, creating a level playing field for both the common man and billion-dollar institutions alike. It’s revolutionizing real estate investment by allowing you to invest in top-tier properties without hefty capital requirements. By owning a fraction of these properties, you gain a proportional share of their value, income, and appreciation.
  </p>
  <CardList />
</div>

      <div className="page-6 h-screen w-full bg-[#EBECF0] flex justify-center items-center">
        <div className="w-full sm:w-3/4 lg:w-1/2 p-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6">
            Frequently Asked <span className="text-emerald-600">Question</span>
          </h1>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-300 rounded-lg p-4 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-[500px] bg-white"
                    : "max-h-[80px] bg-gray-100"
                } overflow-hidden`}
              >
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-semibold">{faq.question}</h2>
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="page-7 min-h-screen w-full bg-[#EBECF0] flex items-center justify-center pt-10 flex-col px-4">
  <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-semibold text-center mb-6">
    The <span className="text-emerald-600">Launch</span>
  </h1>
  <video
    loop
    autoPlay
    muted
    className="mb-8 sm:mb-16 h-[50vh] sm:h-[70vh] md:h-[80vh] w-full max-w-[1200px] object-cover bg-red-500 rounded-lg"
    src="https://videos.pexels.com/video-files/2887459/2887459-hd_1920_1080_25fps.mp4"
  ></video>
  <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-center">
    No more <span className="text-emerald-600 font-bold">FOMO</span> by starting today.
  </p>
  <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] w-full sm:w-3/4 text-center mb-6 px-4">
    Each month, our team of real estate experts will carefully select and present a cluster of 3-5 premier residential and commercial properties. In the post-COVID era, 
    <span className="text-emerald-700"> Dubai has emerged as the top destination for millions globally.</span> Therefore, we are excited to kick off our first edition with three exclusive properties in the heart of Dubai’s “Golden” district.
  </p>
  <Link className="px-10 sm:px-12 md:px-16 rounded-lg mb-10 py-3 sm:py-4 bg-emerald-600 text-white text-lg sm:text-xl md:text-2xl" to="/invest">
    Start Investing
  </Link>
</div>

      <div className="page-8 h-screen w-full bg-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;

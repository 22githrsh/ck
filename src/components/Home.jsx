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

const Home = () => {

  // Refs for the elements to animate
  const launchInfoRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonsRef = useRef([]);
  const videoContainerRef = useRef(null);
  const statsRef = useRef([]);
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

  // Card component

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

  const [heading, setHeading] = useState("Our Home");
  const [description, setDescription] = useState(
    "Discover a diverse range of luxurious homes, from secluded villas to exclusive penthouses, tailored to your discerning taste."
  );

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-3",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 4,

        onUpdate: (self) => {
          // Update text based on scroll progress
          const progress = self.progress;

          if (progress < 0.25) {
            setHeading("Our Home");
            setDescription(
              "Discover a diverse range of luxurious homes, from secluded villas to exclusive penthouses, tailored to your discerning taste."
            );
          } else if (progress < 0.5) {
            setHeading("Elegant Villas");
            setDescription(
              "Explore our selection of elegant villas that offer both luxury and comfort."
            );
          } else if (progress < 0.75) {
            setHeading("Exclusive Penthouses");
            setDescription(
              "Experience the pinnacle of luxury with our exclusive penthouses in prime locations."
            );
          } else {
            setHeading("Your Dream Home");
            setDescription(
              "Find the perfect home that suits your lifestyle and preferences."
            );
          }
        },
      },
    });

    tl.to(".box1", {
      bottom: "0%",
    })
      .to(".box2", {
        bottom: "0%",
      })
      .to(".box3", {
        bottom: "0%",
      })
      .to(".box4", {
        bottom: "0%",
      });
  }, []);

  const [stats, setStats] = useState({
    locations: 0,
    sold: 0,
    customers: 0,
    ratings: 0,
  });

  // Helper function to animate numbers
  const animateValue = (refIndex, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      if (refIndex === 0) setStats((prev) => ({ ...prev, locations: value }));
      if (refIndex === 1) setStats((prev) => ({ ...prev, sold: value }));
      if (refIndex === 2) setStats((prev) => ({ ...prev, customers: value }));
      if (refIndex === 3)
        setStats((prev) => ({ ...prev, ratings: value / 10 }));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // useEffect to trigger the animation
  useEffect(() => {
    animateValue(0, 0, 55, 1500); // Locations
    animateValue(1, 0, 800, 1500); // Sold ($800M)
    animateValue(2, 0, 500, 1500); // Customers
    animateValue(3, 0, 98, 1500); // Ratings (9.8/10)
  }, []);
  const articles = [
    {
      title: "Emaar ",
      description:
        "Address: Residence dubai hills estate {1 BHK} Purchase price: 1.95 M Holding period Exit price ROI",

      imageUrl:
        "https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with a real image URL
    },
    {
      title: "Sobha",
      description: "Purchase Price: 2BHK, 1.95MHolding period Exit Price ROI",
      imageUrl:
        "https://images.pexels.com/photos/13575574/pexels-photo-13575574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with a real image URL
    },
    {
      title: "	Danube Diamondz",
      description:
        "Purchase Price: Studio, AED 1.3M Holding period Exit PriceROI",

      imageUrl:
        "https://images.pexels.com/photos/28279787/pexels-photo-28279787/free-photo-of-the-burj-tower-is-seen-from-above.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with a real image URL
    },
  ];

  const NewsCard = ({ title, description, date, imageUrl }) => {
    return (
      <div className="flex flex-col md:flex-row items-center p-6 mb-8 bg-white rounded-lg border border-black hover:bg-[#059669] transition ease hover:text-white">
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <img
            src={imageUrl}
            alt="news"
            className="w-full h-48 md:h-52 rounded-md object-cover"
          />
        </div>
        {/* Right Section (Content) */}
        <div className="md:ml-6 w-full md:w-3/4">
          <h3 className="text-xl md:text-2xl font-semibold text-emerald-600">
            {title}
          </h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base md:w-1/3">
            {description}
          </p>
          <p className="text-sm text-gray-500 mt-4"> {date}</p>
        </div>
      </div>
    );
  };





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
            Start Your Global Real Estate
          </h1>
          <div className="flex flex-col items-center justify-center p-4 md:flex-row md:space-x-4">
            <div className="h-[5vh] w-full max-w-[30%] flex items-center justify-center">
              <span className="text-emerald-600 border-b-4 border-emerald-600 text-3xl md:text-4xl">
                {displayedWord}
              </span>
            </div>
            <h1 className="text-center md:text-left mt-4 md:mt-0 text-2xl font-semibold md:text-4xl flex-shrink-0">
              Today, One Brick at a Time
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-10 sm:mb-20">
          <button
            ref={(el) => (buttonsRef.current[0] = el)}
            className="px-2 py-2 sm:px-7 sm:py-4 rounded-xl scale-[1] text-white border border-emerald-600 bg-emerald-600 transition-all transition  hover:bg-transparent  hover:text-[#000]"
          >
            View Properties
          </button>
          <button
            ref={(el) => (buttonsRef.current[1] = el)}
            className="px-2 py-2 sm:px-7 sm:py-4 rounded-xl scale-[1] text-white bg-emerald-600  hover:bg-emerald-500 transition-all transition"
          >
            Book a Call
          </button>
        </div>

        <div
          ref={videoContainerRef}
          className="h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] w-[90%] md:w-[80%] rounded-2xl bg-black overflow-hidden border border-white mb-10"
        >
          <video
            loop
            autoPlay
            muted
            className="h-full w-full object-cover"
            src="https://videos.pexels.com/video-files/10395146/10395146-hd_1920_1080_30fps.mp4"
          ></video>
        </div>

        <div className="h-auto sm:h-[30vh] w-[90%] md:w-[80%] mx-auto flex flex-col sm:flex-row py-10 gap-10 sm:gap-0">
          <div
            ref={(el) => (statsRef.current[0] = el)}
            className="flex-1 flex items-center justify-center flex-col border-b sm:border-b-0 sm:border-r-2 border-black text-center pb-6 sm:pb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-1 sm:mb-3">
              {stats.locations}+
            </h1>
            <p className="text-base sm:text-lg md:text-xl">Locations</p>
          </div>

          <div
            ref={(el) => (statsRef.current[1] = el)}
            className="flex-1 flex items-center justify-center flex-col border-b sm:border-b-0 sm:border-r-2 border-black text-center pb-6 sm:pb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-1 sm:mb-3">
              ${stats.sold}M
            </h1>
            <p className="text-base sm:text-lg md:text-xl">Sold</p>
          </div>

          <div
            ref={(el) => (statsRef.current[2] = el)}
            className="flex-1 flex items-center justify-center flex-col border-b sm:border-b-0 sm:border-r-2 border-black text-center pb-6 sm:pb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-1 sm:mb-3">
              {stats.customers}+
            </h1>
            <p className="text-base sm:text-lg md:text-xl">Customers</p>
          </div>

          <div
            ref={(el) => (statsRef.current[3] = el)}
            className="flex-1 flex items-center justify-center flex-col text-center pt-6 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-1 sm:mb-3">
              {stats.ratings.toFixed(1)}/10
            </h1>
            <p className="text-base sm:text-lg md:text-xl">Ratings</p>
          </div>
        </div>
      </div>
      <div className="page-2 min-h-screen w-full relative bg-[#EBECF0] flex flex-col md:flex-row items-center md:items-center justify-around pt-32">
        <div className="bg-[#EBECF0] py-10 px-4 sm:px-6 lg:px-8 w-full max-w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:pl-10 gap-10 ">
            {/* Form Section */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Get in <span className="text-emerald-600">touch</span>
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our friendly team would love to hear from you.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="First name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <select
                      id="country"
                      name="country"
                      className="absolute inset-y-0 left-0 pl-3 pr-8 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block w-full pl-16 px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="agree"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    You agree to our friendly{" "}
                    <a href="#" className="text-emerald-600">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Get in touch
                  </button>
                </div>
              </form>
            </div>

            {/* Image or Information Section */}
            <div className="hidden lg:flex items-center justify-center md:w-[100vh]">
              <div className="max-w-md md:w-[70%]">
                <img
                  src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Person"
                  className="rounded-lg"
                />
                {/* <video loop autoPlay muted className="rounded-sm md:block" src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></video> */}

                <blockquote className="mt-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Untitled UI is the perfect tool for startups to keep track
                    of their finances. Their intuitive dashboard and reporting
                    capabilities have saved our team hours of manual work."
                  </p>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-gray-700">
                      — VASUDEV, Founder at Grow Together
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-3 h-screen w-full bg-[#EBECF0] flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden">
  <div className="p-4 md:p-0 md:w-1/2">
    <h1 className="text-3xl md:ml-16 mb-4 md:mb-10 mt-4 md:mt-20"> {/* Adjusted margin-bottom for mobile */}
      {heading}
    </h1>
    <p className="w-full md:ml-16 md:w-2/3 text-lg md:text-2xl mt-2"> {/* Adjusted margin-top for mobile */}
      {description}
    </p>
  </div>
  <div className="box-container h-64 md:h-screen w-full md:w-1/2 bg-yellow-500 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1602205265393-06b5d1ee8ab7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mt-4 md:mt-0">
    <div className="box1 h-[100%] w-full bg-green-500 absolute bottom-[-100%] rounded-lg overflow-hidden">
      <img
        className="h-full w-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div className="box2 h-[100%] w-full bg-red-500 absolute bottom-[-100%]">
      <img
        className="h-full w-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1533395427226-788cee25cc7b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div className="box3 h-[100%] w-full bg-emerald-200 absolute bottom-[-100%]">
      <img
        className="h-full w-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1552051263-6eb5bb6905b9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div className="box4 h-[100%] w-full bg-blue-500 absolute bottom-[-100%]">
      <img
        className="h-full w-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  </div>
</div>


      <div className="page-5 bg-[#EBECF0] min-h-screen w-full flex flex-col items-center pt-20 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto my-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/4246089/pexels-photo-4246089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Learning"
              className="rounded-lg"
            />
          </div>
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-emerald-600 text-lg">Overview</h2>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              What Is Fractional <br />{" "}
              <span className="text-emerald-600">Ownership?</span>{" "}
            </h1>
            <p className="text-gray-600">
              Fractional ownership has democratized the real estate world,
              creating a level playing field for both the common man and
              billion-dollar institutions alike. It’s revolutionizing real
              estate investment by allowing you to invest in top-tier properties
              without hefty capital requirements. By owning a fraction of these
              properties, you gain a proportional share of their value, income,
              and appreciation.
            </p>
          </div>

          {/* Right Section */}
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Cities</h2>
            <button className="mt-4 px-4 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white">
              All cities
            </button>
          </div>

          {/* News Cards */}
          <div className="grid grid-cols-1 gap-6">
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
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
          No more <span className="text-emerald-600 font-bold">FOMO</span> by
          starting today.
        </p>
        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] w-full sm:w-3/4 text-center mb-6 px-4">
          Each month, our team of real estate experts will carefully select and
          present a cluster of 3-5 premier residential and commercial
          properties. In the post-COVID era,
          <span className="text-emerald-700">
            {" "}
            Dubai has emerged as the top destination for millions globally.
          </span>{" "}
          Therefore, we are excited to kick off our first edition with three
          exclusive properties in the heart of Dubai’s “Golden” district.
        </p>
        <Link
          className="px-10 sm:px-12 md:px-16 rounded-lg mb-10 py-3 sm:py-4 bg-emerald-600 text-white text-lg sm:text-xl md:text-2xl"
          to="/invest"
        >
          Start Investing
        </Link>
      </div>
      <div className="page-8 h-screen w-full bg-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;

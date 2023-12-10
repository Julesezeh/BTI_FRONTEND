import React from "react";
import NavBar from "../../components/navbar";
import Project from "../../components/projects";
const CardJson = [
  {
    icon: "/assets/e-learning/animation.svg",
    title: "Animation",
    desc: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: "/assets/e-learning/design.svg",
    title: "Design",
    desc: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: "/assets/e-learning/camera.svg",
    title: "Photography",
    desc: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: "/assets/e-learning/crypto.svg",
    title: "Crypto",
    desc: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: "/assets/e-learning/business.svg",
    title: "Business",
    desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];

const subscriptionPlans = [
  {
    "price": 99,
    "duration": "1 MONTH"
  },
  {
    "price":199,
    "duration": "3 MONTHS"  
  },
  {
    "price":225,
    "duration": "6 MONTHS"
  },
  {
    "price":500,
    "duration": "1 YEAR"
  }
]
const SkilledLearning = () => {
  return (
    <div>
    <NavBar/>
    <div className="h-full w-full bg-gradient-to-b from-purple-950 to-[#f0f1ff] bg-no-repeat overflow-hidden">
      <div className="px-5 xl:px-0 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto ">
        <div className="flex justify-between pt-2 max-w-2xl lg:max-w-[850px] xl:max-w-5xl ">
          {/* <div>
            <button className="z-10 hover:opacity-80 bg-[#13183f] rounded-3xl text-white font-bold py-3 px-6 group  overflow-hidden">
              Get Started
            </button>
          </div> */}
        </div>
        <div className="flex justify-start items-end my-5 xl:my-20">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-1 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 pl-12 pt-15 ">
            <h1 class=" max-w-2xl sm:mt-20 xl:mt-0 mb-4 text-5xl lg:py-3 font-extrabold tracking-tight leading-none md:text-5xl  xl:text-6xl text-white">You have the will to create the life you aspire for</h1>
            <p class="max-w-2xl sm:mt-12 lg:mt-0 mb-6 font-light xl:py-2 xs:py-9 text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Always remember to labour under the correct knowledge</p>
            <a href="#" class=" sm:mt-5 lg:mt-0 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-yellow-300 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-yellow-200 border hover:text-black border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-gray-700 dark:border-gray-700 dark:hover:bg-yellow-400 dark:focus:ring-gray-800">
                Register Now
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex shadow-lg border-1" >
            <img id="image12" src="#" alt="mockup"/>
        </div>                
        
    
    </div>
          <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:-right-32 md:left-auto xl:-right-80 xl:-top-20 md:-top-5 lg:-right-28 lg:-top-14 ">
            <img
              src="/assets/e-learning/background.png"
              alt=""
              className=" md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] hidden md:block"
            />
            <img
              src="/assets/e-learning/mobileback.png"
              alt="mobileback"
              className=" -bottom-72 md:hidden block max-w-[343px] sm:max-w-[400px]"
            />
          </div>
        </div>
        <div className="pt-56 md:pt-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-20 my-24 lg:my-32 place-items-center sm:place-items-stretch">
          <div className="hover:drop-shadow-2xl w-screen bg-gradient-to-r  from-pink-500 to-red-600 sm:max-w-xs rounded-xl px-10 py-5 text-white text-xl font-extrabold leading-8 shadow-xl">
            Check out our most popular courses!
          </div>
          {/* {CardJson.map((data, index) => {
            return (
              <div
                key={index}
                className="shadow-xl hover:drop-shadow-2xl  bg-white sm:max-w-xs rounded-xl px-5 py-5 flex flex-col gap-4"
              >
                <img className="absolute -top-12" src={data.icon} alt="icon" />
                <h1 className="text-[#13183f] font-extrabold text-xl">
                  {data.title}
                </h1>
                <p className="text-[#83869a] min-h-[80px]">{data.desc}</p>
                <div>
                  <button className="text-pink-600 font-extrabold leading-7">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })} */}

          {
            subscriptionPlans.map((data,index)=>{
              return(
                <Project index={index} price={data.price} duration={data.duration}/>
              );
            })
          }
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#13183f] py-5">
        <div className="px-5 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full flex justify-between mx-auto">
          <a href="#_" className="flex items-center">
            <img src="/assets/e-learning/footerlogo.svg" alt="Logo" />
          </a>
          <a href="#_">
            <button className="bg-gradient-to-r from-blue-500 to-pink-600 rounded-3xl text-white font-bold py-3 px-6 group  overflow-hidden">
              Get Started
              <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
export default SkilledLearning;
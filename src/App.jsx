import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaExternalLinkAlt, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLightbulb, FaMoon, FaSearch, FaSun, FaUser } from 'react-icons/fa'
import { FaPaperclip, FaPhotoFilm, FaSunPlantWilt, FaX } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/alpha-logo.png';
import add from './assets/add1.svg';
// import feature from './assets/Meteor.png';
import analysis from './assets/analysis.svg';
import { PiStudent } from "react-icons/pi";
import team from './assets/team.svg';
import feedback from './assets/feedback.svg';
import articles from './assets/articles.svg';
import questions from './assets/questions.png';
import work from './assets/work.jpg';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import file from './assets/file.svg';
import resume from './assets/resume.svg';
import sync from './assets/sync.svg';
import { MdFormatListNumbered } from 'react-icons/md';
import login from './assets/login.svg';


function App() {
  const [currentTheme, setCurrentTheme] = useState('theme-light');
  const [startDate, setStartDate] = useState(new Date());

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark');
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is the course deadline?",
      content: "The course deadline is the end of the current semester. Be sure to check the course schedule for exact dates."
    },
    {
      title: "How can I access support sessions?",
      content: "Support sessions are available online through our platform. You can join live sessions or watch recorded ones at your convenience."
    },
    {
      title: "What should I do if I miss a deadline?",
      content: "If you miss a deadline, please contact your instructor as soon as possible to discuss possible extensions or alternatives."
    },
    {
      title: "Are there any group projects?",
      content: "Yes, there are several group projects throughout the course. You will be assigned to a group and given specific instructions and deadlines."
    },
    {
      title: "How are grades calculated?",
      content: "Grades are calculated based on assignments, quizzes, projects, and participation. Each component has a specific weight in the final grade calculation."
    }
  ];
  const [count, setCount] = useState(0);

  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  return (
    <>
      {/* navabr experiment to enhance the beauty of the homepage */}
      <div>
        <div className='bg-transparent  p-4 text-white font-poppins'>
          <div className='max-w-7xl mx-auto flex justify-between items-center '>
            {/* image */}
            <div>
              {/* <h1 className='font-logoFont text-[24px]'><span className='font-bold'>Alpha</span> Assignment</h1> */}
              {/* <img className='w-[150px] h-[120px]' src={logo} alt="" /> */}
              <div className='flex space-x-2 items-center'>
                <img className='w-[150px] h-[120px] text-white' src="https://static.thenounproject.com/png/6752066-200.png" alt="" />
                <h1 className='text-[26px] font-medium italic p-2'>Alphazimentz</h1>
              </div>
            </div>

            {/* navlinks */}
            <div>
              <ul className='flex space-x-4 items-center font text-[15px] font-poppins'>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
                <li>testimonial</li>
                <li>Newsletter</li>
              </ul>
            </div>

            {/* searchbar and theme toggler */}
            <div className='flex space-x-2 items-center'>
              <div className='flex space-x-2 items-center mr-3'>
                {/* <FaSun></FaSun> */}
                <FaMoon className={`shadow-2xl shadow-white border-dashed text-white border-1 border-gray-500 rounded-full p-2 w-[45px] h-[45px] bg-${currentTheme}-primary text-${currentTheme}-secondary`}></FaMoon>
                <FaUser className='border-1 border-gray-400 rounded-md  w-[25px] h-[25px]'></FaUser>
              </div>
              <input className='input border-2 border-gray-600 bg-white' placeholder={`Search here ... `} type="text" name="" id="" />
              <FaSearch className='-translate-x-12 text-blue-600'></FaSearch>
            </div>
          </div>
        </div>
      </div>
      {/* <FaSearch></FaSearch> */}
      <div className='flex items-center justify-center'>
        <div data-aos='fade-left' className='flex justify-between items-start mt-24'>
          <div className='w-[1/2] text-left'>
            <div className='font-poppins'>
              <h1 className='text-[64px]  text-white font-medium font-poppins'>Next Gen <span className='text-orange-500 text-shadow-violet'>Assignment</span> Sub<span className='text-red-500 text-shadow-red'>mission</span> Platform</h1>
              <p className='py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illo nostrum distinctio <br /> quod iure reprehenderit similique quo nisi voluptatibus. Quod!</p>

              <div className=' space-x-4'>
                <button className='btn btn-primary shadow-2xl shadow-white '>Submit Asssignment</button>
                <button className='btn btn-secondary'>Register</button>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <img data-aos='fade-right' src="https://maxcoach.vuejstemplate.com/images/intro/intro5/home-5-hero-image.png" alt="" />
          </div>
        </div>
      </div>
      {/* <div c1lass="tenor-gif-embed" data-postid="24999202" data-share-method="host" data-aspect-ratio="1.37931" data-width="100%"><a href="https://tenor.com/view/develop-web-design-software-web-designer-gif-24999202">Develop Web Sticker</a>from <a href="https://tenor.com/search/develop-stickers">Develop Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
      <div className='bg-[#0b0e1f] py-10 px-4 font-poppins'>
        <div className='text'>
          <h1 className='font-medium text-[17px] text-gray-600 uppercase'>Go beyond your knowledge !</h1>
          <h1 className='text-[36px] text-gray-200'>Solve exciting <span className='text-blue-400 capitalize'>assignments</span> and uprank your career. <br /> Join <span className='text-orange-600'>Today !</span></h1>
        </div>
        {/* upcoming assignments */}
        <div className='grid grid-cols-2 gap-[24px] p-3 mt-8'>
          <div className='bg-black rounded-2xl p-5 flex justify-between'>
            <div className='text-left'>
              <h1>Texas , US</h1>
              <h1 className='text-white text-[24px]'>Storytelling Workshop</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum .</p>
              <div>
                <img className='w-[150px] h-[120px]' src={add} alt="" />
              </div>
            </div>
            <div className='text-right space-y-2'>
              <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400 '>22</h1>
              <h1 className='text-blue-600 text-[20px]'>NOV</h1>
              <button className='btn btn-primary bg-blue-700 text-white'>Accept Assignment</button>
            </div>
          </div>
          <div className='bg-black rounded-2xl p-5 flex justify-between'>
            <div className='text-left'>
              <h1>Texas , US</h1>
              <h1 className='text-white text-[24px]'>Storytelling Workshop</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum .</p>
            </div>
            <div className='text-right space-y-2'>
              <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400 '>22</h1>
              <h1 className='text-blue-600 text-[20px]'>NOV</h1>
              <button className='btn btn-primary bg-blue-700 text-white'>Accept Assignment</button>
            </div>
          </div>
          <div className='bg-black rounded-2xl p-5 flex justify-between'>
            <div className='text-left'>
              <h1>Texas , US</h1>
              <h1 className='text-white text-[24px]'>Storytelling Workshop</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum .</p>
            </div>
            <div className='text-right space-y-2'>
              <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400 '>22</h1>
              <h1 className='text-blue-600 text-[20px]'>NOV</h1>
              <button className='btn btn-primary shadow-lg shadow-blue-500 border-none bg-blue-700 text-white'>Accept Assignment</button>
            </div>
          </div>
        </div>
        {/* something else starts here */}

        {/* feature section for the mindblowing web */}
        <div className='bg-cover bg-feature-image w-full h-full p-3 bg-blend-multiply bg-gray-800 bg-opacity-70'>
          <div className='flex justify-center items-center'>
            <h1 className='badge bg-blue-900 p-3 uppercase'>features</h1>
          </div>
          <div>
            <h1 className='text-white text-[32px] font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
            <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem quasi laudantium quam facilis suscipit dignissimos non odit voluptatum repellat.</p>
          </div>
          <div className='grid grid-cols-1 gap-[24px] space-y-9'>
            <div className='flex justify-between items-center px-12'>
              <div className='w-1/2 space-y-6'>
                <PiStudent className='w-[45px] h-[45px] border-2 rounded-2xl'></PiStudent>
                <div className='text-left space-y-3'>
                  <h1 className='capitalize text-red-500 font-medium text-[18px]'>Learn and Analyse</h1>
                  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim odio quis illo facere perspiciatis aspernatur.</p>
                  <div className='flex space-x-3 items-center'>
                    <button className='btn btn-primary bg-black text-white shadow-2xl shadow-white'>Get Started </button>
                    <button className='flex space-x-2 btn btn-secondary'>
                      <FaExternalLinkAlt></FaExternalLinkAlt>
                      <h1 className='capitalize'>Learn more</h1>
                    </button>
                  </div>
                </div>
              </div>

              <div className='w-1/2'>
                <img src={analysis} alt="" />
              </div>
            </div>
            <div className='flex justify-between space-x-6 items-center px-12'>

              <div className='w-1/2'>
                <img className='text-right' src={team} alt="" />
              </div>
              <div className='w-1/2 space-y-6'>
                <PiStudent className='w-[45px] h-[45px] border-2 rounded-2xl text-right'></PiStudent>
                <div className='text-right space-y-3'>
                  <h1 className='capitalize text-red-500 font-medium text-[18px]'>Learn and Analyse</h1>
                  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim odio quis illo facere perspiciatis aspernatur.</p>
                  <div className='flex space-x-3 items-center justify-end'>
                    <button className='btn btn-primary bg-black text-white shadow-2xl shadow-white'>Get Started </button>
                    <button className='flex space-x-2 btn btn-secondary'>
                      <FaExternalLinkAlt></FaExternalLinkAlt>
                      <h1 className='capitalize'>Learn more</h1>
                    </button>
                  </div>
                </div>
              </div>


            </div>
            <div className='flex justify-between items-center px-12'>
              <div className='w-1/2 space-y-6'>
                <PiStudent className='w-[45px] h-[45px] border-2 rounded-2xl'></PiStudent>
                <div className='text-left space-y-3'>
                  <h1 className='capitalize text-red-500 font-medium text-[18px]'>Learn and Analyse</h1>
                  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim odio quis illo facere perspiciatis aspernatur.</p>
                  <div className='flex space-x-3 items-center'>
                    <button className='btn btn-primary bg-black text-white shadow-2xl shadow-white'>Get Started </button>
                    <button className='flex space-x-2 btn btn-secondary'>
                      <FaExternalLinkAlt></FaExternalLinkAlt>
                      <h1 className='capitalize'>Learn more</h1>
                    </button>
                  </div>
                </div>
              </div>

              <div className='w-1/2'>
                <img src={feedback} alt="" />
              </div>
            </div>
            <div className='flex justify-between space-x-6 items-center px-12'>

              <div className='w-1/2'>
                <img src={articles} alt="" />
              </div>
              <div className='w-1/2 space-y-6'>
                <PiStudent className='w-[45px] h-[45px] border-2 rounded-2xl'></PiStudent>
                <div className='text-left space-y-3'>
                  <h1 className='capitalize text-red-500 font-medium text-[18px]'>Learn and Analyse</h1>
                  <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim odio quis illo facere perspiciatis aspernatur.</p>
                  <div className='flex space-x-3 items-center'>
                    <button className='btn btn-primary bg-black text-white shadow-2xl shadow-white'>Get Started </button>
                    <button className='flex space-x-2 btn btn-secondary'>
                      <FaExternalLinkAlt></FaExternalLinkAlt>
                      <h1 className='capitalize'>Learn more</h1>
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <img src={questions} alt="" />
          </div>
          <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${activeIndex === index ? 'collapse-open' : 'collapse-close'
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="collapse-title text-xl font-medium">
                    {item.title}
                  </div>
                  <div className="collapse-content">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='text-center flex items-center justify-center'>
          <div>
            <h1>Alphaziments</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit perspiciatis mollitia dolore dolorem illo.</p>
            <div className='flex space-x-5 items-center justify-center'>
              <FaGithub></FaGithub>
              <FaFacebook></FaFacebook>
              <FaX></FaX>
              <FaInstagram></FaInstagram>
            </div>
            <hr />

            <div>
              <h1>Alpahziments</h1>
              <h1>2024 &copy; All Rights Reserved</h1>
            </div>
          </div>
        </div>
        <div className={`h-screen flex flex-col justify-center items-center bg-${currentTheme}-primary text-${currentTheme}-secondary`}>
          <h1 className="text-4xl font-bold mb-4">Theme Switcher</h1>
          <button className="btn btn-primary" onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <div className='bg-cover bg-hero-image w-full h-screen bg-no-repeat flex items-end  bg-opacity-90 bg-blend-multiply'>
          <div className='flex justify-between items-center p-8 '>
            <div className='w-1/2 '>
              {/* <img src={add} alt="" className='w-full h-auto' /> */}
              {/* <img src={work} className='rounded-full ' alt="" /> */}
              <div className='flex flex-col space-y-8'>
                <div className='flex items-center'>
                  <img src={resume} className='w-[300px] h-[240px]' alt="" />
                  <div className='text-left ml-3'>
                    <h1 className='text-[18px] text-blue-600 text-bold uppercase'>Lorem ipsum dolor sit .</h1>
                    <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, explicabo.</p>
                  </div>
                </div>
                <div className='flex-row-reverse justify-end flex items-center'>
                  <img src={sync} className='w-[300px] h-[240px]' alt="" />
                  <div className='text-left ml-3'>
                    <h1 className='text-[18px] text-blue-600 text-bold uppercase'>Lorem ipsum dolor sit .</h1>
                    <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, explicabo.</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <img src={file} className='w-[300px] h-[240px]' alt="" />
                  <div className='text-left ml-3'>
                    <h1 className='text-[18px] text-blue-600 text-bold uppercase'>Lorem ipsum dolor sit .</h1>
                    <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, explicabo.</p>
                  </div>
                </div>

              </div>

            </div>
            <div className='w-1/2 flex flex-col space-y-4'>
              <div>
                <h1 className='text-[36px] uppercase'>Create new <span className='capiatalize text-red-500 bg-hero-image'>assignment</span></h1>
                <p className='text-[15px] text-gray-500 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero distinctio pariatur possimus, iste excepturi!</p>
              </div>
              <input type="text" className='input input-bordered w-full border-blue-500 px-8 text-blue-700' placeholder='Title' />
              <FaPaperclip className='-translate-y-12 translate-x-2'></FaPaperclip>

              <input type="text" className='input input-bordered w-full border-blue-500  px-8' placeholder='Thumbnail URL' />
              <FaPhotoFilm className='-translate-y-12 translate-x-2'></FaPhotoFilm>


              <input type="number" className='input input-bordered w-full px-8 border-blue-500 ' placeholder='Marks' />
              <MdFormatListNumbered className='-translate-y-12 translate-x-2'></MdFormatListNumbered>
              {/* <input type="text" className='input input-bordered w-full' placeholder='Input 4' /> */}
              <input type="date" className='input input-bordered w-full border-blue-500 ' name="" id="" />
              <textarea name="" className='textarea textarea-bordered  border-blue-500 ' cols={10} rows={10} id=""></textarea>
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              <select className='select select-bordered w-full border-blue-500 '>
                <option selected>Choose assignment Difficulty</option>
                <option className='p-2'>Easy</option>
                <option className='p-2'>Moderate</option>
                <option className='p-2'>Hard</option>
              </select>
              <button className='btn btn-primary bg-transparent bg-hero-image text-gray-300 font-bold bg-cover text-[20px] shadow-3xl shadow-white'><span className='shadow--700 shadow-xl'>Create Assignment</span></button>
            </div>
          </div>
        </div>

        {/* login and register page . More effort need in this section */}

        <div className='bg-cover bg-hero-image2 w-full h-screen bg-no-repeat bg-opacity-90 bg-blend-multiply flex justify-center items-end'>
          <div className='flex items-center border-3 border bg-transparent bg-blend-multiply bg-gray-600 bg-opacity-70 p-4 border-red-500 rounded-lg'>
            <div className='w-1/2'>
              <img src={login} alt="" />
              < hr className='my-2 font-bold ' />
              <div className='flex items-center justify-center space-x-4'>
                <FaGoogle className='w-[35px] h-[35px]'></FaGoogle>
                <FaGithub className='w-[35px] h-[35px]'></FaGithub>
                <FaFacebook className='w-[35px] h-[35px] '></FaFacebook>
              </div>
            </div>
            <div className='w-1/2'>
            <div>
                <h1 className='text-[36px] uppercase'>register new <span className='capiatalize text-red-500 bg-hero-image'>account</span></h1>
                <p className='text-[15px] text-gray-500 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero distinctio pariatur possimus, iste excepturi!</p>
              </div>
              <input type="text" className='input input-bordered w-full border-blue-500 px-8 text-blue-700' placeholder='Name' />
              <FaPaperclip className='-translate-y-12 translate-x-2'></FaPaperclip>

              <input type="text" className='input input-bordered w-full border-blue-500  px-8' placeholder='Photo URL' />
              <FaPhotoFilm className='-translate-y-12 translate-x-2'></FaPhotoFilm>


              <input type="text" className='input input-bordered w-full px-8 border-blue-500 ' placeholder='Email' />
              <MdFormatListNumbered className='-translate-y-12 translate-x-2'></MdFormatListNumbered>

              <input type="text" className='input input-bordered w-full px-8 border-blue-500 ' placeholder='Password' />
              <MdFormatListNumbered className='-translate-y-12 translate-x-2'></MdFormatListNumbered>

              <button className='btn btn-primary bg-black bg-hero-image2 text-gray-300 font-bold bg-cover text-[20px] shadow-3xl shadow-black w-full' ><span className='text-blue-900 font-normal shadow-xl uppercase'>Create Account</span></button>
            </div>
          </div>
        </div>


      </div>




    </>
  )
}

export default App

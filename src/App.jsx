import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaLightbulb, FaMoon, FaSearch, FaSun, FaUser } from 'react-icons/fa'
import { FaSunPlantWilt } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/alpha-logo.png';
import add from './assets/add1.svg';
// import feature from './assets/Meteor.png';

function App() {
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
                <FaMoon className='shadow-2xl shadow-white border-dashed text-white border-1 border-gray-500 rounded-full p-2 w-[45px] h-[45px]'></FaMoon>
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
        <div className='bg-cover bg-hero-image w-full h-screen bg-no-repeat flex items-end bg-gray-700 bg-opacity-40 bg-blend-multiply'>
          <div className='flex justify-between items-start p-8 '>
            <div className='w-1/2'>
              <img src={add} alt="" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col space-y-4'>
              <div>
                <h1>Create new assignment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero distinctio pariatur possimus, iste excepturi!</p>
              </div>
              <input type="text" className='input input-bordered w-full' placeholder='Input 1' />
              <input type="text" className='input input-bordered w-full' placeholder='Input 2' />
              <input type="text" className='input input-bordered w-full' placeholder='Input 3' />
              <input type="text" className='input input-bordered w-full' placeholder='Input 4' />
              <select className='select select-bordered w-full'>
                <option selected>Choose assignment Difficulty</option>
                <option className='p-2'>Easy</option>
                <option className='p-2'>Moderate</option>
                <option className='p-2'>Hard</option>
              </select>
            </div>
          </div>
        </div>
{/* feature section for the mindblowing web */}
        <div className='bg-cover bg-feature-image w-full h-screen'>
          <div className='flex justify-center items-center'>
            <h1 className='badge bg-blue-900 p-3 uppercase'>features</h1>
          </div>
          <div>
            <h1 className='text-white text-[32px] font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
          </div>
          <div className='grid grid-cols-1 gap-[24px]'>
            <div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

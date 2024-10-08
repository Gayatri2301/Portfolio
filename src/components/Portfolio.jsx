import React from 'react';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import jsIcon from '../assets/javascript.png'
import reactIcon from '../assets/react.png'
import TailwindIcon from '../assets/tailwind.png'
import nodeIcon from '../assets/node.png'
import expressIcon from '../assets/express.png'
import fastapiIcon from '../assets/fastapi.png'
import mongodbIcon from '../assets/mongodb.png'
import sqlIcon from '../assets/sql.png'
import gitIcon from '../assets/git.png'
import linuxIcon from '../assets/linux.png'
import vscodeIcon from '../assets/vscode.png'
import mailIcon from '../assets/about/mail.png'
import githubIcon from '../assets/about/image.png';
import linkedIcon from '../assets/about/linkedin.png';
import leetcodeIcon from '../assets/about/leetcode.png';
import codechefIcon from '../assets/about/codechef.png';


const Portfolio = () => {
  return (
    <div className="bg-slate-900 min-h-screen p-6 ">
      <header className="bg-cyan-500 p-4 rounded-md shadow-md mb-6 bg-blue-900">
        <h1 className="text-4xl font-bold text-white text-center">GAYATRI EDIBILLI</h1>
        <p className="text-center text-white mt-2">Frontend Developer</p>
      </header>

      <section>
        <div className='flex justify-center'>
        <a href="mailto:gayatri.edibilli@sasi.ac.in" target="_blank"><img src={mailIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://github.com/Gayatri2301/" target="_blank"><img src={githubIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://www.linkedin.com/in/gayathri-edibilli/" target="_blank"><img src={linkedIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://leetcode.com/u/Gayathri_Edibilli/" target="_blank"><img src={leetcodeIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>
        <a href="https://www.codechef.com/users/gayatriedibill" target="_blank"><img src={codechefIcon} alt="Python Icon" className="w-10 h-10 bg-gray-50 border-gray-400 mr-2" /></a>


      </div>
      </section>

      <section className="mb-6 ">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4  text-white">Projects</h2>
        <div className="bg-white p-4 rounded-md shadow-md mb-4 hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold">E-commerce Website</h3>
          <p>• Developed a responsive e-commerce web application using React.js for the frontend, Node.js and Express.js for the backend,
and MongoDB for database management. Implementing Tailwind
CSS for styling to ensure a sleek and modern interface.</p>
          <p>Technologies used: React.js, Node.js, Express.js, MongoDB</p>
          <p>Implemented user authentication and authorization mechanisms
to secure user data and access.
</p>
          <a href="https://shopping-app-sooty-three.vercel.app/" className="text-cyan-600">Live URL</a> | <a href="https://github.com/Gayatri2301/shopping-app.git" className="text-cyan-600">GitHub Repo</a>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md mb-4 hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold">ToDoList Application</h3>
          <p>Developed a dynamic and responsive TodoList web application
using React.js to enhance task management and productivity.
</p>
          <p>Technologies used: React.js, Node.js, Express.js, MongoDB</p>
          <p> It allows users to efficiently manage their tasks with capabilities
to add, delete, and update tasks, while ensuring data persistence
and responsive design</p>
          <a href="https://to-do-app-omega-dusky.vercel.app/" className="text-cyan-600">Live URL</a> | <a href="https://github.com/Gayatri2301/ToDoApp" className="text-cyan-600">GitHub Repo</a>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4 text-white">Skills</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Programming</h3>
          <div className="flex items-center">
            <img src={pythonIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-4">Frontend</h3>
          <div className='flex gap-2'>
          <img src={htmlIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={cssIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={jsIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={reactIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={TailwindIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>
          <h3 className="text-xl font-semibold mt-4">Backend</h3>
          <div className='flex mt-4 gap-4'>
          <img src={nodeIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={expressIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>

          <h3 className="text-xl font-semibold mt-4">Database</h3>
          <div className='flex gap-4 mt-5'>
          <img src={mongodbIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={sqlIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>

          <h3 className="text-xl font-semibold mt-4">Others</h3>
          <div className='flex gap-4 mt-4'>
          <img src={gitIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={linuxIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />
          <img src={vscodeIcon} alt="Python Icon" className="w-16 h-16 bg-gray-50 border-gray-400 mr-2" />

          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4 text-white">Education</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
          <p>Sasi Institute of Technology and Engineering (8.9 CGPA)</p>
          <p>Nov 2021 - Ongoing</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h3 className="text-xl font-semibold">Intermediate in MPC</h3>
          <p>Aditya Junior College (90%)</p>
          <p>Jun 2019 - Mar 2021</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h3 className="text-xl font-semibold">Secondary School of Education</h3>
          <p>S.K.V.T English Medium Aided High School (9.7 CGPA)</p>
          <p>2019</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4 text-white">Achievements</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold">Competitive Programming</h3>
          <p>Solved 500+ problems on CodeChef, achieving a 2-star rating.</p>
          <p>Solved 100+ problems on LeetCode, with a rating of 1400+.</p>
          <a href="https://www.codechef.com/users/gayatriedibill" className="text-cyan-600">CodeChef Profile</a> | <a href="https://leetcode.com/u/Gayathri_Edibilli/" className="text-cyan-600">LeetCode Profile</a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

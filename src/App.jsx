import React from 'react';
import ProfileImg from './assets/Ilyas.jpg'

function App() {
  return (
    
    <div className='w-full h-screen flex justify-center items-center'>
      {/*Background components */}
      <div className='w-[80%] sm:w-full max-w-[400px] bg-[#1F1F1F] rounded-lg flex flex-col items-center justify-start p-10 gap-5'>
        {/*Profile*/}
        <div className='w-[100px] rounded-full overflow-hidden'>
          <img src={ProfileImg} alt='Profile' className='w-[100px]'></img>
        </div>
        <div className='text-center'>
          <h1 className='text-white text-2xl font-bold'>Rahman Ilyas Al Kahfi</h1>
          <p className='text-[#c5f82a] font-medium'>Jakarta, Indonesia</p>
        </div>
        <p className='text-gray-300 text-center text-sm my-[8px]'>"Student at Universitas Pembangunan Nasional Veteran Jakarta and a Lifelong Learner📚"</p>
        <div className='flex flex-col gap-4 w-full'>
          <a href='https://www.instagram.com/ilyasalkahfii/' className='w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium'>Instagram</a>
          <a href='https://www.linkedin.com/in/rahman-ilyas-al-kahfi-63481826a/' className='w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium'>LinkedIn</a>
          <a href='https://github.com/Kahfii' className='w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium'>GitHub</a>
        </div>
        </div>
      </div>
  );
}

export default App;

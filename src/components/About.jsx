import React from 'react'

export default function About() {
  return (
    <div name="about" className='"w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2'>About</p>
            </div>
            <div>
                <p className='text-xl mt-4 text-gray-200'>
                Hi, I’m Ayush Maharjan! <br />

I’m a passionate designer and developer with a flair for turning ideas into visually stunning and user-friendly interfaces. With expertise in React.js, Laravel, and Figma, I specialize in crafting seamless digital experiences that not only look great but also function effortlessly.
<br /><br />
Creativity and technology are at the heart of everything I do. Whether it’s designing intuitive layouts in Figma, building dynamic web applications with React, or developing robust backend solutions with Laravel, I’m always striving to push boundaries and deliver solutions that exceed expectations.
<br />
Let’s build something amazing together!
</p>
            </div>
        </div>
    </div>
  )
}

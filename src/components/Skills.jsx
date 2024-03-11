import React from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
    const skills = skillsData;
  return (
    <div name='skills' className='w-full h-auto bg-[#ffffede5]'>
        <div className='m-auto px-4 pt-20 flex flex-col justify-center max-w-[1000px] w-full h-auto'>
            <div>
                <p className='text-4xl font-bold text-orange-700 inline border-b-4 border-gray-400'>
                    Skills
                </p>
                <p className='py-4'>
                    These are the technologies I am experienced in.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {skills.map((skill) => (
                    <div className='shadow-md shadow-[#1e4074] hover:scale-110 duration-500' key={skill.id}>
                        <img className='w-20 mx-auto' src={skill.icon} alt={`${skill.name} icon`} />
                        <p className='my-4'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills

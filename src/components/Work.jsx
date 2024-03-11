import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Student from '../assets/projects/student.jpg';
import { workData } from '../data/work';

const Work = () => {
    const works= workData;
    const [filterWork, setFilterWork] = useState(workData);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
        setAnimateCard([{ y: 0, opacity: 1 }]);

        if (item === 'All') {
            setFilterWork(works);
        } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
        }, 500);
    };

  return (
    <div name='work' className='w-full h-auto bg-[#ffffede5]'>
        
            <div className='pb-1 pt-20 px-8 m-auto justify-center max-w-[1000px]'>
                <p className='text-4xl font-bold text-orange-700 inline border-b-4 border-gray-400'>
                    Work
                </p>
                <p className='head-text'> My Creative <span>Portfolio</span> Section</p>
            </div>
            <div className="app__work-filter">
                {['Full Stack', 'Front End', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
            >
                { filterWork.length !== 0 ? (
                filterWork.map((work) => (
                    <div className="app__work-item app__flex" key={work.id}>
                        <div
                        className="app__work-img app__flex"
                        >
                        <img src={work.imgUrl} alt={work.name} />

                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className="app__work-hover app__flex"
                        >
                            <a href={work.projectLink} target="_blank" rel="noreferrer">

                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillEye />
                            </motion.div>
                            </a>
                            <a href={work.codeLink} target="_blank" rel="noreferrer">
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillGithub />
                            </motion.div>
                            </a>
                        </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                        <h4 className="bold-text">{work.title}</h4>
                        <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                        <div className="app__work-tag app__flex">
                            <p className="p-text">{work.tags[0]}</p>
                        </div>
                        </div>
                    </div>
                ))) : 
                    (
                    <div className='app__work-item app__flex'>
                        <div className='app__work-img app__flex'>
                            <img src={Student} alt='No Project' />
                        </div>
                        <div className='app__work-content app__flex'>
                            <h4 className='bold-text'>No Projects Yet</h4>
                            <p className='p-text'>Loading soon...</p>
                        </div>
                     </div>   
                    
                    )
                
                }
            </motion.div>
        
    </div>
  )
}

export default Work

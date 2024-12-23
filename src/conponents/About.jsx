import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
    const [counterOn , setCounterOn] = useState(false)
    return (
        <div className="bg-gray-900 py-20 px-5 md:px-0 overflow-x-hidden overflow-y-hidden">
            <div className="max-w-7xl mx-auto">
                <div className=" flex flex-col md:flex-row gap-7 items-center">
                    <div className="md:w-1/2 space-y-5">
                        <motion.h1
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-bold text-4xl text-sky-400"
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="text-zinc-200"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
                            nemo, molestias iure laboriosam esse doloremque numquam blanditiis
                            corporis voluptates laborum dolorum quos sapiente rerum optio
                            inventore, voluptatem, totam cumque officiis eius commodi.
                            Voluptatem earum perferendis eum velit facere eligendi. Dolor
                            laborum porro vel quas! Voluptate distinctio eius vitae quibusdam
                            voluptatum!
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="text-zinc-200"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea
                            eveniet odit vel voluptas minus autem, obcaecati, doloribus pariatur
                            dolor voluptatibus sint cupiditate fugit blanditiis esse excepturi
                            itaque architecto nam!
                        </motion.p>
                        <button className=' rounded-md px-4 py-2 bg-transparent text-zinc-200 border-2 border-green-200 bg-green-700 shadow-lg shadow-indigo-500/50 hover:bg-indigo-950 hover:shadow-indigo-500'>Learn More</button>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-lg" />
                    </div>
                </div>
                <div className=" mt-4">
                    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                        <div className=" flex gap-10">
                            <div className=" flex flex-col items-center text-center">
                                <h1 className=" font-bold text-3xl md:text-4xl text-sky-300">
                                    {
                                    counterOn && <CountUp start={0} end={120} duration={2} delay={0} />
                                    }
                                    +
                                </h1>
                                <h3 className="text-sm text-zinc-200"> Happy Customers</h3>
                            </div>
                            <div className=" flex flex-col items-center text-center">
                                <h1 className=" font-bold text-3xl md:text-4xl text-sky-300">
                                    {
                                    counterOn && <CountUp start={0} end={220} duration={2} delay={0} />
                                    }
                                    +
                                </h1>
                                <h3 className="text-sm text-zinc-200">Success Projects</h3>
                            </div>
                            <div className=" flex flex-col items-center text-center">
                                <h1 className=" font-bold text-3xl md:text-4xl text-sky-300">
                                    {
                                    counterOn && <CountUp start={0} end={170} duration={2} delay={0} />
                                    }
                                    %
                                </h1>
                                <h3 className="text-sm text-zinc-200">Convertion Rate Increased</h3>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    );
}

export default About;

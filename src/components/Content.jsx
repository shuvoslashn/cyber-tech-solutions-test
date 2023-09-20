import React from "react";
import Sidebar from "./Sidebar";

const Content = () => {
    return (
        <main className='flex'>
            {/* sidebar */}
            <div className='hidden md:block w-[17.8125rem] bg-sidebar min-h-[calc(100vh-59px)] p-5'>
                <Sidebar />
            </div>
            <div className='container py-5 md:px-24'>
                <h1 className='text-[28px] md:text-[36px] font-[500] text-center mb-6'>
                    Main Content
                </h1>
                <p>
                    My country’s name is Bangladesh. Bangladesh is a very small
                    country huge population. It is a medium-developed country in
                    South Asia. We have a very good and progressing economy. It
                    has an area of 147,570 square kilometers. But it has a
                    population of 164 million. That is huge than the area.{" "}
                    <br />
                    <br />
                    But it is still a very beautiful and peaceful country.
                    People of Bangladesh are so friendly with each other. This
                    country has a glorious history of independence. We got
                    independence from Pakistan in 1971 after nine mothers’
                    blood-shedding war. More than 3 million Bangladeshi
                    sacrificed their life in that genocide.
                    <br />
                    <br /> But still, we were able to get our independence.
                    After independence, the newly born country faced lots of
                    hard times and struggles. But it rises very well. Now
                    Bangladesh is one of the best countries to live in South
                    Asia. There are so many beautiful spots to see in this
                    country.
                </p>
            </div>
        </main>
    );
};

export default Content;

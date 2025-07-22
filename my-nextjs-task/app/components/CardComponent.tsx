'use client'
import React from 'react';
import Link from 'next/link';
import { Posting } from '../types/job';
import Image from 'next/image';
import Catagories from './catagories';

const jobImages = [
  require('../images/job1.png').default,
  require('../images/job2.png').default,
  require('../images/job3.png').default,
  require('../images/job4.png').default
];

type Props = {
  job: Posting;
  index: number;
};

function CardComponent({ job, index }: Props) {
  return (
    <div className='w-[919px] h-[266px] rounded-[30px] border-solid border-[#D6DDEB] border-[1px] bg-[#FFFFFF] p-[24px] m-[20px]'>
      <Link href={`/description/${index}`}>
        <div className="flex items-start gap-[24px]">
          
          <div>
            <Image
              src={jobImages[index % 4]}
              alt="Job"
              width={150}
              height={150}
              className="rounded-[10px]"
            />
          </div>

        
          <div>
            <div className='font-Epilogue'>
              <div className='text-[20px] font-[600] leading-[1.2]'>{job.title}</div>

              <div className='text-[16px] font-[400] leading-[1.6] text-[#7C8493]'>
                <span>{job.company}</span>
                <ul className="list-disc p-4 m-0 inline-block">
                  <li>{job.about.location}</li>
                </ul>
              </div>
            </div>

            <p className='font-Epilogue font-[400] leading-[1.6] text-[#25324B]'>{job.description}</p>
            
               <div className="flex flex-wrap gap-2">
                        {job.about.categories.map((cata, index) => (
                            <Catagories key={index} data={cata} />
                        ))}
                    </div>
            
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardComponent;

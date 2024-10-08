// @flow strict
"use client";

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

function ProjectCard({ project } : {project: any}) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
        <Link href={`https://${project.url}`} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </Link>
        </p>
      </div>
      {/* <!-- Image Container with a Specific Height --> */}
      <div className="relative w-full h-64 lg:h-96 pointer opacity-80 hover:opacity-95">
        <Link href={`https://${project.url}`} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src={project.image} alt='' layout="fill" objectFit="cover" />
          </a>
        </Link>
        
      </div>
    </div>
  );
};

export default ProjectCard;
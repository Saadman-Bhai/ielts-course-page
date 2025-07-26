import React from 'react';
import Image from 'next/image';
import { SectionItem, InstructorMeta } from './types';

interface InstructorsProps {
  items: SectionItem[];
  title: string;
}

/**
 * Displays the course instructors.
 * @param {InstructorsProps} props - Component properties.
 * @returns {JSX.Element} The instructors section.
 */
const Instructors: React.FC<InstructorsProps> = ({ items, title }): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {items.map((item) => {
          const meta = item.meta as InstructorMeta;
          return (
            <div key={item.id} className="flex items-start sm:items-center space-x-4">
              <Image src={item.thumbnail} alt={item.title} width={80} height={80} className="rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{meta.designation}</p>
                <div className="text-sm text-gray-500 mt-1" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructors;
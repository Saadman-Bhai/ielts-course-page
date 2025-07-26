import React from 'react';
import Image from 'next/image';
import { SectionItem, FeatureMeta } from './types';

interface CourseLayoutProps {
  title: string;
  items: SectionItem[];
}

/**
 * Renders the "How the course is laid out" section.
 * @param {CourseLayoutProps} props - Component properties.
 * @returns {JSX.Element} The course features section.
 */
const CourseLayout: React.FC<CourseLayoutProps> = ({ title, items }): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => {
           const meta = item.meta as FeatureMeta;
          return (
            <div key={item.id} className="flex items-start space-x-4">
               <Image src={meta.icon} alt="" width={32} height={32} className="mt-1" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseLayout;
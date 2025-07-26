import React from 'react';
import Image from 'next/image';
import { SectionItem, InstructorMeta } from './types';

interface CourseFeaturesProps {
  items: SectionItem[];
  title: string;
}

/**
 * Displays the "Course Exclusive Feature" section.
 * Per the brief, this re-uses the 'instructor' data type.
 * @param {CourseFeaturesProps} props - Component properties.
 * @returns {JSX.Element} The exclusive features section.
 */
const CourseFeatures: React.FC<CourseFeaturesProps> = ({ items, title }): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => {
          return (
            <div key={item.id} className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFeatures;
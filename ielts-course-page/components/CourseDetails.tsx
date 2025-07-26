import React from 'react';
import { Section } from './types';

interface CourseDetailsProps {
  section: Section;
}

/**
 * Renders the detailed "About" section of the course.
 * @param {CourseDetailsProps} props - Component properties.
 * @returns {JSX.Element} The course details section.
 */
const CourseDetails: React.FC<CourseDetailsProps> = ({ section }): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      {section.description && (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: section.description }}
        />
      )}
    </div>
  );
};

export default CourseDetails;
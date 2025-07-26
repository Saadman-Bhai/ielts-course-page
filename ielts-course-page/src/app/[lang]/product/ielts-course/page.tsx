import { getCourseData } from '@/utils/api';
import { Metadata } from 'next';
import { APIResponse } from '@/components/types';

// Import all components
import Header from '@/components/Header';
import Trailer from '@/components/Trailer';
import CTA from '@/components/CTA';
import Checklist from '@/components/Checklist';
import Instructors from '@/components/Instructors';
import CourseLayout from '@/components/CourseLayout';
import LearningOutcomes from '@/components/LearningOutcomes';
import CourseDetails from '@/components/CourseDetails';
import CourseFeatures from '@/components/CourseFeatures';

interface PageProps {
  params: {
    lang: 'en' | 'bn';
  };
}

/**
 * Generates dynamic metadata for the page based on API response for SEO[cite: 57].
 * @param {PageProps} props - Page properties including language parameter.
 * @returns {Promise<Metadata>} A promise that resolves to the page's metadata.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const apiResponse: APIResponse | null = await getCourseData(params.lang);
    const seoData = apiResponse?.data.seo;

    if (!seoData) {
        return { title: 'IELTS Course by Munzereen Shahid' };
    }

    return {
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        openGraph: {
            title: seoData.title,
            description: seoData.description,
            images: [{ url: seoData.og_image }],
        },
        alternates: {
            canonical: seoData.canonical_url,
        },
    };
}

/**
 * The main server component for the product page.
 * It fetches data and renders the layout.
 * @param {PageProps} props - Page properties including language parameter.
 * @returns {Promise<JSX.Element>} A promise that resolves to the rendered page.
 */
export default async function ProductPage({ params }: PageProps): Promise<JSX.Element> {
  const { lang } = params;
  const apiResponse: APIResponse | null = await getCourseData(lang);

  if (!apiResponse) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p className="text-xl text-red-600">Failed to load course data.</p>
        </div>
    );
  }

  const courseData = apiResponse.data;

  // Find sections by type from the API response
  const instructorSection = courseData.sections.find(sec => sec.type === 'instructor');
  const featuresSection = courseData.sections.find(sec => sec.type === 'features');
  const pointersSection = courseData.sections.find(sec => sec.type === 'pointers');
  const aboutSection = courseData.sections.find(sec => sec.type === 'about');
  // Per the brief, 'Course Exclusive Feature' also uses the 'instructor' type[cite: 53].
  const exclusiveFeatureSection = instructorSection;


  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseData.title}</h1>
                <div className="prose" dangerouslySetInnerHTML={{ __html: courseData.description }} />
            </div>
            {instructorSection && <Instructors title={instructorSection.title} items={instructorSection.items} />}
            {featuresSection && <CourseLayout title={featuresSection.title} items={featuresSection.items} />}
            {pointersSection && <LearningOutcomes title={pointersSection.title} items={pointersSection.items} />}
            {exclusiveFeatureSection && <CourseFeatures title={"Course Exclusive Feature"} items={exclusiveFeatureSection.items} />}
            {aboutSection && <CourseDetails section={aboutSection} />}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-8 lg:sticky top-24">
            <Trailer media={courseData.media} />
            <CTA cta_text={courseData.cta_text} />
            <Checklist items={courseData.checklist} />
          </div>
        </div>
      </main>
    </>
  );
}
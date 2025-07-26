import { APIResponse } from '@/components/types';

/**
 * Fetches course data from the 10 Minute School API.
 * @param lang - The preferred language for the content ('en' or 'bn').
 * @returns A promise that resolves to the API response or null if an error occurs.
 */
export const getCourseData = async (lang: 'en' | 'bn'): Promise<APIResponse | null> => {
  // The API endpoint for the IELTS course data.
  const endpoint = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  try {
    const res = await fetch(endpoint, {
      headers: {
        // Required header for SEO purposes.
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
      },
      // Using Next.js's extended fetch API for revalidation (ISR).
      next: {
        revalidate: 3600, // Re-fetch data every hour.
      }
    });

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data: APIResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching course data:", error);
    return null;
  }
};
/**
 * Defines the shape of the entire API response.
 */
export interface APIResponse {
  data: Data;
  message: string;
  status_code: number;
}

/**
 * Main data structure for the course product[cite: 17].
 */
export interface Data {
  id: number; [cite: 19]
  slug: string; [cite: 18]
  title: string; [cite: 21]
  description: string; // This is an HTML string[cite: 22, 43].
  media: Media; [cite: 23]
  checklist: ChecklistItem[]; [cite: 24]
  seo: Seo; [cite: 25]
  cta_text: CtaText; [cite: 26]
  sections: Section[]; [cite: 27]
}

/**
 * Media information, including the product trailer[cite: 45].
 */
export interface Media {
  id: number;
  youtube_video_id: string;
  title: string;
}

/**
 * An item in the checklist section[cite: 55].
 */
export interface ChecklistItem {
  id: number;
  title: string;
  icon: string;
}

/**
 * SEO metadata provided by the API[cite: 57].
 */
export interface Seo {
  title: string;
  description: string;
  keywords: string;
  og_image: string;
  canonical_url: string;
}

/**
 * Call-to-action text for buttons[cite: 47].
 */
export interface CtaText {
  checkout: string;
}

/**
 * A content section of the page, such as instructors or features.
 */
export interface Section {
  id: number;
  title: string;
  // Type determines which component renders this section[cite: 44, 51, 52, 53, 54].
  type: 'instructor' | 'features' | 'pointers' | 'about' | string;
  description: string | null;
  items: SectionItem[];
}

/**
 * An item within a section, e.g., a single instructor or a feature detail.
 */
export interface SectionItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  meta: InstructorMeta | FeatureMeta | null;
}

/**
 * Metadata for an instructor item.
 */
export interface InstructorMeta {
  designation: string;
}

/**
 * Metadata for a feature item.
 */
export interface FeatureMeta {
  icon: string;
}
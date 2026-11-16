import type { Metadata } from "next";

// person model and data-type.
export type Person = {
  firstName: string;
  lastName: string;
  role: string;
  avatar: string;
  email: string;
  location: string;
  languages?: string[];
  /**
   * BCP 47 language tag for the HTML lang attribute (e.g., 'en', 'ja', 'zh-TW').
   * Defaults to 'en' if not set.
   * See: https://www.iana.org/assignments/language-subtag-registry
   */
  locale?: string;
};

// base interface for page  configuration with common properties.
export interface BasePageConfig {
  // path to the page
  path: `/${string}` | string;

  // 'label for navigation or display
  label: string;

  // title of the page
  title: string;

  // description for SEO and metadata
  description: string;

  // og image
  openGraph: NonNullable<Metadata["openGraph"]>;
}

// home page configuration.
export interface Home extends BasePageConfig {
  // headline of the home page
  headline: React.ReactNode;

  // featured badge, which appears above the headline
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };

  /** sub text which appears below the headline */
  subline: React.ReactNode;
}

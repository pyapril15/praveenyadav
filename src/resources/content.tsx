import type { Person, Home } from "../types";

export const baseURL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const person: Person = {
  firstName: "Praveen",
  lastName: "Yadav",
  role: "Full Stack Developer",
  avatar: "/images/praveen_yadav.svg",
  email: "praveen885127@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  locale: "en",
};

export const home: Home = {
  path: "/",
  openGraph: {
    type: "website",
    url: "/",
    title: `${person.firstName}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    siteName: `${person.firstName} ${person.lastName}'s Portfolio`,
    images: [{ url: "/images/og/home.jpg" }],
  },
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <span>
        <strong>Shortly</strong> | Featured work
      </span>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <strong>`${person.firstName} Portfolio`</strong>
      , where I craft intuitive <br /> user experiences. After hours, I build my
      own projects.
    </>
  ),
};

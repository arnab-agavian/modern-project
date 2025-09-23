import { Blog1 } from "@/components/blogs/Blog1";

export async function generateMetadata({ params }) {
  const url = "https://www.themoderncircle.com/blog/NABH-compliant-hospital-construction-for-modern-healthcare";

  return {
    title: "NABH-Compliant Hospital Construction for Modern Healthcare | The Modern Circle",
    description: "A well-thought-out healthcare facility design and build process ensures that patients, families, and caregivers experience comfort, safety, and trust right from the reception area.",
    keywords: ["Modern Healthcare Construction", "NABH-Compliant Hospital Construction" ,"Hospital Construct" , "Hospital Design"],

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      title: "NABH-Compliant Hospital Construction for Modern Healthcare | The Modern Circle",
      description: "A well-thought-out healthcare facility design and build process ensures that patients, families, and caregivers experience comfort, safety, and trust right from the reception area.",
      url: url,
      siteName: "The Modern Circle",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "The Modern Circle Logo",
        },
      ],
    },
  };
}

export default function SingleSEOPage({ params }) {
  console.log("res seo 11", params);
  return <Blog1 params={params} />;
}

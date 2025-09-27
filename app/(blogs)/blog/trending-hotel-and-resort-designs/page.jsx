import { Blog2 } from "@/components/blogs/Blog2";

export async function generateMetadata({ params }) {
  const url = "https://www.themoderncircle.com/blog/trending-hotel-and-resort-designs";

  return {
    title: "Trending Hotel & Resort Designs with Pools | The Modern Circle",
    description: "Discover how The Modern Circle designs trending hotels and resorts with stunning pools, modern detailing, and storytelling architecture. Learn why space planning and detail make all the difference.",
    keywords: ['hotel architecture firm', 'boutique hotel design', 'resort architecture', 'luxury pool resort design', 'eco resort construction', 'spa resort planning', 'modern hotel interiors', 'The Modern Circle architects'],

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
      title: "Trending Hotel & Resort Designs with Pools | The Modern Circle",
      description: "Discover how The Modern Circle designs trending hotels and resorts with stunning pools, modern detailing, and storytelling architecture. Learn why space planning and detail make all the difference.",
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
  return <Blog2 params={params} />;
}

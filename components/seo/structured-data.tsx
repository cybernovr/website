import { Metadata } from "next"

export const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cybernovr",
    "url": "https://cybernovr.com",
    "logo": "https://anpimagehosting.s3.eu-west-1.amazonaws.com/57580_Cybernovrlogo.png",
    "description": "Professional cybersecurity services and solutions",
    "sameAs": [
      "https://x.com/CYBERNOVR",
      "https://www.linkedin.com/in/cybernovr-limited-21831a36b/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
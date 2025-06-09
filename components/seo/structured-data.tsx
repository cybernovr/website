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
      "https://twitter.com/cybernovr",
      "https://linkedin.com/company/cybernovr"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
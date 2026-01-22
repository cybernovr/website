"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Event {
  title: string
  date: string
  location: string
  description: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Log the fetch attempt
        console.log("Fetching events from SheetDB...")
        
        // const response = await fetch("https://sheetdb.io/api/v1/i8g6d25nbw306")
        const response = await fetch("https://sheetdb.io/api/v1/9suxg67tq6053")
        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`)
        }
        
        const data = await response.json()
        
        // Log the raw data received
        console.log("Raw data from SheetDB:", data)
        
        if (!Array.isArray(data) || data.length === 0) {
          setError("No events data received from the API")
          setEvents([])
          return
        }
        
        // Check if the data has the expected properties
        const hasRequiredFields = data.some((item: any) => 
          item.title && item.date && item.location && item.description
        )
        
        if (!hasRequiredFields) {
          console.warn("Data is missing required fields. First item:", data[0])
          // Try to map the data using the actual field names from the sheet
          // This assumes the column headers in your sheet might be different
          const mappedData = data.map((item: any) => ({
            title: item.title || item.Title || item.EVENT || item.Event || item.event || "",
            date: item.date || item.Date || item.DATE || "",
            location: item.location || item.Location || item.LOCATION || "",
            description: item.description || item.Description || item.DESCRIPTION || ""
          }))
          setEvents(mappedData)
        } else {
          // Sort events by date without filtering
          const sortedEvents = [...data].sort((a: Event, b: Event) => {
            // Simple string comparison if dates can't be parsed
            return a.date.localeCompare(b.date)
          })
          
          setEvents(sortedEvents)
        }
      } catch (error) {
        console.error("Error fetching events:", error)
        setError(`Error fetching events: ${error instanceof Error ? error.message : String(error)}`)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Format date - display as is if parsing fails
  const formatDate = (dateString: string) => {
    try {
      // Try to format the date
      const date = new Date(dateString)
      
      // Check if date is valid
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }
      
      // If date is invalid, return the original string
      return dateString
    } catch (e) {
      // If any error occurs, return the original string
      return dateString
    }
  }
    
  return (
    <>
      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            {error && (
              <p className="text-red-500 mt-2">{error}</p>
            )}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-lg">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg">No events found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <div className="text-electric-blue font-medium mb-2">{formatDate(event.date)}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="text-charcoal/70 mb-4">{event.location}</div>
                    <p className="text-charcoal/80 mb-6">{event.description}</p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        Register Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

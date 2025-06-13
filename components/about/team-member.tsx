import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Kazeem from "@/components/images/kazeem.png"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  image: string | any // Updated to accept both string paths and imported images
  fullBio?: string
}

export default function TeamMember({ name, title, bio, image, fullBio }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-electric-blue font-medium mb-3">{title}</p>
        <p className="text-charcoal/80 mb-4 line-clamp-3">{bio}</p>
        
        {fullBio && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full mt-2">View Profile</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-10">
              <DialogHeader>
                <DialogTitle className="text-2xl">Profile: {name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                <div className="relative md:mt-10 lg:mt-12 h-[150px]  w-[150px] rounded-lg overflow-hidden">
                  <Image src={image} alt={name} fill className="" />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-electric-blue font-medium mb-2">{title}</p>
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-line leading-relaxed">{fullBio}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}

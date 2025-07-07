// components/BackgroundImages.tsx
"use client"
import Image from "next/image"
import {
  Biene1,
  Biene2,
  Erdbeere1,
  Erdbeere2,
  Erdbeere3,
  Erdbeere4,
  Erdbeere5,
  Erdbeere6,
  Wolke1,
  Wolke2,
  Wolke3,
} from "@/assets"
import { useEffect, useState } from "react"

const allImages = [
	{ src: Biene1, width: 100, height: 100, top: "10%", left: "5%" },
	{ src: Biene2, width: 150, height: 150, top: "15%", left: "80%" },
	{ src: Erdbeere1, width: 80, height: 80, top: "30%", left: "20%" },
	{ src: Erdbeere2, width: 120, height: 120, top: "40%", left: "70%" },
	{ src: Erdbeere3, width: 90, height: 90, top: "60%", left: "10%" },
	{ src: Erdbeere4, width: 110, height: 110, top: "50%", left: "50%" },
	{ src: Erdbeere5, width: 130, height: 130, top: "70%", left: "30%" },
	{ src: Erdbeere6, width: 140, height: 140, top: "80%", left: "60%" },
	{ src: Wolke1, width: 160, height: 160, top: "20%", left: "40%" },
	{ src: Wolke2, width: 180, height: 180, top: "35%", left: "15%" },
	{ src: Wolke3, width: 200, height: 200, top: "75%", left: "85%" },
]

const mobileImages = [
	{ src: Biene1, width: 100, height: 100, top: "5%", left: "5%" },
	{ src: Erdbeere1, width: 80, height: 80, top: "45%", left: "20%" },
	{ src: Erdbeere2, width: 120, height: 120, top: "50%", left: "70%" },
	{ src: Erdbeere3, width: 90, height: 90, top: "70%", left: "10%" },
	{ src: Wolke1, width: 160, height: 160, top: "10%", left: "40%" },
]

const smallMobileImages = [
  { src: Erdbeere4, width: 100, height: 100, top: "5%", left: "5%" },
  { src: Erdbeere1, width: 100, height: 100, top: "80%", left: "60%" },
]

export default function BackgroundImages() {
  const [screenSizeCategory, setScreenSizeCategory] = useState("desktop")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 480) {
        setScreenSizeCategory("smallMobile")
      } else if (width < 768) {
        setScreenSizeCategory("mobile")
      } else {
        setScreenSizeCategory("desktop")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  let imagesToDisplay
  if (screenSizeCategory === "smallMobile") {
    imagesToDisplay = smallMobileImages
  } else if (screenSizeCategory === "mobile") {
    imagesToDisplay = mobileImages
  } else {
    imagesToDisplay = allImages
  }

  return (
    <>
      {imagesToDisplay.map((image, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: image.top,
            left: image.left,
            zIndex: -1,
          }}
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`Dekoratives Bild ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </>
  )
}

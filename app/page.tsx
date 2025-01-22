import Hero from "./components/Hero"
import NewsAnnouncements from "./components/NewsAnnouncements"
import Services from "./components/Services"
import BackgroundAnimation from "./components/BackgroundAnimation"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <Hero />
      <NewsAnnouncements />
      <Services />
    </div>
  )
}


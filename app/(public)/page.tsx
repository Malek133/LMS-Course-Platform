// "use client"

// import { authClient } from "@/lib/auth-client";

// export default  function Home() {
//   const { 
//     data: session, 
// } = authClient.useSession() 
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//     Hello : {session ? (
//       <>Welcome {session.user.name}</>
//     ):(
//       <>Not authenticated</>
//     )}
//     </div>
//   );
// }

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Monitor, TrendingUp, Users,
  //  Settings, User, RefreshCw
   } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold">MarshallLMS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Courses
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <RefreshCw className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm mb-8">The Future of Online Education</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Elevate your Learning Experience</h1>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover a new way to learn with our modern, interactive learning management system. Access high-quality
            courses anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3">
              Explore Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-white font-semibold">Comprehensive Courses</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-white font-semibold">Interactive Learning</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-white font-semibold">Progress Tracking</h3>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-white font-semibold">Community Support</h3>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


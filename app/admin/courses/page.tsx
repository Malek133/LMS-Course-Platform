import React from 'react'


// import Image from 'next/image'
import { Plus, BookOpen, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: string
  students: number
  rating: number
  level: string
  category: string
  image: string
}

const initialCourses: Course[] = [
  {
    id: "1",
    title: "Advanced React Development",
    description: "Master modern React patterns, hooks, and state management with real-world projects.",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    students: 1247,
    rating: 4.8,
    level: "Advanced",
    category: "Development",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of user interface and user experience design from scratch.",
    instructor: "Mike Chen",
    duration: "6 weeks",
    students: 892,
    rating: 4.6,
    level: "Beginner",
    category: "Design",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Data Science with Python",
    description: "Comprehensive course covering data analysis, visualization, and machine learning.",
    instructor: "Dr. Emily Rodriguez",
    duration: "12 weeks",
    students: 2156,
    rating: 4.9,
    level: "Intermediate",
    category: "Data Science",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    description: "Build effective marketing campaigns across digital platforms and social media.",
    instructor: "Alex Thompson",
    duration: "4 weeks",
    students: 634,
    rating: 4.5,
    level: "Beginner",
    category: "Marketing",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const CoursesPage = () => {

  //  const [courses, setCourses] = useState<Course[]>(initialCourses)
  // const [showCreateForm, setShowCreateForm] = useState(false)

  // const handleCreateCourse = () => {
    // const newCourse: Course = {
    //   id: Date.now().toString(),
    //   title: "New Course Title",
    //   description: "Course description goes here. Edit this to add your course details.",
    //   instructor: "Your Name",
    //   duration: "4 weeks",
    //   students: 0,
    //   rating: 0,
    //   level: "Beginner",
    //   category: "General",
    //   image: "/placeholder.svg?height=200&width=300",
    // }
    // setCourses([newCourse, ...courses])
    // setShowCreateForm(false)
  // }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      case "Advanced":
        return "bg-red-500/10 text-red-400 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  return (
   <div className="min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Courses</h1>
              <p className="text-gray-400">
                Discover and manage your learning journey with our comprehensive course catalog
              </p>
            </div>
            <Link href='/admin/courses/create'>
            <Button  
            className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Course
            </Button>
            </Link>
            
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {initialCourses.map((course:Course) => (
            <Card key={course.id} className=" border-gray-800  transition-colors">
              <CardHeader className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  {/* <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className=" text-gray-300 border-gray-700">
                    {course.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {course.description}
                </CardDescription>
                <div className="text-sm text-gray-500 mb-3">by {course.instructor}</div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                {course.rating > 0 && (
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-300">{course.rating}</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">
                  <BookOpen className="bg-black text-white w-4 h-4 mr-2" />
                  View Course
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {initialCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No courses yet</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first course</p>
            <Button 
            // onClick={handleCreateCourse} 
            className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Course
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesPage







 
 



import z from "zod";

export const courseLevel = ["Beginner","Advainced",
"Intermedi"] as const 

export const  CourseStatus =[
"Draft","Published","Archive"
] as const

export const CourseCategories = [
  "Marketing",
  "Développement Web",
  "Finance",
  "Design",
  "Photographie",
  "Data Science",
  "Intelligence Artificielle",
  "Cybersécurité",
  "Gestion de Projet",
  "Ressources Humaines",
  "Entrepreneuriat",
  "Développement Personnel",
  "Langues",
  "Musique",
  "Santé & Bien-être",
  "Ventes",
  "Réseaux Sociaux",
  "E-commerce",
  "Blockchain",
  "Jeux Vidéo"
] as const;


export const CourseSchema = z.object({
  title: z.string().min(2,{message:"the title must be min 2 caracter"})
  .max(50,{message:"the title must be max 50 caracter"}),
  descrepton:z.string().min(10,{message:"the descreption must be min 10 caracter"})
  .max(200,{message:"the descreption must be max 200 caracter"}),
  filekey:z.string().min(1),
  price:z.coerce.number().min(1),
  duration:z.coerce.number().min(1).max(500),
  level:z.enum(courseLevel),
  category:z.enum(CourseCategories),
  smallDescription:z.string().min(10,{message:"the smallDescreption must be min 10 caracter"})
  .max(100,{message:"the smallDescreption must be max 100 caracter"}),
  slug:z.string().min(3),
  status:z.enum(CourseStatus),

})

  
export type CourseSchemaType = z.infer<typeof CourseSchema>

  
  

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Tipo para los testimonios
type Testimonial = {
  id: number
  name: string
  service: string
  content: string
  avatar: string
}

// Datos de ejemplo para los testimonios con avatares
const testimonialData: Testimonial[] = [
  // Paso 1
  {
    id: 1,
    name: "Sasha Ouwada",
    service: "Paciente de Cirugia",
    content:
      "Excelente profesional, muy recomendable, me hizo una extracción y no sentí nada!! Super atenta y responsable, me dió todas las indicaciones correspondientes, te da mucha seguridad, no dudaría ni un segundo en volver.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Nico Mk",
    service: "Paciente de Blanqueamiento",
    content:
      "Una genia y excelente servicio! Limpieza + Caries + Blanqueamiento + Llenado de espacio entre paletas, 5 estrellas.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "jochy1969",
    service: "Paciente de Implantes",
    content: "Cynthia excelentisima profesional , una persona muy humana y humilde , lugar y trabajo de excelencia , agradecido con ella , sin dudar la elegiría siempre.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Fabiana Cicero",
    service: "Paciente de Odontología General",
    content:
      "Excelente profesional Cynthia, con mucha paciencia y una mano increíble! Como así también Fiore, que te responde enseguida y te consigue el turno que necesites.",
    avatar: "/placeholder.svg?height=40&width=40",
  },

  // Paso 2
  {
    id: 5,
    name: "Tomas Fiore",
    service: "Paciente de Alineadores Stick",
    content:
      "Excelente, la odontóloga es un encanto de persona y una gran profesional!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Ayelen Flores",
    service: "Paciente de Ortodoncia",
    content:
      "Excelente profesional, excelente trabajo, responsable y cálida . Me hizo extracciones, arreglos y tratamiento de brackets. La recomiendo 100%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "Francisco Cortese.",
    service: "Paciente de Alineadores Stick",
    content:
      "Muy buena la atención, profesional y detallista.Recomendable totalmente.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Macarena Acevedo Nazetta",
    service: "Paciente de Ortodoncia",
    content: "Finalizó mi tratamiento de ortodoncia, estoy muy conforme con el resultado. Cyn siempre genera un ambiente cálido y explica cada paso que realiza. La recomiendo!",
    avatar: "/placeholder.svg?height=40&width=40",
  },

  // Paso 3
  {
    id: 9,
    name: "Camila F.",
    service: "Paciente de Alineadores Stick",
    content:
      "Los alineadores son prácticamente invisibles y muy cómodos. Pude seguir con mi vida normal durante todo el tratamiento.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    name: "Mario Hernández",
    service: "Paciente de Ortodoncia",
    content:
      "El mejor servicio para cuidar tu sonrisa! La Dra. es muy dedicada, detallista y, principalmente, muy cuidadosa y cálida. En este año y medio realizamos un tratamiento de ortodoncia y extracción de muelas del juicio que resultaron un éxito debido a su excelente trabajo.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 11,
    name: "Diego Ovide",
    service: "Paciente de Odontologia General",
    content:
      "Llegué por todos los comentarios positivos que tiene y acá estoy yo ahora sumando el mío.El trabajo realizado fue lo esperado pero yo me quedo con su forma de ser; su calidez, su calidad, su humor, su humanidad y su paciencia.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 12,
    name: "Cesar Arrocha",
    service: "Paciente de Odontología General",
    content:
      "Mientras estoy de paso en Buenos Aires fui donde Cynthia a hacerme limpieza y desde la recepción el trato fue excelente. Parecía que era mi odontóloga desde hace años. Es muy amable y atenta. Fue muy paciente conmigo durante el proceso y muy cuidadosa para que nada doliera. Recomiendo a Cynthia 100%",
    avatar: "/placeholder.svg?height=40&width=40",
  },

  // Paso 4
  {
    id: 13,
    name: "Franco Hat",
    service: "Paciente de Alineadores Stick",
    content:
      "El tratamiento con alineadores invisibles es espectacular!! Super efectivo y rapido.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 14,
    name: "Roberto Fumatti",
    service: "Paciente de Implantes",
    content:
      "A mis 65 años, pensé que tendría que usar dentadura postiza, pero los implantes me devolvieron la calidad de vida.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 15,
    name: "Mariana C.",
    service: "Paciente de Blanqueamiento",
    content:
      "El tratamiento de blanqueamiento fue personalizado para mis necesidades. La Dra. Cynthia cuida cada detalle.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 16,
    name: "Romina Garbagnati",
    service: "Paciente de Odontología General",
    content:
      "Super profesional, comprometida con sus pacientes. Atiende a toda mi familia, la recomiendo",
    avatar: "/placeholder.svg?height=40&width=40",
  },

  // Paso 5
  {
    id: 17,
    name: "Julieta R.",
    service: "Paciente de Alineadores Stick",
    content:
      "Como profesional que trabaja con público, los alineadores Stick fueron perfectos porque son discretos y efectivos.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 18,
    name: "Gisela Crudo",
    service: "Paciente de Implantes",
    content:
      "Excelente profesional, super dulce, atenta y paciente. Toda la familia nos atendemos con ella.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 19,
    name: "Carolina M.",
    service: "Paciente de Blanqueamiento",
    content:
      "Me encantó que el blanqueamiento no generó sensibilidad en mis dientes. Técnica impecable y resultados duraderos.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 20,
    name: "Sasha Vidoz",
    service: "Paciente de Ortodoncia",
    content:
      "Cyn es lo más de lo más! Realizó mi ortodoncia, nunca sentí dolor y siempre fue amable y agradable en cada consulta. Super profesional ¡La mejor elección para cuidar de mi salud bucal!",
    avatar: "/placeholder.svg?height=40&width=40",
  },

  // Paso 6
  {
    id: 21,
    name: "Florencia Barilli",
    service: "Paciente de Alineadores Stick",
    content:
      "La app de seguimiento de los alineadores Stick es genial. Pude ver mi progreso semana a semana y eso me motivó mucho.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 22,
    name: "Sofia Lobos",
    service: "Paciente de Implantes",
    content:
      "Excelente la dra!! Y muy amable quien trabaja con ella en recepción ! Profesionalidad, y se refleja el amor por lo que hacen!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 23,
    name: "Daniela P.",
    service: "Paciente de Blanqueamiento",
    content: "El blanqueamiento me quitó manchas que tenía desde hace años. Ahora puedo sonreír con total confianza.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 24,
    name: "Nicolas Tashdjian",
    service: "Paciente de Odontología General",
    content:
      "Llegue a Cynthia por una recomendación y no solo cumplió, sino que supero las expectativas tanto a nivel profesional como personal.Se nota que ella y su equipo son buenas personas y eso se traduce en buen trato, excelente trabajo y buenos resultados.Recomemdable 100%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Dividir los testimonios en grupos de 4 para cada paso del carrusel
const groupTestimonials = (data: Testimonial[], itemsPerGroup: number) => {
  return Array.from({ length: Math.ceil(data.length / itemsPerGroup) }, (_, i) =>
    data.slice(i * itemsPerGroup, (i + 1) * itemsPerGroup),
  )
}

// Función para generar un avatar basado en el nombre
const getAvatarUrl = (name: string, id: number) => {
  // Usamos diferentes estilos de avatares para dar variedad
  const styles = ["micah", "avataaars", "bottts", "initials"]
  const style = styles[id % styles.length]

  // Creamos un hash simple basado en el nombre para tener consistencia
  const nameHash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // Generamos colores basados en el hash del nombre
  const hue = (nameHash * 137) % 360

  if (style === "initials") {
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
    return `https://ui-avatars.com/api/?name=${initials}&background=${hue.toString(16)}&color=fff`
  }

  return `https://avatars.dicebear.com/api/${style}/${nameHash}.svg?background=%23${hue.toString(16)}`
}

export default function TestimonialsCarousel() {
  const [currentStep, setCurrentStep] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Actualizar los avatares con URLs generadas
  const testimonialsWithAvatars = testimonialData.map((testimonial) => ({
    ...testimonial,
    avatar: getAvatarUrl(testimonial.name, testimonial.id),
  }))

  const testimonialGroups = groupTestimonials(testimonialsWithAvatars, 4)
  const totalSteps = testimonialGroups.length

  // Función para ir al siguiente paso
  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % totalSteps)
  }

  // Función para ir al paso anterior
  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps)
  }

  // Función para ir a un paso específico
  const goToStep = (step: number) => {
    setCurrentStep(step)
    // Pausar el autoplay temporalmente cuando el usuario interactúa
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextStep()
      }, 5000) // Cambiar cada 5 segundos
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentStep, autoplay])

  // Manejo de eventos táctiles para deslizar en móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Deslizar a la izquierda
      nextStep()
    }

    if (touchStart - touchEnd < -50) {
      // Deslizar a la derecha
      prevStep()
    }
  }

  return (
    <div className="mx-auto mt-12 max-w-6xl">
      {/* Carrusel */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentStep * 100}%)` }}
        >
          {testimonialGroups.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className="w-full flex-shrink-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.map((testimonial) => (
                  <Card key={testimonial.id} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-100">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={`Avatar de ${testimonial.name}`}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.service}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
          onClick={prevStep}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
          onClick={nextStep}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Indicadores de paso */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={`h-2 w-8 rounded-full transition-colors ${currentStep === index ? "bg-sky-600" : "bg-gray-300"}`}
            onClick={() => goToStep(index)}
            aria-label={`Ir al paso ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


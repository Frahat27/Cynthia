"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Tipo para los servicios
type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

// Componente para el ícono de Alineadores
const AlignersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M12 6c-1.8-1.8-4.2-2-5.8-.4L4.9 7c-1.6 1.6-1.4 4 .4 5.8 1.5 1.5 3.5 2 5.3.9L9 12l3-3 1.4 1.5c1.2-1.9.7-3.8-.9-5.5z" />
    <path d="M9.5 14.5 11 16" />
    <path d="m15.5 8.5-2-2" />
    <path d="M18 3c-.5 0-1 .2-1.4.6l-.9.9c-.3.4-.2 1 .3 1.4l.9.9c.4.4 1 .4 1.4 0l.9-.9c.4-.4.4-1 0-1.4l-.9-.9c-.4-.4-.8-.6-1.3-.6z" />
    <path d="m3.9 14.6 2 2" />
    <path d="M7.5 18.2c-.4.4-.4 1 0 1.4l.9.9c.4.4 1 .4 1.4 0l.9-.9c.4-.4.4-1 0-1.4l-.9-.9c-.4-.4-1-.4-1.4 0z" />
    <path d="M16.8 15.3c.4.4 1 .4 1.4 0l.9-.9c.4-.4.4-1 0-1.4l-.9-.9c-.4-.4-1-.4-1.4 0l-.9.9c-.4.4-.4 1 0 1.4z" />
    <path d="m12.4 19.9-1.5-1.5" />
  </svg>
)

// Componente para el ícono de Blanqueamiento
const WhiteningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M12 8v4l3 3" />
    <path d="M15.3 17.8a8 8 0 1 1 0-11.8" />
  </svg>
)

// Componente para el ícono de Implantes
const ImplantsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
)

// Componente para el ícono de Prótesis
const ProsthesisIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2a2 2 0 0 1-4 0v-2a2 2 0 0 0-4 0v2a2 2 0 0 1-4 0v-2a2 2 0 0 0-4 0Z" />
  </svg>
)

// Componente para el ícono de Odontología General
const GeneralDentistryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M17.5 21h-10c-.3 0-.5-.2-.5-.4v-9.6c0-.2.2-.4.5-.4h4c0-1 .1-1.9.2-2.7.4-1.7 1.2-3.1 2.3-3.7.8-.5 1.6-.2 2.2.7.5.8.8 1.8.7 2.8v7.3c1 .1 2.5.4 3.5 1.1.9.6 1.2 1.5.9 2.2-.4.7-1.4.7-3.8.7z" />
    <path d="m9.5 14.7 5-1.6" />
    <path d="m9.5 18.7 5-1.7" />
    <path d="M5.5 6.7a3 3 0 0 0-3 3v9" />
  </svg>
)

// Componente para el ícono de Tratamientos de Conducto
const RootCanalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M12 22c-4.4 0-8-3.6-8-8V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 4.4-3.6 8-8 8z" />
    <path d="M8 6v4" />
    <path d="M16 6v4" />
    <path d="M12 6v8" />
    <path d="M10 14h4" />
  </svg>
)

// Componente para el ícono de Chequeo y Control
const CheckupIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)

// Datos de los servicios
const serviceData: Service[] = [
  {
    id: 1,
    title: "Alineadores",
    description: "Alineadores transparentes personalizados para una sonrisa perfecta.",
    icon: <AlignersIcon />,
  },
  {
    id: 2,
    title: "Blanqueamiento",
    description: "Mejora el color de tus dientes con procedimientos seguros y efectivos.",
    icon: <WhiteningIcon />,
  },
  {
    id: 3,
    title: "Implantes",
    description: "Recupera dientes perdidos con implantes de alta calidad.",
    icon: <ImplantsIcon />,
  },
  {
    id: 4,
    title: "Prótesis",
    description: "Restauraciones dentales para devolver la función y estética a tu sonrisa.",
    icon: <ProsthesisIcon />,
  },
  {
    id: 5,
    title: "Odontología General",
    description: "Prevención y tratamiento de problemas dentales comunes.",
    icon: <GeneralDentistryIcon />,
  },
  {
    id: 6,
    title: "Tratamientos de Conducto",
    description: "Eliminación de infecciones y preservación de dientes dañados.",
    icon: <RootCanalIcon />,
  },
  {
    id: 7,
    title: "Chequeo y Control",
    description: "Revisiones periódicas para mantener tu salud bucal en óptimas condiciones.",
    icon: <CheckupIcon />,
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const totalServices = serviceData.length

  // Función para ir al siguiente servicio
  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % totalServices)
  }

  // Función para ir al servicio anterior
  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + totalServices) % totalServices)
  }

  // Función para ir a un servicio específico
  const goToService = (index: number) => {
    setCurrentIndex(index)
    // Pausar el autoplay temporalmente cuando el usuario interactúa
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextService()
      }, 3000) // Cambiar cada 3 segundos
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentIndex, autoplay])

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
      nextService()
    }

    if (touchStart - touchEnd < -50) {
      // Deslizar a la derecha
      prevService()
    }
  }

  return (
    <div className="mx-auto mt-12 max-w-6xl">
      {/* Carrusel */}
      <div
        className="relative min-h-[400px] overflow-hidden px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-center py-8">
          {serviceData.map((service, index) => (
            <div
              key={service.id}
              className={`absolute transition-all duration-500 transform ${
                index === currentIndex
                  ? "opacity-100 scale-100 z-10"
                  : index === (currentIndex + 1) % totalServices ||
                      index === (currentIndex - 1 + totalServices) % totalServices
                    ? "opacity-40 scale-90 z-0"
                    : "opacity-0 scale-75 z-0"
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 120}%)`,
              }}
            >
              <Card
                className={`w-60 md:w-80 h-80 overflow-hidden transition-colors duration-300 ${
                  index === currentIndex ? "bg-sky-50 border-sky-200" : "bg-white"
                }`}
              >
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div
                    className={`mb-4 rounded-full p-3 ${
                      index === currentIndex ? "bg-sky-200 text-sky-900" : "bg-sky-100 text-sky-900"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
          onClick={prevService}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
          onClick={nextService}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Indicadores de paso */}
      <div className="mt-6 flex justify-center gap-2">
        {serviceData.map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={`h-2 w-8 rounded-full transition-colors ${
              currentIndex === index ? "bg-sky-600" : "bg-gray-300"
            }`}
            onClick={() => goToService(index)}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

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

// Componente para el ícono de Ortodoncia con Brackets
const BracketsIcon = () => (
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
    <path d="M7 2v11m0 3v6" />
    <path d="M17 2v11m0 3v6" />
    <path d="M7 13h10" />
    <path d="M7 13a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3" />
  </svg>
)

// Componente para el ícono de Limpieza y Periodoncia
const CleaningIcon = () => (
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
    <path d="M2 12h20" />
    <path d="M6 12a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v6H6z" />
    <path d="M6 12v6" />
    <path d="M18 12v6" />
    <path d="M10 12v6" />
    <path d="M14 12v6" />
  </svg>
)

// Componente para el ícono de Caries y Arreglos
const CavitiesIcon = () => (
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
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
)

// Tipo para los servicios
type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

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
  {
    id: 8,
    title: "Ortodoncia con Brackets",
    description: "Corrección de la posición dental con brackets tradicionales o estéticos.",
    icon: <BracketsIcon />,
  },
  {
    id: 9,
    title: "Limpieza y Periodoncia",
    description: "Tratamiento de encías y limpieza profunda para prevenir enfermedades periodontales.",
    icon: <CleaningIcon />,
  },
  {
    id: 10,
    title: "Caries y Arreglos",
    description: "Tratamiento de caries y restauraciones dentales con materiales de alta calidad.",
    icon: <CavitiesIcon />,
  },
]

export default function ServicesGrid() {
  return (
    <div className="mx-auto mt-12 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {serviceData.map((service) => (
          <Card
            key={service.id}
            className="h-full overflow-hidden transition-colors duration-300 hover:bg-sky-50 hover:border-sky-200"
          >
            <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 rounded-full p-3 bg-sky-100 text-sky-600">{service.icon}</div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


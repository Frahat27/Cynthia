"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ServicesGrid from "@/components/services-grid"
import { submitContactForm } from "./actions"
import { toast } from "@/hooks/use-toast"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Crear FormData para enviar al server action
      const formDataToSubmit = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value)
      })

      const result = await submitContactForm(formDataToSubmit)

      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        })
        // Limpiar formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-sky-600">CynthiaH</span>
            <span className="text-sm font-medium text-gray-500">Odontologia y Ortodoncia</span>
          </Link>
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre Mí
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonios
            </Link>
            <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Galería
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=541141657011"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button>Agenda tu cita</Button>
            </a>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 px-2 py-6">
                  <Link href="#" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                    Inicio
                  </Link>
                  <Link href="#about" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                    Sobre Mí
                  </Link>
                  <Link href="#services" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                    Servicios
                  </Link>
                  <Link href="#testimonials" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                    Testimonios
                  </Link>
                  <Link href="#gallery" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                    Galería
                  </Link>
                  <Link href="#contact" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                    Contacto
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send?phone=541141657011"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full">Agenda tu cita</Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative min-h-[85vh] w-full overflow-hidden">
            {/* Image with Next.js Image component */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94woman%20s%20smile%20with%20teeth_3183550.jpg-jSoyj6jsIz4OhyV70BImO2sQAFkkUU.jpeg"
              alt="Sonrisa perfecta"
              fill
              priority
              className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 to-sky-800/20" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end px-4 pb-4 text-center text-white md:px-6 md:pb-6">
              <div className="pb-2 md:pb-4 bg-sky-900/40 rounded-lg backdrop-blur-sm p-4 mx-auto max-w-3xl">
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 md:text-xl">
                  Cuidamos tu sonrisa con un enfoque moderno y personalizado para toda tu familia
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-sky-900 hover:bg-white/90"
                    onClick={() => window.open("https://api.whatsapp.com/send?phone=541141657011", "_blank")}
                  >
                    Agenda tu cita
                  </Button>
                  <Button size="lg" className="bg-white text-sky-900 hover:bg-white/90" onClick={scrollToServices}>
                    Conoce nuestros servicios
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-sky-50 py-16 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="mx-auto overflow-hidden rounded-xl lg:order-first">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alineadores%201-fCbqpbsbuVp58hsHSoQPkhKayZflsQ.jpeg"
                alt="Dra. Cynthia H mostrando alineadores dentales"
                width={600}
                height={800}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Sobre Mí</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Soy la Dra. Cynthia H, especialista en odontología integral con más de 10 años de experiencia. Mi
                enfoque está centrado en brindar un tratamiento personalizado y de alta calidad para cada paciente.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Mi misión es hacer que cada visita al dentista sea una experiencia cómoda y positiva, utilizando las
                técnicas más avanzadas y equipos de última generación.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="gap-1"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=541141657011", "_blank")}
                >
                  <Calendar className="h-4 w-4" />
                  Agenda una consulta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una amplia variedad de tratamientos para mantener tu sonrisa radiante y saludable.
              </p>
            </div>
            <ServicesGrid />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-sky-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Testimonios</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lo que dicen nuestros pacientes sobre nuestra atención y servicios.
              </p>
            </div>
            <TestimonialsCarousel />
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps/place/CynthiaH+-+Odontología+y+Ortodoncia/@-34.5728368,-58.4715882,15z/data=!4m6!3m5!1s0x95bcb436f18dc22f:0x4b65c6f7a55478da!8m2!3d-34.5727883!4d-58.471585!16s%2Fg%2F11l1nq88d_?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-medium">Ver más opiniones en Google Maps</span>
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Galería</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Algunos de nuestros casos de éxito y nuestras instalaciones modernas.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAcientes%20felices%201-diDxghL9evfBKSrY6aAAh4XnZi7vm7.jpeg"
                  alt="Pacientes felices con la Dra. Cynthia"
                  width={500}
                  height={500}
                  className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brackets%202.jpg-aJFNLp86KSLL3h4jG2dT2EeBXp3Ylf.jpeg"
                  alt="Tratamiento con brackets - Progreso"
                  width={500}
                  height={500}
                  className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atendiendo%204.png-wohNPd1LaR71fYJ5SHNsZ5Agpd37Q7.jpeg"
                  alt="Dra. Cynthia en consultorio"
                  width={500}
                  height={500}
                  className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brackets%203.jpg-tBuoiryE3FcoqX726Nlg4IBPowy0Ws.jpeg"
                  alt="Resultado tratamiento con brackets"
                  width={500}
                  height={500}
                  className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atendiendo%203.png-vn7ui2Rfp46oV2t60onIYD8BvJKV0K.jpeg"
                  alt="Procedimiento dental"
                  width={500}
                  height={500}
                  className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Atendiendo%201-dEN2XeXa8n5b3foibg6Opz2aXIaWwa.png"
                  alt="Atención dental segura"
                  width={500}
                  height={500}
                  className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Appointment & Contact Combined */}
        <section id="appointment" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Agenda tu cita</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos aquí para atenderte. Agenda tu cita hoy mismo.
              </p>
            </div>

            {/* Form and Map - Side by Side */}
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* LEFT COLUMN - Contact Form */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <p className="text-gray-600 mb-8">
                      Estamos aquí para responder todas tus dudas y ayudarte a comenzar tu transformación.
                    </p>
                    <form onSubmit={handleSubmit} className="grid gap-6">
                      <div>
                        <label className="text-sm font-medium" htmlFor="name">
                          Nombre completo
                        </label>
                        <input
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium" htmlFor="phone">
                          Teléfono
                        </label>
                        <input
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Tu número de teléfono"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium" htmlFor="message">
                          Mensaje
                        </label>
                        <textarea
                          className="mt-2 flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="¿En qué podemos ayudarte?"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      </Button>
                    </form>
                  </div>
                </div>

                {/* RIGHT COLUMN - Contact Info and Map */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl border bg-white p-6 shadow-sm mb-6">
                    <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full p-2 bg-sky-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Dirección</h4>
                          <p className="text-gray-600">Virrey del Pino 4191 3° Piso C, CABA</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full p-2 bg-sky-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Teléfono</h4>
                          <p className="text-gray-600">+54 11 4165-7011</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full p-2 bg-sky-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-gray-600">consultorio.cynthiah@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full p-2 bg-sky-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Horario de atención</h4>
                          <p className="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                          <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Seguinos en redes</h4>
                      <div className="flex gap-4">
                        <a
                          href="https://www.instagram.com/cynthiah.od/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 bg-sky-100 hover:bg-sky-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/cynthiah.od/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 bg-sky-100 hover:bg-sky-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a
                          href="https://api.whatsapp.com/send?phone=541141657011"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 bg-sky-100 hover:bg-sky-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M14 10a.5.5 0 0 0 1 0V9a.5 0 0 0-1 0v1Z" />
                            <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="rounded-xl overflow-hidden h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.186446453075!2d-58.4715847!3d-34.5728283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb436f18dc22f%3A0x4b65c6f7a55478da!2sVirrey%20del%20Pino%204191%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1709944458973!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://api.whatsapp.com/send?phone=541141657011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
          >
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
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5 0 0 0-1 0v1Z" />
              <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-sky-600">CynthiaH</span>
            <span className="text-sm font-medium text-gray-500">Odontología Integral</span>
          </div>
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} CynthiaH Odontología Integral. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/cynthiah.od/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700"
            >
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/cynthiah.od/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700"
            >
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=541141657011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700"
            >
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
                className="h-5 w-5"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


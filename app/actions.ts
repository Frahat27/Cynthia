"use server"

// Función para enviar datos del formulario a Google Sheets
export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

   // URL del formulario de Google con los campos prefilled
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeCl1Rxe26C14WvR_Cg9NBlGGilNRxqWzNhT44Q9pzRMJYj-w/formResponse";

   // Mapeo de los nombres de los campos en tu formulario de Google
    // Estos valores los obtendrás de la URL prefilled
    const formParams = new URLSearchParams({
      "entry.640568888": name,        // Reemplaza 123456789 con el ID real del campo
      "entry.948851864": email,       // Reemplaza 234567890 con el ID real del campo
      "entry.1550230205": phone,       // Reemplaza 345678901 con el ID real del campo
      "entry.467671230": message,     // Reemplaza 456789012 con el ID real del campo
    });
   
   // Enviar datos al formulario de Google
    const response = await fetch(`${formURL}?${formParams.toString()}`, {
      method: "GET",
      mode: "no-cors", // Importante para evitar errores CORS
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Como estamos usando mode: "no-cors", no podemos verificar la respuesta
    // Asumimos que fue exitoso
    return { success: true, message: "Formulario enviado correctamente" };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Error al enviar el formulario" };
  }
}


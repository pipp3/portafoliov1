if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  throw new Error('VITE_EMAILJS_PUBLIC_KEY is required');
}

if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
  throw new Error('VITE_EMAILJS_SERVICE_ID is required');
}

if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
  throw new Error('VITE_EMAILJS_TEMPLATE_ID is required');
}

export const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
}; 
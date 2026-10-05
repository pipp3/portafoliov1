/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

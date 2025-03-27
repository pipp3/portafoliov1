declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface EmailJSStatic {
    init(publicKey: string): void;
    sendForm(
      serviceId: string,
      templateId: string,
      form: HTMLFormElement,
      publicKey: string
    ): Promise<EmailJSResponseStatus>;
  }

  const emailjs: EmailJSStatic;
  export default emailjs;
} 
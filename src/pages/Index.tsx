const WHATSAPP_NUMBER = "5538920003981"; // Formato internacional: 55 + DDD + número
const DEFAULT_MESSAGE =
  "Oi amor, queria comprar sua chamada de vídeo ou até mesmo marcar um encontro. Você tem algum horário disponível?";

const Index = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="max-w-md rounded-2xl border border-border bg-card/80 p-8 text-center shadow-lg backdrop-blur">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
          Chama no WhatsApp
        </h1>
        <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
          Fale direto com a modelo para comprar fotos, vídeos, chamadas de vídeo ou até marcar um encontro.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Chamar no WhatsApp
        </a>
        <p className="mt-4 text-[11px] text-muted-foreground">
          Conteúdo +18. Ao continuar, você declara ser maior de idade.
        </p>
      </section>
    </main>
  );
};

export default Index;

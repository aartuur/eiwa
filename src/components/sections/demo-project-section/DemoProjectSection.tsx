import React, { useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
} from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessInfoForm, { type FormData } from "./ui/BusinessInfoForm";
import DemoSiteSkeleton from "./layout/DemoSiteSkeleton";
import BrandIntroCard from "./ui/BrandIntroCard";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialForm: FormData = {
  businessName: "Studio Nova",
  ownerName: "Marco Rossi",
  phone: "+39 333 123 4567",
  email: "ciao@studionova.it",
  city: "Milano",
  sector: "Centro estetico",
  services: "Trattamenti viso, Laser, Manicure, Massaggi",
  instagram: "@studionova",
};

function getDemoContent(form: FormData) {
  const businessName = form.businessName?.trim() || "La tua impresa";
  const sector = form.sector?.trim() || "Attività locale";
  const city = form.city?.trim() || "la tua città";
  const ownerName = form.ownerName?.trim() || "Il titolare";

  const servicesList = form.services
    ? form.services
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : ["Servizio 1", "Servizio 2", "Servizio 3"];

  return {
    ...form,
    businessName,
    sector,
    city,
    ownerName,
    servicesList,
    heroTitle: `${businessName}: ${sector.toLowerCase()} premium a ${city}`,
    heroSubtitle: `Un’esperienza moderna, curata e credibile per trasformare le visite in contatti reali. Questa demo mostra come potrebbe apparire il tuo sito professionale.`,
    aboutText: `${businessName} aiuta clienti di ${city} con un servizio curato, attenzione ai dettagli e un’identità chiara. Il sito è progettato per valorizzare il brand, spiegare i servizi e portare richieste in modo semplice.`,
    ctaText: `Prenota una consulenza con ${ownerName}`,
    stats: [
      { label: "Clienti soddisfatti", value: "1.2K+" },
      { label: "Valutazione media", value: "4.9/5" },
      { label: "Tempo risposta", value: "< 30 min" },
    ],
    testimonials: [
      {
        name: "Giulia M.",
        text: `Servizio impeccabile, sito chiarissimo e molto professionale. ${businessName} trasmette subito fiducia.`,
      },
      {
        name: "Alessandro R.",
        text: "Esperienza ordinata, veloce e moderna. Tutto molto più credibile rispetto ai classici siti locali.",
      },
      {
        name: "Chiara T.",
        text: "La demo sembra già un sito vero: chiaro, bello e utile per capire subito cosa offrono.",
      },
    ],
    faqs: [
      {
        q: "Come posso prenotare?",
        a: "Puoi contattarci tramite telefono, email o Instagram. In una versione reale del sito si può integrare anche la prenotazione online.",
      },
      {
        q: "Lavorate solo a livello locale?",
        a: `Principalmente operiamo a ${city}, ma possiamo valutare richieste anche da zone vicine.`,
      },
      {
        q: "Quanto tempo serve per partire?",
        a: "Dipende dal progetto, ma il sito è pensato per essere rapido da consultare e semplice da aggiornare.",
      },
    ],
  };
}

export default function DemoProjectSection() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 intro, 1 form, 2 site
  const [form, setForm] = useState<FormData>(initialForm);

  const data = useMemo(() => getDemoContent(form), [form]);

  return (
    <section className="bg-[#050311] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur">
            <AutoAwesomeRoundedIcon fontSize="small" />
            Demo dinamica interattiva
          </div>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Crea una demo del tuo sito
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
              prima ancora di svilupparlo
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Non un semplice mockup: una demo credibile, utile e molto più vicina
            a un sito reale. Inserisci pochi dati e guarda il risultato.
          </p>

          <Button
            variant="contained"
            onClick={() => {
              setStep(0);
              setOpen(true);
            }}
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: 4,
              px: 3,
              py: 1.4,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
              boxShadow: "0 20px 50px rgba(139,92,246,.35)",
            }}
          >
            Avvia demo guidata
          </Button>
        </div>

        <BrandIntroCard />
      </div>

      <Dialog
        open={open}
        fullScreen
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            background:
              "radial-gradient(circle at top, rgba(139,92,246,.14), transparent 30%), #050311",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <div className="relative min-h-screen text-white">
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 18,
                right: 18,
                color: "white",
                zIndex: 40,
                background: "rgba(255,255,255,.06)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            {step === 0 && (
  <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
    <div className="w-full rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
      <div className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
        Esperienza guidata stile stepper
      </div>

      <h3 className="text-4xl md:text-5xl font-black leading-tight">
        Prima compili pochi dati,
        <span className="block text-violet-400">
          poi vedi una demo vera.
        </span>
      </h3>

      <p className="mt-6 max-w-2xl text-lg text-white/70">
        Nessuna preview mostrata prima della compilazione. Prima raccogliamo le
        informazioni essenziali, poi generiamo una demo completa, credibile e
        molto più utile.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
        {[
          "Pochi campi essenziali",
          "Default intelligenti",
          "Demo completa dopo il form",
          "Tema mantenuto",
        ].map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button
          variant="contained"
          onClick={() => setStep(1)}
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            px: 3,
            py: 1.4,
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 700,
            background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
          }}
        >
          Inizia compilazione
        </Button>
      </div>
    </div>
  </div>
)}

            {step === 1 && (
              <BusinessInfoForm
                form={form}
                setForm={setForm}
                step={step}
                setStep={setStep}
              />
            )}

            {step === 2 && (
              <div className="min-h-screen px-4 pb-8 pt-20 md:px-6">
                <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-violet-300">
                      Demo generata
                    </div>
                    <h3 className="text-3xl font-bold">
                      Ecco come potrebbe apparire il sito
                    </h3>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outlined"
                      onClick={() => setStep(1)}
                      sx={{
                        borderRadius: "999px",
                        color: "white",
                        borderColor: "rgba(255,255,255,.18)",
                        textTransform: "none",
                      }}
                    >
                      Modifica dati
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() => setStep(0)}
                      sx={{
                        borderRadius: "999px",
                        textTransform: "none",
                        background:
                          "linear-gradient(135deg,#8b5cf6,#d946ef)",
                      }}
                    >
                      Ricomincia
                    </Button>
                  </div>
                </div>

                <div className="mx-auto max-w-7xl">
                  <DemoSiteSkeleton data={data} />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
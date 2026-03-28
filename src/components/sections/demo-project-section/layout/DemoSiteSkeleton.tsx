import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

interface Props {
  data: any;
  compact?: boolean;
}

const sectorCopy: Record<string, any> = {
  ristorante: {
    eyebrow: "Ristorante nel cuore della città",
    heroTitle: "Un'esperienza di gusto che fa venire voglia di prenotare subito",
    heroSubtitle:
      "Cucina curata, atmosfera accogliente e un servizio pensato per trasformare una visita in un cliente abituale. Questa demo mostra come può apparire il sito di un ristorante moderno, credibile e orientato alle prenotazioni.",
    ctaPrimary: "Prenota un tavolo",
    ctaSecondary: "Guarda il menù",
    trust: ["Prenotazione veloce", "Recensioni reali", "Posizione ben visibile"],
    seoIntro:
      "Se stai cercando un ristorante accogliente, ben recensito e facile da prenotare online, questo layout è costruito per presentare al meglio il locale, il menù, le recensioni e tutti i motivi per scegliere la struttura.",
    servicesTitle: "Menù, eventi e proposte del locale",
    servicesDefault: ["Pranzi e cene", "Menù stagionale", "Eventi privati", "Asporto e delivery"],
    process: ["Scegli l'esperienza", "Prenota in pochi clic", "Vivi il locale e torna volentieri"],
    finalCta: "Prenota la tua esperienza"
  },
  parrucchiere: {
    eyebrow: "Salone professionale per immagine e benessere",
    heroTitle: "Il salone giusto quando vuoi valorizzare davvero il tuo stile",
    heroSubtitle:
      "Taglio, colore e trattamenti presentati in modo chiaro, elegante e convincente. Questa demo è pensata per mostrare come può apparire il sito di un parrucchiere moderno che vuole ricevere più richieste e più appuntamenti.",
    ctaPrimary: "Prenota una consulenza",
    ctaSecondary: "Scopri i trattamenti",
    trust: ["Consulenza personalizzata", "Look professionale", "Prenotazione immediata"],
    seoIntro:
      "Un sito efficace per un parrucchiere deve trasmettere fiducia, stile e risultati. Questa demo mette in evidenza servizi, recensioni, prima impressione visiva e inviti all'azione pensati per aumentare i contatti.",
    servicesTitle: "Servizi beauty ad alta percezione",
    servicesDefault: ["Taglio donna e uomo", "Colore e schiariture", "Piega e styling", "Trattamenti rigeneranti"],
    process: ["Raccontaci il risultato che desideri", "Ricevi la proposta più adatta", "Prenota il tuo appuntamento"],
    finalCta: "Richiedi il tuo appuntamento"
  },
  dentista: {
    eyebrow: "Studio dentistico affidabile e rassicurante",
    heroTitle: "Un sito chiaro e professionale che ispira fiducia fin dal primo sguardo",
    heroSubtitle:
      "Per uno studio dentistico la chiarezza conta quanto la competenza. Questa demo mostra una struttura completa, rassicurante e realistica, progettata per spiegare bene i servizi e aumentare le richieste di prima visita.",
    ctaPrimary: "Prenota una prima visita",
    ctaSecondary: "Scopri i trattamenti",
    trust: ["Approccio rassicurante", "Informazioni chiare", "Contatto rapido"],
    seoIntro:
      "Questa demo di sito per dentista è pensata per presentare lo studio in modo serio, umano e orientato alla conversione: prima visita, trattamenti, team, recensioni, FAQ e contatti in evidenza.",
    servicesTitle: "Trattamenti spiegati con chiarezza",
    servicesDefault: ["Igiene dentale", "Implantologia", "Ortodonzia", "Odontoiatria estetica"],
    process: ["Contatto iniziale", "Valutazione del caso", "Piano di trattamento personalizzato"],
    finalCta: "Prenota la tua prima visita"
  },
  palestra: {
    eyebrow: "Palestra moderna per risultati concreti",
    heroTitle: "Più energia, più motivazione, più iscrizioni: un sito pensato per convertire",
    heroSubtitle:
      "Una palestra deve comunicare risultati, professionalità e semplicità di accesso. Questa demo rende chiari i percorsi, gli abbonamenti, le recensioni e i motivi per iniziare adesso.",
    ctaPrimary: "Prova gratuita",
    ctaSecondary: "Scopri i corsi",
    trust: ["Programmi chiari", "Istruttori qualificati", "Invito all'azione forte"],
    seoIntro:
      "Sito demo per palestra, centro fitness o personal training: struttura realistica, testi orientati al marketing locale e sezioni progettate per trasformare visitatori in richieste di prova o iscrizioni.",
    servicesTitle: "Allenamenti, corsi e percorsi fitness",
    servicesDefault: ["Sala attrezzi", "Personal training", "Corsi di gruppo", "Percorsi dimagrimento"],
    process: ["Scegli il percorso", "Prenota la prova", "Inizia il tuo programma"],
    finalCta: "Richiedi la prova gratuita"
  }
};

function normalizeSector(sector?: string) {
  const value = (sector || "").toLowerCase();
  if (value.includes("ristor")) return "ristorante";
  if (value.includes("parr") || value.includes("salon")) return "parrucchiere";
  if (value.includes("dent")) return "dentista";
  if (value.includes("palestra") || value.includes("fitness") || value.includes("gym")) return "palestra";
  return "default";
}

function getCopy(data: any) {
  const key = normalizeSector(data?.sector);
  const base = {
    eyebrow: "Attività locale pensata per farsi scegliere",
    heroTitle:
      data?.heroTitle || `Più contatti, più fiducia, più clienti per ${data?.businessName || "la tua attività"}`,
    heroSubtitle:
      data?.heroSubtitle ||
      "Questa demo non sembra un componente isolato, ma un vero sito web già pronto a presentare l'attività in modo professionale, chiaro e orientato alla conversione.",
    ctaPrimary: data?.ctaText || "Richiedi informazioni",
    ctaSecondary: "Scopri i servizi",
    trust: ["Immagine professionale", "Messaggi chiari", "Contatti in evidenza"],
    seoIntro:
      "Questa struttura demo è pensata per piccole imprese locali che vogliono un sito realistico, convincente e orientato a ricevere richieste.",
    servicesTitle: `I servizi di ${data?.businessName || "questa attività"}`,
    servicesDefault: ["Servizio 1", "Servizio 2", "Servizio 3", "Servizio 4"],
    process: ["Richiesta iniziale", "Analisi del bisogno", "Prenotazione o contatto"],
    finalCta: data?.ctaText || "Contattaci ora"
  };

  return {
    ...base,
    ...(sectorCopy[key] || {}),
    heroTitle: data?.heroTitle || (sectorCopy[key]?.heroTitle ?? base.heroTitle),
    heroSubtitle: data?.heroSubtitle || (sectorCopy[key]?.heroSubtitle ?? base.heroSubtitle),
    ctaPrimary: data?.ctaText || (sectorCopy[key]?.ctaPrimary ?? base.ctaPrimary),
    services: data?.servicesList?.length ? data.servicesList : sectorCopy[key]?.servicesDefault || base.servicesDefault,
    aboutText: data?.aboutText || sectorCopy[key]?.seoIntro || base.seoIntro,
  };
}

export default function DemoSiteMarketing({ data, compact = false }: Props) {
  const copy = getCopy(data);
  const stats =
    data?.stats?.length > 0
      ? data.stats
      : [
          { value: "4.9/5", label: "Valutazione media" },
          { value: "+250", label: "Clienti soddisfatti" },
          { value: "24h", label: "Tempo medio di risposta" },
        ];

  const testimonials =
    data?.testimonials?.length > 0
      ? data.testimonials
      : [
          {
            name: "Chiara R.",
            text: "Sito chiaro, bello da vedere e soprattutto capace di far capire subito perché scegliere questa attività.",
          },
          {
            name: "Marco T.",
            text: "La struttura è credibile: recensioni, servizi, contatti e call to action sembrano già pronti per lavorare davvero.",
          },
          {
            name: "Elena P.",
            text: "Molto più vicino a un sito reale che a una semplice demo grafica. Dà fiducia e invoglia a contattare.",
          },
        ];

  const faqs =
    data?.faqs?.length > 0
      ? data.faqs
      : [
          {
            q: "Come posso richiedere informazioni o prenotare?",
            a: "Puoi contattare l'attività tramite telefono, email o modulo contatti. La struttura della pagina mette sempre in evidenza la call to action principale.",
          },
          {
            q: "Il sito può essere personalizzato per il mio settore?",
            a: "Sì. Questa demo nasce proprio per essere adattata a piccole imprese come ristoranti, studi dentistici, saloni beauty, palestre e altre attività locali.",
          },
          {
            q: "I testi sono pensati anche per il posizionamento SEO?",
            a: "Sì. Il taglio dei contenuti è più vicino a un vero sito web commerciale: chiaro per l'utente, credibile per il brand e costruito con una struttura adatta anche alla SEO locale.",
          },
        ];

  return (
    <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,.12)]">
      <div className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,.08),transparent_24%),radial-gradient(circle_at_top_left,rgba(59,130,246,.08),transparent_28%),linear-gradient(180deg,#ffffff,rgba(248,250,252,1))]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,0))]" />

        <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg">
              <VerifiedRoundedIcon fontSize="small" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight">{data.businessName}</div>
              <div className="text-xs text-slate-500">{data.sector || "Attività locale"}</div>
            </div>
          </div>

          {!compact && (
            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
              <span className="cursor-default transition hover:text-slate-900">Home</span>
              <span className="cursor-default transition hover:text-slate-900">Servizi</span>
              <span className="cursor-default transition hover:text-slate-900">Recensioni</span>
              <span className="cursor-default transition hover:text-slate-900">FAQ</span>
              <span className="cursor-default transition hover:text-slate-900">Contatti</span>
            </nav>
          )}

          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            Sito demo realistico
          </div>
        </div>

        <div
          className={`relative z-10 grid gap-10 px-6 pb-12 pt-6 md:px-8 md:pb-14 ${
            compact ? "lg:grid-cols-1" : "lg:grid-cols-[1.1fr_.9fr]"
          }`}
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <WorkspacePremiumRoundedIcon fontSize="small" />
              {copy.eyebrow}
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
              {copy.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {copy.heroSubtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,.18)] transition hover:-translate-y-0.5">
                {copy.ctaPrimary}
                <ArrowForwardRoundedIcon fontSize="small" />
              </button>

              <button className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400">
                {copy.ctaSecondary}
              </button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {copy.trust.map((item: string) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <CheckCircleRoundedIcon fontSize="small" className="text-violet-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <GroupsRoundedIcon fontSize="small" className="text-slate-700" />
                Più fiducia per nuovi clienti
              </div>
              <div className="flex items-center gap-2">
                <TrendingUpRoundedIcon fontSize="small" className="text-slate-700" />
                Struttura pensata per convertire
              </div>
              <div className="flex items-center gap-2">
                <ShieldRoundedIcon fontSize="small" className="text-slate-700" />
                Immagine professionale e credibile
              </div>
            </div>
          </div>

          {!compact && (
            <div className="grid gap-4">
              <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,.08)]">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Presentazione attività</div>
                    <div className="text-2xl font-bold tracking-tight text-slate-950">{data.businessName}</div>
                  </div>
                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                    Disponibile online
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat: any) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xl font-extrabold text-slate-950">{stat.value}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-4">
                  <div className="text-sm font-medium text-violet-700">Messaggio in evidenza</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    Prima impressione forte, messaggio chiaro e invito all'azione già pronto per attirare nuovi clienti.
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_60px_rgba(15,23,42,.22)]">
                <div className="flex items-center gap-2 text-sm font-medium text-violet-200">
                  <CalendarMonthRoundedIcon fontSize="small" />
                  Richiesta rapida contatti
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight">Fatti richiamare o richiedi un appuntamento</div>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  In un sito web commerciale questa card aiuta a catturare utenti pronti a contattare l'attività senza obbligarli a cercare informazioni altrove.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/45">Nome e cognome</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/45">Telefono o email</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/45">Servizio di interesse</div>
                  <button className="w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950 transition hover:opacity-95">
                    Invia richiesta
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="px-6 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">
              Presentazione chiara
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Un vero sito web per piccole imprese, non una semplice demo di componenti
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{copy.aboutText}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              La struttura è pensata per parlare in modo semplice al cliente finale: spiega subito cosa fai, perché dovrebbero scegliere te, quali servizi offri e come contattarti. Questo approccio rende il layout molto più realistico, utile per presentazioni commerciali e più vicino a un sito che può davvero generare richieste.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                icon: <BoltRoundedIcon fontSize="small" />,
                title: "Messaggio immediato",
                desc: "Titolo, sottotitolo e CTA spiegano subito il valore dell'attività.",
              },
              {
                icon: <ShieldRoundedIcon fontSize="small" />,
                title: "Più credibilità",
                desc: "Recensioni, numeri, struttura ordinata e contenuti rassicuranti.",
              },
              {
                icon: <TrendingUpRoundedIcon fontSize="small" />,
                title: "Taglio marketing",
                desc: "Ogni sezione accompagna il visitatore verso il contatto o la prenotazione.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
                  {item.icon}
                </div>
                <div className="text-lg font-bold tracking-tight text-slate-950">{item.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-12 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">Servizi</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{copy.servicesTitle}</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Sezione servizi costruita per essere leggibile, commerciale e ottimizzata per spiegare bene l'offerta anche a chi visita il sito per la prima volta.
            </p>
          </div>
          {!compact && <div className="text-sm font-medium text-slate-500">Layout adatto a SEO locale e conversione</div>}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.services.map((service: string, i: number) => (
            <div
              key={service + i}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-sm font-extrabold text-violet-700">
                0{i + 1}
              </div>
              <div className="text-xl font-bold tracking-tight text-slate-950">{service}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Testo descrittivo più realistico, pensato per chiarire il beneficio del servizio e aiutare l'utente a capire rapidamente se è la soluzione giusta per lui.
              </p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900">
                Approfondisci
                <KeyboardArrowRightRoundedIcon fontSize="small" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {!compact && (
        <section className="border-t border-slate-200 px-6 py-12 md:px-8">
          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">Come funziona</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Un percorso semplice che accompagna il visitatore fino al contatto
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.process.map((item: string, i: number) => (
              <div key={item} className="rounded-[26px] border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-violet-700">Step {i + 1}</div>
                <div className="mt-2 text-xl font-bold tracking-tight text-slate-950">{item}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Questa sezione rende la demo molto più simile a un sito aziendale reale, aiutando il cliente a capire il processo senza frizioni.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 px-6 py-12 md:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">Perché scegliere noi</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Più chiarezza, più fiducia, più possibilità di essere contattati
            </h2>
          </div>
          <div className="text-sm text-slate-500">Sezione perfetta per differenziarsi dai concorrenti locali</div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Sito pensato per clienti reali",
              text: "Non mostra solo elementi grafici: racconta l'attività, valorizza i punti forti e guida l'utente fino alla richiesta.",
            },
            {
              title: "Struttura ideale per piccole imprese",
              text: "Ristorante, parrucchiere, dentista, palestra o attività locale: il layout è già pronto per adattarsi a settori diversi.",
            },
            {
              title: "Testi più vicini alla SEO locale",
              text: "Titoli, sezioni e contenuti sono molto più simili a quelli di un sito che vuole posizionarsi e ricevere traffico qualificato.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <CheckCircleRoundedIcon fontSize="small" />
              </div>
              <div className="text-xl font-bold tracking-tight text-slate-950">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12 md:px-8">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">Recensioni</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Cosa percepisce il cliente quando il sito è fatto bene</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item: any) => (
            <div key={item.name} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarRoundedIcon key={i} fontSize="small" />
                ))}
              </div>
              <p className="text-base leading-8 text-slate-600">“{item.text}”</p>
              <div className="mt-5 font-bold text-slate-950">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">FAQ</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Domande frequenti</h2>

            <div className="mt-6 space-y-3">
              {faqs.map((faq: any) => (
                <div key={faq.q} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="font-bold text-slate-950">{faq.q}</div>
                  <div className="mt-2 leading-7 text-slate-600">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">Contatti</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Contatta {data.businessName}</h2>

            <div className="mt-6 rounded-[30px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_60px_rgba(15,23,42,.18)]">
              <div className="space-y-4">
                <ContactRow icon={<PhoneRoundedIcon fontSize="small" />} text={data.phone} />
                <ContactRow icon={<EmailRoundedIcon fontSize="small" />} text={data.email} />
                <ContactRow icon={<LocationOnRoundedIcon fontSize="small" />} text={data.city} />
                <ContactRow icon={<InstagramIcon fontSize="small" />} text={data.instagram} />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <AccessTimeRoundedIcon fontSize="small" />
                  Orari indicativi
                </div>
                <div className="mt-2 font-medium text-white">Lun - Ven · 09:00 - 19:00</div>
              </div>

              <button className="mt-6 w-full rounded-full bg-white px-5 py-3.5 font-semibold text-slate-950 transition hover:opacity-95">
                {copy.finalCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {!compact && (
        <section className="border-t border-slate-200 bg-slate-950 px-6 py-10 text-white md:px-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-violet-200">Call to action finale</div>
              <div className="mt-2 text-2xl font-black tracking-tight">
                Un sito demo che sembra già pronto per portare clienti a {data.businessName}
              </div>
              <div className="mt-2 max-w-2xl text-white/70">
                Più chiaro, più commerciale, più vicino a un vero progetto web per una piccola impresa locale.
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white">
                Contattaci
              </button>
              <button className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950">
                {copy.finalCta}
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function ContactRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-violet-200">
        {icon}
      </div>
      <div className="text-white/90">{text || "-"}</div>
    </div>
  );
}

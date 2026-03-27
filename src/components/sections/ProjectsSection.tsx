import React from "react";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

type Project = {
  id: number;
  client: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  applied: string[];
  gained: string[];
  icon: React.ReactNode;
};

const projects: Project[] = [
  {
    id: 1,
    client: "Studio Legale Ferri",
    category: "Restyling sito istituzionale",
    title: "Presenza più autorevole e struttura più chiara",
    description:
      "Un redesign pensato per trasmettere affidabilità fin dai primi secondi, semplificare la lettura dei contenuti e guidare meglio il contatto.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Design premium", "UX chiara", "Conversione"],
    applied: [
      "Gerarchia visiva più ordinata",
      "CTA riposizionate con più logica",
      "Messaggio istituzionale più netto",
    ],
    gained: [
      "Più fiducia percepita",
      "Navigazione più semplice",
      "Contatti più qualificati",
    ],
    icon: <VerifiedRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: 2,
    client: "Atelier Niveo",
    category: "Sito vetrina su misura",
    title: "Un’identità digitale più elegante e memorabile",
    description:
      "Abbiamo costruito un’esperienza più essenziale e distintiva, valorizzando il brand con una presenza più raffinata e coerente.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Luxury feel", "Su misura", "Impatto visivo"],
    applied: [
      "Direzione visiva più coerente",
      "Presentazione servizi più elegante",
      "Componenti editoriali dedicati",
    ],
    gained: [
      "Brand più riconoscibile",
      "Percezione di maggior valore",
      "Presenza più memorabile",
    ],
    icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: 3,
    client: "Clinica Marea",
    category: "Ottimizzazione + redesign",
    title: "Più chiarezza, più fiducia, più efficacia",
    description:
      "Una revisione completa di struttura, contenuti ed esperienza mobile per rendere il sito più leggibile e più orientato alla conversione.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile first", "Trust", "Performance"],
    applied: [
      "Percorsi utente semplificati",
      "Interfaccia mobile migliorata",
      "Elementi trust più evidenti",
    ],
    gained: [
      "Servizi compresi più velocemente",
      "Esperienza mobile migliore",
      "Più richieste dai punti chiave",
    ],
    icon: <BoltRoundedIcon sx={{ fontSize: 18 }} />,
  },
];

const colors = {
  bg: "#07010f",
  panel: "rgba(255,255,255,0.028)",
  panelStrong: "rgba(255,255,255,0.04)",
  line: "rgba(255,255,255,0.08)",
  lineSoft: "rgba(255,255,255,0.06)",
  text: "#f5f2ff",
  muted: "rgba(255,255,255,0.66)",
  mutedSoft: "rgba(255,255,255,0.46)",
  primary: "#a855f7",
  secondary: "#ec4899",
  accentText: "#d8b4fe",
};

function SectionBadge() {
  return (
    <Box
      className="inline-flex items-center gap-3 rounded-full px-4 py-2"
      sx={{
        border: `1px solid ${colors.line}`,
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Box
        className="h-2 w-2 rounded-full"
        sx={{
          background: colors.secondary,
          boxShadow: "0 0 20px rgba(236,72,153,0.75)",
        }}
      />
      <Typography className="!text-[11px] !font-semibold !tracking-[0.24em] !text-white/58">
        I NOSTRI PROGETTI
      </Typography>
    </Box>
  );
}

function ProjectItem({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <Box className="px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
      <Box className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Box className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <Box
            className="group relative overflow-hidden rounded-[26px]"
            sx={{
              background: colors.panelStrong,
              border: `1px solid ${colors.line}`,
              boxShadow: "0 22px 70px rgba(0,0,0,0.28)",
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              className="h-[260px] w-full object-cover transition-transform duration-700 md:h-[380px] group-hover:scale-[1.03]"
            />
            <Box
              className="absolute inset-0"
              sx={{
                background:
                  "linear-gradient(180deg, rgba(7,1,15,0.06) 0%, rgba(7,1,15,0.42) 100%)",
              }}
            />
            <Box className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <Box className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      height: 30,
                      color: "rgba(255,255,255,0.88)",
                      backgroundColor: "rgba(7,1,15,0.42)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                      "& .MuiChip-label": {
                        px: "10px",
                        fontSize: "12px",
                        fontWeight: 500,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
          <Box className="flex items-center gap-3">
            <Box
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              sx={{
                background: "rgba(168,85,247,0.12)",
                border: "1px solid rgba(168,85,247,0.22)",
                color: colors.accentText,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {project.icon}
            </Box>

            <Box>
              <Typography className="!text-[11px] !font-semibold !uppercase !tracking-[0.18em] !text-white/38">
                {project.category}
              </Typography>
              <Typography className="mt-1 !text-[14px] !font-medium !text-white/72">
                {project.client}
              </Typography>
            </Box>
          </Box>

          <Typography className="mt-5 !text-[30px] !font-semibold !leading-[1.02] !tracking-[-0.03em] !text-white md:!text-[40px] lg:!text-[46px]">
            {project.title}
          </Typography>

          <Typography className="mt-5 max-w-[640px] !text-[15px] !leading-8 !text-white/64 md:!text-[16px]">
            {project.description}
          </Typography>

          <Box className="mt-7 grid gap-5 sm:grid-cols-2">
            <Box
              className="rounded-[22px] p-5"
              sx={{
                background: colors.panel,
                border: `1px solid ${colors.lineSoft}`,
              }}
            >
              <Typography className="mb-4 !text-[11px] !font-semibold !uppercase !tracking-[0.18em] !text-white/34">
                Applicato
              </Typography>

              <Box className="space-y-3">
                {project.applied.map((item, i) => (
                  <Box key={item} className="flex items-start gap-3">
                    <Typography
                      className="min-w-[24px] !text-[12px] !font-semibold"
                      sx={{
                        color: i === 1 ? colors.secondary : colors.primary,
                      }}
                    >
                      0{i + 1}
                    </Typography>
                    <Typography className="!text-[14px] !leading-7 !text-white/78">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              className="rounded-[22px] p-5"
              sx={{
                background: colors.panel,
                border: `1px solid ${colors.lineSoft}`,
              }}
            >
              <Typography className="mb-4 !text-[11px] !font-semibold !uppercase !tracking-[0.18em] !text-white/34">
                Ottenuto
              </Typography>

              <Box className="space-y-3">
                {project.gained.map((item, i) => (
                  <Box key={item} className="flex items-start gap-3">
                    <Box
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      sx={{
                        background:
                          i === 1 ? colors.secondary : colors.primary,
                        boxShadow:
                          i === 1
                            ? "0 0 14px rgba(236,72,153,0.42)"
                            : "0 0 14px rgba(168,85,247,0.42)",
                      }}
                    />
                    <Typography className="!text-[14px] !leading-7 !text-white/78">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className="mt-7 flex flex-wrap gap-3">
            <Button
              endIcon={<ArrowOutwardRoundedIcon />}
              className="!rounded-full !px-5 !py-2.5 !normal-case"
              sx={{
                color: "#fff",
                background: `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                boxShadow: "0 14px 34px rgba(168,85,247,0.20)",
                "&:hover": {
                  background: `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                  opacity: 0.94,
                },
              }}
            >
              Vedi il progetto
            </Button>

            <Button
              startIcon={<CheckRoundedIcon />}
              className="!rounded-full !px-4 !py-2.5 !normal-case"
              sx={{
                color: "rgba(255,255,255,0.82)",
                border: `1px solid ${colors.line}`,
                backgroundColor: "rgba(255,255,255,0.02)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.04)",
                },
              }}
            >
              Strategia applicata
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      className="relative overflow-hidden py-24 md:py-32"
      sx={{ backgroundColor: colors.bg }}
    >
      {/* Background */}
      <Box className="pointer-events-none absolute inset-0">
        <Box
          className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full blur-[135px]"
          sx={{ background: "rgba(168,85,247,0.11)" }}
        />
        <Box
          className="absolute left-[8%] top-[18%] h-[220px] w-[220px] rounded-full blur-[120px]"
          sx={{ background: "rgba(168,85,247,0.06)" }}
        />
        <Box
          className="absolute right-[8%] top-[14%] h-[220px] w-[220px] rounded-full blur-[120px]"
          sx={{ background: "rgba(236,72,153,0.06)" }}
        />
        <Box
          className="absolute inset-0 opacity-[0.045]"
          sx={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
            maskImage:
              "radial-gradient(circle at top center, black 28%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at top center, black 28%, transparent 78%)",
          }}
        />
      </Box>

      <Container maxWidth="xl" className="relative z-10">
        {/* Header */}
<Box className="mx-auto max-w-[920px] text-center">
  <SectionBadge />

  <Typography className="mx-auto mt-7 max-w-[900px] !text-[44px] !font-extrabold !leading-[0.94] !tracking-[-0.045em] !text-white sm:!text-[56px] md:!text-[70px] lg:!text-[82px]">
    Progetti costruiti
    <br />
    per dare più
    <br />
    <span className="bg-gradient-to-r from-[#ecb8ff] via-[#c084fc] to-[#8b80ff] bg-clip-text text-transparent">
      valore al brand
    </span>
  </Typography>

  <Typography className="mx-auto mt-7 max-w-[680px] text-center !text-[17px] !leading-[1.7] !text-white/66 md:!text-[18px]">
    Non semplici lavori da mostrare, ma esperienze progettate per
    attrarre, convincere e lasciare il segno. Ogni intervento unisce
    estetica, chiarezza e strategia per aumentare la percezione del
    valore e rendere il brand più desiderabile.
  </Typography>

  <Box className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
    {[
      "Design che cattura",
      "Esperienza che guida",
      "Presenza che resta impressa",
    ].map((item, index) => (
      <React.Fragment key={item}>
        <Box className="flex items-center gap-2">
          <Box className="h-1.5 w-1.5 rounded-full bg-white/50" />
          <Typography className="!text-[13px] !font-medium !text-white/52">
            {item}
          </Typography>
        </Box>
        {index < 2 && (
          <Box className="hidden h-1 w-1 rounded-full bg-white/14 md:block" />
        )}
      </React.Fragment>
    ))}
  </Box>

  <Box className="mx-auto mt-14 h-px w-full max-w-[760px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</Box>

        {/* Projects wrapper */}
        <Box className="mt-14 md:mt-18">
          <Box
            className="overflow-hidden rounded-[32px]"
            sx={{
              background: "rgba(255,255,255,0.022)",
              border: `1px solid ${colors.line}`,
              boxShadow: "0 28px 100px rgba(0,0,0,0.20)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box className="divide-y divide-white/6">
              {projects.map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  reverse={index % 2 !== 0}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
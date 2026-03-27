import { Box, Chip, Container, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const services = [
  {
    title: "Siti web su misura",
    description:
      "Progettiamo siti essenziali, eleganti e ad alto impatto visivo per presentare al meglio la tua attività e aumentare la fiducia fin dal primo sguardo.",
    points: ["Design premium", "Messaggio chiaro", "Esperienza intuitiva"],
  },
  {
    title: "Restyling e ottimizzazione",
    description:
      "Rinnoviamo presenze online già esistenti migliorando struttura, percezione del brand, performance e capacità di trasformare visite in contatti.",
    points: [
      "Immagine più autorevole",
      "Sito più veloce",
      "Più richieste utili",
    ],
  },
];

function BaseStatCard({
  children,
  minHeight = 190,
}: {
  children: React.ReactNode;
  minHeight?: number;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight,
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
      }}
    >
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(232,121,249,0.12), transparent 28%), radial-gradient(circle at bottom left, rgba(99,102,241,0.10), transparent 24%)",
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, height: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}

function LineChartMock() {
  return (
    <Box sx={{ position: "relative", mt: 2, height: 84 }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "18px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />
      {[20, 44, 68].map((top, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            left: 12,
            right: 12,
            top,
            height: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      ))}

      <Box sx={{ position: "absolute", inset: 0 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 320 88"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="55%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(168,85,247,0.28)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>

          <path
            d="M0,70 C30,66 40,62 62,54 C88,45 105,52 126,38 C146,25 165,30 188,20 C214,9 244,15 267,11 C288,8 302,12 320,6 L320,88 L0,88 Z"
            fill="url(#lineFill)"
          />
          <path
            d="M0,70 C30,66 40,62 62,54 C88,45 105,52 126,38 C146,25 165,30 188,20 C214,9 244,15 267,11 C288,8 302,12 320,6"
            fill="none"
            stroke="url(#lineStroke)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {[
            [62, 54],
            [126, 38],
            [188, 20],
            [267, 11],
            [320, 6],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="5.5" fill="rgba(10,6,24,0.95)" />
              <circle cx={cx} cy={cy} r="3" fill="#c084fc" />
            </g>
          ))}
        </svg>
      </Box>
    </Box>
  );
}

function DonutChartMock() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 106,
        height: 106,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "conic-gradient(from 220deg, #8b5cf6 0deg 220deg, #c084fc 220deg 305deg, rgba(255,255,255,0.08) 305deg 360deg)",
          boxShadow: "0 0 40px rgba(168,85,247,0.16)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 16,
          borderRadius: "50%",
          background: "#0b0616",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            fontSize: "1rem",
            lineHeight: 1,
          }}
        >
          82%
        </Typography>
        <Typography
          sx={{
            mt: 0.4,
            color: "rgba(255,255,255,0.5)",
            fontSize: ".58rem",
            letterSpacing: ".02em",
            textAlign:'center'
          }}
        >
          Soddisfatti
        </Typography>
      </Box>
    </Box>
  );
}

function BarsChartMock() {
  const bars = [34, 52, 44, 68, 58, 78];
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        alignItems: "end",
        gap: 1,
        height: 88,
      }}
    >
      {bars.map((h, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: `${h}%`,
            borderRadius: "12px 12px 6px 6px",
            background:
              i === bars.length - 1
                ? "linear-gradient(180deg, rgba(232,121,249,0.95) 0%, rgba(139,92,246,0.78) 100%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.05) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              i === bars.length - 1
                ? "0 10px 30px rgba(168,85,247,0.25)"
                : "none",
          }}
        />
      ))}
    </Box>
  );
}

function SmallMetricPill({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.025)",
        px: 1.4,
        py: 0.95,
      }}
    >
      <Typography sx={{ color: "rgba(255,255,255,0.56)", fontSize: ".8rem" }}>
        {label}
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontSize: ".84rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

function ResultsCluster() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 0, lg: 1 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "4%",
          width: 200,
          height: 200,
          borderRadius: "999px",
          background: "rgba(192,132,252,0.16)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gridAutoRows: "minmax(180px, auto)",
        }}
      >
        <BaseStatCard minHeight={200}>
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.56)",
                fontSize: ".74rem",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Percezione del brand
            </Typography>

            <Typography
              sx={{
                mt: 0.9,
                color: "white",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                fontSize: { xs: "2.15rem", md: "2.45rem" },
              }}
            >
              +30%
            </Typography>

            <Typography
              sx={{
                mt: 0.8,
                color: "rgba(255,255,255,0.62)",
                lineHeight: 1.55,
                fontSize: ".86rem",
                maxWidth: "15rem",
              }}
            >
              Un impatto visivo più ordinato rende il brand più credibile fin
              dai primi secondi.
            </Typography>

            <LineChartMock />
          </Box>
        </BaseStatCard>

        <BaseStatCard minHeight={200}>
          <Box
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.56)",
                  fontSize: ".74rem",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Direzione iniziale
              </Typography>

              <Typography
                sx={{
                  mt: 0.9,
                  color: "white",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.95,
                  fontSize: { xs: "1.95rem", md: "2.2rem" },
                }}
              >
                48h
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.55,
                  fontSize: ".86rem",
                  maxWidth: "13rem",
                }}
              >
                Per definire tono, struttura e prima direzione concreta del
                progetto.
              </Typography>
            </Box>

            <Box sx={{ mt: 1.5, display: "flex", justifyContent: "flex-end" }}>
              <DonutChartMock />
            </Box>
          </Box>
        </BaseStatCard>

        <BaseStatCard minHeight={180}>
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.56)",
                fontSize: ".74rem",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Tempistiche medie
            </Typography>

            <Box sx={{ mt: 0.8, display: "flex", alignItems: "end", gap: 1 }}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                  fontSize: { xs: "1.95rem", md: "2.2rem" },
                }}
              >
                3
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 600,
                  mb: 0.2,
                  fontSize: ".96rem",
                }}
              >
                settimane
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 0.8,
                color: "rgba(255,255,255,0.62)",
                lineHeight: 1.55,
                fontSize: ".86rem",
                maxWidth: "15rem",
              }}
            >
              Per realizzare un sito essenziale, ordinato e rifinito con
              attenzione.
            </Typography>

            <BarsChartMock />
          </Box>
        </BaseStatCard>

        <BaseStatCard minHeight={180}>
          <Box
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.56)",
                fontSize: ".74rem",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Qualità progettuale
            </Typography>

            <Typography
              sx={{
                mt: 0.9,
                color: "white",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                fontSize: { xs: "1.95rem", md: "2.2rem" },
              }}
            >
              100%
            </Typography>

            <Typography
              sx={{
                mt: 0.8,
                mb: 1.6,
                color: "rgba(255,255,255,0.62)",
                lineHeight: 1.55,
                fontSize: ".86rem",
                maxWidth: "14rem",
              }}
            >
              Ogni interfaccia viene costruita su misura, senza soluzioni
              impersonali.
            </Typography>

            <Box sx={{ mt: "auto", display: "grid", gap: 0.9 }}>
              <SmallMetricPill label="Template standard" value="No" />
              <SmallMetricPill label="Approccio su misura" value="Sì" />
              <SmallMetricPill label="Focus" value="Chiarezza + presenza" />
            </Box>
          </Box>
        </BaseStatCard>
      </Box>

      <Box
        sx={{
          mt: 2.2,
          display: "inline-flex",
          alignItems: "center",
          gap: 1.2,
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          color: "rgba(255,255,255,0.62)",
          px: 1.5,
          py: 0.95,
          backdropFilter: "blur(12px)",
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "999px",
            background: "linear-gradient(90deg, #e879f9 0%, #a78bfa 100%)",
            boxShadow: "0 0 18px rgba(192,132,252,0.75)",
            flexShrink: 0,
          }}
        />
        <Typography sx={{ fontSize: ".82rem", fontWeight: 500 }}>
          Design più chiaro, più autorevole, più memorabile.
        </Typography>
      </Box>
    </Box>
  );
}

function ServiceInlineBlock({
  title,
  description,
  points,
}: {
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <Box
      sx={{
        pt: 2.2,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 2.5,
          gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.25fr" },
          alignItems: "start",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            fontSize: { xs: "1.1rem", md: "1.28rem" },
          }}
        >
          {title}
        </Typography>

        <Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              fontSize: { xs: ".9rem", md: ".94rem" },
              maxWidth: "35rem",
            }}
          >
            {description}
          </Typography>

          <Box className="mt-4 flex flex-wrap gap-2.5">
            {points.map((point) => (
              <Box
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-white/72 backdrop-blur-md"
              >
                <Box className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-violet-500/90 text-white">
                  <CheckRoundedIcon sx={{ fontSize: 11 }} />
                </Box>
                <Typography sx={{ fontSize: ".82rem", fontWeight: 500 }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ServicesSectionMinimal() {
  return (
    <Box
      component="section"
      className="relative overflow-hidden bg-[#070312]"
      sx={{
        py: { xs: 10, md: 12 },
        minHeight: { lg: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box className="pointer-events-none absolute inset-0">
        <Box className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        <Box className="absolute right-[6%] top-16 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <Box className="absolute bottom-0 left-1/2 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </Box>

      <Container maxWidth="xl" className="relative z-10">
        <Box
          sx={{
            display: "grid",
            alignItems: "stretch",
            gap: { xs: 7, lg: 6 },
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 1.06fr) minmax(320px, 0.94fr)",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Chip
              label="✨ Servizi essenziali, risultato concreto"
              className="mb-5 border border-white/10 bg-white/5 text-white/80"
              sx={{
                height: 34,
                borderRadius: "999px",
                backdropFilter: "blur(10px)",
                alignSelf: "flex-start",
                ".MuiChip-label": {
                  px: 1.5,
                  fontSize: ".78rem",
                },
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 0.96,
                letterSpacing: "-0.045em",
                color: "white",
                fontSize: { xs: "2.5rem", sm: "3.3rem", md: "4.4rem" },
                maxWidth: { xs: "15ch", lg: "14.5ch" },
              }}
            >
              Servizi pensati per
              <Box
                component="span"
                sx={{
                  display: "block",
                  background:
                    "linear-gradient(90deg, #e879f9 0%, #a78bfa 55%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                dare più valore
              </Box>
              alla tua presenza online
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: "40rem",
                color: "rgba(255,255,255,0.62)",
                lineHeight: 1.8,
                fontSize: { xs: ".98rem", md: "1rem" },
              }}
            >
              Realizziamo e miglioriamo siti web per piccole imprese e
              professionisti che vogliono apparire più credibili, distinguersi
              con eleganza e ottenere una comunicazione più efficace.
            </Typography>

            <Box
              sx={{
                mt: { xs: 5, lg: "auto" },
                pt: { lg: 6 },
                display: "flex",
                flexDirection: "column",
                justifyContent: { lg: "space-between" },
                gap: 3.2,
                flex: 1,
              }}
            >
              {services.map((service) => (
                <ServiceInlineBlock key={service.title} {...service} />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "grid",
              placeItems: "center",
              transform: {
                xs: "none",
                lg: "scale(1.2)",
              },
            }}
          >
            <ResultsCluster />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import  { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ShowcaseMockup from "../beautify/ShowcaseMockup";

const items = [
  {
    id: "01",
    title: "Prenotazioni",
    subtitle: "Ristoranti · Beauty · Parrucchieri",
    text: "Deve essere immediato: capire, fidarsi e contattare. Qui il design aiuta a rendere il passo successivo semplice e naturale.",
  },
  {
    id: "02",
    title: "Fiducia & risultato",
    subtitle: "Palestre · Benessere · PT",
    text: "Conta la percezione: energia, metodo e credibilità. Il sito rafforza il valore del servizio e lo fa apparire più solido.",
  },
  {
    id: "03",
    title: "Professionisti",
    subtitle: "Dentisti · Avvocati · PMI",
    text: "Ordine, chiarezza e autorevolezza. Una presenza pulita migliora subito la prima impressione e rende il brand più affidabile.",
  },
];

export default function TargetSection() {
  const [active, setActive] = useState(0);

  return (
    <Box className="relative w-full overflow-hidden bg-[#05000c] text-white">
      {/* dynamic gradient glow */}
      <Box
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background:
            active === 0
              ? "radial-gradient(circle at 20% 24%, rgba(217,70,239,0.18), transparent 36%)"
              : active === 1
              ? "radial-gradient(circle at 50% 18%, rgba(99,102,241,0.18), transparent 36%)"
              : "radial-gradient(circle at 80% 24%, rgba(168,85,247,0.18), transparent 36%)",
        }}
      />

      <Container maxWidth="xl" className="relative z-10">
        <Box className="py-12 md:py-16 lg:py-20">
          <Box className="grid gap-12 md:gap-14 lg:gap-16">
            {/* top area */}
            <Box className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
              {/* left content */}
              <Box>
                <Box className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-fuchsia-400/80 to-transparent" />
                  <Typography className="!text-[11px] !font-medium !tracking-[0.22em] !text-white/48">
                    TARGET IDEALE
                  </Typography>
                </Box>

                <Box className="max-w-[44rem]">
                  <Typography className="!text-[2.3rem] !font-extrabold !leading-[0.95] text-white sm:!text-[3rem] md:!text-[4rem] lg:!text-[4.7rem]">
                    Attività che hanno bisogno di
                    <span className="mt-2 block bg-gradient-to-r from-fuchsia-300 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                      apparire meglio online
                    </span>
                  </Typography>

                  <Typography className="mt-6 max-w-[32ch] text-[15px] leading-7 !text-white/62 md:text-[1rem] md:leading-8">
                    Una sezione pensata per chi vuole una presenza più chiara,
                    più credibile e più curata, senza appesantire la
                    comunicazione.
                  </Typography>
                </Box>
              </Box>

              {/* right showcase - hidden on mobile */}
              <Box className="hidden md:block lg:justify-self-end lg:w-full lg:max-w-[42rem]">
                <ShowcaseMockup />
              </Box>
            </Box>

            {/* cards */}
            <Box className="flex items-center">
              <Box className="grid w-full gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12">
                {items.map((item, i) => {
                  const isActive = i === active;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group relative flex min-h-[170px] flex-col justify-center text-left outline-none md:min-h-[210px]"
                    >
                      <Box
                        className={`absolute left-0 top-0 h-full w-[2px] transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-b from-fuchsia-400 to-violet-400 opacity-100"
                            : "bg-white/10 opacity-50"
                        }`}
                      />

                      <Box className="pl-6 md:pl-8 lg:pl-9">
                        <Typography
                          className={`!text-xs !tracking-[0.25em] transition-all ${
                            isActive ? "!text-fuchsia-300" : "!text-white/28"
                          }`}
                        >
                          {item.id}
                        </Typography>

                        <Typography
                          className={`mt-3 !text-[1.4rem] !font-semibold !leading-tight transition-all md:!text-[1.75rem] lg:!text-[2.05rem] ${
                            isActive ? "!text-white" : "!text-white/52"
                          }`}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          className={`mt-3 text-[14px] transition-all md:text-[0.98rem] ${
                            isActive ? "!text-white/56" : "!text-white/30"
                          }`}
                        >
                          {item.subtitle}
                        </Typography>

                        <Box
                          className={`overflow-hidden transition-all duration-500 ${
                            isActive
                              ? "mt-6 max-h-[160px] opacity-100"
                              : "mt-5 max-h-[86px] opacity-75"
                          }`}
                        >
                          <Typography className="max-w-[24rem] text-[14px] leading-7 !text-white/72 md:text-[0.98rem] md:leading-8">
                            {item.text}
                          </Typography>
                        </Box>
                      </Box>
                    </button>
                  );
                })}
              </Box>
            </Box>

            {/* bottom row */}
            <Box className="grid gap-5 border-t border-white/10 pt-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
              <Typography className="max-w-[46rem] text-[13px] leading-7 !text-white/50 md:text-[0.94rem]">
                Ideale per chi lavora molto sulla percezione del proprio
                servizio e vuole una presenza online essenziale, elegante e
                capace di trasformare l&apos;interesse in un contatto più
                consapevole.
              </Typography>

              <Box className="flex justify-start md:justify-end">
                <Button
                  endIcon={<ArrowOutwardRoundedIcon />}
                  className="!rounded-full !bg-gradient-to-r !from-fuchsia-400 !to-violet-400 !px-6 !py-3 !text-sm !font-semibold !text-white"
                >
                  Richiedi progetto
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
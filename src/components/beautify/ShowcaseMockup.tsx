import { Box, Typography } from "@mui/material";

export default function ShowcaseMockup() {
  return (
    <Box className="relative mx-auto w-full max-w-[60rem] select-none">
      {/* ambient scene */}
      <Box className="pointer-events-none absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_18%_16%,rgba(139,92,246,0.14),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(168,85,247,0.10),transparent_24%),radial-gradient(circle_at_72%_82%,rgba(217,70,239,0.08),transparent_28%)]" />

      <Box className="relative h-[340px] w-full sm:h-[390px] md:h-[440px] lg:h-[490px]">
        {/* DESKTOP */}
        <Box className="absolute left-[3%] top-[6%] h-[80%] w-[74%]">
          {/* hardware shell */}
          <Box className="absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,#171320,#07050b)] p-[2px] shadow-[0_40px_120px_rgba(0,0,0,0.52),0_12px_40px_rgba(88,28,135,0.16)]">
            <Box className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/8 bg-[#07040e] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {/* subtle screen reflections */}
              <Box className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(196,181,253,0.08),transparent_14%),linear-gradient(180deg,rgba(255,255,255,0.022),transparent_22%)]" />

              {/* browser chrome */}
              <Box className="relative z-10 flex h-14 items-center justify-between border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] px-4 md:h-[60px] md:px-5">
                <Box className="flex items-center gap-2">
                  <Box className="h-2.5 w-2.5 rounded-full bg-white/28" />
                  <Box className="h-2.5 w-2.5 rounded-full bg-white/16" />
                  <Box className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </Box>

                <Box className="flex h-8 w-[42%] min-w-[180px] max-w-[280px] items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-4">
                  <Typography className="truncate !text-[10px] !tracking-[0.16em] !text-white/40 md:!text-[11px]">
                    studio-brand.it
                  </Typography>
                </Box>

                <Box className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.03]" />
              </Box>

              {/* desktop website only */}
              <Box className="relative z-10 h-[calc(100%-56px)] md:h-[calc(100%-60px)]">
                {/* top nav */}
                <Box className="flex items-center justify-between px-5 pb-3 pt-4 md:px-6">
                  <Typography className="!text-[11px] !font-semibold !tracking-[0.18em] !text-white/82">
                    STUDIO BRAND
                  </Typography>

                  <Box className="flex items-center gap-4 md:gap-5">
                    <Typography className="!text-[10px] !text-white/42">Servizi</Typography>
                    <Typography className="!text-[10px] !text-white/42">Progetti</Typography>
                    <Typography className="!text-[10px] !text-white/42">Contatti</Typography>
                  </Box>
                </Box>

                {/* site layout */}
                <Box className="grid h-[calc(100%-48px)] grid-cols-[1.02fr_0.98fr] gap-5 px-5 pb-5 md:px-6">
                  {/* left column */}
                  <Box className="flex h-full flex-col justify-between">
                    <Box>
                      <Box className="inline-flex rounded-full border border-violet-300/22 bg-violet-400/10 px-3 py-1">
                        <Typography className="!text-[9px] !font-medium !tracking-[0.18em] !text-violet-100/84">
                          CRESCITA ONLINE
                        </Typography>
                      </Box>

                      <Typography className="mt-4 max-w-[12ch] !text-[1.65rem] !font-semibold !leading-[0.98] !text-white md:!text-[2rem]">
                        Presenza più chiara,
                        <span className="block !text-white/84">più fiducia, più richieste</span>
                      </Typography>

                      <Typography className="mt-4 max-w-[33ch] !text-[11px] !leading-6 !text-white/54 md:!text-[12px]">
                        Un sito ordinato e credibile aiuta il brand a comunicare meglio il proprio valore e a trasformare più visite in contatti reali.
                      </Typography>

                      <Box className="mt-5 flex items-center gap-3">
                        <Box className="flex h-10 items-center rounded-full bg-[linear-gradient(90deg,rgba(139,92,246,0.98),rgba(168,85,247,0.82))] px-5 shadow-[0_12px_30px_rgba(139,92,246,0.28)]">
                          <Typography className="!text-[10px] !font-medium !tracking-[0.08em] !text-white">
                            Richiedi analisi
                          </Typography>
                        </Box>

                        <Box className="flex h-10 items-center rounded-full border border-white/10 bg-white/[0.03] px-5">
                          <Typography className="!text-[10px] !font-medium !tracking-[0.08em] !text-white/64">
                            Vedi progetto
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* bottom cards */}
                    <Box className="grid grid-cols-3 gap-3">
                      <Box className="rounded-[18px] border border-white/8 bg-white/[0.03] p-3">
                        <Typography className="!text-[8px] !tracking-[0.15em] !text-white/34">
                          VISIBILITÀ
                        </Typography>
                        <Typography className="mt-2 !text-[15px] !font-semibold !text-white">
                          +32%
                        </Typography>
                        <Typography className="mt-1 !text-[10px] !leading-4 !text-white/44">
                          percezione più chiara
                        </Typography>
                      </Box>

                      <Box className="rounded-[18px] border border-violet-300/16 bg-violet-400/[0.085] p-3">
                        <Typography className="!text-[8px] !tracking-[0.15em] !text-violet-100/60">
                          CONTATTI
                        </Typography>
                        <Typography className="mt-2 !text-[15px] !font-semibold !text-white">
                          +24%
                        </Typography>
                        <Typography className="mt-1 !text-[10px] !leading-4 !text-white/46">
                          richieste qualificate
                        </Typography>
                      </Box>

                      <Box className="rounded-[18px] border border-white/8 bg-white/[0.03] p-3">
                        <Typography className="!text-[8px] !tracking-[0.15em] !text-white/34">
                          FIDUCIA
                        </Typography>
                        <Typography className="mt-2 !text-[15px] !font-semibold !text-white">
                          Più alta
                        </Typography>
                        <Typography className="mt-1 !text-[10px] !leading-4 !text-white/44">
                          immagine più solida
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* right column: still site content */}
                  <Box className="flex h-full flex-col gap-3">
                    <Box className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.018))] p-4">
                      <Typography className="!text-[9px] !tracking-[0.14em] !text-white/34">
                        HERO SECTION
                      </Typography>

                      <Typography className="mt-2 max-w-[15ch] !text-[15px] !font-semibold !leading-tight !text-white md:!text-[17px]">
                        Un sito più essenziale migliora la percezione del valore
                      </Typography>

                      <Box className="mt-5 grid grid-cols-2 gap-3">
                        <Box className="rounded-[16px] border border-white/8 bg-white/[0.03] p-3">
                          <Typography className="!text-[8px] !tracking-[0.15em] !text-white/34">
                            UX
                          </Typography>
                          <Typography className="mt-2 !text-[11px] !font-semibold !leading-4 !text-white">
                            Navigazione semplice
                          </Typography>
                        </Box>

                        <Box className="rounded-[16px] border border-white/8 bg-white/[0.03] p-3">
                          <Typography className="!text-[8px] !tracking-[0.15em] !text-white/34">
                            BRAND
                          </Typography>
                          <Typography className="mt-2 !text-[11px] !font-semibold !leading-4 !text-white">
                            Immagine coerente
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="grid flex-1 grid-cols-2 gap-3">
                      <Box className="rounded-[18px] border border-white/8 bg-white/[0.03] p-3">
                        <Typography className="!text-[8px] !tracking-[0.14em] !text-white/34">
                          CASE STUDY
                        </Typography>
                        <Typography className="mt-2 !text-[11px] !font-semibold !leading-4 !text-white">
                          Più richieste utili
                        </Typography>
                        <Box className="mt-3 space-y-2">
                          <Box className="h-2.5 w-[88%] rounded-full bg-white/[0.06]" />
                          <Box className="h-2.5 w-[72%] rounded-full bg-white/[0.05]" />
                        </Box>
                      </Box>

                      <Box className="rounded-[18px] border border-white/8 bg-white/[0.03] p-3">
                        <Typography className="!text-[8px] !tracking-[0.14em] !text-white/34">
                          PROCESSO
                        </Typography>
                        <Typography className="mt-2 !text-[11px] !font-semibold !leading-4 !text-white">
                          Design più chiaro
                        </Typography>
                        <Box className="mt-3 space-y-2">
                          <Box className="h-2.5 w-[82%] rounded-full bg-violet-400/[0.18]" />
                          <Box className="h-2.5 w-[64%] rounded-full bg-white/[0.05]" />
                        </Box>
                      </Box>
                    </Box>

                    <Box className="flex h-10 items-center justify-between rounded-full border border-white/8 bg-white/[0.03] px-4">
                      <Typography className="!text-[10px] !tracking-[0.13em] !text-white/44">
                        DESIGN · CHIAREZZA · PERFORMANCE
                      </Typography>
                      <Box className="h-2.5 w-24 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(168,85,247,0.34),rgba(217,70,239,0.16))]" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* laptop base */}
          <Box className="absolute bottom-[-3.2%] left-[6%] h-[4.2%] w-[88%] rounded-b-[22px] bg-[linear-gradient(180deg,#231c32,#0b0812)] shadow-[0_14px_30px_rgba(0,0,0,0.34)]" />
        </Box>

        {/* PHONE */}
        <Box className="absolute right-[3%] top-[20.5%] h-[57%] w-[22.5%]">
          {/* outer body */}
          <Box className="absolute inset-0 rounded-[38px] bg-[linear-gradient(180deg,#1a161f,#050409)] p-[4px] shadow-[0_34px_90px_rgba(0,0,0,0.60),0_14px_40px_rgba(0,0,0,0.34)]">
            <Box className="relative h-full w-full overflow-hidden rounded-[34px] border border-white/10 bg-[#09070d] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {/* reflections */}
              <Box className="pointer-events-none absolute inset-x-0 top-0 h-[34%] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0))]" />
              <Box className="pointer-events-none absolute right-[-18%] top-[-6%] h-24 w-16 rotate-[16deg] bg-white/[0.03] blur-2xl" />

              {/* side buttons */}
              <Box className="absolute right-0 top-[24%] h-10 w-[2px] rounded-full bg-white/18" />
              <Box className="absolute left-0 top-[20%] h-8 w-[2px] rounded-full bg-white/14" />
              <Box className="absolute left-0 top-[30%] h-12 w-[2px] rounded-full bg-white/14" />

              {/* status bar */}
              <Box className="absolute inset-x-0 top-0 z-20 flex h-10 items-center justify-between px-4">
                <Typography className="!text-[8px] !font-medium !text-white/72">
                  9:41
                </Typography>

                <Box className="absolute left-1/2 top-[7px] h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

                <Box className="flex items-center gap-1.5">
                  <Box className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  <Box className="h-1.5 w-3 rounded-sm bg-white/70" />
                  <Box className="h-1.5 w-4 rounded-sm border border-white/60">
                    <Box className="h-full w-[72%] rounded-[2px] bg-white/70" />
                  </Box>
                </Box>
              </Box>

              {/* dashboard */}
              <Box className="h-full px-3 pb-5 pt-12">
                <Box className="rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3">
                  <Typography className="!text-[8px] !tracking-[0.15em] !text-white/34">
                    ANALYTICS
                  </Typography>
                  <Typography className="mt-1.5 !text-[12px] !font-semibold !leading-[1.2] !text-white">
                    Performance del sito
                  </Typography>
                </Box>

                <Box className="mt-3 grid gap-2.5">
                  {/* KPI cards */}
                  <Box className="rounded-[15px] border border-white/8 bg-white/[0.03] p-3">
                    <Box className="mb-2 flex items-center justify-between">
                      <Typography className="!text-[8px] !tracking-[0.14em] !text-white/34">
                        CHIAREZZA
                      </Typography>
                      <Typography className="!text-[8px] !font-medium !text-white/54">
                        86%
                      </Typography>
                    </Box>
                    <Box className="h-2 rounded-full bg-white/[0.05]">
                      <Box className="h-2 w-[86%] rounded-full bg-[linear-gradient(90deg,rgba(139,92,246,0.95),rgba(168,85,247,0.76))]" />
                    </Box>
                  </Box>

                  <Box className="rounded-[15px] border border-white/8 bg-white/[0.03] p-3">
                    <Box className="mb-2 flex items-center justify-between">
                      <Typography className="!text-[8px] !tracking-[0.14em] !text-white/34">
                        FIDUCIA
                      </Typography>
                      <Typography className="!text-[8px] !font-medium !text-white/54">
                        78%
                      </Typography>
                    </Box>
                    <Box className="h-2 rounded-full bg-white/[0.05]">
                      <Box className="h-2 w-[78%] rounded-full bg-white/[0.18]" />
                    </Box>
                  </Box>

                  {/* line chart */}
                  <Box className="rounded-[15px] border border-white/8 bg-white/[0.03] p-3">
                    <Box className="flex items-center justify-between">
                      <Typography className="!text-[8px] !tracking-[0.14em] !text-white/34">
                        TRAFFICO
                      </Typography>
                      <Typography className="!text-[8px] !text-emerald-300/70">
                        +18%
                      </Typography>
                    </Box>

                    <Box className="mt-2.5 relative h-[48px] overflow-hidden rounded-[10px] border border-white/6 bg-white/[0.02]">
                      {/* grid */}
                      <Box className="absolute inset-0">
                        <Box className="absolute left-0 top-1/4 h-px w-full bg-white/[0.05]" />
                        <Box className="absolute left-0 top-2/4 h-px w-full bg-white/[0.05]" />
                        <Box className="absolute left-0 top-3/4 h-px w-full bg-white/[0.05]" />
                      </Box>

                      {/* line */}
                      <svg
                        viewBox="0 0 120 48"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="rgba(139,92,246,0.65)" />
                            <stop offset="100%" stopColor="rgba(216,180,254,0.95)" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 36 C10 34, 16 32, 24 30 C32 28, 38 31, 46 24 C54 17, 60 20, 68 19 C76 18, 82 13, 90 14 C98 15, 106 10, 120 8"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Box>
                  </Box>

                  {/* bar chart */}
                  <Box className="rounded-[15px] border border-violet-300/16 bg-violet-400/[0.075] p-3">
                    <Box className="flex items-center justify-between">
                      <Typography className="!text-[8px] !tracking-[0.14em] !text-violet-100/60">
                        CONVERSIONI
                      </Typography>
                      <Typography className="!text-[8px] !text-white/60">+24%</Typography>
                    </Box>

                    <Box className="mt-3 flex h-[42px] items-end gap-1.5">
                      <Box className="h-[12px] w-2 flex-1 rounded-full bg-white/[0.12]" />
                      <Box className="h-[18px] w-2 flex-1 rounded-full bg-white/[0.16]" />
                      <Box className="h-[15px] w-2 flex-1 rounded-full bg-white/[0.12]" />
                      <Box className="h-[25px] w-2 flex-1 rounded-full bg-violet-400/[0.55]" />
                      <Box className="h-[20px] w-2 flex-1 rounded-full bg-white/[0.16]" />
                      <Box className="h-[32px] w-2 flex-1 rounded-full bg-violet-400/[0.85]" />
                      <Box className="h-[28px] w-2 flex-1 rounded-full bg-violet-300/[0.55]" />
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* home indicator */}
              <Box className="absolute bottom-2 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/16" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
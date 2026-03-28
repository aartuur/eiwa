import React from "react";
import { Button, TextField } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

export interface FormData {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  city: string;
  sector: string;
  services: string;
  instagram: string;
}

interface Props {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  step: number;
  setStep: (v: number) => void;
}

type MiniStep = 0 | 1 | 2;

export default function BusinessInfoForm({
  form,
  setForm,
  setStep,
}: Props) {
  const [miniStep, setMiniStep] = React.useState<MiniStep>(0);

  const handleChange = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const blocks = [
    {
      title: "Identità del brand",
      subtitle: "I dati principali per personalizzare la demo.",
      icon: <BusinessRoundedIcon fontSize="small" />,
      fields: (
        <div className="grid gap-4">
          <StyledField
            label="Nome attività"
            value={form.businessName}
            onChange={handleChange("businessName")}
            placeholder="Studio Nova"
          />
          <StyledField
            label="Titolare / referente"
            value={form.ownerName}
            onChange={handleChange("ownerName")}
            placeholder="Marco Rossi"
          />
          <StyledField
            label="Settore"
            value={form.sector}
            onChange={handleChange("sector")}
            placeholder="Centro estetico"
          />
        </div>
      ),
    },
    {
      title: "Contatti essenziali",
      subtitle: "Servono per rendere la demo credibile e utile.",
      icon: <PhoneIphoneRoundedIcon fontSize="small" />,
      fields: (
        <div className="grid gap-4">
          <StyledField
            label="Telefono"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="+39 333 123 4567"
          />
          <StyledField
            label="Email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="ciao@studionova.it"
          />
          <StyledField
            label="Instagram"
            value={form.instagram}
            onChange={handleChange("instagram")}
            placeholder="@studionova"
          />
        </div>
      ),
    },
    {
      title: "Presenza locale e servizi",
      subtitle: "Bastano città e servizi principali, i testi li genera la demo.",
      icon: <StorefrontRoundedIcon fontSize="small" />,
      fields: (
        <div className="grid gap-4">
          <StyledField
            label="Città"
            value={form.city}
            onChange={handleChange("city")}
            placeholder="Milano"
          />
          <TextField
            label="Servizi principali"
            value={form.services}
            onChange={handleChange("services")}
            placeholder="Trattamenti viso, Laser, Manicure"
            multiline
            minRows={4}
            fullWidth
            variant="outlined"
            InputLabelProps={{ style: { color: "rgba(255,255,255,.72)" } }}
            InputProps={{
              style: {
                color: "white",
                borderRadius: 18,
                background: "rgba(255,255,255,.04)",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,.10)" },
                "&:hover fieldset": { borderColor: "rgba(255,255,255,.20)" },
                "&.Mui-focused fieldset": { borderColor: "#a78bfa" },
              },
            }}
          />
        </div>
      ),
    },
  ];

  const progress = ((miniStep + 1) / blocks.length) * 100;

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-20 md:px-6">
      <div className="grid w-full max-w-7xl gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
        {/* Sidebar */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <AutoAwesomeRoundedIcon fontSize="small" />
            Configurazione demo
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight">
            Form guidato
            <span className="block text-violet-400">
              stile stepper
            </span>
          </h2>

          <p className="mt-4 text-white/65">
            Ti chiediamo solo il necessario. I testi della hero, about e CTA
            vengono generati automaticamente in base ai dati inseriti.
          </p>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-sm text-white/60">
              <span>Completamento</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {blocks.map((item, index) => {
              const active = index === miniStep;
              const done = index < miniStep;

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border px-4 py-4 transition-all ${
                    active
                      ? "border-violet-400/40 bg-violet-500/10 shadow-[0_0_0_1px_rgba(167,139,250,.1)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl ${
                        active || done
                          ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                          : "bg-white/5 text-white/60"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <div className="text-sm text-white/50">
                        Step {index + 1}
                      </div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="mt-1 text-sm text-white/55">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main form */}
        <div className="rounded-[32px] border border-white/10 bg-[#0a0616]/90 p-6 md:p-8 backdrop-blur-2xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm text-violet-300">
                Step {miniStep + 1} di {blocks.length}
              </div>
              <h3 className="mt-1 text-2xl font-bold">
                {blocks[miniStep].title}
              </h3>
              <p className="mt-2 text-white/60">
                {blocks[miniStep].subtitle}
              </p>
            </div>

            <div className="flex gap-2">
              {blocks.map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-10 rounded-full transition-all ${
                    i === miniStep
                      ? "bg-violet-400"
                      : i < miniStep
                      ? "bg-violet-400/60"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="min-h-[300px]">
            {blocks[miniStep].fields}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="outlined"
              startIcon={<ArrowBackRoundedIcon />}
              onClick={() => {
                if (miniStep === 0) {
                  setStep(0);
                  return;
                }
                setMiniStep((prev) => Math.max(0, prev - 1) as MiniStep);
              }}
              sx={{
                borderRadius: "999px",
                px: 2.2,
                py: 1.2,
                textTransform: "none",
                color: "white",
                borderColor: "rgba(255,255,255,.16)",
              }}
            >
              {miniStep === 0 ? "Torna intro" : "Indietro"}
            </Button>

            {miniStep < 2 ? (
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() =>
                  setMiniStep((prev) => Math.min(2, prev + 1) as MiniStep)
                }
                sx={{
                  borderRadius: "999px",
                  px: 2.4,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
                }}
              >
                Continua
              </Button>
            ) : (
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() => setStep(2)}
                sx={{
                  borderRadius: "999px",
                  px: 2.6,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
                  boxShadow: "0 20px 50px rgba(139,92,246,.28)",
                }}
              >
                Genera demo sito
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StyledField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      InputLabelProps={{ style: { color: "rgba(255,255,255,.72)" } }}
      InputProps={{
        style: {
          color: "white",
          borderRadius: 18,
          background: "rgba(255,255,255,.04)",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "rgba(255,255,255,.10)" },
          "&:hover fieldset": { borderColor: "rgba(255,255,255,.20)" },
          "&.Mui-focused fieldset": { borderColor: "#a78bfa" },
        },
      }}
    />
  );
}
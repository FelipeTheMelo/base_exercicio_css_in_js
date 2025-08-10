import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyle } from './styles/GlobalStyle'
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const vagas = [
  {
    id: 1,
    titulo: "Desenvolvedor front-end",
    localizacao: "remoto",
    senioridade: "junior",
    modalidade: "clt",
    salario: "3000 - 4500",
    requisitos: ["HTML", "CSS", "JavaScript", "jQuery"],
    nivel: "junior",
    salarioMin: 3000,
    salarioMax: 4500,
  },
  {
    id: 2,
    titulo: "Desenvolvedor NodeJS",
    localizacao: "remoto",
    senioridade: "pleno",
    modalidade: "pj",
    salario: "5000 - 6500",
    requisitos: ["Node.js", "Express", "MongoDB", "JavaScript"],
    nivel: "pleno",
    salarioMin: 5000,
    salarioMax: 6500,
  },
  {
    id: 3,
    titulo: "Desenvolvedor fullstack",
    localizacao: "remoto",
    senioridade: "pleno",
    modalidade: "pj",
    salario: "4000 - 6000",
    requisitos: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    nivel: "pleno",
    salarioMin: 4000,
    salarioMax: 6000,
  },
  {
    id: 4,
    titulo: "Designer de interfaces",
    localizacao: "remoto",
    senioridade: "junior",
    modalidade: "clt",
    salario: "4000 - 5000",
    requisitos: ["Figma", "Adobe XD", "UI/UX", "Photoshop"],
    nivel: "junior",
    salarioMin: 4000,
    salarioMax: 5000,
  },
  {
    id: 5,
    titulo: "Desenvolvedor front-end (Senior)",
    localizacao: "remoto",
    senioridade: "senior",
    modalidade: "clt",
    salario: "7000 - 8000",
    requisitos: ["React", "TypeScript", "Next.js", "Styled Components"],
    nivel: "senior",
    salarioMin: 7000,
    salarioMax: 8000,
  },
  {
    id: 6,
    titulo: "Desenvolvedor front-end para projeto internacional",
    localizacao: "remoto",
    senioridade: "senior",
    modalidade: "pj",
    salario: "12000 - 15000",
    requisitos: ["React", "TypeScript", "GraphQL", "AWS"],
    nivel: "senior",
    salarioMin: 12000,
    salarioMax: 15000,
  },
  {
    id: 7,
    titulo: "Desenvolvedor React Native",
    localizacao: "São Paulo/SP",
    senioridade: "junior",
    modalidade: "clt",
    salario: "4000 - 5500",
    requisitos: ["React Native", "JavaScript", "Redux", "API REST"],
    nivel: "junior",
    salarioMin: 4000,
    salarioMax: 5500,
  },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GlobalStyle />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <ListaVagas vagas={vagas} />
              </>
            }
          />
          <Route path="/template" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
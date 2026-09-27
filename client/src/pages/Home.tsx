/* Oficina de Precisão — página de conversão da NINJA BYTE: módulos técnicos, contraste de sinalização e tecnologia humana. */
import { FormEvent, useState } from "react";
import logoUrl from "@/assets/ninja-byte-logo.jpeg";
import heroImageUrl from "@/assets/hero-repair-bench.png";
import gamerImageUrl from "@/assets/gamer-workshop.png";
import generatedMarkUrl from "@/assets/ninja-byte-mark.png";
import ssdImageUrl from "@/assets/ssd-hd.jpg";
import ramImageUrl from "@/assets/ram.jpg";
import gpuImageUrl from "@/assets/gpu.jpg";
import peripheralsImageUrl from "@/assets/peripherals.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cpu,
  Gamepad2,
  Handshake,
  HardDrive,
  Instagram,
  Laptop,
  Mail,
  MapPin,
  MemoryStick,
  Menu,
  MessageCircle,
  Monitor,
  Package,
  Phone,
  Printer,
  Search,
  ShieldCheck,
  Timer,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const whatsappMessage =
  "Olá! Sou cliente da NINJA BYTE e gostaria de solicitar informações sobre assistência técnica e orçamento.";
const whatsappLink = "https://wa.me/message/67DD3XISISVYC1";
const instagramLink = "https://www.instagram.com/ninjabyte.oficial?igsi=MW1neTB2amQxenN4ag==";

const services = [
  {
    eyebrow: "01 / BASE",
    title: "Manutenção de computadores",
    description:
      "Manutenção preventiva e corretiva, limpeza interna, formatação, instalação, diagnóstico e otimização.",
    icon: Monitor,
    cta: "Saiba mais",
  },
  {
    eyebrow: "02 / PERFORMANCE",
    title: "PC Gamer",
    description:
      "Montagem, limpeza, organização de cabos, troca de componentes, upgrades e otimização de desempenho.",
    icon: Gamepad2,
    cta: "Explorar serviço",
  },
  {
    eyebrow: "03 / MOBILIDADE",
    title: "Notebooks",
    description:
      "Diagnóstico, manutenção, limpeza, formatação e upgrades de memória, SSD e componentes compatíveis.",
    icon: Laptop,
    cta: "Saiba mais",
  },
  {
    eyebrow: "04 / IMPRESSÃO",
    title: "Impressoras",
    description:
      "Diagnóstico, manutenção preventiva e corretiva, limpeza, ajustes e solução de problemas.",
    icon: Printer,
    cta: "Saiba mais",
  },
  {
    eyebrow: "05 / EVOLUÇÃO",
    title: "Upgrades",
    description:
      "Mais memória, SSD, armazenamento, placa de vídeo, processador e componentes compatíveis.",
    icon: Zap,
    cta: "Fazer upgrade",
  },
  {
    eyebrow: "06 / SUPRIMENTOS",
    title: "Componentes e acessórios",
    description:
      "Memória RAM, SSD, HD, fontes, placas de vídeo, processadores, cabos, adaptadores e periféricos.",
    icon: Package,
    cta: "Consultar peças",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entre em contato",
    description: "Fale pelo WhatsApp e conte o que aconteceu com o seu equipamento.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Diagnóstico",
    description: "Nossa equipe avalia a causa do problema com método e atenção aos detalhes.",
    icon: Search,
  },
  {
    number: "03",
    title: "Orçamento",
    description: "Você recebe a solução indicada e o orçamento antes de qualquer execução.",
    icon: BadgeDollarSign,
  },
  {
    number: "04",
    title: "Equipamento pronto",
    description: "Após sua aprovação, realizamos o serviço e devolvemos tudo funcionando.",
    icon: CheckCircle2,
  },
];

const reasons = [
  {
    title: "Experiência técnica",
    description: "Equipe preparada para diagnosticar e solucionar diferentes equipamentos.",
    icon: Wrench,
  },
  {
    title: "Diagnóstico cuidadoso",
    description: "Análise criteriosa para encontrar a causa, não apenas tratar o sintoma.",
    icon: Search,
  },
  {
    title: "Transparência",
    description: "Você aprova o orçamento antes da realização do serviço.",
    icon: BadgeDollarSign,
  },
  {
    title: "Agilidade",
    description: "Atendimento organizado e processos eficientes do início ao fim.",
    icon: Timer,
  },
  {
    title: "Segurança",
    description: "Cuidado com seu equipamento, componentes e informações pessoais.",
    icon: ShieldCheck,
  },
  {
    title: "Confiança",
    description: "Relacionamento profissional, explicação clara e acompanhamento próximo.",
    icon: Handshake,
  },
];

const components = [
  { category: "SSD / HD", name: "Armazenamento", description: "Mais velocidade e espaço para iniciar e trabalhar.", image: ssdImageUrl, imageAlt: "Unidade de armazenamento para computador, com SSD e HD" },
  { category: "RAM", name: "Memória RAM", description: "Fluidez para multitarefas, criação e jogos.", image: ramImageUrl, imageAlt: "Módulos de memória RAM para computador" },
  { category: "GPU", name: "Placa de vídeo", description: "Desempenho visual para cada objetivo.", image: gpuImageUrl, imageAlt: "Placa de vídeo para computador" },
  { category: "KIT", name: "Periféricos", description: "Mouse, teclado, fone, suportes e acessórios.", image: peripheralsImageUrl, imageAlt: "Periféricos de computador, como teclado, mouse e fone" },
];

const faqs = [
  ["Quanto custa uma manutenção?", "O valor depende do problema identificado e do serviço necessário. Após o diagnóstico, a NINJA BYTE apresenta o orçamento antes da execução."],
  ["A NINJA BYTE trabalha com PC Gamer?", "Sim. Trabalhamos com montagem, manutenção, limpeza, upgrades, organização e otimização de PCs Gamer."],
  ["Vocês fazem manutenção de notebooks?", "Sim. Realizamos diagnóstico, manutenção, limpeza, upgrades e diversos serviços em notebooks."],
  ["Vocês trabalham com impressoras?", "Sim. Realizamos diagnóstico e manutenção de impressoras."],
  ["A NINJA BYTE vende peças?", "Sim. Trabalhamos com diversos componentes, peças, periféricos e acessórios. A disponibilidade e o valor são consultados caso a caso."],
  ["Posso solicitar orçamento pelo WhatsApp?", "Sim. Você pode falar diretamente com nossa equipe através do botão de WhatsApp e enviar uma descrição do que precisa."],
  ["Vocês fazem upgrade de computadores?", "Sim. Avaliamos o equipamento e indicamos os componentes compatíveis para melhorar seu desempenho."],
];

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand-lockup ${footer ? "brand-lockup--footer" : ""}`} href="#inicio" aria-label="NINJA BYTE — voltar ao início">
      <span className="brand-mark-wrap">
        <img src={logoUrl} alt="Símbolo da NINJA BYTE" className="brand-mark" />
      </span>
      <span className="brand-copy">
        <strong>NINJA <em>BYTE</em></strong>
        <small>// ASSISTÊNCIA TÉCNICA</small>
      </span>
    </a>
  );
}

function WhatsAppButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a className={`button button--whatsapp ${className}`} href={whatsappLink} target="_blank" rel="noreferrer">
      <MessageCircle size={17} strokeWidth={2.5} />
      <span>{label}</span>
      <ArrowUpRight size={16} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${menuOpen ? "site-header--open" : ""}`}>
        <div className="container header-inner">
          <BrandLockup />
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className="main-nav" aria-label="Navegação principal">
            {["Início", "Serviços", "PC Gamer", "Componentes", "Sobre nós", "FAQ", "Contato"].map((item) => {
              const href = item === "Início" ? "#inicio" : item === "Serviços" ? "#servicos" : item === "PC Gamer" ? "#pc-gamer" : item === "Componentes" ? "#componentes" : item === "Sobre nós" ? "#sobre" : item === "FAQ" ? "#faq" : "#contato";
              return <a key={item} href={href} onClick={closeMenu}>{item}</a>;
            })}
          </nav>
          <WhatsAppButton label="Falar no WhatsApp" className="header-cta" />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--light"><span className="status-dot" /> NB / CENTRAL DE DIAGNÓSTICO</div>
              <h1>Seu equipamento com problema? <span>A NINJA BYTE resolve.</span></h1>
              <p className="hero-lead">Assistência técnica especializada para computadores, PC Gamer, notebooks, impressoras e equipamentos eletrônicos. Manutenção, upgrades, diagnóstico e componentes em um só lugar.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#contato">Solicitar orçamento <ArrowRight size={17} /></a>
                <WhatsAppButton label="Falar no WhatsApp" />
              </div>
              <div className="hero-proof">
                <span><CheckCircle2 size={15} /> Diagnóstico especializado</span>
                <span><CheckCircle2 size={15} /> Orçamento transparente</span>
                <span><CheckCircle2 size={15} /> Atendimento rápido</span>
                <span><CheckCircle2 size={15} /> Profissionais qualificados</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-frame">
                <img src={heroImageUrl} alt="Bancada profissional com computador e componentes eletrônicos em diagnóstico" />
                <div className="hero-scan-line" />
                <div className="image-caption"><span>WORKBENCH / 001</span><span>STATUS: OPERACIONAL</span></div>
              </div>
              <div className="hero-stamp"><img src={generatedMarkUrl} alt="" /><span>PRECISÃO<br />EM CADA<br />DETALHE</span></div>
              <div className="hero-coordinate">-23.5505° S<br />-46.6333° W</div>
            </div>
          </div>
          <div className="hero-bottom-label"><span>SCROLL PARA EXPLORAR</span><span className="scroll-line" /></div>
        </section>

        <section className="intro-strip" id="sobre">
          <div className="container intro-grid">
            <div className="section-kicker">NB / QUEM SOMOS</div>
            <div className="intro-title"><div className="intro-seal"><img src={generatedMarkUrl} alt="" /><span>NB / 2026<br />PRECISÃO EM CADA DETALHE</span></div><h2>Tecnologia que funciona.<br /><span>Suporte em que você confia.</span></h2></div>
            <div className="intro-text"><p>A NINJA BYTE combina conhecimento técnico, comunicação clara e cuidado real para devolver desempenho ao que você usa todos os dias.</p><a href="#contato" className="text-link">Conheça nosso processo <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><div className="eyebrow">NB / NOSSOS SERVIÇOS</div><h2>Soluções para <span>todos</span> os seus equipamentos.</h2></div>
              <p>Da manutenção preventiva ao upgrade de desempenho, oferecemos soluções completas para manter sua tecnologia funcionando perfeitamente.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return <article className={`service-card ${index === 1 ? "service-card--accent" : ""}`} key={service.title}>
                  <div className="card-topline"><span>{service.eyebrow}</span><Icon size={20} /></div>
                  <div className="service-icon"><Icon size={25} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contato" className="card-link">{service.cta} <ArrowUpRight size={15} /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading section-heading--process"><div><div className="eyebrow eyebrow--light">NB / COMO FUNCIONA</div><h2>É fácil resolver o problema do seu equipamento.</h2></div><p>Sem adivinhação, sem surpresa. Um processo direto para você tomar a decisão certa.</p></div>
            <div className="process-grid">
              {processSteps.map((step, index) => { const Icon = step.icon; return <article className="process-step" key={step.number}><div className="process-number">{step.number}</div><div className="process-icon"><Icon size={20} /></div><h3>{step.title}</h3><p>{step.description}</p>{index < processSteps.length - 1 && <span className="process-connector" aria-hidden="true" />}</article>; })}
            </div>
          </div>
        </section>

        <section className="whatsapp-band">
          <div className="container whatsapp-band-inner"><div className="band-mark"><span /> NB / ATENDIMENTO DIRETO</div><div><h2>Precisa de assistência técnica?</h2><p>Não perca tempo tentando resolver sozinho. Fale com a NINJA BYTE e descubra como podemos ajudar.</p></div><WhatsAppButton label="Falar com um especialista" className="button--light" /></div>
        </section>

        <section className="section reasons-section">
          <div className="container">
            <div className="section-heading section-heading--split"><div><div className="eyebrow">NB / POR QUE ESCOLHER</div><h2>O cuidado técnico <span>faz diferença.</span></h2></div><p>Seu equipamento merece uma equipe que explique o problema, proteja seus dados e indique somente o que faz sentido.</p></div>
            <div className="reasons-grid">{reasons.map((reason, index) => { const Icon = reason.icon; return <article className="reason-card" key={reason.title}><span className="reason-index">0{index + 1} / CHECK</span><Icon size={21} /><h3>{reason.title}</h3><p>{reason.description}</p></article>; })}</div>
          </div>
        </section>

        <section className="gamer-section" id="pc-gamer">
          <div className="container gamer-inner"><div className="gamer-visual"><img src={gamerImageUrl} alt="PC Gamer preto com iluminação vermelha em ambiente técnico" /><div className="gamer-label">PERFORMANCE LAB / 002</div></div><div className="gamer-copy"><div className="eyebrow eyebrow--light">NB / PC GAMER</div><h2>Seu PC pode <span>ir além.</span></h2><p>Monte, atualize e mantenha seu PC Gamer com quem entende de desempenho. Do primeiro componente ao último ajuste.</p><div className="gamer-features"><div><Gamepad2 size={20} /><span>Montagem de PC Gamer</span></div><div><Zap size={20} /><span>Upgrade de desempenho</span></div><div><Wrench size={20} /><span>Manutenção especializada</span></div></div><WhatsAppButton label="Quero turbinar meu PC" /></div></div>
        </section>

        <section className="section components-section" id="componentes">
          <div className="container">
            <div className="section-heading section-heading--split"><div><div className="eyebrow">NB / COMPONENTES</div><h2>Peças para o seu <span>próximo passo.</span></h2></div><p>Encontre componentes e acessórios para melhorar, atualizar ou substituir peças do seu equipamento. Consulte disponibilidade e valor.</p></div>
            <div className="component-grid">{components.map((component) => { return <article className="component-card" key={component.category}><div className="component-code">PART / {component.category}</div><div className="component-visual"><img src={component.image} alt={component.imageAlt} /><div className="component-image-overlay" /><span>{component.category}</span></div><div className="component-info"><div><h3>{component.name}</h3><p>{component.description}</p></div><a href={whatsappLink} target="_blank" rel="noreferrer" className="round-link" aria-label={`Consultar ${component.name}`}><ArrowUpRight size={18} /></a></div><div className="availability"><span className="availability-dot" /> Consultar disponibilidade e valor</div></article>; })}</div>
            <div className="component-footer"><span>RAM / SSD / HD / GPU / CPU / CABOS / ADAPTADORES / PERIFÉRICOS</span><a href={whatsappLink} target="_blank" rel="noreferrer" className="text-link">Consultar componentes <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-inner"><div className="trust-copy"><div className="eyebrow eyebrow--light">NB / CONFIANÇA</div><h2>Antes de consertar, a gente <span>entende.</span></h2><p>Um bom atendimento técnico começa ouvindo. Conte o sintoma, traga o equipamento e receba uma orientação clara sobre o próximo passo.</p><div className="trust-signature"><img src={logoUrl} alt="Logo NINJA BYTE" /><span>Diagnóstico claro.<br />Decisão segura.</span></div></div><div className="trust-points"><div><span>01</span><strong>Escuta antes da solução</strong><p>Seu relato faz parte do diagnóstico.</p></div><div><span>02</span><strong>Orçamento antes do serviço</strong><p>Você aprova tudo com tranquilidade.</p></div><div><span>03</span><strong>Cuidado até a entrega</strong><p>O processo termina quando você confia no resultado.</p></div></div></div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-inner"><div className="faq-aside"><div className="eyebrow">NB / FAQ</div><h2>Perguntas<br /><span>frequentes.</span></h2><p>Se ainda ficou alguma dúvida, fale diretamente com a nossa equipe.</p><WhatsAppButton label="Falar com a equipe" /></div><div className="faq-list"><div className="faq-list-header"><span>BASE DE CONHECIMENTO / 07 REGISTROS</span><span>REV. 2.026</span></div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-grid"><div className="contact-copy"><div className="eyebrow">NB / CONTATO</div><div className="contact-station">STATION 04 <span className="status-dot" /> CANAL ABERTO</div><h2>Fale com a<br /><span>NINJA BYTE.</span></h2><p>Explique o que aconteceu. A gente ajuda você a encontrar o caminho mais seguro.</p><div className="contact-list"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WHATSAPP</small><strong>Falar com um especialista</strong></span><ArrowUpRight size={15} /></a><a href="tel:+5561982593510"><Phone size={18} /><span><small>TELEFONE</small><strong>(61) 98259-3510</strong></span><ArrowUpRight size={15} /></a><a href="mailto:Ninjabyte4m@gmail.com"><Mail size={18} /><span><small>E-MAIL</small><strong>Ninjabyte4m@gmail.com</strong></span><ArrowUpRight size={15} /></a><div><MapPin size={18} /><span><small>ENDEREÇO</small><strong>Águas Claras</strong></span></div><div><Clock3 size={18} /><span><small>ATENDIMENTO</small><strong>Atendimento 24 horas</strong></span></div></div></div><div className="form-card"><div className="form-card-header"><span>NB / SOLICITAÇÃO</span><span className="form-status"><span /> ONLINE</span></div>{submitted ? <div className="form-success"><CheckCircle2 size={42} /><h3>Recebemos seu pedido.</h3><p>Obrigado pelo contato. Para agilizar o atendimento, envie os detalhes diretamente pelo WhatsApp.</p><WhatsAppButton label="Continuar pelo WhatsApp" /></div> : <form onSubmit={handleSubmit}><div className="form-row"><label>Nome<input required name="name" placeholder="Como podemos chamar você?" /></label><label>Telefone<input required name="phone" type="tel" placeholder="(00) 00000-0000" /></label></div><div className="form-row"><label>E-mail<input name="email" type="email" placeholder="voce@email.com" /></label><label>Equipamento<select name="equipment" defaultValue=""><option value="" disabled>Selecione</option><option>Computador</option><option>PC Gamer</option><option>Notebook</option><option>Impressora</option><option>Outro equipamento</option></select></label></div><label>Serviço desejado<input required name="service" placeholder="Ex.: limpeza, upgrade, diagnóstico..." /></label><label>Descrição do problema<textarea required name="message" rows={4} placeholder="Conte brevemente o que aconteceu com seu equipamento." /></label><button className="button button--primary form-submit" type="submit">Solicitar orçamento <ArrowRight size={17} /></button></form>}</div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><BrandLockup footer /><p>Tecnologia que funciona.<br />Suporte em que você confia.</p><div className="footer-socials"><a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a></div></div><div className="footer-col"><span>Serviços</span><a href="#servicos">Computadores</a><a href="#pc-gamer">PC Gamer</a><a href="#servicos">Notebooks</a><a href="#servicos">Impressoras</a><a href="#componentes">Upgrades</a><a href="#componentes">Componentes</a></div><div className="footer-col"><span>Atendimento</span><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a><a href="tel:+5561982593510">Telefone</a><a href="mailto:Ninjabyte4m@gmail.com">E-mail</a><a href="#contato">Endereço</a><a href="#contato">Horário</a></div><div className="footer-note"><span>STATUS DA OPERAÇÃO</span><strong><span className="status-dot" /> Pronto para ajudar</strong><p>Fale com a NINJA BYTE e receba uma orientação clara para o seu equipamento.</p><a className="text-link text-link--light" href="#contato">Abrir chamado <ArrowRight size={15} /></a></div></div><div className="container footer-bottom"><span>© 2026 NINJA BYTE — Todos os direitos reservados.</span><span>PRECISÃO / CUIDADO / CONFIANÇA</span></div></footer>

      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Fale com a NINJA BYTE pelo WhatsApp"><MessageCircle size={25} /><span>Fale com a NINJA BYTE</span></a>
    </div>
  );
}

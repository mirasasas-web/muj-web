
export const SITE_CONFIG = {
  name: "Miroslav Ulrych",
  title: "Accounting & AI Expert",
  // Zde vložte své ID z Formspree (např. "xoqozvqy")
  emailServiceId: "YOUR_FORMSPREE_ID", 
  hero: {
    badge: "Miroslav Ulrych | Účetnictví & AI",
    heading: "Finance",
    headingItalic: "v lidském podání.",
    ctaPrimary: "Zahájit spolupráci",
    ctaSecondary: "Prozkoumat služby"
  },
  about: {
    title: "Expertíza & Pokora",
    subtitle: "Kdo jsem",
    text: "S více než 10 lety praxe v účetnictví pomáhám firmám i jednotlivcům najít cestu k efektivitě. Jsem schopen převzít nepříjemné byrokratické povinnosti na sebe, abyste se mohli soustředit na to, co je pro vás skutečně důležité.",
    tags: ['10+ Let Praxe', 'AI Integrace', 'CFO Strategie', 'Metodika výuky']
  },
  services: [
    {
      id: 'firmy',
      title: "Pro Firmy",
      description: "Kompletní vedení agendy, daňová přiznání a strategické CFO poradenství pro udržitelný růst vašeho podnikání.",
      variant: 'primary' as const,
      icon: 'business'
    },
    {
      id: 'osvc',
      title: "Pro OSVČ",
      description: "Optimalizace daní, digitalizace administrativy a klidná mysl pro každého podnikatele, který chce mít své finance pod kontrolou.",
      variant: 'primary' as const,
      icon: 'person'
    }
  ],
  education: [
    {
      title: "Školství & AI",
      description: "Konzultace metodiky a praktické workshopy pro pedagogy. Implementace moderních technologií do výuky ekonomických předmětů.",
      variant: 'secondary' as const
    },
    {
      title: "Příprava studentů",
      description: "Intenzivní příprava na praxi, doučování účetnictví a výuka efektivní práce s AI nástroji pro budoucí experty.",
      variant: 'secondary' as const
    }
  ],
  contact: {
    email: "miroslav.ulrych@example.com",
    phone: "+420 123 456 789",
    formHeading: "Napište mi",
    formSubtitle: "Kontakt",
    socials: {
      linkedin: "https://linkedin.com/in/miroslavulrych",
      whatsapp: "https://wa.me/420123456789",
      teams: "https://teams.microsoft.com/l/chat/0/0?users=miroslav.ulrych@example.com"
    }
  }
};

export const supportedLanguages = [
  { code: 'en', label: 'English', shortLabel: 'EN', isAvailable: true },
  { code: 'es', label: 'Español', shortLabel: 'ES', isAvailable: true },
  { code: 'ja', label: '日本語', shortLabel: 'JA', isAvailable: true },
  { code: 'de', label: 'Deutsch', shortLabel: 'DE', isAvailable: true },
] as const

export type LanguageCode = (typeof supportedLanguages)[number]['code']

export const defaultLanguage: LanguageCode = 'en'

export type SiteCopy = {
  meta: {
    title: string
  }
  languageBar: {
    label: string
    ariaLabel: string
    unavailableLabel: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    summary: string
    detail: string
    actions: {
      projects: string
      experience: string
    }
    glanceAriaLabel: string
    glanceCards: Array<{
      label: string
      text: string
    }>
    panelAriaLabel: string
    panelLabel: string
    terminalLines: Array<{
      command: string
      note: string
    }>
    highlights: string[]
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    aboutTitle: string
    paragraphs: string[]
    practiceTitle: string
    practiceAreas: string[]
  }
  capabilities: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{
      title: string
      items: string[]
    }>
  }
  selectedWork: {
    eyebrow: string
    title: string
    intro: string
    itemEyebrow: string
    tagsAriaSuffix: string
    items: Array<{
      id: string
      title: string
      description: string
      tags: string[]
    }>
  }
  venture: {
    eyebrow: string
    title: string
    intro: string
    whatItIsLabel: string
    whatItIs: string
    highlightsAriaLabel: string
    highlights: string[]
    symbols: Array<{
      title: string
      description: string
    }>
    ctaLabel: string
    note: string
    brandMarksAriaLabel: string
    crestAlt: string
    motifAriaLabel: string
    motif: string[]
    brandDirectionLabel: string
    brandDirection: string
  }
  personal: {
    eyebrow: string
    title: string
    intro: string
    cards: Array<{
      title: string
      text: string
    }>
  }
  contact: {
    eyebrow: string
    title: string
    copy: string
    socialLinksAriaLabel: string
    socialLinks: {
      linkedin: string
      linkedinAriaLabel: string
      instagram: string
      instagramAriaLabel: string
      github: string
      githubAriaLabel: string
    }
    metaName: string
  }
}

export const englishCopy: SiteCopy = {
  meta: {
    title: 'Kiel Sprague | Systems Builder',
  },
  languageBar: {
    label: 'Language',
    ariaLabel: 'Language selector',
    unavailableLabel: 'Translations coming soon',
  },
  hero: {
    eyebrow: 'Kiel Sprague',
    name: 'Kiel Sprague',
    role: 'Systems Builder',
    summary:
      'I build and refine the systems behind modern work, connecting people, processes, and technology into something reliable, efficient, and thoughtfully designed.',
    detail:
      'Guided by clarity, durability, and the belief that well-built systems should feel as good as they function.',
    actions: {
      projects: 'See what I work on',
      experience: 'Read the experience',
    },
    glanceAriaLabel: 'Work at a glance',
    glanceCards: [
      {
        label: 'People and process',
        text: 'I pay attention to how work moves between people, systems, and the points where things usually break down.',
      },
      {
        label: 'Durable systems',
        text: 'I want solutions that stay stable, readable, and useful long after the first implementation.',
      },
      {
        label: 'Intentional design',
        text: 'I care about systems that are not only functional, but feel clear, thoughtful, and well-crafted.',
      },
    ],
    panelAriaLabel: 'Terminal snapshot',
    panelLabel: 'A rough summary of the work',
    terminalLines: [
      {
        command: 'map-system-friction',
        note: 'Find the handoff, bottleneck, or workaround that is creating the most drag.',
      },
      {
        command: 'stabilize-the-core',
        note: 'Reliable foundations matter more than impressive complexity.',
      },
      {
        command: 'untangle-salesforce-flow',
        note: 'Automation should clarify a process, not bury it under more moving parts.',
      },
      {
        command: 'design-the-handoff',
        note: 'Tooling, documentation, and ownership should make the next step obvious.',
      },
    ],
    highlights: [
      'I build structure behind modern work.',
      'I refine systems for clarity and reliability.',
      'I care how solutions function and how they feel.',
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'About',
    intro: 'I build where technical structure and real-world usability need to meet cleanly.',
    aboutTitle: 'About me',
    paragraphs: [
      'I work at the intersection of systems, structure, and usability.',
      'In my day-to-day work, I manage and improve the technical foundation of an organization, maintaining infrastructure, supporting users, and ensuring that everything people rely on is stable, secure, and ready to work.',
      'Beyond that, I focus on building better ways of working. I design and refine processes within Salesforce and across connected systems, turning complex workflows into something more streamlined, more transparent, and easier to use.',
      'What I enjoy most is creating systems from the ground up, where technical capability meets thoughtful design. Whether it is automation, internal tools, or web-based workflows, I aim to build solutions that feel clean, durable, and intuitive over time.',
    ],
    practiceTitle: 'How that shows up in practice',
    practiceAreas: [
      'Systems and infrastructure that support stable, secure day-to-day work.',
      'Business systems and automation that improve process clarity, efficiency, and data quality.',
      'Web and process design that connect systems together into smoother user experiences.',
      'Operational support that keeps people, devices, and software ecosystems running without friction.',
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Capabilities',
    intro:
      'These are the areas where I spend most of my time building, refining, and supporting the systems around modern work.',
    items: [
      {
        title: 'Systems & Infrastructure',
        items: [
          'Maintaining and securing Windows environments, managing networks, backups, and ensuring reliability across both office and remote users.',
        ],
      },
      {
        title: 'Business Systems & Automation',
        items: [
          'Designing and refining workflows in Salesforce and related platforms to improve efficiency, visibility, and data quality.',
        ],
      },
      {
        title: 'Web & Process Design',
        items: [
          'Building web-based processes and integrations that connect systems together and create smoother, more intuitive user experiences.',
        ],
      },
      {
        title: 'Operations & Support',
        items: [
          'Supporting users, devices, and software ecosystems to keep everything running consistently and without friction.',
        ],
      },
    ],
  },
  selectedWork: {
    eyebrow: 'Selected Work',
    title: 'Selected Work',
    intro:
      'A few examples of the kind of work I return to most often across infrastructure, business systems, and process improvement.',
    itemEyebrow: 'Selected work',
    tagsAriaSuffix: 'technologies',
    items: [
      {
        id: 'salesforce-process-development',
        title: 'Salesforce Process Development',
        description:
          'Designed and implemented workflows to improve lead distribution, data flow, and operational visibility.',
        tags: ['Salesforce', 'Flows', 'Automation'],
      },
      {
        id: 'system-administration',
        title: 'System Administration & Reliability',
        description:
          'Managed a full office environment including user systems, network infrastructure, backups, and security practices.',
        tags: ['M365', 'Networking', 'Reliability'],
      },
      {
        id: 'workflow-integration',
        title: 'Web-Based Workflow Integration',
        description:
          'Built and tested integrations between web forms, Salesforce, and supporting platforms to ensure accurate and consistent data flow.',
        tags: ['Web Forms', 'Integrations', 'Data Flow'],
      },
      {
        id: 'system-refinement',
        title: 'Ongoing System Refinement',
        description:
          'Continuously identifying inefficiencies and improving internal processes through practical, well-structured solutions.',
        tags: ['Process Design', 'Internal Systems', 'Refinement'],
      },
    ],
  },
  venture: {
    eyebrow: 'Featured Venture',
    title: 'The Fox, Lantern, and Lemon',
    intro:
      'This is a boutique hospitality concept I have been shaping around an old-world inn sensibility, quieter guest experience, and a brand system that feels story-driven without becoming overly theatrical.',
    whatItIsLabel: 'What it is',
    whatItIs:
      'A calm, design-forward stay built for intentional travelers, traveling professionals, and anyone who wants a warmer alternative to a generic hotel room.',
    highlightsAriaLabel: 'Project highlights',
    highlights: [
      'Boutique short-term and mid-term hospitality concept in Chico, California.',
      'Modern old-world inn feeling without turning the space into a theme set.',
      'Designed for rest, recovery, and straightforward living near Meriam Park and Enloe.',
    ],
    symbols: [
      {
        title: 'The Fox',
        description:
          'Discovery, subtle detail, and the kind of small surprise guests notice after they settle in.',
      },
      {
        title: 'The Lantern',
        description:
          'Warmth, guidance, and a hospitality style built around atmosphere, comfort, and calm lighting.',
      },
      {
        title: 'The Lemon',
        description:
          'Freshness, California character, and a brighter sensory layer that keeps the experience grounded and local.',
      },
    ],
    ctaLabel: 'View the Airbnb listing',
    note: 'A dedicated site for the brand is planned later.',
    brandMarksAriaLabel: 'Brand marks',
    crestAlt: 'The Fox, Lantern, and Lemon crest mark',
    motifAriaLabel: 'Core brand symbols',
    motif: ['The Fox', 'The Lantern', 'The Lemon'],
    brandDirectionLabel: 'Brand direction',
    brandDirection:
      'Heraldic shapes, wood-burn textures, and quiet storytelling through recurring motifs, lighting, and guest-facing detail.',
  },
  personal: {
    eyebrow: 'Personal',
    title: 'Personal',
    intro:
      'Outside of work, I am drawn to building things that feel intentional, whether that means shaping systems, refining spaces, or creating experiences that are both functional and well-crafted.',
    cards: [
      {
        title: 'What I keep returning to',
        text:
          'I am especially interested in work that blends structure with creativity, where something can be dependable, but also thoughtful, cohesive, and quietly distinctive.',
      },
      {
        title: 'How that shows up',
        text:
          'That same instinct is part of what draws me to intentional design, atmosphere, and the kind of details that make a system or space feel calm, deliberate, and complete.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title:
      'If you are working on something that needs structure, clarity, or refinement, I would be glad to connect.',
    copy: "Let's build something that works.",
    socialLinksAriaLabel: 'Social links',
    socialLinks: {
      linkedin: 'LinkedIn',
      linkedinAriaLabel: 'Visit my LinkedIn profile',
      instagram: 'Instagram',
      instagramAriaLabel: 'Visit my Instagram profile',
      github: 'GitHub',
      githubAriaLabel: 'Visit my GitHub profile',
    },
    metaName: 'Kiel Sprague',
  },
}

export const spanishCopy: SiteCopy = {
  ...englishCopy,
  meta: {
    title: 'Kiel Sprague | Constructor de sistemas',
  },
  languageBar: {
    ...englishCopy.languageBar,
    label: 'Idioma',
    ariaLabel: 'Selector de idioma',
    unavailableLabel: 'Traducciones próximamente',
  },
  hero: {
    ...englishCopy.hero,
    role: 'Constructor de sistemas',
    summary:
      'Construyo y perfecciono los sistemas detrás del trabajo moderno, conectando personas, procesos y tecnología en algo fiable, eficiente y cuidadosamente diseñado.',
    detail:
      'Guiado por la claridad, la durabilidad y la creencia de que los sistemas bien construidos deben sentirse tan bien como funcionan.',
    actions: {
      projects: 'Ver en qué trabajo',
      experience: 'Leer la experiencia',
    },
    glanceAriaLabel: 'Panorama del trabajo',
    glanceCards: [
      {
        label: 'Personas y procesos',
        text: 'Presto atención a cómo fluye el trabajo entre personas y sistemas, y a los puntos donde normalmente surgen fallos.',
      },
      {
        label: 'Sistemas duraderos',
        text: 'Busco soluciones que se mantengan estables, comprensibles y útiles mucho tiempo después de su implementación inicial.',
      },
      {
        label: 'Diseño intencional',
        text: 'Me importan los sistemas que no solo funcionan, sino que también se sienten claros, bien pensados y bien construidos.',
      },
    ],
    panelAriaLabel: 'Vista de terminal',
    panelLabel: 'Un resumen rápido del trabajo',
    terminalLines: [
      {
        command: 'identificar-fricciones-del-sistema',
        note: 'Detectar el punto de transferencia, cuello de botella o solución improvisada que genera más fricción.',
      },
      {
        command: 'estabilizar-lo-esencial',
        note: 'Las bases fiables importan más que la complejidad impresionante.',
      },
      {
        command: 'simplificar-automatizaciones-complejas',
        note: 'La automatización debe aclarar un proceso, no enterrarlo bajo más piezas en movimiento.',
      },
      {
        command: 'diseñar-transiciones-claras-entre-pasos',
        note: 'Las herramientas, la documentación y la responsabilidad deben dejar claro el siguiente paso.',
      },
    ],
    highlights: [
      'Construyo la estructura detrás del trabajo moderno.',
      'Refino sistemas para mayor claridad y fiabilidad.',
      'Me importa tanto cómo funcionan las soluciones como cómo se sienten.',
    ],
  },
  about: {
    ...englishCopy.about,
    eyebrow: 'Sobre mí',
    title: 'Sobre mí',
    intro:
      'Construyo donde la estructura técnica y la usabilidad del mundo real deben encontrarse con claridad.',
    aboutTitle: 'Sobre mí',
    paragraphs: [
      'Trabajo en la intersección entre sistemas, estructura y usabilidad.',
      'En el día a día, gestiono y mejoro la base técnica de una organización, manteniendo la infraestructura, apoyando a los usuarios y asegurando que todo sea estable, seguro y listo para funcionar.',
      'Más allá de eso, me enfoco en crear mejores formas de trabajar. Diseño y optimizo procesos en Salesforce y sistemas conectados, transformando flujos complejos en algo más ágil, transparente y fácil de usar.',
      'Lo que más disfruto es crear sistemas desde cero, donde la capacidad técnica se encuentra con un diseño consciente. Ya sea automatización, herramientas internas o flujos web, busco soluciones limpias, duraderas e intuitivas.',
    ],
    practiceTitle: 'Cómo se ve en la práctica',
    practiceAreas: [
      'Sistemas e infraestructura que sostienen un trabajo diario estable y seguro.',
      'Sistemas empresariales y automatización que mejoran la claridad del proceso, la eficiencia y la calidad de los datos.',
      'Diseño web y de procesos que conecta sistemas en experiencias de usuario más fluidas.',
      'Soporte operativo que mantiene en marcha a personas, dispositivos y ecosistemas de software sin fricción.',
    ],
  },
  capabilities: {
    ...englishCopy.capabilities,
    eyebrow: 'Capacidades',
    title: 'Capacidades',
    intro:
      'Estas son las áreas en las que paso la mayor parte del tiempo construyendo, refinando y sosteniendo los sistemas alrededor del trabajo moderno.',
    items: [
      {
        title: 'Sistemas e infraestructura',
        items: [
          'Mantenimiento y seguridad de entornos Windows, redes, respaldos y fiabilidad para usuarios locales y remotos.',
        ],
      },
      {
        title: 'Sistemas empresariales y automatización',
        items: ['Diseño y optimización de flujos en Salesforce y plataformas relacionadas.'],
      },
      {
        title: 'Diseño web y de procesos',
        items: ['Creación de procesos web e integraciones que conectan sistemas de forma fluida.'],
      },
      {
        title: 'Operaciones y soporte',
        items: ['Soporte continuo para usuarios, dispositivos y ecosistemas de software.'],
      },
    ],
  },
  selectedWork: {
    ...englishCopy.selectedWork,
    eyebrow: 'Trabajo seleccionado',
    title: 'Trabajo seleccionado',
    intro:
      'Algunos ejemplos del tipo de trabajo al que vuelvo con más frecuencia en infraestructura, sistemas empresariales y mejora de procesos.',
    itemEyebrow: 'Trabajo seleccionado',
    tagsAriaSuffix: 'tecnologías',
    items: [
      {
        id: 'salesforce-process-development',
        title: 'Desarrollo de procesos en Salesforce',
        description:
          'Flujos para mejorar distribución de leads, flujo de datos y visibilidad operativa.',
        tags: ['Salesforce', 'Flujos', 'Automatización'],
      },
      {
        id: 'system-administration',
        title: 'Administración de sistemas',
        description: 'Gestión de infraestructura, seguridad y entorno completo de oficina.',
        tags: ['M365', 'Redes', 'Fiabilidad'],
      },
      {
        id: 'workflow-integration',
        title: 'Integración de flujos web',
        description:
          'Conexión entre formularios web, Salesforce y plataformas auxiliares.',
        tags: ['Formularios web', 'Integraciones', 'Flujo de datos'],
      },
      {
        id: 'system-refinement',
        title: 'Refinamiento continuo',
        description:
          'Mejora constante de procesos internos mediante soluciones prácticas.',
        tags: ['Diseño de procesos', 'Sistemas internos', 'Refinamiento'],
      },
    ],
  },
  venture: {
    ...englishCopy.venture,
    eyebrow: 'Proyecto destacado',
    intro:
      'Un concepto boutique de hospitalidad inspirado en una estética de posada clásica, con una experiencia más tranquila y una marca basada en narrativa sutil.',
    whatItIsLabel: 'Qué es',
    whatItIs:
      'Una estancia diseñada para viajeros intencionales y profesionales en tránsito.',
    highlightsAriaLabel: 'Aspectos destacados del proyecto',
    highlights: [
      'Concepto boutique en Chico, California',
      'Sensación moderna con esencia tradicional',
      'Pensado para descanso y simplicidad',
    ],
    symbols: [
      {
        title: 'El Zorro',
        description: 'Descubrimiento y detalles sutiles',
      },
      {
        title: 'La Linterna',
        description: 'Calidez y guía',
      },
      {
        title: 'El Limón',
        description: 'Frescura y carácter californiano',
      },
    ],
    ctaLabel: 'Ver el anuncio en Airbnb',
    note: 'Hay un sitio dedicado para la marca previsto más adelante.',
    brandMarksAriaLabel: 'Marcas de la identidad',
    crestAlt: 'Escudo de The Fox, Lantern, and Lemon',
    motifAriaLabel: 'Símbolos principales de la marca',
    motif: ['El Zorro', 'La Linterna', 'El Limón'],
    brandDirectionLabel: 'Dirección de marca',
    brandDirection:
      'Formas heráldicas, texturas quemadas en madera y narración discreta a través de motivos recurrentes, iluminación y detalle orientado al huésped.',
  },
  personal: {
    ...englishCopy.personal,
    eyebrow: 'Personal',
    title: 'Personal',
    intro:
      'Fuera del trabajo, me atrae construir cosas con intención: sistemas, espacios y experiencias bien diseñadas.',
    cards: [
      {
        title: 'A lo que siempre vuelvo',
        text:
          'Me interesa especialmente el trabajo que mezcla estructura con creatividad, donde algo puede ser confiable y también pensado, coherente y discretamente distintivo.',
      },
      {
        title: 'Cómo se manifiesta',
        text:
          'Ese mismo instinto es parte de lo que me atrae del diseño intencional, la atmósfera y el tipo de detalles que hacen que un sistema o espacio se sienta calmo, deliberado y completo.',
      },
    ],
  },
  contact: {
    ...englishCopy.contact,
    eyebrow: 'Contacto',
    title:
      'Si estás trabajando en algo que necesita estructura o claridad, me encantaría conectar.',
    copy: 'Construyamos algo que funcione.',
    socialLinksAriaLabel: 'Enlaces sociales',
    socialLinks: {
      linkedin: 'LinkedIn',
      linkedinAriaLabel: 'Visitar mi perfil de LinkedIn',
      instagram: 'Instagram',
      instagramAriaLabel: 'Visitar mi perfil de Instagram',
      github: 'GitHub',
      githubAriaLabel: 'Visitar mi perfil de GitHub',
    },
    metaName: 'Kiel Sprague',
  },
}

export const japaneseCopy: SiteCopy = {
  ...englishCopy,
  meta: {
    title: 'Kiel Sprague | システムビルダー',
  },
  languageBar: {
    ...englishCopy.languageBar,
    label: '言語',
    ariaLabel: '言語セレクター',
    unavailableLabel: '翻訳は近日対応予定です',
  },
  hero: {
    ...englishCopy.hero,
    role: 'システムビルダー',
    summary:
      '私は現代の仕事を支えるシステムを構築・改善し、人・プロセス・テクノロジーを結びつけて、信頼性が高く効率的で、丁寧に設計されたものへと仕上げます。',
    detail:
      '明確さと耐久性、そして「良いシステムは使い心地も優れているべき」という考えを大切にしています。',
    actions: {
      projects: '取り組みを見る',
      experience: '経験を見る',
    },
    glanceAriaLabel: '仕事の概要',
    glanceCards: [
      {
        label: '人とプロセス',
        text: '人とシステムの間で仕事がどのように流れるか、そして問題が起きやすいポイントに注目します。',
      },
      {
        label: '持続するシステム',
        text: '長期的に安定し、理解しやすく、有用であり続けるソリューションを目指します。',
      },
      {
        label: '意図的なデザイン',
        text: '機能するだけでなく、分かりやすく丁寧に作られたシステムを重視します。',
      },
    ],
    panelAriaLabel: '概要パネル',
    panelLabel: '概要',
    terminalLines: [
      {
        command: 'ボトルネックの特定',
        note: '引き継ぎや停滞、応急対応のどこに最も大きな摩擦があるのかを見極めます。',
      },
      {
        command: '基盤の安定化',
        note: '見栄えのする複雑さよりも、信頼できる土台を優先します。',
      },
      {
        command: '複雑さの整理',
        note: '自動化はプロセスを明確にするものであり、さらに複雑にするべきではありません。',
      },
      {
        command: '明確な引き継ぎ設計',
        note: 'ツール、文書、責任の所在を整え、次の一歩が自然に分かるようにします。',
      },
    ],
    highlights: [
      '私は現代の仕事の裏側に構造を築きます。',
      'システムをより明確で信頼できるものへと改善します。',
      'ソリューションがどう機能するかだけでなく、どう感じられるかも大切にします。',
    ],
  },
  about: {
    ...englishCopy.about,
    eyebrow: '紹介',
    title: '紹介',
    intro: '私はシステム・構造・使いやすさの交差点で仕事をしています。',
    aboutTitle: '私について',
    paragraphs: [
      '私はシステム・構造・使いやすさの交差点で仕事をしています。',
      '日常業務では、組織の技術基盤を管理・改善し、安定性とセキュリティを維持します。',
      'さらに、Salesforceなどを通じて業務プロセスをよりシンプルで透明性の高いものへと変えていきます。',
      '最も魅力を感じるのは、ゼロからシステムを構築することです。シンプルで長く使える、直感的な仕組みを目指しています。',
    ],
    practiceTitle: '実務での形',
    practiceAreas: [
      '日々の業務を安定して安全に支えるシステムとインフラ。',
      'プロセスの明確さ、効率、データ品質を高める業務システムと自動化。',
      '複数のシステムを滑らかな体験としてつなぐWebとプロセス設計。',
      '人、端末、ソフトウェア環境が滞りなく動くように支える運用とサポート。',
    ],
  },
  capabilities: {
    ...englishCopy.capabilities,
    eyebrow: '能力',
    title: '能力',
    intro:
      '現代の仕事を支えるシステムを構築・改善・運用する中で、私が最も多く時間を使っている領域です。',
    items: [
      {
        title: 'システムとインフラ管理',
        items: ['Windows環境、ネットワーク、バックアップ、そして社内外の利用者に向けた安定運用を支えます。'],
      },
      {
        title: '業務システムと自動化',
        items: ['Salesforceを中心に、関連プラットフォームのフローや仕組みを設計・改善します。'],
      },
      {
        title: 'Webとプロセス設計',
        items: ['Webベースのプロセスや連携を設計し、システム同士を自然につなぎます。'],
      },
      {
        title: '運用とサポート',
        items: ['利用者、端末、ソフトウェア環境を継続的に支え、摩擦の少ない運用を維持します。'],
      },
    ],
  },
  selectedWork: {
    ...englishCopy.selectedWork,
    eyebrow: '実績',
    title: '実績',
    intro:
      'インフラ、業務システム、プロセス改善の中で、私が繰り返し取り組んでいる仕事の例です。',
    itemEyebrow: '主な実績',
    tagsAriaSuffix: '関連技術',
    items: [
      {
        id: 'salesforce-process-development',
        title: 'Salesforceプロセス設計',
        description: 'リード配分、データの流れ、運用上の可視性を改善するためのフロー設計。',
        tags: ['Salesforce', 'フロー', '自動化'],
      },
      {
        id: 'system-administration',
        title: 'システム管理',
        description: 'インフラ、セキュリティ、オフィス全体の技術環境を管理。',
        tags: ['M365', 'ネットワーク', '安定運用'],
      },
      {
        id: 'workflow-integration',
        title: 'Web連携開発',
        description: 'Webフォーム、Salesforce、周辺プラットフォームを接続する連携設計。',
        tags: ['Webフォーム', '連携', 'データフロー'],
      },
      {
        id: 'system-refinement',
        title: '継続的な改善',
        description: '実務的な解決策を通じて、内部プロセスを継続的に洗練。',
        tags: ['プロセス設計', '社内システム', '改善'],
      },
    ],
  },
  venture: {
    ...englishCopy.venture,
    eyebrow: '注目のプロジェクト',
    title: 'The Fox, Lantern, and Lemon',
    intro:
      'クラシックな宿の雰囲気を現代的に再解釈した、落ち着いたホスピタリティコンセプト。',
    whatItIsLabel: '概要',
    whatItIs: '意図を持って旅をする人や、移動の多い仕事をする人のために設計された滞在体験です。',
    highlightsAriaLabel: 'プロジェクトの要点',
    highlights: [
      '意識的な滞在体験',
      '伝統と現代の融合',
      '静けさと快適さを重視',
    ],
    symbols: [
      {
        title: '狐',
        description: '発見と、滞在してから気づくようなさりげないディテールを表します。',
      },
      {
        title: 'ランタン',
        description: '温かさと導き、そして穏やかな光に根ざしたホスピタリティを象徴します。',
      },
      {
        title: 'レモン',
        description: '爽やかさとカリフォルニアらしさを添え、体験を土地感覚へと結びつけます。',
      },
    ],
    ctaLabel: 'Airbnbの掲載を見る',
    note: 'ブランド専用サイトは今後あらためて制作予定です。',
    brandMarksAriaLabel: 'ブランドマーク',
    crestAlt: 'The Fox, Lantern, and Lemon のクレストマーク',
    motifAriaLabel: 'ブランドの中心モチーフ',
    motif: ['狐', 'ランタン', 'レモン'],
    brandDirectionLabel: 'ブランドの方向性',
    brandDirection:
      '紋章的な形、木を焼いたような質感、反復するモチーフ、照明、そしてゲスト体験の細部を通して、静かな物語性を作っています。',
  },
  personal: {
    ...englishCopy.personal,
    eyebrow: '個人的なこと',
    title: '個人的なこと',
    intro:
      '仕事以外でも、意図を持って何かを作ることに惹かれます。それはシステムであったり、空間であったり、体験そのものです。',
    cards: [
      {
        title: '繰り返し惹かれるもの',
        text:
          '構造と創造性が重なる仕事に強く惹かれます。信頼できるだけでなく、考え抜かれ、一貫性があり、静かな個性を持つものに価値を感じます。',
      },
      {
        title: 'それが表れる形',
        text:
          'その感覚は、意図的なデザインや空気感、そしてシステムや空間を落ち着いた完成形へと導く細部への関心にもつながっています。',
      },
    ],
  },
  contact: {
    ...englishCopy.contact,
    eyebrow: '連絡先',
    title: '構造や明確さが必要なプロジェクトがあれば、ぜひご相談ください。',
    copy: '一緒に価値あるものを作りましょう。',
    socialLinksAriaLabel: 'ソーシャルリンク',
    socialLinks: {
      linkedin: 'LinkedIn',
      linkedinAriaLabel: 'LinkedInプロフィールを見る',
      instagram: 'Instagram',
      instagramAriaLabel: 'Instagramプロフィールを見る',
      github: 'GitHub',
      githubAriaLabel: 'GitHubプロフィールを見る',
    },
    metaName: 'Kiel Sprague',
  },
}

export const germanCopy: SiteCopy = {
  ...englishCopy,
  meta: {
    title: 'Kiel Sprague | Systemarchitekt',
  },
  languageBar: {
    ...englishCopy.languageBar,
    label: 'Sprache',
    ariaLabel: 'Sprachauswahl',
    unavailableLabel: 'Übersetzungen folgen bald',
  },
  hero: {
    ...englishCopy.hero,
    role: 'Systemarchitekt',
    summary:
      'Ich entwickle und verfeinere die Systeme hinter moderner Arbeit und verbinde Menschen, Prozesse und Technologie zu etwas Zuverlässigem, Effizientem und durchdacht Gestaltetem.',
    detail:
      'Geleitet von Klarheit, Beständigkeit und der Überzeugung, dass gut gebaute Systeme sich genauso gut anfühlen sollten, wie sie funktionieren.',
    actions: {
      projects: 'Meine Arbeit ansehen',
      experience: 'Erfahrung lesen',
    },
    glanceAriaLabel: 'Arbeit auf einen Blick',
    glanceCards: [
      {
        label: 'Menschen und Prozesse',
        text: 'Ich achte darauf, wie Arbeit zwischen Menschen und Systemen fließt und wo Reibung entsteht.',
      },
      {
        label: 'Nachhaltige Systeme',
        text: 'Ich strebe Lösungen an, die langfristig stabil, verständlich und nützlich bleiben.',
      },
      {
        label: 'Bewusstes Design',
        text: 'Systeme sollen nicht nur funktionieren, sondern sich klar und durchdacht anfühlen.',
      },
    ],
    panelAriaLabel: 'Zusammenfassung',
    panelLabel: 'Zusammenfassung',
    terminalLines: [
      {
        command: 'Systemreibung erkennen',
        note: 'Ich finde Übergaben, Engpässe oder Umgehungslösungen, die die meiste Reibung verursachen.',
      },
      {
        command: 'Grundlagen stabilisieren',
        note: 'Verlässliche Grundlagen sind wichtiger als beeindruckende Komplexität.',
      },
      {
        command: 'Komplexität reduzieren',
        note: 'Automatisierung sollte einen Prozess klarer machen, nicht ihn unter noch mehr Bewegung vergraben.',
      },
      {
        command: 'Übergaben klar gestalten',
        note: 'Werkzeuge, Dokumentation und Verantwortlichkeiten sollten den nächsten Schritt eindeutig machen.',
      },
    ],
    highlights: [
      'Ich schaffe Struktur hinter moderner Arbeit.',
      'Ich optimiere Systeme für Klarheit und Stabilität.',
      'Ich achte darauf, wie Lösungen funktionieren und wie sie sich anfühlen.',
    ],
  },
  about: {
    ...englishCopy.about,
    eyebrow: 'Über mich',
    title: 'Über mich',
    intro: 'Ich arbeite an der Schnittstelle von Systemen, Struktur und Usability.',
    aboutTitle: 'Über mich',
    paragraphs: [
      'Ich arbeite an der Schnittstelle von Systemen, Struktur und Usability.',
      'Im Alltag verwalte und verbessere ich die technische Grundlage einer Organisation.',
      'Darüber hinaus entwickle ich bessere Arbeitsweisen und optimiere Prozesse in Salesforce und anderen Systemen.',
      'Mein Fokus liegt auf Lösungen, die sauber, langlebig und intuitiv sind.',
    ],
    practiceTitle: 'Wie sich das in der Praxis zeigt',
    practiceAreas: [
      'Systeme und Infrastruktur, die den Arbeitsalltag stabil und sicher tragen.',
      'Business-Systeme und Automatisierung, die Prozesse klarer, effizienter und verlässlicher machen.',
      'Web- und Prozessdesign, das Systeme zu reibungsloseren Nutzererfahrungen verbindet.',
      'Betrieb und Support, die Menschen, Geräte und Software-Ökosysteme ohne Reibung am Laufen halten.',
    ],
  },
  capabilities: {
    ...englishCopy.capabilities,
    eyebrow: 'Kompetenzen',
    title: 'Kompetenzen',
    intro:
      'Das sind die Bereiche, in denen ich am häufigsten Systeme für moderne Arbeit aufbaue, verbessere und betreue.',
    items: [
      {
        title: 'Systeme & Infrastruktur',
        items: ['Pflege und Absicherung von Windows-Umgebungen, Netzwerken, Backups und einem verlässlichen Betrieb für interne wie externe Nutzer.'],
      },
      {
        title: 'Business-Systeme & Automatisierung',
        items: ['Entwicklung und Optimierung von Abläufen in Salesforce und angrenzenden Plattformen.'],
      },
      {
        title: 'Web- & Prozessdesign',
        items: ['Gestaltung von Web-Prozessen und Integrationen, die Systeme sinnvoll miteinander verbinden.'],
      },
      {
        title: 'Betrieb & Support',
        items: ['Kontinuierliche Unterstützung für Nutzer, Geräte und Software-Ökosysteme.'],
      },
    ],
  },
  selectedWork: {
    ...englishCopy.selectedWork,
    eyebrow: 'Ausgewählte Arbeiten',
    title: 'Ausgewählte Arbeiten',
    intro:
      'Einige Beispiele für die Art von Arbeit, zu der ich bei Infrastruktur, Business-Systemen und Prozessverbesserung immer wieder zurückkehre.',
    itemEyebrow: 'Ausgewählte Arbeit',
    tagsAriaSuffix: 'Technologien',
    items: [
      {
        id: 'salesforce-process-development',
        title: 'Salesforce-Prozessentwicklung',
        description:
          'Abläufe zur Verbesserung von Lead-Verteilung, Datenfluss und operativer Sichtbarkeit.',
        tags: ['Salesforce', 'Flows', 'Automatisierung'],
      },
      {
        id: 'system-administration',
        title: 'Systemadministration',
        description: 'Verwaltung von Infrastruktur, Sicherheit und der gesamten technischen Umgebung im Büro.',
        tags: ['M365', 'Netzwerk', 'Stabilität'],
      },
      {
        id: 'workflow-integration',
        title: 'Web-Integrationen',
        description:
          'Verbindungen zwischen Webformularen, Salesforce und unterstützenden Plattformen.',
        tags: ['Webformulare', 'Integrationen', 'Datenfluss'],
      },
      {
        id: 'system-refinement',
        title: 'Kontinuierliche Prozessoptimierung',
        description:
          'Laufende Verbesserung interner Prozesse durch praktische, gut strukturierte Lösungen.',
        tags: ['Prozessdesign', 'Interne Systeme', 'Optimierung'],
      },
    ],
  },
  venture: {
    ...englishCopy.venture,
    eyebrow: 'Ausgewähltes Vorhaben',
    title: 'The Fox, Lantern, and Lemon',
    intro:
      'Ein Boutique-Hospitality-Konzept mit klassischer Ästhetik und ruhiger Atmosphäre.',
    whatItIsLabel: 'Was es ist',
    whatItIs:
      'Ein Aufenthalt für bewusste Reisende und beruflich unterwegs Befindliche, die eine wärmere Alternative zum generischen Hotelzimmer suchen.',
    highlightsAriaLabel: 'Projekt-Highlights',
    highlights: [
      'Bewusste Aufenthalte',
      'Modern trifft traditionell',
      'Fokus auf Ruhe und Einfachheit',
    ],
    symbols: [
      {
        title: 'Der Fuchs',
        description: 'Steht für Entdeckung, subtile Details und kleine Überraschungen, die Gäste erst mit der Zeit bemerken.',
      },
      {
        title: 'Die Laterne',
        description: 'Steht für Wärme, Orientierung und eine Gastlichkeit, die auf Atmosphäre und sanftem Licht beruht.',
      },
      {
        title: 'Die Zitrone',
        description: 'Bringt Frische, kalifornischen Charakter und eine hellere sensorische Note in das Erlebnis.',
      },
    ],
    ctaLabel: 'Airbnb-Eintrag ansehen',
    note: 'Eine eigene Website für die Marke ist später geplant.',
    brandMarksAriaLabel: 'Markenzeichen',
    crestAlt: 'Wappen von The Fox, Lantern, and Lemon',
    motifAriaLabel: 'Zentrale Markensymbole',
    motif: ['Der Fuchs', 'Die Laterne', 'Die Zitrone'],
    brandDirectionLabel: 'Markenrichtung',
    brandDirection:
      'Heraldische Formen, holzartige Brandtexturen und stilles Erzählen über wiederkehrende Motive, Licht und gastnahe Details.',
  },
  personal: {
    ...englishCopy.personal,
    eyebrow: 'Persönliches',
    title: 'Persönliches',
    intro:
      'Ich entwickle gern Dinge mit Struktur und Bedeutung - Systeme, Räume und Erlebnisse.',
    cards: [
      {
        title: 'Wozu ich immer wieder zurückkehre',
        text:
          'Mich interessiert besonders Arbeit, die Struktur mit Kreativität verbindet, bei der etwas verlässlich und zugleich durchdacht, stimmig und still unverwechselbar sein kann.',
      },
      {
        title: 'Wie sich das zeigt',
        text:
          'Dasselbe Gespür zieht mich zu bewusstem Design, Atmosphäre und den Details, die ein System oder einen Raum ruhig, absichtlich und vollständig wirken lassen.',
      },
    ],
  },
  contact: {
    ...englishCopy.contact,
    eyebrow: 'Kontakt',
    title: 'Lass uns etwas bauen, das funktioniert.',
    copy: 'Wenn du an etwas arbeitest, das Struktur oder Klarheit braucht, freue ich mich auf den Austausch.',
    socialLinksAriaLabel: 'Soziale Links',
    socialLinks: {
      linkedin: 'LinkedIn',
      linkedinAriaLabel: 'Mein LinkedIn-Profil ansehen',
      instagram: 'Instagram',
      instagramAriaLabel: 'Mein Instagram-Profil ansehen',
      github: 'GitHub',
      githubAriaLabel: 'Mein GitHub-Profil ansehen',
    },
    metaName: 'Kiel Sprague',
  },
}

export const siteCopy: Partial<Record<LanguageCode, SiteCopy>> = {
  en: englishCopy,
  es: spanishCopy,
  ja: japaneseCopy,
  de: germanCopy,
}

export function hasLanguageCopy(language: LanguageCode): language is keyof typeof siteCopy {
  return Boolean(siteCopy[language])
}
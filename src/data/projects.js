/**
 * projects.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all projects.
 * Explicitly structures each project's primary action, secondary links,
 * architecture diagrams (Mermaid), and core engineering specifications.
 */

const projects = [
  {
    id: 1,
    slug: "brand-guardian",
    title: "Brand Guardian AI",
    headline: "Enterprise Multimodal Video Compliance Engine",
    description:
      "Audits video marketing content against brand safety rules, FTC regulatory mandates, and platform ad specs using Azure Video Indexer, stateful LangGraph DAGs, and GPT-4o.",
    architectureOverview:
      "Enterprise multimodal pipeline combining Azure Video Indexer for synchronized audio transcription & frame OCR, Azure AI Search for regulatory vector RAG, and LangGraph DAGs for autonomous compliance verdicts.",
    category: ["AI", "Web"],
    type: "AI System",
    year: "2026",
    badge: "Multimodal Video Demo",
    tech: ["LangGraph", "FastAPI", "Azure Video Indexer", "GPT-4o", "Azure AI Search"],
    image: "/images/projects/brand-guardian.png",
    featured: true,
    primaryAction: {
      label: "Watch Demo",
      url: "https://drive.google.com/file/d/1IfOh9tgOWX-rfJrcTSTBQI7dtiS7Mal8/view?usp=sharing",
      type: "video",
    },
    secondaryActions: [
      {
        label: "Source Code",
        url: "https://github.com/AradwadTushar/langgraph-video-auditor",
        type: "github",
      },
    ],
    diagram: `flowchart LR
    A[Marketing Video Stream] --> B[Azure Video Indexer]
    B -->|STT Transcript & Vision OCR| C[LangGraph Orchestrator]
    D[Regulatory Rulebooks] -->|Vector Embeddings| E[Azure AI Search]
    E -->|Top Matching FTC Rules| C
    C -->|Context + Policy Rules| F[Azure OpenAI GPT-4o]
    F -->|Structured Audit Verdict| G[FastAPI / React Client]
    C -.->|Distributed Traces| H[Azure Application Insights]`,
    workflowDiagram: `stateDiagram-v2
    [*] --> Ingestion : Receive Video Stream
    Ingestion --> VideoIndexer : Authenticate ARM & Upload
    VideoIndexer --> SignalExtraction : Extract STT Transcript & Vision OCR
    SignalExtraction --> RegulatoryRAG : Azure AI Search Vector Embeddings
    RegulatoryRAG --> GPT4oAuditor : LLM Reasoning & Rule Matching
    GPT4oAuditor --> StructuredOutput : Strict ComplianceIssue JSON
    StructuredOutput --> [*]`,
    highlights: [
      "Autonomous multimodal signal extraction (audio transcript + computer vision OCR) via Azure Video Indexer.",
      "Stateful LangGraph DAG orchestrating ingestion, extraction, vector retrieval, and LLM reasoning.",
      "Vectorized regulatory intelligence over FTC Endorsement Guides & platform ad specs via Azure AI Search.",
      "Synchronized jump-to-timestamp playback allowing auditors to review offending video frames instantly.",
      "Distributed enterprise observability using OpenTelemetry and Azure Application Insights.",
    ],
    challenges: [
      {
        title: "Multimodal Video Ingestion & Frame Sync",
        description:
          "Coordinating high-frequency OCR text boxes with audio transcripts was solved by structuring a unified time-aligned token window before sending context to GPT-4o.",
      },
      {
        title: "Deterministic Regulatory Enforcement",
        description:
          "Prevented hallucinated compliance warnings by pairing Azure AI Search k-NN vector retrieval with strict Pydantic JSON schema constraints.",
      },
    ],
  },
  {
    id: 2,
    slug: "nutrilens",
    title: "NutriLens",
    headline: "AI Food Label Scanner & Ingredient Safety Engine",
    description:
      "Inspects packaged food labels using custom PaddleOCR preprocessing and GPT-4o-mini to flag hidden additives, toxic chemicals, and personalized allergens.",
    architectureOverview:
      "Full-stack food label inspection system using camera capture, custom PaddleOCR preprocessing for Indian FMCG packaging, and GPT-4o-mini personalized dietary analysis.",
    category: ["AI", "Web"],
    type: "AI System",
    year: "2024",
    badge: "Video Demo + Paper",
    tech: ["PaddleOCR", "GPT-4o-mini", "Flask", "React", "MongoDB"],
    image: "/images/projects/nutrilens.jpg",
    featured: false,
    primaryAction: {
      label: "Watch Demo",
      url: "https://drive.google.com/file/d/1nmPrRFSIGwnWIaKynPd3_0XXLAPOZJ8t/view?usp=drive_link",
      type: "video",
    },
    secondaryActions: [
      {
        label: "Case Study",
        url: "https://drive.google.com/file/d/1ySgw6A2Jm1yFiffbgImRvOrUp0wekvWw/view?usp=sharing",
        type: "caseStudy",
      },
      {
        label: "Research Paper",
        url: "https://drive.google.com/file/d/1ySgw6A2Jm1yFiffbgImRvOrUp0wekvWw/view?usp=drive_link",
        type: "paper",
      },
      {
        label: "Source Code",
        url: "https://github.com/AradwadTushar/NutriLens---An-Ingredient-Scanner-",
        type: "github",
      },
    ],
    diagram: `flowchart LR
    A[Camera / Label Image] --> B[Crop & Preprocess]
    B -->|Adaptive Threshold| C[PaddleOCR Engine]
    C -->|Merged Ingredient Text| D[GPT-4o-mini Evaluation]
    E[User Dietary Profile & Allergies] --> D
    D -->|Risk Score & Nutrition Facts| F[Structured Result Card]
    D --> G[Gemini 2.5 Flash Chatbot Nutrii]
    F --> H[(MongoDB Atlas)]`,
    highlights: [
      "Dual scan modes supporting live mobile camera capture with crop-before-scan UI.",
      "Custom OCR preprocessing with PaddleOCR (PP-OCRv4) tuned for Indian packaging with 85–95% accuracy.",
      "Personalized dietary preferences: FSSAI, Halal, Kosher, vegan, allergies, and health goals.",
      "Awarded EX Grade as B.Tech final year capstone project.",
    ],
    challenges: [
      {
        title: "Curved Packaging OCR Accuracy",
        description:
          "Indian FMCG packaging features varied fonts, non-standard layouts, and glossy reflections. Solved by adaptive thresholding, grayscale normalization, and spatial text-box merging.",
      },
      {
        title: "Personalized Dietary Guardrails",
        description:
          "Mapped complex chemical additives and E-numbers against user health profiles using structured system prompts with strict JSON outputs.",
      },
    ],
  },
  {
    id: 3,
    slug: "studytracker",
    title: "StudyTracker",
    headline: "Offline-First Mobile Study & Syllabus Companion",
    description:
      "Offline-first mobile study manager built with React Native for competitive exams, featuring syllabus parsing, KaTeX note taking, and a state-aware AI companion (Pip).",
    architectureOverview:
      "Cross-platform mobile study engine designed for GATE CS and C-DAC preparation. Unifies goal planning, KaTeX note taking, and an AI companion grounded in live app state.",
    category: ["Mobile", "AI"],
    type: "Mobile App",
    year: "2024",
    badge: "Android APK Available",
    tech: ["React Native", "Expo", "Zustand", "AsyncStorage", "KaTeX"],
    image: "/images/projects/studytracker.jpg",
    featured: false,
    primaryAction: {
      label: "Download APK",
      url: "https://drive.google.com/file/d/13je_EfqXosmHbDmci_me22YbBX5cHMBO/view?usp=drivesdk",
      type: "download",
    },
    secondaryActions: [
      {
        label: "Case Study",
        url: "https://drive.google.com/file/d/1in--yRFxUlP-XP8OUxcN-6-QzA-OpHrz/view?usp=drive_link",
        type: "caseStudy",
      },
      {
        label: "Source Code",
        url: "https://github.com/AradwadTushar/StudyTracker",
        type: "github",
      },
    ],
    diagram: `flowchart LR
    A[React Native UI] --> B[Zustand State Store]
    B <-->|Offline-First Sync| C[AsyncStorage Local Cache]
    B -->|Live Syllabus & Goal State| D[Pip AI Assistant]
    E[Raw Syllabus Text] -->|Parser Engine| B
    B --> F[KaTeX Math & Markdown WebView]
    B --> G[Quiz Arena with Attempt History]`,
    highlights: [
      "Offline-first React Native (Expo) architecture for competitive exams (GATE CS, C-DAC).",
      "State-aware AI companion (Pip) wired directly into Zustand store for contextual help.",
      "Background-drift-immune stopwatch tracking study sessions with absolute timestamps.",
      "Built-in KaTeX math renderer and rich markdown note editor.",
    ],
    challenges: [
      {
        title: "Timer Drift on Mobile Backgrounding",
        description:
          "Standard setInterval drifts when mobile OS suspends background tasks. Solved by storing immutable start timestamps and computing delta on resume.",
      },
      {
        title: "State-Grounded AI Interaction",
        description:
          "Rather than an isolated generic chatbot, Pip injects active syllabus completion percentage, current topic, and daily study hours into prompt context.",
      },
    ],
  },
  {
    id: 4,
    slug: "resumeiq",
    title: "ResumeIQ AI",
    headline: "AI Resume Optimization & ATS Intelligence Engine",
    description:
      "Real-time resume builder and role-fit optimization engine featuring live ATS scoring, local PDF parsing, and pixel-perfect Jinja2/WeasyPrint PDF rendering.",
    architectureOverview:
      "High-performance resume analytics and generation engine evaluating resumes against job descriptions with real-time ATS scoring.",
    category: ["AI", "Web"],
    type: "Web Platform",
    year: "2023",
    badge: "Live Production App",
    tech: ["FastAPI", "React", "PostgreSQL", "WeasyPrint", "Clerk"],
    image: "/images/projects/resumeiq.jpg",
    featured: false,
    primaryAction: {
      label: "Visit Live App",
      url: "https://resumeiq-ai.pages.dev/",
      type: "live",
    },
    secondaryActions: [
      {
        label: "Case Study",
        url: "https://drive.google.com/file/d/1ORS7VJDtdXRafkX6lI7_H2FNfiJEXQ0x/view?usp=drive_link",
        type: "caseStudy",
      },
      {
        label: "Source Code",
        url: "https://github.com/AradwadTushar/AI-Based-Resume-Builder-and-Analyzer",
        type: "github",
      },
    ],
    diagram: `flowchart LR
    A[Document Editor UI] --> B[FastAPI Backend]
    B --> C[Local PDF Text Parser]
    C --> D[ATS Matching Engine]
    D -->|Keyword & Role Fit Analysis| E[Live Score Breakdown]
    D --> F[Jinja2 / WeasyPrint PDF Renderer]`,
    highlights: [
      "Live document editor with instant ATS keyword optimization and role-fit scoring.",
      "High-fidelity Jinja2 and WeasyPrint backend rendering pixel-perfect PDF resumes.",
      "Local PDF parsing and structured token extraction without external API dependencies.",
    ],
    challenges: [
      {
        title: "Pixel-Perfect Export Consistency",
        description:
          "Avoided browser print discrepancies by using server-side Jinja2 templating with WeasyPrint CSS-to-PDF rendering.",
      },
    ],
  },
  {
    id: 5,
    slug: "salon-management",
    title: "Salon Management POS",
    headline: "Keyboard-First Offline POS Desktop Application",
    description:
      "Point-of-sale desktop application engineered with Electron and SQLite for rapid, keyboard-first billing, client history, and instant WhatsApp receipts.",
    architectureOverview:
      "Modern POS desktop application engineered with Electron and SQLite for rapid, keyboard-first billing and customer relationship management.",
    category: ["Desktop"],
    type: "Desktop App",
    year: "2026",
    badge: "Desktop POS",
    tech: ["Electron", "Node.js", "SQLite", "WhatsApp API"],
    image: "/images/projects/salon-app.jpg",
    featured: false,
    primaryAction: {
      label: "View Source",
      url: "https://github.com/AradwadTushar/Salon-Management-App",
      type: "github",
    },
    secondaryActions: [],
    diagram: `flowchart LR
    A[Keyboard-First POS UI] --> B[Electron Main Process]
    B --> C[(SQLite Local DB)]
    B --> D[Automated WhatsApp Messenger]
    B --> E[Staff & Revenue Analytics]`,
    highlights: [
      "Sub-second keyboard-driven checkout optimized for real, high-volume retail environments.",
      "Offline-first SQLite local persistence ensures billing never stops during internet outages.",
      "Automated WhatsApp integration sending instant itemized receipts directly to customers.",
      "CRM intelligence with phone autocomplete and VIP/repeat visit tracking.",
    ],
    challenges: [
      {
        title: "Counter-Top Speed & Ergonomics",
        description:
          "Eliminated mouse dependency by binding the entire billing, service selection, and payment split flow to keyboard navigation shortcuts.",
      },
    ],
  },
  {
    id: 6,
    slug: "ecommerce",
    title: "E-Commerce Storefront",
    headline: "Modular React Commerce Engine",
    description:
      "Responsive web commerce interface featuring real-time client-side inventory filtering, reactive cart state, and interactive checkout flows.",
    architectureOverview:
      "Responsive web commerce interface featuring real-time client-side inventory filtering, responsive cart management, and interactive order flows.",
    category: ["Web"],
    type: "Web Application",
    year: "2023",
    badge: "Open Source",
    tech: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/ecommerce.jpg",
    featured: false,
    listOnly: true,
    primaryAction: {
      label: "Source Code",
      url: "https://github.com/AradwadTushar/E-commerse",
      type: "github",
    },
    secondaryActions: [],
    diagram: `flowchart LR
    A[Catalog UI] --> B[Filter & Search Engine]
    B --> C[Cart State Manager]
    C --> D[Checkout & Order Summary]`,
    highlights: [
      "Dynamic multi-attribute product filtering and instant search.",
      "Persistent cart state with responsive mobile-friendly checkout flows.",
    ],
  },
  {
    id: 7,
    slug: "whatsapp-crm",
    title: "WhatsApp CRM Dashboard",
    headline: "Event-Driven Conversational CRM & Finance Tracker",
    description:
      "Real-time customer relationship and finance tracking console integrating WhatsApp messaging webhooks into actionable dashboard records via WebSockets.",
    architectureOverview:
      "Real-time customer relationship and finance tracking console integrating WhatsApp messaging webhooks into actionable dashboard records.",
    category: ["Web", "AI"],
    type: "Web Service",
    year: "2024",
    badge: "Open Source",
    tech: ["React", "Node.js", "WebSockets", "WhatsApp API"],
    image: "/images/projects/whatsapp-crm.jpg",
    featured: false,
    listOnly: true,
    primaryAction: {
      label: "Source Code",
      url: "https://github.com/AradwadTushar",
      type: "github",
    },
    secondaryActions: [],
    diagram: `flowchart LR
    A[WhatsApp Inbound Messages] --> B[Webhook Receiver]
    B --> C[Conversational Parser]
    C --> D[WebSocket Event Broadcaster]
    D --> E[Real-Time React Dashboard]`,
    highlights: [
      "Real-time telemetry stream updating service records on incoming WhatsApp webhooks.",
      "WebSocket integration enabling zero-latency client dashboard synchronization.",
    ],
  },
];

export default projects;

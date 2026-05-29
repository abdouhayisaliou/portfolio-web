import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dir, "..", "projects");

const projects = [
  {
    slug: "nedd-ong",
    name: "NEDD ONG",
    type: "Site institutionnel",
    sector: "Association / ONG",
    category: "wordpress",
    tags: ["WordPress", "Elementor", "Responsive", "SEO"],
    intro:
      "Une vitrine digitale à la hauteur d'une mission sociale : claire, crédible et pensée pour mobiliser partenaires et bénévoles.",
    objective:
      "Donner à NEDD ONG une présence en ligne structurée qui valorise sa mission, ses domaines d'intervention et ses actions sur le terrain — tout en facilitant les prises de contact et les demandes de partenariat.",
    works: [
      "Architecture de contenu orientée mission et impact",
      "Design institutionnel moderne et rassurant",
      "Intégration WordPress + Elementor pour une gestion autonome",
      "Pages thématiques par domaine d'intervention",
      "Formulaires de contact et appels à l'action stratégiques",
      "Optimisation responsive et structure SEO",
    ],
    result:
      "Un site qui reflète le sérieux de l'organisation, améliore sa visibilité et guide naturellement les visiteurs vers l'engagement.",
  },
  {
    slug: "distrimag",
    name: "Distrimag",
    type: "Site vitrine",
    sector: "Distribution / Collectivités",
    category: "wordpress",
    tags: ["WordPress", "Design responsive", "SEO", "Formulaire"],
    intro:
      "Une interface sobre et professionnelle pour une activité de distribution exigeante, où la clarté rassure avant même le premier échange.",
    objective:
      "Présenter l'expertise de Distrimag, structurer l'offre de services et convertir les visites en demandes de contact qualifiées auprès des collectivités et professionnels.",
    works: [
      "Hiérarchisation des prestations et zones d'intervention",
      "Design épuré orienté crédibilité B2B",
      "Mise en avant des références et engagements qualité",
      "Formulaire de demande de devis optimisé",
      "Structure SEO pour la visibilité sectorielle",
      "Adaptation mobile complète",
    ],
    result:
      "Une vitrine digitale qui positionne Distrimag comme un partenaire fiable et facilite la prise de contact commerciale.",
  },
  {
    slug: "sos-toitures",
    name: "SOS Toitures",
    type: "Site vitrine local",
    sector: "Artisanat / Toiture",
    category: "wordpress",
    tags: ["WordPress", "SEO local", "Formulaire", "Responsive"],
    intro:
      "Un site de toiture conçu pour convertir : visible localement, rassurant immédiatement, orienté appel et devis.",
    objective:
      "Générer des leads locaux en mettant en avant les prestations d'urgence et de rénovation, avec une prise de contact ultra-simple depuis mobile.",
    works: [
      "Landing structure avec CTA visibles (appel, devis)",
      "Pages services détaillées par type d'intervention",
      "Optimisation SEO local (zone, mots-clés métier)",
      "Galerie et preuves de sérieux (avis, réalisations)",
      "Formulaire de demande rapide",
      "Performance mobile prioritaire",
    ],
    result:
      "Plus de visibilité locale et un parcours visiteur qui pousse naturellement vers la prise de contact.",
  },
  {
    slug: "elagage-orleans",
    name: "Élagage Orléans",
    type: "Site vitrine",
    sector: "Élagage / Espaces verts",
    category: "wordpress",
    tags: ["WordPress", "SEO local", "Responsive", "CTA"],
    intro:
      "Un site de proximité qui inspire confiance pour une activité où le client a besoin de sérieux avant de déléguer ses arbres.",
    objective:
      "Renforcer la crédibilité d'Élagage Orléans sur son secteur, présenter clairement les prestations et faciliter les demandes d'intervention.",
    works: [
      "Identité visuelle naturelle et professionnelle",
      "Présentation des services (élagage, abattage, entretien)",
      "Mise en avant de la zone d'intervention Orléans",
      "Boutons d'appel et formulaire bien visibles",
      "Structure SEO locale",
      "Design responsive pour les recherches mobiles",
    ],
    result:
      "Une image professionnelle qui rassure et transforme les recherches locales en contacts concrets.",
  },
  {
    slug: "toitures-paris",
    name: "Toitures de Paris",
    type: "Site vitrine",
    sector: "Toiture / Rénovation",
    category: "wordpress",
    tags: ["WordPress", "Landing page", "SEO", "Responsive"],
    intro:
      "Couverture, rénovation, réparation — un site qui parle le langage du client et le pousse à agir sans détour.",
    objective:
      "Positionner Toitures de Paris comme référence locale, présenter l'ensemble des prestations et maximiser les conversions (appel, devis).",
    works: [
      "Page d'accueil orientée conversion",
      "Sections prestations avec bénéfices clients",
      "Preuves sociales et éléments de réassurance",
      "Optimisation des titres et meta pour le SEO",
      "Intégration WordPress évolutive",
      "Expérience mobile fluide",
    ],
    result:
      "Un outil commercial digital qui soutient l'activité au quotidien et génère des demandes qualifiées.",
  },
  {
    slug: "darsaf-tech",
    name: "DARSAF Tech",
    type: "Site professionnel",
    sector: "Technologie / Services numériques",
    category: "html",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    intro:
      "Une vitrine tech épurée, rapide et sur mesure — développée en code pur pour un contrôle total du rendu et des performances.",
    objective:
      "Présenter les services informatiques et le développement web de DARSAF Tech avec une image moderne, technique et crédible.",
    works: [
      "Développement front-end HTML/CSS/JS sur mesure",
      "Architecture légère et temps de chargement optimisé",
      "Sections services, expertise et contact",
      "Animations subtiles et interactions soignées",
      "Design responsive multi-appareils",
      "Structure SEO technique propre",
    ],
    result:
      "Un site rapide, distinctif et aligné sur l'identité d'une structure numérique ambitieuse.",
  },
  {
    slug: "abdoul-shop",
    name: "Abdoul Shop",
    type: "Catalogue en ligne",
    sector: "Boutique / Mode",
    category: "ecommerce",
    tags: ["WordPress", "Catalogue", "Responsive", "UI Design"],
    intro:
      "Une expérience boutique fluide où chaque produit respire le style — sans complexité inutile pour l'utilisateur.",
    objective:
      "Mettre en valeur les collections, tendances et produits phares tout en offrant une navigation simple et agréable sur mobile.",
    works: [
      "Mise en page catalogue visuelle et tendance",
      "Catégorisation produits intuitive",
      "Fiches produit optimisées pour la lecture",
      "Design responsive e-commerce",
      "Intégration WordPress pour gestion autonome",
      "Parcours utilisateur simplifié",
    ],
    result:
      "Une vitrine mode en ligne qui donne envie d'explorer et renforce l'image de la marque.",
  },
  {
    slug: "france-batiment",
    name: "France Bâtiment",
    type: "Site vitrine",
    sector: "Bâtiment / Toiture",
    category: "wordpress",
    tags: ["WordPress", "SEO local", "Responsive", "Formulaire"],
    intro:
      "Bâtiment et rénovation : un site solide comme les chantiers qu'il représente — clair, professionnel, orienté devis.",
    objective:
      "Structurer l'offre de France Bâtiment, rassurer les prospects et générer des demandes de devis pour travaux neufs et rénovation.",
    works: [
      "Pages métiers (gros œuvre, rénovation, finitions)",
      "Design corporate adapté au secteur BTP",
      "Formulaire devis avec champs pertinents",
      "SEO local et structure sémantique",
      "Galerie chantiers / réalisations",
      "Version mobile optimisée",
    ],
    result:
      "Une présence web crédible qui accompagne la croissance commerciale de l'entreprise.",
  },
  {
    slug: "wd-toiture",
    name: "WD Toiture",
    type: "Landing page",
    sector: "Toiture / Artisanat",
    category: "wordpress",
    tags: ["WordPress", "Landing page", "CTA", "Responsive"],
    intro:
      "Une landing page percutante : un message, une offre, un clic — pensée pour les urgences et les demandes rapides.",
    objective:
      "Concentrer l'attention sur les prestations clés de WD Toiture et convertir le trafic en appels et demandes de devis immédiats.",
    works: [
      "Structure one-page orientée conversion",
      "CTA fixes et répétés (téléphone, WhatsApp, formulaire)",
      "Sections réassurance (garanties, zone, délais)",
      "Design impactant et lisible en 3 secondes",
      "Intégration WordPress légère",
      "Optimisation mobile first",
    ],
    result:
      "Un outil d'acquisition direct qui transforme les visites en opportunités commerciales.",
  },
  {
    slug: "presta-benin",
    name: "PRESTA Bénin",
    type: "Projet web sur mesure",
    sector: "Plateforme / Services",
    category: "custom",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    intro:
      "Une plateforme de mise en relation qui connecte prestataires et clients — interface claire, parcours fluide, logique métier solide.",
    objective:
      "Concevoir un concept de marketplace de services permettant aux utilisateurs de trouver, comparer et contacter des prestataires qualifiés.",
    works: [
      "Wireframes et parcours utilisateur (client / prestataire)",
      "Interface responsive moderne",
      "Développement front-end sur mesure",
      "Architecture back-end PHP/MySQL",
      "Système de recherche et filtres",
      "Espaces profils et formulaires dédiés",
    ],
    result:
      "Une base technique évolutive pour une plateforme de services digitale ambitieuse.",
  },
  {
    slug: "ajdc",
    name: "AJDC",
    type: "Site associatif",
    sector: "Association / Développement communautaire",
    category: "html",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    intro:
      "Raconter l'engagement d'une association : projets, partenaires, impact — avec une narration web claire et humaine.",
    objective:
      "Permettre à l'AJDC de présenter ses activités, mobiliser ses audiences et faciliter les contacts avec partenaires et bénévoles.",
    works: [
      "Site associatif multi-pages en HTML/CSS/JS",
      "Sections projets, actualités et partenaires",
      "Design accessible et chaleureux",
      "Formulaire de contact et newsletter",
      "Optimisation responsive",
      "Performance et code maintenable",
    ],
    result:
      "Une vitrine associative moderne qui valorise l'action terrain et renforce la visibilité de l'organisation.",
  },
  {
    slug: "portfolio-tech",
    name: "Portfolio Technique",
    type: "Portfolio",
    sector: "Personnel / Développeur",
    category: "html",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"],
    intro:
      "Un portfolio développeur qui fait office de carte de visite digitale : compétences, projets, personnalité — en un coup d'œil.",
    objective:
      "Présenter un profil technique de manière impactante, mettre en avant les réalisations et faciliter la prise de contact professionnelle.",
    works: [
      "Design portfolio moderne dark/light",
      "Sections compétences, projets et parcours",
      "Animations et micro-interactions",
      "Code front-end propre et modulaire",
      "Formulaire et liens sociaux intégrés",
      "Responsive et performance optimisée",
    ],
    result:
      "Une vitrine personnelle distinctive qui positionne le profil comme un développeur sérieux et créatif.",
  },
];

function renderProject(p) {
  const tagsHtml = p.tags.map((t) => `<span>${t}</span>`).join("");
  const worksHtml = p.works.map((w) => `<li>${w}</li>`).join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.name} — Étude de cas | Abdou-Hayi SALIOU</title>
  <meta name="description" content="${p.intro}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <script defer src="../js/script.js"></script>
</head>
<body class="page page-case">

  <header class="site-header">
    <div class="container nav-inner">
      <a href="../index.html" class="brand" aria-label="Accueil">
        <span>Abdou-Hayi</span>
        <small>Web Designer & Developer</small>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Ouvrir le menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="navbar" aria-label="Navigation principale">
        <a href="../index.html">Accueil</a>
        <a href="../portfolio.html" aria-current="page">Réalisations</a>
        <a href="../services.html">Services</a>
        <a href="../process.html">Méthode</a>
        <a href="../about.html">À propos</a>
        <a href="../contact.html" class="nav-cta">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="pg-case-hero">
      <div class="pg-hero__bg" aria-hidden="true">
        <span class="orb orb--1"></span>
        <span class="orb orb--2"></span>
      </div>
      <div class="container">
        <div class="pg-case-hero__grid reveal">
        <div>
          <span class="eyebrow">${p.type}</span>
          <h1>${p.name}</h1>
          <p class="pg-case-hero__intro">${p.intro}</p>
          <div class="tags">${tagsHtml}</div>
          <div class="case-actions">
            <a class="btn btn--glow primary" href="#" target="_blank" rel="noopener noreferrer">Voir le site en ligne</a>
            <a class="btn outline" href="../portfolio.html">← Toutes les réalisations</a>
          </div>
        </div>
        <div class="pg-case-hero__media">
          <img src="../assets/img/projects/${p.slug}.jpg" alt="${p.name}" loading="lazy">
        </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="pg-case-body reveal">
        <article class="pg-case-main">
          <h2>Le défi</h2>
          <p>${p.objective}</p>
          <h2>Ce qui a été réalisé</h2>
          <ul>${worksHtml}</ul>
          <h2>Technologies</h2>
          <div class="skill-cloud">${tagsHtml}</div>
          <h2>Le résultat</h2>
          <p>${p.result}</p>
          <h2>Pistes d'évolution</h2>
          <p>Blog, espace actualités, avis clients, analytics avancés, multilingue ou tunnel de conversion renforcé — chaque projet peut évoluer selon vos ambitions.</p>
        </article>
        <aside class="pg-case-sidebar">
          <h3>Fiche projet</h3>
          <dl class="pg-case-meta">
            <div><dt>Client</dt><dd>${p.name}</dd></div>
            <div><dt>Secteur</dt><dd>${p.sector}</dd></div>
            <div><dt>Type</dt><dd>${p.type}</dd></div>
            <div><dt>Stack</dt><dd>${p.tags.slice(0, 3).join(" · ")}</dd></div>
          </dl>
          <a class="btn btn--glow primary full" href="../contact.html">Un projet similaire ?</a>
          <div class="pg-case-nav">
            <a href="../portfolio.html">← Retour au portfolio</a>
          </div>
        </aside>
        </div>
      </div>
    </section>

    <section class="pg-cta-block">
      <div class="container home-cta reveal">
        <div class="home-cta__glow" aria-hidden="true"></div>
        <div class="home-cta__content">
          <span class="eyebrow">Votre projet</span>
          <h2>Vous voulez un site du même calibre pour votre activité ?</h2>
          <p>Décrivez-moi votre besoin — je vous propose une approche claire, un devis adapté et un accompagnement de A à Z.</p>
        </div>
        <div class="home-cta__actions">
          <a class="btn btn--glow primary" href="../contact.html">Demander un devis</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h3>Abdou-Hayi SALIOU</h3>
        <p>Création de sites web premium pour entreprises, associations, artisans et indépendants.</p>
        <div class="footer-actions">
          <a href="https://wa.me/33753950719" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:abdouhayisaliou@gmail.com">Email</a>
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        <a href="../portfolio.html">Réalisations</a>
        <a href="../services.html">Services</a>
        <a href="../process.html">Méthode</a>
        <a href="../contact.html">Demander un devis</a>
      </div>
      <div>
        <h4>Réseaux</h4>
        <a href="https://www.linkedin.com/in/abdou-hayi-saliou" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/abdouhayisaliou" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="tel:+33753950719">Appeler</a>
      </div>
    </div>
    <div class="container copyright">© 2026 Abdou-Hayi SALIOU — Sites web & solutions digitales</div>
  </footer>

  <a href="#" class="back-top" aria-label="Retour en haut">↑</a>
</body>
</html>`;
}

for (const p of projects) {
  writeFileSync(join(outDir, `${p.slug}.html`), renderProject(p), "utf8");
  console.log("✓", p.slug);
}

console.log(`\n${projects.length} pages générées.`);

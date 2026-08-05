/* ============================================================
   I18N — Français / العربية / English
   ============================================================ */
const I18N = {
fr: {
  dir:'ltr',
  nav:{home:"Accueil",products:"Produits",about:"À propos",contact:"Contact"},
  hero:{eyebrow:"Fait main en Algérie",title1:"La Nature Prend Soin",title2:"de Votre Peau",
    subtitle:"Découvrez des savons artisanaux et des soins naturels fabriqués en Algérie avec des ingrédients naturels soigneusement sélectionnés.",
    cta1:"Découvrir nos produits",cta2:"En savoir plus",scroll:"Défiler"},
  why:{eyebrow:"Pourquoi Cactuvia",title:"Des soins ancrés dans la nature et le savoir-faire",
    subtitle:"Chaque savon et chaque flacon est fabriqué avec intention — des plantes du désert algérien jusqu'à votre rituel quotidien."},
  whyCards:[
    {title:"100% Ingrédients Naturels",text:"Aucun sulfate, aucun paraben — uniquement des plantes, huiles et minéraux choisis avec soin."},
    {title:"Fabrication Artisanale",text:"Chaque lot est saponifié à froid et séché à la main par nos artisans algériens."},
    {title:"Fabriqué en Algérie",text:"Fièrement produit et conditionné en Algérie, en soutien au savoir-faire local."},
    {title:"Qualité Dermatologique",text:"Formulé pour les peaux sensibles et testé pour sa douceur et sa sécurité."}
  ],
  featured:{eyebrow:"En vedette",title:"Notre Collection Signature",subtitle:"Huit essentiels, fabriqués en petites séries avec des ingrédients naturels bienfaisants."},
  newSec:{eyebrow:"Nouveautés",title:"Nouveaux Arrivages"},
  best:{eyebrow:"Plébiscité par notre communauté",title:"Meilleures Ventes",subtitle:"Les rituels que nos clients redemandent sans cesse."},
  story:{eyebrow:"Depuis notre premier lot",title:"Notre Histoire",
    lead:"Cactuvia est né dans une petite cuisine algérienne, où une mère mélangeait huile d'olive, miel et plantes du désert pour fabriquer du savon pour la peau sensible de ses propres enfants. Ce qui a commencé comme un remède maison est devenu une promesse : garder les soins de la peau honnêtes, naturels et faits main.",
    missionH:"Notre Mission",missionP:"Fabriquer des soins dermatologiquement doux à partir d'ingrédients 100% naturels et locaux — accessibles à chaque famille algérienne.",
    visionH:"Notre Vision",visionP:"Devenir la maison de soins naturels la plus fiable d'Algérie, en portant notre héritage de savoir-faire au-delà de nos frontières.",
    valuesH:"Nos Valeurs",valuesP:"Pureté, patience et attention — nous ne précipitons jamais une formule, et ne faisons jamais de compromis sur ce qui touche votre peau.",
    craftH:"Notre Savoir-faire",craftP:"Chaque savon est saponifié à froid et affiné à la main, en petites séries, par des artisans formés aux méthodes traditionnelles."},
  commit:{eyebrow:"Nos Engagements",title:"Ce que chaque commande transporte avec elle"},
  commitItems:["Ingrédients Naturels","Savoir-faire Traditionnel","Haute Qualité","Respect de la Peau","Livraison Rapide","Satisfaction Client","Emballage Écoresponsable","Fabriqué avec Soin"],
  faq:{eyebrow:"Bon à savoir",title:"Questions Fréquentes",items:[
    {q:"Comment passer commande ?",a:"Parcourez notre collection, ajoutez vos produits favoris au panier, puis complétez le formulaire de commande avec vos coordonnées de livraison. C'est aussi simple que ça."},
    {q:"Quel est le délai de livraison ?",a:"Les commandes à Alger arrivent généralement sous 24 à 48 heures. Les autres wilayas reçoivent habituellement leur commande sous 2 à 5 jours ouvrés."},
    {q:"Quels moyens de paiement sont acceptés ?",a:"Nous acceptons actuellement le paiement à la livraison partout en Algérie. Notre équipe confirmera tous les détails de votre commande par téléphone avant l'expédition."},
    {q:"Puis-je modifier ma commande ?",a:"Oui — vous pouvez demander des modifications lorsque notre équipe vous appelle pour confirmer la commande, tant qu'elle n'a pas encore été expédiée."},
    {q:"Comment contacter le service client ?",a:"Vous pouvez nous joindre par téléphone, email ou WhatsApp grâce aux coordonnées de notre section Contact — nous sommes ravis de vous aider."}
  ]},
  contact:{eyebrow:"Nous serions ravis de vous entendre",title:"Contactez-nous",
    formName:"Nom complet",formEmail:"Email",formMessage:"Message",formNamePh:"Votre nom",formEmailPh:"vous@exemple.com",formMessagePh:"Comment pouvons-nous vous aider ?",send:"Envoyer le message",
    phoneLabel:"Téléphone",emailLabel:"Email",addressLabel:"Adresse",hoursLabel:"Horaires",
    phoneValue:"+213 555 12 34 56",emailValue:"hello@cactuvia.dz",addressValue:"Rue des Cactus, Cheraga, Alger, Algérie",hoursValue:"Dim – Jeu, 9h00 – 18h00",
    map:"Aperçu de la carte",success:"Merci — votre message a bien été envoyé. Nous vous répondrons rapidement."},
  footer:{desc:"Savons artisanaux et soins dermatologiques naturels 100% algériens, fabriqués avec pureté et attention.",
    quicklinks:"Liens Rapides",contactTitle:"Contact",legalTitle:"Mentions Légales",privacy:"Politique de Confidentialité",terms:"Conditions Générales",
    rights:"© 2026 Cactuvia. Tous droits réservés."},
  product:{crumbHome:"Accueil",inStock:"En stock — prêt à expédier",addToCart:"Ajouter au Panier",
    tabIngredients:"Ingrédients",tabBenefits:"Bienfaits",tabDirections:"Mode d'Emploi",tabPrecautions:"Précautions",
    suggestedEyebrow:"Vous aimerez aussi",suggestedTitle:"Produits Suggérés",
    reviewsEyebrow:"Avis Authentiques",reviewsTitle:"Avis Clients",reviewsSuffix:"avis"},
  cart:{eyebrow:"Votre Panier",title:"Panier",emptyTitle:"Votre panier est vide",emptyText:"On dirait que vous n'avez encore rien ajouté.",
    continueShopping:"Continuer mes achats",clearCart:"Vider le panier",subtotal:"Sous-total",delivery:"Livraison",deliveryValue:"Calculée au paiement",
    total:"Total",checkout:"Passer la commande",unit:"/ unité",remove:"Retirer"},
  checkout:{eyebrow:"Presque terminé",title:"Paiement",firstName:"Prénom",lastName:"Nom",phone:"Numéro de Téléphone",email:"Email (optionnel)",
    wilaya:"Wilaya",selectWilaya:"Choisir une wilaya",city:"Commune",address:"Adresse Complète",comment:"Commentaire (optionnel)",commentPh:"Notes de livraison, message cadeau…",
    confirmText:"Après l'envoi de votre commande, notre équipe vous contactera par téléphone pour confirmer votre commande avant expédition.",
    sendOrder:"Envoyer Ma Commande",orderSummary:"Résumé de la Commande",totalLabel:"Total",emptyCartMsg:"Votre panier est vide."},
  modal:{title:"Commande Reçue",text:"Merci ! Après l'envoi de votre commande, notre équipe vous contactera par téléphone pour confirmer votre commande avant expédition.",continueBtn:"Continuer mes achats"},
  categories:{Soap:"Savon",Cream:"Crème",Oil:"Huile",Balm:"Baume",Scrub:"Gommage",Serum:"Sérum"},
  tags:{"Best Seller":"Meilleure Vente","New":"Nouveau","Premium":"Premium"},
  wilayas:["Alger","Oran","Constantine","Blida","Annaba","Sétif","Tlemcen"],
  reviews:[
    {name:"Amina B.",text:"Ma peau n'a jamais été aussi douce. Le parfum est subtil et naturel — exactement ce que je cherchais."},
    {name:"Yacine K.",text:"Livraison rapide et qualité excellente. On sent vraiment que c'est fait main."},
    {name:"Meriem T.",text:"J'ai la peau sensible et c'est le premier produit depuis des années à ne provoquer aucune irritation."}
  ],
  products:{
    1:{name:"Crème Solaire Minérale",desc:"Une crème solaire minérale invisible et résistante à l'eau, formulée à 85% d'ingrédients naturels, pour offrir à votre peau une protection élevée sans compromis sur le confort.",
      ingredients:["À compléter"],
      benefits:["Haute protection SPF 50+ contre les UVA et UVB","100% filtres minéraux, non agressifs","Invisible — sans effet blanc","85% d'origine naturelle","Résistante à l'eau","Convient aux peaux sensibles"],
      directions:["Appliquer généreusement sur peau propre avant exposition au soleil","Renouveler l'application toutes les 2 heures et après la baignade ou une transpiration importante"],
      precautions:["Usage externe uniquement","Éviter le contact avec les yeux","Ne pas appliquer sur peau lésée ou irritée"]},
    2:{name:"Savon au Karité & Lavande",desc:"Le beurre de karité et la lavande s'unissent dans ce savon apaisant, idéal pour les rituels du soir et les peaux sèches et fatiguées.",
      ingredients:["Beurre de karité","Huile essentielle de lavande","Huiles végétales saponifiées","Glycérine"],
      benefits:["Apaise et détend avant le coucher","Nourrit les zones sèches","Laisse un doux parfum floral"],
      directions:["Faire mousser avec de l'eau tiède","Appliquer sur le corps ou les mains","Bien rincer"],
      precautions:["Faire un test cutané avant la première utilisation","Éloigner des yeux","Conserver dans un endroit sec"]},
    3:{name:"Crème Hydratante à l'Aloe Vera",desc:"Une crème légère à absorption rapide, propulsée par du gel d'aloe vera pur pour hydrater et apaiser la peau toute la journée.",
      ingredients:["Gel d'aloe vera pur","Huile d'amande douce","Vitamine E","Cire d'abeille"],
      benefits:["Hydratation 24 heures","Apaise les rougeurs et les coups de soleil","Fini non gras"],
      directions:["Appliquer une petite quantité sur peau propre matin et soir","Masser doucement jusqu'à absorption complète"],
      precautions:["Usage externe uniquement","Éviter le contour des yeux","Cesser l'utilisation en cas d'irritation persistante"]},
    4:{name:"Huile de Nigelle Pure",desc:"Une huile de nigelle 100% pure, pressée à froid et non raffinée — un remède algérien traditionnel pour la peau et les cheveux.",
      ingredients:["Huile de Nigella sativa (nigelle) 100% pure"],
      benefits:["Riche en antioxydants","Favorise l'élasticité de la peau","Renforce les cheveux de la racine aux pointes"],
      directions:["Appliquer quelques gouttes sur la peau ou le cuir chevelu","Masser doucement","Utiliser 2 à 3 fois par semaine"],
      precautions:["Faire un test cutané avant utilisation","Non recommandé pendant la grossesse sans avis médical","Tenir hors de portée des enfants"]},
    5:{name:"Savon au Charbon Actif",desc:"Le charbon actif absorbe les impuretés et l'excès de sébum, laissant la peau propre, matifiée et fraîche.",
      ingredients:["Charbon actif","Huiles végétales saponifiées","Huile essentielle de tea tree"],
      benefits:["Nettoyage en profondeur des pores","Contrôle l'excès de sébum","Rafraîchit la peau fatiguée"],
      directions:["Faire mousser et appliquer sur le visage ou le corps","Laisser poser 30 secondes","Rincer à l'eau tiède"],
      precautions:["Éviter le contact avec les yeux","Utiliser 3 à 4 fois par semaine pour peau grasse"]},
    6:{name:"Baume Réparateur à la Rose de Damas",desc:"Un baume réparateur riche infusé à la rose de Damas, formulé pour les zones de peau très sèches ou craquelées.",
      ingredients:["Extrait de rose de Damas","Beurre de karité","Cire d'abeille","Huile de jojoba"],
      benefits:["Répare les peaux très sèches et craquelées","Apaise les irritations","Parfum délicat de rose"],
      directions:["Appliquer sur les zones concernées selon besoin","Masser jusqu'à absorption"],
      precautions:["Usage externe uniquement","Test cutané recommandé"]},
    7:{name:"Gommage Corporel au Café",desc:"Un gommage corporel énergisant à base de café moulu et d'huile de coco pour révéler une peau plus lisse et plus lumineuse.",
      ingredients:["Café moulu","Huile de coco","Sucre roux","Vitamine E"],
      benefits:["Exfolie les cellules mortes","Améliore la circulation","Laisse une peau visiblement plus lisse"],
      directions:["Appliquer sur peau humide en mouvements circulaires","Rincer abondamment","Utiliser 1 à 2 fois par semaine"],
      precautions:["Éviter les zones de peau abîmée ou irritée","Rincer immédiatement les yeux en cas de contact"]},
    8:{name:"Savon à l'Argile Verte",desc:"L'argile verte française purifie et resserre les pores, ce qui rend ce savon idéal pour les peaux mixtes et grasses.",
      ingredients:["Argile verte française","Huiles végétales saponifiées","Huile essentielle de romarin"],
      benefits:["Purifie et resserre les pores","Équilibre la production de sébum","Exfolie en douceur"],
      directions:["Faire mousser sur peau humide","Masser doucement","Rincer abondamment"],
      precautions:["Peut assécher en cas d'usage excessif sur peau sensible"]},
    9:{name:"Sérum Visage à l'Huile d'Argan",desc:"Un sérum visage luxueux à l'huile d'argan pure algéro-marocaine pour restaurer éclat et élasticité.",
      ingredients:["Huile d'argan 100% pure","Vitamine E","Huile de rose musquée"],
      benefits:["Restaure l'éclat du teint","Améliore l'élasticité de la peau","Réduit l'apparence des ridules"],
      directions:["Appliquer 3 à 4 gouttes sur visage propre","Presser délicatement matin et soir"],
      precautions:["Test cutané avant première utilisation","Conserver à l'abri de la lumière directe du soleil"]},
    10:{name:"Savon au Miel & Curcuma",desc:"Le curcuma et le miel s'unissent dans ce savon éclaircissant, traditionnellement utilisé pour unifier le teint naturellement.",
      ingredients:["Miel brut","Extrait de curcuma","Huiles végétales saponifiées"],
      benefits:["Éclaircit le teint irrégulier","Antibactérien naturel","Adoucit la texture de la peau"],
      directions:["Faire mousser sur peau humide","Laisser poser 20 secondes","Bien rincer"],
      precautions:["Le curcuma peut temporairement teinter les tissus clairs — rincer soigneusement"]}
  }
},
en: {
  dir:'ltr',
  nav:{home:"Home",products:"Products",about:"About",contact:"Contact"},
  hero:{eyebrow:"Handmade in Algeria",title1:"Nature Takes Care",title2:"of Your Skin",
    subtitle:"Discover handmade soaps and natural skincare products made in Algeria with carefully selected natural ingredients.",
    cta1:"Discover our products",cta2:"Learn more",scroll:"Scroll"},
  why:{eyebrow:"Why Cactuvia",title:"Skincare rooted in nature and craft",
    subtitle:"Every bar and bottle is made with intention — from the desert plants of Algeria to your daily ritual."},
  whyCards:[
    {title:"100% Natural Ingredients",text:"No sulfates, no parabens — only plants, oils and minerals sourced with care."},
    {title:"Handmade Production",text:"Every batch is cold-processed and cured by hand by our Algerian artisans."},
    {title:"Made in Algeria",text:"Proudly produced and packaged in Algeria, supporting local craftsmanship."},
    {title:"Dermatological Quality",text:"Formulated for sensitive skin and tested for gentleness and safety."}
  ],
  featured:{eyebrow:"Featured",title:"Our Signature Collection",subtitle:"Eight essentials, handcrafted in small batches with natural, skin-loving ingredients."},
  newSec:{eyebrow:"Just Landed",title:"New Arrivals"},
  best:{eyebrow:"Loved by our community",title:"Best Sellers",subtitle:"The rituals our customers keep coming back for."},
  story:{eyebrow:"Since our first batch",title:"Our Story",
    lead:"Cactuvia began in a small Algerian kitchen, where a mother mixed olive oil, honey and desert plants into soap for her own children's sensitive skin. What started as a home remedy became a promise: to keep skincare honest, natural, and made by hand.",
    missionH:"Our Mission",missionP:"To craft dermatologically gentle skincare using 100% natural, locally sourced ingredients — accessible to every Algerian family.",
    visionH:"Our Vision",visionP:"To become Algeria's most trusted natural skincare house, carrying our heritage of craftsmanship beyond our borders.",
    valuesH:"Our Values",valuesP:"Purity, patience, and care — we never rush a formula, and we never compromise on what touches your skin.",
    craftH:"Our Craft",craftP:"Every bar is cold-processed and cured by hand, in small batches, by artisans trained in traditional soap-making."},
  commit:{eyebrow:"Our Commitments",title:"What every order carries with it"},
  commitItems:["Natural Ingredients","Traditional Craftsmanship","High Quality","Respect for Skin","Fast Delivery","Customer Satisfaction","Eco-friendly Packaging","Made With Care"],
  faq:{eyebrow:"Good to know",title:"Frequently Asked Questions",items:[
    {q:"How do I order?",a:"Browse our collection, add your favorite products to the cart, and complete the checkout form with your delivery details. It's that simple."},
    {q:"How long is delivery?",a:"Orders within Algiers typically arrive within 24–48 hours. Other wilayas usually receive their order within 2–5 business days."},
    {q:"Which payment methods are accepted?",a:"We currently accept cash on delivery across Algeria. Our team will confirm all order details with you by phone before shipping."},
    {q:"Can I modify my order?",a:"Yes — you can request changes when our team calls to confirm your order, as long as it hasn't been shipped yet."},
    {q:"How do I contact customer support?",a:"You can reach us by phone, email, or WhatsApp using the details in our Contact section — we're happy to help."}
  ]},
  contact:{eyebrow:"We'd love to hear from you",title:"Get in Touch",
    formName:"Full Name",formEmail:"Email",formMessage:"Message",formNamePh:"Your name",formEmailPh:"you@example.com",formMessagePh:"How can we help?",send:"Send Message",
    phoneLabel:"Phone",emailLabel:"Email",addressLabel:"Address",hoursLabel:"Working Hours",
    phoneValue:"+213 555 12 34 56",emailValue:"hello@cactuvia.dz",addressValue:"Rue des Cactus, Cheraga, Algiers, Algeria",hoursValue:"Sun – Thu, 9:00 – 18:00",
    map:"Map preview",success:"Thank you — your message has been sent. We will get back to you shortly."},
  footer:{desc:"100% Algerian handmade soaps and natural dermatological skincare, crafted with purity and care.",
    quicklinks:"Quick Links",contactTitle:"Contact",legalTitle:"Legal",privacy:"Privacy Policy",terms:"Terms & Conditions",
    rights:"© 2026 Cactuvia. All rights reserved."},
  product:{crumbHome:"Home",inStock:"In stock — ready to ship",addToCart:"Add to Cart",
    tabIngredients:"Ingredients",tabBenefits:"Benefits",tabDirections:"Directions for Use",tabPrecautions:"Precautions",
    suggestedEyebrow:"You may also like",suggestedTitle:"Suggested Products",
    reviewsEyebrow:"Real Feedback",reviewsTitle:"Customer Reviews",reviewsSuffix:"reviews"},
  cart:{eyebrow:"Your Basket",title:"Shopping Cart",emptyTitle:"Your cart is empty",emptyText:"Looks like you haven't added anything yet.",
    continueShopping:"Continue Shopping",clearCart:"Clear Cart",subtotal:"Subtotal",delivery:"Delivery",deliveryValue:"Calculated at checkout",
    total:"Total",checkout:"Proceed to Checkout",unit:"/ unit",remove:"Remove"},
  checkout:{eyebrow:"Almost there",title:"Checkout",firstName:"First Name",lastName:"Last Name",phone:"Phone Number",email:"Email (optional)",
    wilaya:"Province (Wilaya)",selectWilaya:"Select wilaya",city:"City (Commune)",address:"Full Address",comment:"Comment (optional)",commentPh:"Delivery notes, gift message…",
    confirmText:"After submitting your order, our team will contact you by phone to confirm your order before shipping.",
    sendOrder:"Send My Order",orderSummary:"Order Summary",totalLabel:"Total",emptyCartMsg:"Your cart is empty."},
  modal:{title:"Order Received",text:"Thank you! After submitting your order, our team will contact you by phone to confirm your order before shipping.",continueBtn:"Continue Shopping"},
  categories:{Soap:"Soap",Cream:"Cream",Oil:"Oil",Balm:"Balm",Scrub:"Scrub",Serum:"Serum"},
  tags:{"Best Seller":"Best Seller","New":"New","Premium":"Premium"},
  wilayas:["Algiers","Oran","Constantine","Blida","Annaba","Setif","Tlemcen"],
  reviews:[
    {name:"Amina B.",text:"My skin has never felt this soft. The scent is subtle and natural — exactly what I was looking for."},
    {name:"Yacine K.",text:"Fast delivery and the product quality is excellent. You can really tell it's handmade."},
    {name:"Meriem T.",text:"I have sensitive skin and this is the first product in years that hasn't caused any irritation."}
  ],
  products:{
    1:{name:"Mineral Sunscreen Cream",desc:"An invisible, water-resistant mineral sunscreen made with 85% natural ingredients, giving your skin high protection without compromising on comfort.",
      ingredients:["To be completed"],
      benefits:["High SPF 50+ protection against UVA and UVB","100% mineral filters, non-aggressive","Invisible — no white cast","85% natural origin","Water resistant","Suitable for sensitive skin"],
      directions:["Apply generously to clean skin before sun exposure","Reapply every 2 hours and after swimming or heavy sweating"],
      precautions:["For external use only","Avoid contact with eyes","Do not apply to broken or irritated skin"]},
    2:{name:"Shea Butter & Lavender Soap",desc:"Shea butter and lavender combine in this calming bar, ideal for evening rituals and dry, tired skin.",
      ingredients:["Shea butter","Lavender essential oil","Saponified plant oils","Glycerin"],
      benefits:["Calms and relaxes before bedtime","Nourishes dry patches","Leaves a soft floral scent"],
      directions:["Work into a lather with warm water","Apply to body or hands","Rinse well"],
      precautions:["Patch test before first use","Keep away from eyes","Store in a dry place"]},
    3:{name:"Aloe Vera Moisturizing Cream",desc:"A lightweight, fast-absorbing cream powered by pure aloe vera gel to hydrate and calm the skin all day.",
      ingredients:["Pure aloe vera gel","Sweet almond oil","Vitamin E","Beeswax"],
      benefits:["24-hour hydration","Soothes redness and sunburn","Non-greasy finish"],
      directions:["Apply a small amount to clean skin morning and night","Massage gently until absorbed"],
      precautions:["For external use only","Avoid eye area","Discontinue if irritation persists"]},
    4:{name:"Pure Black Seed Oil",desc:"100% pure black seed oil, cold-pressed and unrefined — a traditional Algerian remedy for skin and hair.",
      ingredients:["100% pure Nigella sativa (black seed) oil"],
      benefits:["Rich in antioxidants","Supports skin elasticity","Strengthens hair from root to tip"],
      directions:["Apply a few drops to skin or scalp","Massage gently","Use 2–3 times per week"],
      precautions:["Do a patch test before use","Not recommended during pregnancy without medical advice","Keep out of reach of children"]},
    5:{name:"Activated Charcoal Soap",desc:"Activated charcoal draws out impurities and excess oil, leaving skin clean, matte and refreshed.",
      ingredients:["Activated charcoal","Saponified plant oils","Tea tree essential oil"],
      benefits:["Deep pore cleansing","Controls excess oil","Refreshes tired-looking skin"],
      directions:["Lather and apply to face or body","Leave for 30 seconds","Rinse with warm water"],
      precautions:["Avoid contact with eyes","Use 3–4 times a week for oily skin"]},
    6:{name:"Damask Rose Repair Balm",desc:"A rich repairing balm infused with Damask rose, formulated for very dry or cracked skin areas.",
      ingredients:["Damask rose extract","Shea butter","Beeswax","Jojoba oil"],
      benefits:["Repairs very dry, cracked skin","Soothes irritation","Delicate rose scent"],
      directions:["Apply to affected areas as needed","Massage until absorbed"],
      precautions:["For external use only","Patch test recommended"]},
    7:{name:"Coffee Body Scrub",desc:"An energizing body scrub made with ground coffee and coconut oil to reveal smoother, brighter skin.",
      ingredients:["Ground coffee","Coconut oil","Brown sugar","Vitamin E"],
      benefits:["Exfoliates dead skin cells","Improves circulation","Leaves skin visibly smoother"],
      directions:["Apply to damp skin in circular motions","Rinse thoroughly","Use 1–2 times weekly"],
      precautions:["Avoid broken or irritated skin","Rinse eyes immediately if contact occurs"]},
    8:{name:"Green Clay Soap",desc:"French green clay purifies and tightens pores, making this bar ideal for combination and oily skin.",
      ingredients:["French green clay","Saponified plant oils","Rosemary essential oil"],
      benefits:["Purifies and tightens pores","Balances oil production","Gently exfoliates"],
      directions:["Lather onto damp skin","Massage gently","Rinse thoroughly"],
      precautions:["May be drying if overused on sensitive skin"]},
    9:{name:"Argan Oil Face Serum",desc:"A luxurious facial serum with pure Moroccan-Algerian argan oil to restore radiance and elasticity.",
      ingredients:["100% pure argan oil","Vitamin E","Rosehip oil"],
      benefits:["Restores radiance and glow","Improves skin elasticity","Reduces the look of fine lines"],
      directions:["Apply 3–4 drops to clean face","Gently press into skin morning and night"],
      precautions:["Patch test before first use","Store away from direct sunlight"]},
    10:{name:"Honey & Turmeric Soap",desc:"Turmeric and honey unite in this brightening bar, traditionally used to even skin tone naturally.",
      ingredients:["Raw honey","Turmeric extract","Saponified plant oils"],
      benefits:["Brightens uneven skin tone","Naturally antibacterial","Softens skin texture"],
      directions:["Lather onto damp skin","Leave on for 20 seconds","Rinse well"],
      precautions:["Turmeric may temporarily tint light fabrics — rinse thoroughly"]}
  }
},
ar: {
  dir:'rtl',
  nav:{home:"الرئيسية",products:"المنتجات",about:"من نحن",contact:"اتصل بنا"},
  hero:{eyebrow:"صناعة يدوية في الجزائر",title1:"الطبيعة تعتني",title2:"ببشرتك",
    subtitle:"اكتشفي صابونًا مصنوعًا يدويًا ومنتجات عناية طبيعية بالبشرة، مُصنّعة في الجزائر بمكونات طبيعية مُختارة بعناية.",
    cta1:"اكتشفي منتجاتنا",cta2:"اعرفي المزيد",scroll:"مرري للأسفل"},
  why:{eyebrow:"لماذا كاكتوفيا",title:"عناية متجذرة في الطبيعة والحرفية",
    subtitle:"كل قطعة صابون وكل زجاجة تُصنع بعناية — من نباتات الصحراء الجزائرية إلى روتينك اليومي."},
  whyCards:[
    {title:"مكونات طبيعية 100%",text:"بدون كبريتات، بدون بارابين — فقط نباتات وزيوت ومعادن مُختارة بعناية."},
    {title:"إنتاج يدوي",text:"كل دفعة تُصنّع بالتصبين البارد وتُجفف يدويًا من قِبل حرفيينا الجزائريين."},
    {title:"صنع في الجزائر",text:"يُنتج ويُعبأ بفخر في الجزائر، دعمًا للحرفية المحلية."},
    {title:"جودة أمراض جلدية",text:"مُركّب للبشرة الحساسة ومُختبر لضمان اللطف والأمان."}
  ],
  featured:{eyebrow:"منتجات مميزة",title:"مجموعتنا المميزة",subtitle:"ثمانية منتجات أساسية، مصنوعة يدويًا بكميات صغيرة بمكونات طبيعية تعتني ببشرتك."},
  newSec:{eyebrow:"وصل حديثًا",title:"وصل حديثًا"},
  best:{eyebrow:"من اختيار عملائنا",title:"الأكثر مبيعًا",subtitle:"الطقوس التي يعود إليها عملاؤنا دائمًا."},
  story:{eyebrow:"منذ أول دفعة لنا",title:"قصتنا",
    lead:"وُلدت كاكتوفيا في مطبخ جزائري صغير، حيث كانت أم تمزج زيت الزيتون والعسل ونباتات الصحراء لصنع صابون لبشرة أطفالها الحساسة. ما بدأ كعلاج منزلي أصبح وعدًا: الحفاظ على عناية صادقة وطبيعية ومصنوعة يدويًا.",
    missionH:"مهمتنا",missionP:"صناعة منتجات عناية لطيفة على البشرة من مكونات طبيعية محلية 100% — في متناول كل عائلة جزائرية.",
    visionH:"رؤيتنا",visionP:"أن نصبح دار العناية الطبيعية الأكثر ثقة في الجزائر، حاملين إرثنا الحرفي إلى ما وراء حدودنا.",
    valuesH:"قيمنا",valuesP:"النقاء والصبر والعناية — لا نستعجل أي تركيبة أبدًا، ولا نساوم أبدًا على ما يلامس بشرتك.",
    craftH:"حرفيتنا",craftP:"كل قطعة صابون تُصبّن بالبارد وتُنضج يدويًا، بكميات صغيرة، على يد حرفيين مُدرّبين على الطرق التقليدية."},
  commit:{eyebrow:"التزاماتنا",title:"ما يحمله كل طلب معه"},
  commitItems:["مكونات طبيعية","حرفية تقليدية","جودة عالية","احترام البشرة","توصيل سريع","رضا العملاء","تغليف صديق للبيئة","مصنوع بعناية"],
  faq:{eyebrow:"معلومات مفيدة",title:"الأسئلة الشائعة",items:[
    {q:"كيف أطلب؟",a:"تصفحي مجموعتنا، أضيفي منتجاتك المفضلة إلى السلة، ثم أكملي نموذج الطلب ببيانات التوصيل الخاصة بك. الأمر بهذه البساطة."},
    {q:"ما هي مدة التوصيل؟",a:"تصل الطلبات داخل الجزائر العاصمة عادةً خلال 24 إلى 48 ساعة. أما باقي الولايات فتستلم طلبها عادةً خلال 2 إلى 5 أيام عمل."},
    {q:"ما هي وسائل الدفع المقبولة؟",a:"نقبل حاليًا الدفع عند الاستلام في جميع أنحاء الجزائر. سيقوم فريقنا بتأكيد جميع تفاصيل طلبك عبر الهاتف قبل الشحن."},
    {q:"هل يمكنني تعديل طلبي؟",a:"نعم — يمكنك طلب إجراء تعديلات عندما يتصل بك فريقنا لتأكيد الطلب، طالما لم يتم شحنه بعد."},
    {q:"كيف أتواصل مع خدمة العملاء؟",a:"يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو واتساب باستخدام البيانات الموجودة في قسم اتصل بنا — يسعدنا مساعدتك."}
  ]},
  contact:{eyebrow:"يسعدنا التواصل معك",title:"تواصل معنا",
    formName:"الاسم الكامل",formEmail:"البريد الإلكتروني",formMessage:"الرسالة",formNamePh:"اسمك",formEmailPh:"you@example.com",formMessagePh:"كيف يمكننا مساعدتك؟",send:"إرسال الرسالة",
    phoneLabel:"الهاتف",emailLabel:"البريد الإلكتروني",addressLabel:"العنوان",hoursLabel:"ساعات العمل",
    phoneValue:"+213 555 12 34 56",emailValue:"hello@cactuvia.dz",addressValue:"شارع الصبار، الشراقة، الجزائر العاصمة، الجزائر",hoursValue:"الأحد – الخميس، 9:00 – 18:00",
    map:"معاينة الخريطة",success:"شكرًا لك — تم إرسال رسالتك بنجاح. سنرد عليك في أقرب وقت."},
  footer:{desc:"صابون يدوي ومنتجات عناية جلدية طبيعية جزائرية 100%، مصنوعة بنقاء وعناية.",
    quicklinks:"روابط سريعة",contactTitle:"اتصل بنا",legalTitle:"قانوني",privacy:"سياسة الخصوصية",terms:"الشروط والأحكام",
    rights:"© 2026 كاكتوفيا. جميع الحقوق محفوظة."},
  product:{crumbHome:"الرئيسية",inStock:"متوفر — جاهز للشحن",addToCart:"أضف إلى السلة",
    tabIngredients:"المكونات",tabBenefits:"الفوائد",tabDirections:"طريقة الاستخدام",tabPrecautions:"احتياطات",
    suggestedEyebrow:"قد يعجبك أيضًا",suggestedTitle:"منتجات مقترحة",
    reviewsEyebrow:"آراء حقيقية",reviewsTitle:"آراء العملاء",reviewsSuffix:"تقييم"},
  cart:{eyebrow:"سلتك",title:"سلة التسوق",emptyTitle:"سلتك فارغة",emptyText:"يبدو أنك لم تضيفي أي شيء بعد.",
    continueShopping:"متابعة التسوق",clearCart:"إفراغ السلة",subtotal:"المجموع الفرعي",delivery:"التوصيل",deliveryValue:"يُحسب عند الدفع",
    total:"المجموع",checkout:"إتمام الطلب",unit:"/ وحدة",remove:"إزالة"},
  checkout:{eyebrow:"على وشك الانتهاء",title:"إتمام الطلب",firstName:"الاسم الأول",lastName:"اللقب",phone:"رقم الهاتف",email:"البريد الإلكتروني (اختياري)",
    wilaya:"الولاية",selectWilaya:"اختر الولاية",city:"البلدية",address:"العنوان الكامل",comment:"ملاحظة (اختياري)",commentPh:"ملاحظات التوصيل، رسالة هدية…",
    confirmText:"بعد إرسال طلبك، سيتواصل معك فريقنا عبر الهاتف لتأكيد طلبك قبل الشحن.",
    sendOrder:"أرسل طلبي",orderSummary:"ملخص الطلب",totalLabel:"المجموع",emptyCartMsg:"سلتك فارغة."},
  modal:{title:"تم استلام الطلب",text:"شكرًا لك! بعد إرسال طلبك، سيتواصل معك فريقنا عبر الهاتف لتأكيد طلبك قبل الشحن.",continueBtn:"متابعة التسوق"},
  categories:{Soap:"صابون",Cream:"كريم",Oil:"زيت",Balm:"بلسم",Scrub:"مقشر",Serum:"سيروم"},
  tags:{"Best Seller":"الأكثر مبيعًا","New":"جديد","Premium":"مميز"},
  wilayas:["الجزائر العاصمة","وهران","قسنطينة","البليدة","عنابة","سطيف","تلمسان"],
  reviews:[
    {name:"أمينة ب.",text:"لم تكن بشرتي بهذه النعومة من قبل. الرائحة خفيفة وطبيعية — بالضبط ما كنت أبحث عنه."},
    {name:"ياسين ك.",text:"توصيل سريع وجودة المنتج ممتازة. يُلاحظ فعلاً أنه مصنوع يدويًا."},
    {name:"مريم ت.",text:"بشرتي حساسة، وهذا أول منتج منذ سنوات لم يسبب لي أي تهيج."}
  ],
  
  products:{
    
    1:{name:"كريم واقي شمس معدني",desc:"كريم واقي شمس معدني غير مرئي ومقاوم للماء، بتركيبة 85% طبيعية، يمنح بشرتك حماية عالية دون التضحية بالراحة.",
      ingredients:["سيتم استكماله"],
      benefits:["حماية عالية SPF 50+ ضد أشعة UVA وUVB","100% مرشحات معدنية غير مهيّجة","غير مرئي — بدون أثر أبيض","85% من أصل طبيعي","مقاوم للماء","مناسب للبشرة الحساسة"],
      directions:["ضعي كمية وافرة على بشرة نظيفة قبل التعرض للشمس","أعيدي التطبيق كل ساعتين وبعد السباحة أو التعرق الشديد"],
      precautions:["للاستخدام الخارجي فقط","تجنبي ملامسته للعينين","لا تستخدميه على بشرة متضررة أو متهيجة"]},
    2:{name:"صابون زبدة الشيا واللافندر",desc:"تجتمع زبدة الشيا واللافندر في هذا الصابون المهدئ، المثالي لطقوس المساء والبشرة الجافة والمتعبة.",
      ingredients:["زبدة الشيا","زيت اللافندر الأساسي","زيوت نباتية مُصبّنة","جليسرين"],
      benefits:["يهدئ ويريح قبل النوم","يغذي المناطق الجافة","يترك رائحة زهرية ناعمة"],
      directions:["رغّيه بماء دافئ","ضعيه على الجسم أو اليدين","اشطفي جيدًا"],
      precautions:["اختبري على منطقة صغيرة قبل الاستخدام الأول","ابعديه عن العينين","احفظيه في مكان جاف"]},
    3:{name:"كريم مرطب بالصبار",desc:"كريم خفيف سريع الامتصاص مدعوم بجل الصبار النقي لترطيب البشرة وتهدئتها طوال اليوم.",
      ingredients:["جل صبار نقي","زيت اللوز الحلو","فيتامين E","شمع العسل"],
      benefits:["ترطيب لمدة 24 ساعة","يهدئ الاحمرار وحروق الشمس","ملمس غير دهني"],
      directions:["ضعي كمية صغيرة على بشرة نظيفة صباحًا ومساءً","دلّكي بلطف حتى الامتصاص"],
      precautions:["للاستخدام الخارجي فقط","تجنبي منطقة العينين","أوقفي الاستخدام عند استمرار التهيج"]},
    4:{name:"زيت حبة البركة النقي",desc:"زيت حبة البركة نقي 100%، معصور على البارد وغير مكرر — علاج جزائري تقليدي للبشرة والشعر.",
      ingredients:["زيت حبة البركة نقي 100%"],
      benefits:["غني بمضادات الأكسدة","يدعم مرونة البشرة","يقوّي الشعر من الجذور إلى الأطراف"],
      directions:["ضعي بضع قطرات على البشرة أو فروة الرأس","دلّكي بلطف","استخدميه 2 إلى 3 مرات أسبوعيًا"],
      precautions:["اختبري على منطقة صغيرة قبل الاستخدام","غير مُوصى به أثناء الحمل دون استشارة طبية","يُحفظ بعيدًا عن متناول الأطفال"]},
    5:{name:"صابون الفحم النشط",desc:"يمتص الفحم النشط الشوائب والزيوت الزائدة، تاركًا البشرة نظيفة ومطفأة اللمعان ومنتعشة.",
      ingredients:["فحم نشط","زيوت نباتية مُصبّنة","زيت شجرة الشاي الأساسي"],
      benefits:["تنظيف عميق للمسام","يتحكم في الزيوت الزائدة","ينعش البشرة المتعبة"],
      directions:["رغّيه وضعيه على الوجه أو الجسم","اتركيه لمدة 30 ثانية","اشطفي بماء دافئ"],
      precautions:["تجنبي ملامسته للعينين","استخدميه 3 إلى 4 مرات أسبوعيًا للبشرة الدهنية"]},
    6:{name:"بلسم مُرمم بورد الشام",desc:"بلسم ترميمي غني منقوع بورد الشام، مُركّب لمناطق البشرة الجافة جدًا أو المتشققة.",
      ingredients:["مستخلص ورد الشام","زبدة الشيا","شمع العسل","زيت الجوجوبا"],
      benefits:["يرمم البشرة الجافة جدًا والمتشققة","يهدئ التهيج","رائحة ورد ناعمة"],
      directions:["ضعيه على المناطق المتضررة حسب الحاجة","دلّكي حتى الامتصاص"],
      precautions:["للاستخدام الخارجي فقط","يُنصح باختبار على منطقة صغيرة"]},
    7:{name:"مقشر الجسم بالقهوة",desc:"مقشر جسم منشط مصنوع من القهوة المطحونة وزيت جوز الهند لإظهار بشرة أكثر نعومة وإشراقًا.",
      ingredients:["قهوة مطحونة","زيت جوز الهند","سكر بني","فيتامين E"],
      benefits:["يقشر خلايا الجلد الميتة","يحسّن الدورة الدموية","يترك البشرة أكثر نعومة بشكل ملحوظ"],
      directions:["ضعيه على البشرة الرطبة بحركات دائرية","اشطفي جيدًا","استخدميه 1 إلى 2 مرة أسبوعيًا"],
      precautions:["تجنبي مناطق البشرة المجروحة أو المتهيجة","اشطفي العينين فورًا عند ملامستهما"]},
    8:{name:"صابون الطين الأخضر",desc:"يُنقّي الطين الأخضر الفرنسي البشرة ويُصغّر المسام، مما يجعل هذا الصابون مثاليًا للبشرة المختلطة والدهنية.",
      ingredients:["طين أخضر فرنسي","زيوت نباتية مُصبّنة","زيت إكليل الجبل الأساسي"],
      benefits:["ينقي ويُصغّر المسام","يوازن إفراز الزيوت","يقشر بلطف"],
      directions:["رغّيه على البشرة الرطبة","دلّكي بلطف","اشطفي جيدًا"],
      precautions:["قد يُجفف البشرة الحساسة عند الاستخدام المفرط"]},
    9:{name:"سيروم الوجه بزيت الأرغان",desc:"سيروم وجه فاخر بزيت الأرغان النقي الجزائري المغربي لاستعادة الإشراق والمرونة.",
      ingredients:["زيت أرغان نقي 100%","فيتامين E","زيت ثمر الورد"],
      benefits:["يستعيد إشراق البشرة","يحسّن مرونة البشرة","يقلل من مظهر الخطوط الدقيقة"],
      directions:["ضعي 3 إلى 4 قطرات على وجه نظيف","اضغطي بلطف صباحًا ومساءً"],
      precautions:["اختبري على منطقة صغيرة قبل الاستخدام الأول","احفظيه بعيدًا عن أشعة الشمس المباشرة"]},
    10:{name:"صابون العسل والكركم",desc:"يتحد الكركم والعسل في هذا الصابون المُفتّح، المستخدم تقليديًا لتوحيد لون البشرة بشكل طبيعي.",
      ingredients:["عسل خام","مستخلص الكركم","زيوت نباتية مُصبّنة"],
      benefits:["يُفتّح لون البشرة غير المتجانس","مضاد طبيعي للبكتيريا","يُنعّم ملمس البشرة"],
      directions:["رغّيه على البشرة الرطبة","اتركيه لمدة 20 ثانية","اشطفي جيدًا"],
      precautions:["قد يترك الكركم أثرًا مؤقتًا على الأقمشة الفاتحة — اشطفيه جيدًا"]}
  }
}
};

/* ============================================================
   BASE DATA (language-independent)
   ============================================================ */
const ICONS = {
  soap: `<svg viewBox="0 0 100 100"><rect x="18" y="34" width="64" height="42" rx="20" fill="#EFE3CE" stroke="#7C2A3A" stroke-width="2"/><path d="M26 34c0-10 8-18 24-18s24 8 24 18" fill="none" stroke="#6E8B6C" stroke-width="2"/><path d="M40 50c4-4 8-4 10 0s6 4 10 0" stroke="#7C2A3A" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
  bottle: `<svg viewBox="0 0 100 100"><rect x="40" y="16" width="20" height="14" rx="3" fill="#6E8B6C"/><path d="M36 30h28l4 10v40a6 6 0 0 1-6 6H38a6 6 0 0 1-6-6V40l4-10Z" fill="#E7ECE1" stroke="#3F5B47" stroke-width="2"/><circle cx="50" cy="58" r="10" fill="none" stroke="#7C2A3A" stroke-width="1.6"/></svg>`,
  jar: `<svg viewBox="0 0 100 100"><rect x="28" y="38" width="44" height="40" rx="10" fill="#EFE3CE" stroke="#3F5B47" stroke-width="2"/><rect x="32" y="24" width="36" height="16" rx="6" fill="#93A98D" stroke="#3F5B47" stroke-width="2"/><path d="M40 56c4-4 8-4 10 0s6 4 10 0" stroke="#7C2A3A" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
  dropper: `<svg viewBox="0 0 100 100"><path d="M44 14h12v20l-6 6-6-6V14Z" fill="#3F5B47"/><path d="M38 40h24l3 8v30a10 10 0 0 1-10 10H45a10 10 0 0 1-10-10V48l3-8Z" fill="#E7ECE1" stroke="#6E8B6C" stroke-width="2"/></svg>`
};

/* Each product may have a "media" array describing its real photos/videos:
     media: [ {type:'image', src:'media/xxx.jpg'}, {type:'video', src:'media/xxx.mp4'} ]
   Products without a "media" array fall back to the generic ICONS placeholder
   (via the "icon" field), so the site keeps working while you add real photos
   one product at a time. */
const products = [
  {id:1,catKey:"Cream",icon:"jar",media:[{type:"video",src:"cactuvia-hero.mp4"}],price:800,rating:4.8,reviews:132,tagKey:"Best Seller"},
  {id:2,catKey:"Soap",icon:"soap",price:850,rating:4.7,reviews:98,tagKey:"New"},
  {id:3,catKey:"Cream",icon:"jar",price:1450,rating:4.9,reviews:210,tagKey:"Best Seller"},
  {id:4,catKey:"Oil",icon:"dropper",price:1800,rating:4.9,reviews:87,tagKey:"Premium"},
  {id:5,catKey:"Soap",icon:"soap",price:900,rating:4.6,reviews:64,tagKey:"New"},
  {id:6,catKey:"Balm",icon:"jar",price:1600,rating:4.8,reviews:56,tagKey:"Premium"},
  {id:7,catKey:"Scrub",icon:"jar",price:1200,rating:4.7,reviews:74,tagKey:"Best Seller"},
  {id:8,catKey:"Soap",icon:"soap",price:850,rating:4.6,reviews:49,tagKey:"New"},
  {id:9,catKey:"Serum",icon:"dropper",price:2200,rating:5.0,reviews:41,tagKey:"Premium"},
  {id:10,catKey:"Soap",icon:"soap",price:900,rating:4.7,reviews:58,tagKey:"New"}
];

const whyIcons = [
  `<svg viewBox="0 0 40 40" fill="none"><path d="M20 6c0 0-9 6-9 15a9 9 0 0 0 18 0c0-9-9-15-9-15Z" stroke="currentColor" stroke-width="1.6"/><path d="M20 14v18" stroke="currentColor" stroke-width="1.6"/></svg>`,
  `<svg viewBox="0 0 40 40" fill="none"><path d="M8 22c0-8 6-14 12-14s12 6 12 14" stroke="currentColor" stroke-width="1.6"/><path d="M8 22h24v4a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-4Z" stroke="currentColor" stroke-width="1.6"/></svg>`,
  `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="1.6"/><path d="M20 6c3 4 4 9 4 14s-1 10-4 14M20 6c-3 4-4 9-4 14s1 10 4 14M6 20h28" stroke="currentColor" stroke-width="1.2"/></svg>`,
  `<svg viewBox="0 0 40 40" fill="none"><path d="M20 6 8 11v9c0 8 5 14 12 14s12-6 12-14v-9L20 6Z" stroke="currentColor" stroke-width="1.6"/><path d="m15 20 4 4 7-8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
];

const commitIcons = [
  `<svg viewBox="0 0 34 34" fill="none"><path d="M17 5c0 0-8 5-8 13a8 8 0 0 0 16 0c0-8-8-13-8-13Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><path d="M8 26 22 12M18 8l4 4M6 28l2-6 4 2Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><path d="m17 5 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><path d="M17 6 8 10v7c0 6.5 4 11.5 9 11.5S26 23.5 26 17v-7l-9-4Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><path d="M4 22V11h14v11M18 15h6l4 4v3h-4" stroke="currentColor" stroke-width="1.5"/><circle cx="11" cy="24" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="23" cy="24" r="2.2" stroke="currentColor" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="12" stroke="currentColor" stroke-width="1.5"/><path d="M12 18c1.5 2 3 3 5 3s3.5-1 5-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><path d="M6 12h22l-2 16H8L6 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M12 12V9a5 5 0 0 1 10 0v3" stroke="currentColor" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 34 34" fill="none"><path d="M17 27S6 20 6 12.5A5.5 5.5 0 0 1 17 10a5.5 5.5 0 0 1 11 2.5C28 20 17 27 17 27Z" stroke="currentColor" stroke-width="1.5"/></svg>`
];

/* ============================================================
   STATE
   ============================================================ */
let lang = localStorage.getItem('cactuvia_lang') || 'fr';
let cart = []; // {id, qty}
let currentProductId = null;
let pdQty = 1;

function t(){ return I18N[lang]; }
function tp(id){ return I18N[lang].products[id]; }

/* ============================================================
   RENDER HELPERS
   ============================================================ */
function stars(rating){
  const full = Math.round(rating);
  return '★★★★★'.slice(0,full) + '☆☆☆☆☆'.slice(0,5-full);
}

function mediaColor(cat){
  const map = {Soap:'#F3EEE1', Cream:'#E7ECE1', Oil:'#EFE3CE', Balm:'#F3EEE1', Scrub:'#E7ECE1', Serum:'#EFE3CE'};
  return map[cat] || '#F3EEE1';
}

/* Returns the HTML for a product's media (image/video), falling back to
   the generic icon placeholder if no real media has been added yet. */
function productMediaHTML(p){
  const m = p.media && p.media[0];
  if(!m){
    return ICONS[p.icon] || '';
  }
  if(m.type === 'video'){
    return `<video src="${m.src}" autoplay muted loop playsinline></video>`;
  }
  return `<img src="${m.src}" alt="">`;
}

function productCardHTML(p){
  const tr = tp(p.id);
  return `
  <div class="product-card reveal in" onclick="openProduct(${p.id})">
    <div class="product-media" style="background:${mediaColor(p.catKey)}">
      <span class="product-tag">${t().tags[p.tagKey]}</span>
      ${productMediaHTML(p)}
      <button class="product-quickadd" onclick="event.stopPropagation();quickAdd(${p.id})" aria-label="${t().product.addToCart}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
    <div class="product-body">
      <span class="product-cat">${t().categories[p.catKey]}</span>
      <h3>${tr.name}</h3>
      <p class="product-desc">${tr.desc.slice(0,66)}…</p>
      <div class="product-rating"><span class="stars">${stars(p.rating)}</span><span>${p.rating} (${p.reviews})</span></div>
      <div class="product-foot">
        <span class="product-price">${p.price} DZD</span>
        <button class="add-btn" onclick="event.stopPropagation();quickAdd(${p.id})">${t().product.addToCart}</button>
      </div>
    </div>
  </div>`;
}

function renderGrids(){
  document.getElementById('whyGrid').innerHTML = t().whyCards.map((w,i)=>`
    <div class="why-card reveal in"><div class="icon">${whyIcons[i]}</div><h3>${w.title}</h3><p>${w.text}</p></div>`).join('');

  document.getElementById('featuredGrid').innerHTML = products.slice(0,8).map(productCardHTML).join('');
  document.getElementById('bestGrid').innerHTML = products.filter(p=>p.tagKey==='Best Seller').concat(products.slice(0,4)).slice(0,4).map(productCardHTML).join('');
  document.getElementById('newSlider').innerHTML = products.filter(p=>p.tagKey==='New').concat(products.slice(0,3)).slice(0,6).map(productCardHTML).join('');

  document.getElementById('commitGrid').innerHTML = t().commitItems.map((title,i)=>`
    <div class="commit-item"><div class="icon">${commitIcons[i]}</div><h4>${title}</h4></div>`).join('');

  document.getElementById('faqList').innerHTML = t().faq.items.map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFaq(${i})"><span>${f.q}</span><span class="plus"></span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');

  const wilayaSelect = document.getElementById('wilayaSelect');
  if(wilayaSelect){
    wilayaSelect.innerHTML = `<option value="">${t().checkout.selectWilaya}</option>` +
      t().wilayas.map(w=>`<option>${w}</option>`).join('');
  }
}

function toggleFaq(i){
  const item = document.getElementById('faq-'+i);
  const answer = item.querySelector('.faq-a');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el=>{
    el.classList.remove('open'); el.querySelector('.faq-a').style.maxHeight = null;
  });
  if(!isOpen){ item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
}

/* ============================================================
   STATIC TEXT TRANSLATION (data-i18n walker)
   ============================================================ */
function resolveKey(key){
  return key.split('.').reduce((obj,k)=> (obj ? obj[k] : undefined), t());
}
function applyStaticTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const val = resolveKey(el.getAttribute('data-i18n'));
    if(typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const val = resolveKey(el.getAttribute('data-i18n-placeholder'));
    if(typeof val === 'string') el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
    const val = resolveKey(el.getAttribute('data-i18n-aria'));
    if(typeof val === 'string') el.setAttribute('aria-label', val);
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = t().dir;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
}

function setLang(newLang){
  lang = newLang;
  localStorage.setItem('cactuvia_lang', lang);
  applyStaticTranslations();
  renderGrids();
  renderCart();
  if(document.getElementById('view-checkout').classList.contains('active')) renderCheckout();
  if(currentProductId !== null && document.getElementById('view-product').classList.contains('active')){
    openProduct(currentProductId, true);
  }
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
  toggleMobile(false);
}

/* ============================================================
   VIEW SWITCHING
   ============================================================ */
function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
  if(name==='cart') renderCart();
  if(name==='checkout') renderCheckout();
}
function goHome(e){ if(e) e.preventDefault(); showView('home'); }
function scrollToSection(e,id){
  e.preventDefault();
  if(!document.getElementById('view-home').classList.contains('active')){
    showView('home');
    setTimeout(()=>document.getElementById(id).scrollIntoView({behavior:'smooth'}),60);
  } else {
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  }
}

/* ============================================================
   PRODUCT PAGE
   ============================================================ */
function galleryItemHTML(m){
  if(m.type === 'video'){
    return `<video src="${m.src}" controls autoplay muted loop playsinline></video>`;
  }
  return `<img src="${m.src}" alt="">`;
}

function openProduct(id, keepQty){
  currentProductId = id;
  if(!keepQty) pdQty = 1;
  const p = products.find(x=>x.id===id);
  const tr = tp(id);
  const mediaList = (p.media && p.media.length) ? p.media : [{type:'icon'}];

  document.getElementById('pdCrumb').textContent = tr.name;
  document.getElementById('galleryMain').style.background = mediaColor(p.catKey);
  document.getElementById('galleryMain').innerHTML = mediaList[0].type === 'icon' ? ICONS[p.icon] : galleryItemHTML(mediaList[0]);

  document.getElementById('galleryThumbs').innerHTML = mediaList.map((m,i)=>{
    const thumbInner = m.type === 'icon' ? ICONS[p.icon]
      : m.type === 'video' ? `<video src="${m.src}" muted playsinline></video>`
      : `<img src="${m.src}" alt="">`;
    return `<button class="${i===0?'active':''}" style="background:${mediaColor(p.catKey)}" onclick="thumbClick(this,${i},${id})">${thumbInner}</button>`;
  }).join('');

  document.getElementById('pdCat').textContent = t().categories[p.catKey];
  document.getElementById('pdTitle').textContent = tr.name;
  document.getElementById('pdStars').textContent = stars(p.rating);
  document.getElementById('pdRatingText').textContent = `${p.rating} (${p.reviews} ${t().product.reviewsSuffix})`;
  document.getElementById('pdPrice').textContent = p.price + ' DZD';
  document.getElementById('pdAvailText').textContent = t().product.inStock;
  document.getElementById('pdDesc').textContent = tr.desc;
  document.getElementById('pdQty').textContent = pdQty;
  document.getElementById('pdAddBtn').textContent = t().product.addToCart;
  document.getElementById('tab-ingredients').innerHTML = '<ul>'+tr.ingredients.map(i=>`<li>${i}</li>`).join('')+'</ul>';
  document.getElementById('tab-benefits').innerHTML = '<ul>'+tr.benefits.map(i=>`<li>${i}</li>`).join('')+'</ul>';
  document.getElementById('tab-directions').innerHTML = '<ul>'+tr.directions.map(i=>`<li>${i}</li>`).join('')+'</ul>';
  document.getElementById('tab-precautions').innerHTML = '<ul>'+tr.precautions.map(i=>`<li>${i}</li>`).join('')+'</ul>';
  document.querySelectorAll('.pd-tab-heads button').forEach(b=>{
    b.textContent = t().product['tab'+b.dataset.tab.charAt(0).toUpperCase()+b.dataset.tab.slice(1)];
  });
  switchPdTab('ingredients');
  document.getElementById('suggestedRow').innerHTML = products.filter(x=>x.id!==id).slice(0,4).map(productCardHTML).join('');
  document.getElementById('reviewsList').innerHTML = t().reviews.map(r=>`
    <div class="review-card"><div class="review-head"><strong>${r.name}</strong><span class="stars">${stars(p.rating)}</span></div><p>${r.text}</p></div>`).join('');
  showView('product');
}
function thumbClick(btn, index, id){
  const p = products.find(x=>x.id===id);
  const mediaList = (p.media && p.media.length) ? p.media : [{type:'icon'}];
  const m = mediaList[index];
  document.querySelectorAll('.gallery-thumbs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('galleryMain').innerHTML = m.type === 'icon' ? ICONS[p.icon] : galleryItemHTML(m);
}
function switchPdTab(tab){
  document.querySelectorAll('.pd-tab-heads button').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.pd-tab-panel').forEach(p=>p.classList.toggle('active', p.id==='tab-'+tab));
}
function changePdQty(delta){
  pdQty = Math.max(1, pdQty+delta);
  document.getElementById('pdQty').textContent = pdQty;
}
function addPdToCart(){
  addToCart(currentProductId, pdQty);
  flashCartBadge();
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(id, qty){
  const existing = cart.find(c=>c.id===id);
  if(existing){ existing.qty += qty; } else { cart.push({id, qty}); }
  updateCartBadge();
}
function quickAdd(id){ addToCart(id,1); flashCartBadge(); }
function flashCartBadge(){
  const badge = document.getElementById('cartBadge');
  badge.style.transform = 'scale(1.4)';
  setTimeout(()=>badge.style.transform='scale(1)',220);
}
function updateCartBadge(){
  const count = cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartBadge').textContent = count;
}
function cartTotalValue(){
  return cart.reduce((sum,c)=>{
    const p = products.find(x=>x.id===c.id);
    return sum + p.price*c.qty;
  },0);
}
function renderCart(){
  const itemsWrap = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const filledEl = document.getElementById('cartFilled');
  if(!itemsWrap) return;
  if(cart.length===0){
    emptyEl.style.display='block'; filledEl.style.display='none'; return;
  }
  emptyEl.style.display='none'; filledEl.style.display='block';
  itemsWrap.innerHTML = cart.map(c=>{
    const p = products.find(x=>x.id===c.id);
    const tr = tp(p.id);
    return `
    <div class="cart-item">
      <div class="thumb" style="background:${mediaColor(p.catKey)}">${productMediaHTML(p)}</div>
      <div>
        <h4>${tr.name}</h4>
        <div class="unit">${p.price} DZD ${t().cart.unit}</div>
        <div class="qty-selector" style="margin-top:10px;">
          <button onclick="changeCartQty(${p.id},-1)">−</button>
          <span>${c.qty}</span>
          <button onclick="changeCartQty(${p.id},1)">+</button>
        </div>
      </div>
      <div></div>
      <div>
        <div class="line-total">${p.price*c.qty} DZD</div>
        <button class="remove" onclick="removeFromCart(${p.id})">${t().cart.remove}</button>
      </div>
    </div>`;
  }).join('');
  const total = cartTotalValue();
  document.getElementById('cartSubtotal').textContent = total + ' DZD';
  document.getElementById('cartTotal').textContent = total + ' DZD';
}
function changeCartQty(id,delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(c=>c.id!==id);
  updateCartBadge(); renderCart();
}
function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  updateCartBadge(); renderCart();
}
function clearCart(){
  cart = []; updateCartBadge(); renderCart();
}

/* ============================================================
   CHECKOUT
   ============================================================ */
function renderCheckout(){
  const wrap = document.getElementById('checkoutLines');
  if(!wrap) return;
  wrap.innerHTML = cart.map(c=>{
    const p = products.find(x=>x.id===c.id);
    const tr = tp(p.id);
    return `<div class="order-line"><span>${tr.name} × ${c.qty}</span><span>${p.price*c.qty} DZD</span></div>`;
  }).join('') || `<p style="color:var(--ink-soft);font-size:14px;">${t().checkout.emptyCartMsg}</p>`;
  const total = cartTotalValue();
  document.getElementById('checkoutTotal').textContent = total + ' DZD';
}
function handleCheckoutSubmit(e){
  e.preventDefault();
  document.getElementById('confirmModal').classList.add('open');
}
function closeModal(){
  document.getElementById('confirmModal').classList.remove('open');
  cart = []; updateCartBadge();
  goHome();
}
function handleContactSubmit(e){
  e.preventDefault();
  e.target.reset();
  alert(t().contact.success);
}

/* ============================================================
   NEW ARRIVALS SLIDER
   ============================================================ */
function slideNew(dir){
  const slider = document.getElementById('newSlider');
  const factor = (t().dir === 'rtl') ? -1 : 1;
  slider.scrollBy({left: dir*300*factor, behavior:'smooth'});
}

/* ============================================================
   NAV / SCROLL EFFECTS
   ============================================================ */
function toggleMobile(open){
  document.getElementById('mobileMenu').classList.toggle('open', open);
}
window.addEventListener('scroll', ()=>{
  const nav = document.getElementById('nav');
  if(document.getElementById('view-home').classList.contains('active')){
    nav.classList.toggle('solid', window.scrollY > 60);
    const hero = document.getElementById('hero');
    const media = document.getElementById('heroMedia');
    if(hero && media && window.scrollY < window.innerHeight){
      media.style.transform = `translateY(${window.scrollY*0.25}px)`;
    }
  } else {
    nav.classList.add('solid');
  }
});

/* scroll reveal */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in'); });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ============================================================
   HERO ILLUSTRATION (organic botanical silhouette scene)
   ============================================================ */
document.getElementById('storyMedia').innerHTML = `
<svg viewBox="0 0 500 620" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="620" fill="#E7ECE1"/>
  <circle cx="250" cy="230" r="150" fill="#93A98D" opacity="0.4"/>
  <path d="M250 90c0 0-70 60-70 150a70 70 0 0 0 140 0c0-90-70-150-70-150Z" fill="#6E8B6C"/>
  <path d="M250 130c0 0-30 50-30 100" stroke="#7C2A3A" stroke-width="4" fill="none" stroke-linecap="round"/>
  <rect x="60" y="440" width="380" height="140" rx="24" fill="#EFE3CE"/>
  <rect x="90" y="470" width="60" height="80" rx="16" fill="#3F5B47" opacity="0.8"/>
  <rect x="165" y="490" width="60" height="60" rx="30" fill="#7C2A3A" opacity="0.75"/>
  <rect x="240" y="475" width="60" height="75" rx="14" fill="#3F5B47" opacity="0.6"/>
  <rect x="315" y="495" width="60" height="55" rx="26" fill="#93A98D"/>
</svg>`;


/* ============================================================
   INIT
   ============================================================ */
applyStaticTranslations();
renderGrids();
updateCartBadge();

/**
 * Locale routing (SEO-driven):
 *   /      -> English   (default, x-default)
 *   /fil/  -> Filipino
 *   /ja/   -> Japanese  (highest CTR market in Search Console)
 *   /zh/   -> Chinese (Traditional) — strong impression volume, zero clicks
 */
export type Locale = 'en' | 'fil' | 'ja' | 'zh';

export interface Translation {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
    htmlLang: string;
  };
  schema: {
    attractionName: string;
    attractionAlternateName: string;
    attractionDescription: string;
    attractionType: string;
    ratingValue: string;
    reviewCount: string;
  };
  nav: {
    skipToContent: string;
    navLabel: string;
    homeLabel: string;
    siteTagline: string;
    navOverview: string;
    navHistory: string;
    navVisit: string;
    navTransport: string;
    navNearby: string;
    navFacilities: string;
    navItinerary: string;
  };
  hero: {
    eyebrow: string;
    headingPrimary: string;
    headingAccent: string;
    subheading: string;
    cta1: string;
    cta2: string;
    statRegularLabel: string;
    statHoursLabel: string;
    statDurationLabel: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    breadcrumbLabel: string;
    crumbs: string[];
    intro: string;
    typeLabel: string;
    typeValue: string;
    ratingLabel: string;
    ratingValue: string;
    hoursLabel: string;
    hoursValue: string;
    addressLabel: string;
    addressValue: string;
    nearbyTitle: string;
    nearbyText: string;
    mapsLabel: string;
  };
  whyVisit: {
    eyebrow: string;
    title: string;
    lede: string;
    saveButton: string;
    year1: string;
    year1Text: string;
    year2: string;
    year2Text: string;
  };
  images: {
    entranceAlt: string;
    courtyardAlt: string;
    cannonAlt: string;
    heroAlt: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    ticketLabel: string;
    ticketRegularNote: string;
    ticketTip: string;
    hoursLabel: string;
    hoursNote: string;
    stayLabel: string;
    stayUnit: string;
    stayNote: string;
    bestTimeLabel: string;
    bestTimeTitle: string;
    bestTimeText: string;
    parkingLabel: string;
    parkingTitle: string;
    parkingText: string;
  };
  transport: {
    eyebrow: string;
    title: string;
    intro: string;
    routes: {
      title: string;
      text: string;
    }[];
  };
  nearby: {
    eyebrow: string;
    title: string;
    lede: string;
    places: {
      id: string;
      name: string;
      type: string;
      text: string;
      saveButton: string;
    }[];
  };
  history: {
    eyebrow: string;
    title: string;
    lede: string;
    timeline: {
      year: string;
      title: string;
      text: string;
    }[];
  };
  stories: {
    eyebrow: string;
    title: string;
    lede: string;
    items: {
      kind: string;
      title: string;
      text: string;
    }[];
  };
  facilities: {
    eyebrow: string;
    title: string;
    lede: string;
    items: {
      name: string;
      hint: string;
      text: string;
    }[];
  };
  food: {
    eyebrow: string;
    title: string;
    lede: string;
    items: {
      name: string;
      style: string;
      note: string;
    }[];
  };
  itinerary: {
    eyebrow: string;
    title: string;
    lede: string;
    clearButton: string;
    emptyState: string;
    privacyNote: string;
    savedLabel: string;
    removeLabel: string;
  };
  map: {
    eyebrow: string;
    title: string;
    address: string;
    note: string;
    iframeTitle: string;
  };
  sources: {
    eyebrow: string;
    title: string;
    lede: string;
    items: {
      name: string;
      url: string;
      label: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    title: string;
    subtitle: string;
    disclaimer: string;
    creditsSummary: string;
    creditsText: string;
    backToTop: string;
  };
  guides: {
    eyebrow: string;
    title: string;
    lede: string;
    readGuide: string;
  };
  languageSwitcher: {
    label: string;
    en: string;
    fil: string;
    ja: string;
    zh: string;
  };
  alternates: Record<Locale, string>;
}

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: 'Fort San Pedro Cebu: Entrance Fee, Hours & Historical Guide',
      description:
        "Plan your visit to Fort San Pedro, Cebu City's historic 18th-century Spanish fortress. Find updated entrance fees, opening hours, location map, and visitor tips.",
      ogTitle: 'Fort San Pedro Cebu: Entrance Fee, Hours & Historical Guide',
      ogDescription:
        "Plan your visit to Fort San Pedro, Cebu City's historic 18th-century Spanish fortress — updated entrance fees, opening hours, and visitor tips.",
      ogLocale: 'en_PH',
      htmlLang: 'en'
    },
    schema: {
      attractionName: 'Fort San Pedro',
      attractionAlternateName: 'Fuerte de San Pedro',
      attractionDescription: 'A Spanish-built triangular stone fortress in Cebu City, Philippines, dating back to 1738, now home to a garden and museum.',
      attractionType: 'Fortress',
      ratingValue: '4.2',
      reviewCount: '8047'
    },
    nav: {
      skipToContent: 'Skip to content',
      navLabel: 'Primary navigation',
      homeLabel: 'Fort San Pedro home',
      siteTagline: 'Cebu · Sugbo',
      navOverview: 'Overview',
      navHistory: 'History',
      navVisit: 'Visit',
      navTransport: 'Transport',
      navNearby: 'Nearby',
      navFacilities: 'Facilities',
      navItinerary: 'My itinerary'
    },
    hero: {
      eyebrow: 'Fuerte de San Pedro · Cebu City',
      headingPrimary: 'Stone, sea,',
      headingAccent: 'and history.',
      subheading: 'A compact triangular stone fort on the edge of Plaza Independencia—a powerful starting point for your heritage walk through downtown Cebu.',
      cta1: 'Plan your visit',
      cta2: 'View the map',
      statRegularLabel: 'Regular',
      statHoursLabel: 'Current hours',
      statDurationLabel: 'Recommended'
    },
    overview: {
      eyebrow: 'Overview',
      title: 'About Fort San Pedro',
      breadcrumbLabel: 'You are here',
      crumbs: ['Fort San Pedro', 'Cebu City', 'Cebu', 'Philippines'],
      intro: 'Welcome to <strong>Fort San Pedro</strong>, widely recognized as the central Spanish-era fortress of <strong>Cebu City</strong>. Located in the heart of <strong>Cebu</strong>, <strong>Philippines</strong>, this destination serves as a primary hub for travelers visiting the region.',
      typeLabel: 'Type',
      typeValue: 'Fortress',
      ratingLabel: 'Rating',
      ratingValue: '4.2 · 8,047 reviews',
      hoursLabel: 'Hours',
      hoursValue: '08:00 – 17:00',
      addressLabel: 'Address',
      addressValue: '7WR4+X7J, A. Pigafetta Street, Cebu City 6000, Philippines',
      nearbyTitle: 'Landmarks & Attractions Around Fort San Pedro',
      nearbyText: 'When visiting <strong>Fort San Pedro</strong>, visitors can easily explore surrounding historical landmarks and points of interest, including <strong>Basilica del Santo Niño</strong> and <strong>Magellan’s Cross</strong>.',
      mapsLabel: 'View on Google Maps'
    },
    whyVisit: {
      eyebrow: 'Why come here',
      title: 'Small footprint, vast story.',
      lede: 'Fort San Pedro began as a defensive structure for the first Spanish settlement in Cebu. The present stone structure takes the form of a triangular bastioned fort—coral-stone walls, vintage cannons, a garden courtyard, and elevated views from the ramparts.',
      saveButton: 'Save Fort to itinerary',
      year1: '1565',
      year1Text: 'The earliest fortification was established on this site; later rebuilt and reinforced in stone.',
      year2: '1738',
      year2Text: 'The present stone fort is generally dated to the 18th century, one of the most distinct Spanish-era military landmarks in Cebu.'
    },
    images: {
      entranceAlt: 'Stone gate and façade of Fort San Pedro',
      courtyardAlt: 'Garden courtyard inside Fort San Pedro',
      cannonAlt: 'Vintage cannon at Fort San Pedro',
      heroAlt: 'Main entrance of Fort San Pedro in Cebu City'
    },
    visit: {
      eyebrow: 'Practical guide',
      title: 'Before you step through the gate.',
      ticketLabel: 'Ticket / admission',
      ticketRegularNote: '₱40 for students and senior citizens per the current published city fee proposal retaining existing basic rates. Bring a valid ID for the discounted rate.',
      ticketTip: 'Note: fees may change; always confirm at the entrance on the day of your visit.',
      hoursLabel: 'Hours',
      hoursNote: 'Current listing: daily. Holidays, events, and maintenance may affect availability.',
      stayLabel: 'Stay',
      stayUnit: 'minutes',
      stayNote: 'Sufficient for the courtyard, wall walk, cannons, and displays; add more time if you enjoy history or photography.',
      bestTimeLabel: 'Best time',
      bestTimeTitle: 'Early morning or late afternoon',
      bestTimeText: 'More comfortable temperatures and better light on the stone walls. If you prefer a quieter courtyard, try opening hours rather than midday.',
      parkingLabel: 'Parking',
      parkingTitle: 'Limited, so arrive early.',
      parkingText: 'Parking is available around Plaza Independencia, but slots can fill up quickly during busy hours and events. Taxi/Grab is simpler if you do not want to hunt for a spot.'
    },
    transport: {
      eyebrow: 'Detailed transport',
      title: 'Getting to the fort.',
      intro: 'Search "Fort San Pedro" or "Plaza Independencia" on your ride app. The entrance is on A. Pigafetta Street, near Pier 1 and the downtown heritage area.',
      routes: [
        {
          title: 'From Mactan-Cebu International Airport',
          text: '<strong>Easiest:</strong> taxi or Grab directly to Fort San Pedro / Plaza Independencia. <strong>Budget option:</strong> MyBus from the airport to SM City Cebu, then jeepney or taxi/Grab for the final leg downtown. Do not budget an exact travel time as Cebu traffic varies considerably.'
        },
        {
          title: 'Jeepney / public transport',
          text: 'Look for routes passing through <strong>Plaza Independencia / Pier area</strong>. The 12I route is known to connect SM City Cebu to the Plaza Independencia–Fort San Pedro corridor. Ask the driver or conductor before boarding as routings may change.'
        },
        {
          title: 'Taxi / Grab',
          text: 'The most straightforward option from hotels, IT Park, Ayala, or SM. Pin <strong>Fort San Pedro, A. Pigafetta Street</strong>. For pickup, the edge of Plaza Independencia is sometimes easier than the gate itself when crowded.'
        },
        {
          title: 'From Cebu Pier 1',
          text: 'The fort sits near the port district; from Pier 1, a short walk or quick taxi/ride is practical depending on your luggage and the heat.'
        }
      ]
    },
    nearby: {
      eyebrow: 'Heritage loop',
      title: 'Do not stop at the fort.',
      lede: 'The best way to experience Fort San Pedro is to combine it with old downtown Cebu. Many of the city\'s most significant landmarks sit within a compact heritage corridor.',
      places: [
        { id: 'plaza', name: 'Plaza Independencia', type: 'Park · adjacent', text: 'A spacious green space immediately outside the fort—ideal for resting and beginning your heritage walk.', saveButton: 'Save to itinerary' },
        { id: 'magellans-cross', name: 'Magellan’s Cross', type: 'Heritage · downtown', text: 'One of Cebu\'s most recognizable landmarks, within a short walk from the fort.', saveButton: 'Save to itinerary' },
        { id: 'basilica', name: 'Basilica Minore del Santo Niño', type: 'Church · heritage', text: 'A major religious and historical site at the heart of old Cebu.', saveButton: 'Save to itinerary' },
        { id: 'museum-cebu', name: 'National Museum of the Philippines – Cebu', type: 'Museum · A. Pigafetta', text: 'A nearby museum that pairs well with the fort for deeper context on Cebu\'s history.', saveButton: 'Save to itinerary' },
        { id: 'cathedral', name: 'Cebu Metropolitan Cathedral', type: 'Church · downtown', text: 'Another prominent stop within the Cebu City heritage core.', saveButton: 'Save to itinerary' },
        { id: 'casa-gorordo', name: 'Casa Gorordo Museum', type: 'Museum · Parian', text: 'A heritage house showcasing domestic life and architecture of old Cebu.', saveButton: 'Save to itinerary' }
      ]
    },
    history: {
      eyebrow: 'History',
      title: 'Four centuries in a small fort.',
      lede: 'From a wooden defense to a stone fortress, Fort San Pedro has watched over more than four centuries of Cebu\'s story.',
      timeline: [
        { year: '1565', title: 'A Spanish foothold', text: 'In 1565, conquistador Miguel López de Legazpi arrived in Cebu and founded the first permanent Spanish settlement in the Philippines. A simple wooden fort was raised here as the settlement\'s first defense.' },
        { year: '1738', title: 'Rebuilt in stone', text: 'The wooden palisade gave way to a coral-stone fortress. Its triangular plan—three bastions named La Concepción, Ignacio de Loyola, and San Miguel—reflects the defensive architecture of the Spanish colonial period.' },
        { year: '1898', title: 'The revolution arrives', text: 'In the context of the Philippine Revolution, the fort was taken from its Spanish garrison by revolutionary forces in 1898, near the end of centuries of colonial rule.' },
        { year: '1900s–1940s', title: 'A new garrison', text: 'During the American colonial era the fort served as a military camp; in World War II it saw garrison duty again, and after the war it briefly housed the Cebu City zoo.' },
        { year: 'Today', title: 'Park, museum, garden', text: 'Restored in recent decades, the fort now opens to the public as a landscaped garden, a small museum, and a symbol of Cebu\'s layered history.' }
      ]
    },
    stories: {
      eyebrow: 'Stories & legends',
      title: 'More than the walls.',
      lede: 'Fortresses are not just stone—they also grow stories. Some of these are recorded in history; others live on in the folklore of Cebu.',
      items: [
        { kind: 'Documented history', title: 'Three bastions, three saints', text: 'The fort\'s three corners are named La Concepción, Ignacio de Loyola, and San Miguel—religious names that show how faith and defense were woven together in the Spanish colonial world.' },
        { kind: 'Local folklore', title: 'The hidden tunnel', text: 'Local lore says a secret tunnel once ran from the fort toward the Santo Niño church area. No confirmed passage has ever been found, but the story endures as one of Cebu\'s favorite what-ifs.' },
        { kind: 'Documented history', title: 'Coral from Cebu\'s waters', text: 'The walls were built from coral stone quarried nearby and lime mortar—materials that give the fort its pale, textured surface and tie its construction to the island\'s own coasts.' },
        { kind: 'Local memory', title: 'From fortress to zoo', text: 'Older Cebuano residents remember when the fort\'s courtyard briefly housed a small city zoo, before the space was restored as a garden and museum.' }
      ]
    },
    facilities: {
      eyebrow: 'Facilities',
      title: 'What is around you.',
      lede: 'A neutral guide to nearby services—we list types only, not specific shops or establishments.',
      items: [
        { name: 'Restrooms', hint: 'Inside the fort', text: 'Public restrooms are available inside the fort complex. Old stone paths can be uneven, so allow extra time.' },
        { name: 'Parking', hint: 'Plaza Independencia', text: 'Limited parking around Plaza Independencia fills up fast. Taxi or ride-hailing is usually easier.' },
        { name: 'Dining', hint: 'Downtown & port side', text: 'Local eateries serve grilled seafood, barbecue, noodle dishes, and home-style Filipino meals. Confirm opening hours before you go.' },
        { name: 'Accommodation', hint: 'Short walk away', text: 'Budget inns, hostels, mid-range hotels, and portside business hotels are within easy reach. There is no lodging inside the fort.' },
        { name: 'Shops & conveniences', hint: 'City center', text: 'Convenience stores, banks with ATMs, and souvenir shops are scattered across downtown. Water and snacks are easy to find.' },
        { name: 'Fuel & charging', hint: 'City streets', text: 'Petrol stations operate on major city routes; EV charging points are gradually appearing in Cebu City. Check your app for the nearest one.' }
      ]
    },
    food: {
      eyebrow: 'Nearby dining',
      title: 'After the stone, eat.',
      lede: 'A neutral taste of downtown Cebu—we describe food types only, never particular restaurants. Confirm current opening hours before going.',
      items: [
        { name: 'Grilled seafood & Filipino barbecue', style: 'Inihaw · casual', note: 'Grilled fish, squid, pork and chicken skewers, and classic Filipino barbecue served at streetside and casual eateries.' },
        { name: 'Noodles, dim sum & Chinese–Filipino', style: 'Wok · family-style', note: 'Wonton noodles, pancit, dim sum, and family-style rice-and-meat dishes from the city\'s Chinese–Filipino dining tradition.' },
        { name: 'Home-style Filipino meals', style: 'Lutong-bahay · budget', note: 'Daily cooked viands, rice meals, and soups in the affordable "lutong-bahay" tradition found across the downtown.' }
      ]
    },
    itinerary: {
      eyebrow: 'Local itinerary',
      title: 'Build your heritage checklist.',
      lede: 'Save the places you want to visit. The list is stored <strong>only on your device</strong> via localStorage—no account, no upload, no server.',
      clearButton: 'Clear entire list',
      emptyState: 'Nothing saved yet. Save the Fort or pick stops in the "Nearby" section.',
      privacyNote: 'Privacy note: itinerary data remains on the current browser/device until you clear it or delete browser storage.',
      savedLabel: 'Saved to itinerary',
      removeLabel: 'Remove'
    },
    map: {
      eyebrow: 'Location',
      title: 'Location & How to Visit Fort San Pedro in Cebu City',
      address: 'A. Pigafetta Street,<br />Cebu City 6000',
      note: 'Beside Plaza Independencia and near Cebu Pier 1.',
      iframeTitle: 'Map of Fort San Pedro, Cebu City'
    },
    sources: {
      eyebrow: 'Sources',
      title: 'Official sources & references.',
      lede: 'For official updates and regional tourism information, visit:',
      items: [
        { name: 'Philippines Department of Tourism', url: 'https://beta.tourism.gov.ph/', label: 'Philippines Official Tourism Portal' },
        { name: 'Cebu City Government', url: 'https://www.cebucity.gov.ph/', label: 'Cebu City official website' },
        { name: 'National Museum of the Philippines', url: 'https://www.nationalmuseum.gov.ph/', label: 'National Museum official website' },
        { name: 'Fort San Pedro on Google Maps', url: 'https://maps.app.goo.gl/MdpB9LcfKuXbGCmk8', label: 'View listing & reviews' }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions.',
      items: [
        { q: 'How much is the entrance fee at Fort San Pedro?', a: 'The current regular entrance fee reported in local news is ₱50; ₱40 for students and senior citizens. It is best to confirm at the entrance as policies may change.' },
        { q: 'What time does the fort open?', a: 'The current Google Maps listing shows 8:00 AM–5:00 PM daily. Hours may change on holidays, during events, or for maintenance.' },
        { q: 'How much time is enough for a visit?', a: 'For most visitors, 45–90 minutes is sufficient for the courtyard, ramparts, cannons, and displays. Add time if you also include Plaza Independencia and other downtown heritage sites.' },
        { q: 'Can I walk here from Magellan’s Cross?', a: 'Yes. Fort San Pedro, Plaza Independencia, Basilica del Santo Niño, and Magellan’s Cross are all within the same downtown heritage area and are practically combined in a single walking route.' },
        { q: 'Is there parking available?', a: 'Parking exists around Plaza Independencia, but space is limited and can fill up. Taxi/Grab or arriving early are usually easier options.' },
        { q: 'Is Fort San Pedro suitable for children and seniors?', a: 'The lower courtyard is reasonably accessible, but some staircases and rampart sections have uneven stone surfaces. Take your time and ask for assistance if needed.' },
        { q: 'Is there a museum inside Fort San Pedro?', a: 'Yes. The fort houses a small museum displaying historical artifacts, paintings, and memorabilia from the Spanish colonial period, alongside its garden courtyard and vintage cannons.' },
        { q: 'Can I take photos inside the fort?', a: 'Photography is generally allowed in the courtyard and museum areas. Some exhibits may restrict flash photography; respect posted signs and museum staff.' },
        { q: 'Are there restrooms, shops, and dining options near the fort?', a: 'Yes. Public restrooms are available inside the fort complex, and around Plaza Independencia and the downtown area you will find convenience stores, eateries, banks with ATMs, and lodging in various price ranges. As a non-commercial guide we describe types only, not specific establishments.' },
        { q: 'What is the history behind Fort San Pedro?', a: 'It began as a wooden defense for the first Spanish settlement founded by Miguel López de Legazpi in 1565, was rebuilt in coral stone around 1738 as a triangular fortress with three bastions, and has since served as a garrison, briefly as a city zoo, and today as a garden and museum.' },
        { q: 'Are guided tours available at Fort San Pedro?', a: 'There is no regularly scheduled guided tour. The fort is set up for self-guided visits with interpretive panels and a small museum. For large groups or school trips, ask at the entrance or contact Cebu City tourism offices ahead of time to arrange assistance.' },
        { q: 'Can I do a prenup, wedding, or commercial photo shoot here?', a: 'Casual photography is generally allowed, but bringing tripods, props, lighting, or a full crew usually requires permission from the fort administration and may involve an additional fee. Ask at the entrance before your shoot date.' },
        { q: 'What else is there to do in Cebu City near the fort?', a: 'Fort San Pedro sits inside a compact heritage corridor: Plaza Independencia is right outside the gate, and Magellan’s Cross, Basilica Minore del Santo Niño, Cebu Metropolitan Cathedral, and the National Museum of the Philippines – Cebu are all reachable on foot.' }
      ]
    },
    footer: {
      title: 'Fort San Pedro · Cebu',
      subtitle: 'Independent visitor guide',
      disclaimer: 'This is not the official website of Fort San Pedro, Cebu City Government, National Museum, or any government agency. Information is for trip planning purposes only; always confirm current fees, hours, and access rules before visiting.',
      creditsSummary: 'Photo credits',
      creditsText: 'Hero: xiquinhosilva, CC BY 2.0. Main entrance & courtyard: Eugene Alvin Villar, CC BY-SA 4.0. Cannon: Farro, public domain. Local copies are included in the project; see CREDITS.md for source pages and license notes.',
      backToTop: 'Back to top ↑'
    },
    guides: {
      eyebrow: 'Travel guides',
      title: 'Plan the rest of your Cebu itinerary.',
      lede: 'Longer reads on the practical questions visitors search for most: what things cost, what is nearby, and how to fit it all into one day.',
      readGuide: 'Read the guide'
    },
    languageSwitcher: {
      label: 'Language selector',
      en: 'English',
      fil: 'Filipino',
      ja: '日本語',
      zh: '繁體中文'
    },
    alternates: {
      en: '/',
      fil: '/fil/',
      ja: '/ja/',
      zh: '/zh/'
    }
  },
  fil: {
    meta: {
      title: 'Fort San Pedro Cebu: Bayad, Oras at Gabay sa Kasaysayan',
      description:
        'Planuhin ang pagbisita sa Fort San Pedro, ang makasaysayang kuta ng mga Espanyol sa Lungsod ng Cebu. Alamin ang pinakabagong entrance fee, oras ng pagbubukas, lokasyon, at mga travel tips.',
      ogTitle: 'Fort San Pedro Cebu: Bayad, Oras at Gabay sa Kasaysayan',
      ogDescription:
        'Planuhin ang pagbisita sa Fort San Pedro, ang makasaysayang kuta ng mga Espanyol sa Lungsod ng Cebu — pinakabagong entrance fee, oras, at mga travel tips.',
      ogLocale: 'fil_PH',
      htmlLang: 'fil'
    },
    schema: {
      attractionName: 'Fort San Pedro',
      attractionAlternateName: 'Kuta ng San Pedro',
      attractionDescription: 'Isang triangular na stone fortress na itinayo ng mga Espanyol sa Lungsod ng Cebu, Pilipinas, mula pa noong 1738, na ngayon ay may hardin at museo.',
      attractionType: 'Kuta (Fortress)',
      ratingValue: '4.2',
      reviewCount: '8047'
    },
    nav: {
      skipToContent: 'Laktawan patungo sa nilalaman',
      navLabel: 'Pangunahing nabigasyon',
      homeLabel: 'Fort San Pedro home',
      siteTagline: 'Cebu · Sugbo',
      navOverview: 'Pangkalahatang-ideya',
      navHistory: 'Kasaysayan',
      navVisit: 'Pagbisita',
      navTransport: 'Transportasyon',
      navNearby: 'Malapit',
      navFacilities: 'Mga Pasilidad',
      navItinerary: 'Aking itinerary'
    },
    hero: {
      eyebrow: 'Kuta ng San Pedro · Lungsod ng Cebu',
      headingPrimary: 'Bato, dagat,',
      headingAccent: 'at kasaysayan.',
      subheading: 'Isang compact na tatsulok na stone fort sa gilid ng Plaza Independencia—isang matibay na simula para sa iyong heritage walk sa downtown Cebu.',
      cta1: 'Plano ang pagbisita',
      cta2: 'Tingnan ang mapa',
      statRegularLabel: 'Regular',
      statHoursLabel: 'Kasalukuyang oras',
      statDurationLabel: 'Inirerekomenda'
    },
    overview: {
      eyebrow: 'Pangkalahatang-ideya',
      title: 'Tungkol sa Fort San Pedro',
      breadcrumbLabel: 'Narito ka',
      crumbs: ['Fort San Pedro', 'Lungsod ng Cebu', 'Cebu', 'Pilipinas'],
      intro: 'Maligayang pagdating sa <strong>Fort San Pedro</strong>, kinikilala bilang sentral na Spanish-era fortress ng <strong>Lungsod ng Cebu</strong>. Matatagpuan sa gitna ng <strong>Cebu</strong>, <strong>Pilipinas</strong>, ang destinasyong ito ay nagsisilbing pangunahing hub para sa mga manlalakbay na bumibisita sa rehiyon.',
      typeLabel: 'Uri',
      typeValue: 'Kuta',
      ratingLabel: 'Rating',
      ratingValue: '4.2 · 8,047 review',
      hoursLabel: 'Oras',
      hoursValue: '08:00 – 17:00',
      addressLabel: 'Address',
      addressValue: '7WR4+X7J, A. Pigafetta Street, Lungsod ng Cebu 6000, Pilipinas',
      nearbyTitle: 'Mga Landmark at Atraksyon Malapit sa Fort San Pedro',
      nearbyText: 'Kapag bumibisita sa <strong>Fort San Pedro</strong>, madaling ma-explore ng mga bisita ang mga kalapit na makasaysayang landmark at punto ng interes, kabilang ang <strong>Basilica del Santo Niño</strong> at <strong>Magellan’s Cross</strong>.',
      mapsLabel: 'Tingnan sa Google Maps'
    },
    whyVisit: {
      eyebrow: 'Bakit pumunta rito',
      title: 'Maliit ang bakas, malaki ang kuwento.',
      lede: 'Nagsimula ang Fort San Pedro bilang depensa para sa unang Spanish settlement sa Cebu. Ang kasalukuyang stone structure ay hugis tatsulok na bastioned fort—mga pader na koral-stone, mga lumang kanyon, garden courtyard, at tanawin mula sa ramparts.',
      saveButton: 'I-save ang Fort sa itinerary',
      year1: '1565',
      year1Text: 'Itinatag ang unang fortification sa lugar na ito; kalaunan ay muling itinayo at pinatibay sa bato.',
      year2: '1738',
      year2Text: 'Ang kasalukuyang stone fort ay karaniwang itinuturing mula sa ika-18 siglo, isa sa mga pinakanatatanging Spanish-era military landmark sa Cebu.'
    },
    images: {
      entranceAlt: 'Pintuang bato at harapan ng Fort San Pedro',
      courtyardAlt: 'Garden courtyard sa loob ng Fort San Pedro',
      cannonAlt: 'Lumang kanyon sa Fort San Pedro',
      heroAlt: 'Pangunahing pasukan ng Fort San Pedro sa Lungsod ng Cebu'
    },
    visit: {
      eyebrow: 'Praktikal na gabay',
      title: 'Bago ka pumasok sa tarangkahan.',
      ticketLabel: 'Tiket / bayad',
      ticketRegularNote: '₱40 para sa mga estudyante at senior citizen ayon sa kasalukuyang nailathalang city fee proposal na nagpapanatili ng umiiral na batayang halaga. Magdala ng valid ID para sa may diskwentong halaga.',
      ticketTip: 'Paunawa: maaaring magbago ang bayad; laging kumpirmahin sa pasukan sa araw ng iyong pagbisita.',
      hoursLabel: 'Oras',
      hoursNote: 'Kasalukuyang listahan: araw-araw. Maaaring maapektuhan ng mga holiday, event, at maintenance.',
      stayLabel: 'Tagal',
      stayUnit: 'minuto',
      stayNote: 'Sapat para sa courtyard, wall walk, mga kanyon, at display; dagdagan ang oras kung mahilig ka sa kasaysayan o potograpiya.',
      bestTimeLabel: 'Pinakamagandang oras',
      bestTimeTitle: 'Maagang umaga o huling bahagi ng hapon',
      bestTimeText: 'Mas komportable ang init at mas maganda ang liwanag sa mga pader na bato. Kung mas gusto mo ang tahimik na courtyard, subukan ang opening hours kaysa tanghali.',
      parkingLabel: 'Paradahan',
      parkingTitle: 'Limitado, kaya dumating nang maaga.',
      parkingText: 'May paradahan sa paligid ng Plaza Independencia, ngunit maaaring mapuno ang espasyo lalo na sa mga busy na oras at event. Mas simple ang taxi/Grab kung ayaw mong maghanap ng slot.'
    },
    transport: {
      eyebrow: 'Detalyadong transportasyon',
      title: 'Punta sa kuta.',
      intro: 'I-search ang "Fort San Pedro" o "Plaza Independencia" sa iyong ride app. Ang pasukan ay nasa A. Pigafetta Street, malapit sa Pier 1 at downtown heritage area.',
      routes: [
        {
          title: 'Mula sa Mactan-Cebu International Airport',
          text: '<strong>Pinakamadali:</strong> taxi o Grab nang diretso sa Fort San Pedro / Plaza Independencia. <strong>Budget option:</strong> MyBus mula sa airport patungong SM City Cebu, pagkatapos ay jeepney o taxi/Grab para sa huling bahagi patungong downtown. Huwag magtakda ng eksaktong oras ng biyahe dahil mabilis magbago ang trapiko sa Cebu.'
        },
        {
          title: 'Jeepney / pampublikong sasakyan',
          text: 'Maghanap ng mga rutang dumadaan sa <strong>Plaza Independencia / Pier area</strong>. Ang ruta 12I ay kilalang nag-uugnay sa SM City Cebu patungong Plaza Independencia–Fort San Pedro corridor. Magtanong sa drayber o konduktor bago sumakay dahil maaaring magbago ang ruta.'
        },
        {
          title: 'Taxi / Grab',
          text: 'Ito ang pinakadirektang opsyon mula sa mga hotel, IT Park, Ayala, o SM. I-pin ang <strong>Fort San Pedro, A. Pigafetta Street</strong>. Para sa pickup, kung minsan ay mas madali sa gilid ng Plaza Independencia kaysa mismong tarangkahan kapag maraming tao.'
        },
        {
          title: 'Mula sa Cebu Pier 1',
          text: 'Ang kuta ay malapit sa port district; mula sa Pier 1, praktikal ang maikling lakad o mabilis na taxi/ride depende sa iyong mga bagahe at init ng panahon.'
        }
      ]
    },
    nearby: {
      eyebrow: 'Heritage loop',
      title: 'Huwag huminto sa kuta.',
      lede: 'Ang pinakamagandang paraan upang maranasan ang Fort San Pedro ay pagsamahin ito sa lumang downtown Cebu. Marami sa mga pinakamahalagang landmark ng lungsod ay nasa loob ng isang compact na heritage corridor.',
      places: [
        { id: 'plaza', name: 'Plaza Independencia', type: 'Parke · katabi lang', text: 'Isang malawak na green space sa labas mismo ng kuta—mainam para magpahinga at simulan ang iyong heritage walk.', saveButton: 'I-save sa itinerary' },
        { id: 'magellans-cross', name: 'Magellan’s Cross', type: 'Heritage · downtown', text: 'Isa sa mga pinakakilalang landmark sa Cebu, sa loob lamang ng maikling lakad mula sa fort.', saveButton: 'I-save sa itinerary' },
        { id: 'basilica', name: 'Basilica Minore del Santo Niño', type: 'Simbahan · heritage', text: 'Isang mahalagang relihiyoso at makasaysayang lugar sa sentro ng lumang Cebu.', saveButton: 'I-save sa itinerary' },
        { id: 'museum-cebu', name: 'National Museum of the Philippines – Cebu', type: 'Museo · A. Pigafetta', text: 'Kalapit na museo na mainam ipares sa fort para sa mas malalim na konteksto ng kasaysayan ng Cebu.', saveButton: 'I-save sa itinerary' },
        { id: 'cathedral', name: 'Cebu Metropolitan Cathedral', type: 'Simbahan · downtown', text: 'Isa pang kilalang hinto sa heritage core ng Lungsod ng Cebu.', saveButton: 'I-save sa itinerary' },
        { id: 'casa-gorordo', name: 'Casa Gorordo Museum', type: 'Museo · Parian', text: 'Isang heritage house na nagpapakita ng buhay-pambahay at arkitektura ng lumang Cebu.', saveButton: 'I-save sa itinerary' }
      ]
    },
    history: {
      eyebrow: 'Kasaysayan',
      title: 'Apat na siglo sa isang maliit na kuta.',
      lede: 'Mula sa kahoy na depensa hanggang sa batong kuta, ang Fort San Pedro ay saksi sa mahigit apat na siglo ng kuwento ng Cebu.',
      timeline: [
        { year: '1565', title: 'Unang yapak ng Espanya', text: 'Noong 1565, dumating si conquistador Miguel López de Legazpi sa Cebu at itinatag ang unang permanenteng Spanish settlement sa Pilipinas. Isang simpleng kahoy na kuta ang itinayo sa lugar na ito bilang unang depensa ng pamayanan.' },
        { year: '1738', title: 'Muling itinayo sa bato', text: 'Ang kahoy na depensa ay napalitan ng batong-koral na kuta. Ang tatsulok na disenyo nito—tatlong balwarteng pinangalanang La Concepción, Ignacio de Loyola, at San Miguel—ay nagpapakita ng arkitekturang depensiba ng panahon ng kolonyal na Espanyol.' },
        { year: '1898', title: 'Dumating ang rebolusyon', text: 'Sa konteksto ng Rebolusyong Pilipino, kinuha ng mga rebolusyonaryong pwersa ang kuta mula sa garison ng mga Espanyol noong 1898, sa pagtatapos ng daan-daang taon ng kolonyal na pamamahala.' },
        { year: '1900s–1940s', title: 'Bagong garison', text: 'Sa panahon ng Amerikanong kolonyal, nagsilbi ang kuta bilang kampo militar; noong Ikalawang Digmaang Pandaigdig muli itong ginamit bilang garison, at pagkatapos ng digmaan ay pansamantalang naging zoo ng Lungsod ng Cebu.' },
        { year: 'Ngayon', title: 'Parke, museo, hardin', text: 'Nirestauro sa mga nagdaang dekada, ang kuta ay bukas na ngayon sa publiko bilang hardin, maliit na museo, at simbolo ng mayamang kasaysayan ng Cebu.' }
      ]
    },
    stories: {
      eyebrow: 'Kuwento at alamat',
      title: 'Higit pa sa mga pader.',
      lede: 'Ang mga kuta ay hindi lamang bato—nagtatanim din sila ng mga kuwento. Ang ilan ay naitala sa kasaysayan; ang iba ay buhay sa mga alamat ng mga taga-Cebu.',
      items: [
        { kind: 'Nakasulat sa kasaysayan', title: 'Tatlong balwarte, tatlong santo', text: 'Ang tatlong sulok ng kuta ay pinangalanang La Concepción, Ignacio de Loyola, at San Miguel—mga relihiyosong pangalan na nagpapakita kung paanong ang pananampalataya at depensa ay magkaugnay sa kolonyal na mundo ng Espanya.' },
        { kind: 'Alamat ng mga taga-Cebu', title: 'Ang nakatagong tunel', text: 'Ayon sa lokal na alamat, may lihim na tunel mula sa kuta patungo sa lugar ng simbahan ng Santo Niño. Wala pang nakukumpirmang daanan ang natagpuan, ngunit nananatili pa rin ang kuwento bilang isa sa mga paboritong "paano kung" ng Cebu.' },
        { kind: 'Nakasulat sa kasaysayan', title: 'Korales mula sa tubig ng Cebu', text: 'Ang mga pader ay itinayo mula sa batong-koral na mina sa malapit at lime mortar—mga materyales na nagbibigay sa kuta ng maputlang texture at direktang nag-uugnay sa mga baybayin ng isla.' },
        { kind: 'Alaala ng mga taga-Cebu', title: 'Mula kuta hanggang zoo', text: 'Naaalala ng ilang nakatatandang Cebuano ang panahon na ang courtyard ng kuta ay pansamantalang nagsilbing maliit na zoo ng lungsod, bago ito nirestauro bilang hardin at museo.' }
      ]
    },
    facilities: {
      eyebrow: 'Mga pasilidad',
      title: 'Ano ang nasa paligid.',
      lede: 'Isang neutral na gabay sa mga serbisyong malapit—mga uri lamang ang inililista namin, hindi mga partikular na tindahan o establisimyento.',
      items: [
        { name: 'Banyo / palikuran', hint: 'Nasa loob ng kuta', text: 'May pampublikong palikuran sa loob ng fort complex. Maaaring hindi pantay ang mga lumang batong daanan, kaya maglaan ng oras.' },
        { name: 'Paradahan', hint: 'Plaza Independencia', text: 'Limitado ang paradahan sa paligid ng Plaza Independencia at mabilis mapuno. Karaniwang mas madali ang taxi o ride-hailing.' },
        { name: 'Kainan', hint: 'Downtown at port side', text: 'Ang mga lokal na kainan ay naghahain ng inihaw na seafood, barbecue, pansit, at lutong-bahay na pagkaing Pilipino. Kumpirmahin ang oras bago pumunta.' },
        { name: 'Tuluyan', hint: 'Maikling lakad', text: 'May mga budget inn, hostel, mid-range hotel, at portside business hotel sa madaling abot ng kuta. Walang tuluyan sa loob ng fort.' },
        { name: 'Tindahan at convenience', hint: 'Sentro ng lungsod', text: 'May mga convenience store, bangko na may ATM, at souvenir shop sa buong downtown. Madaling makahanap ng tubig at meryenda.' },
        { name: 'Gasolina at pagsingil', hint: 'Mga lansangan ng lungsod', text: 'May mga gasolinahan sa mga pangunahing ruta ng lungsod; unti-unti nang lumalabas ang EV charging points sa Lungsod ng Cebu. I-check ang iyong app para sa pinakamalapit.' }
      ]
    },
    food: {
      eyebrow: 'Kalapit na kainan',
      title: 'Pagkatapos ng bato, kumain.',
      lede: 'Isang neutral na pagtikim ng downtown Cebu—mga uri lamang ng pagkain ang inilalarawan namin, hindi mga partikular na restaurant. Kumpirmahin ang oras bago pumunta.',
      items: [
        { name: 'Inihaw na seafood at Filipino barbecue', style: 'Inihaw · casual', note: 'Inihaw na isda, pusit, baboy at manok skewers, at klasikong Filipino barbecue na inihahain sa mga kainan sa kalsada at casual eateries.' },
        { name: 'Noodles, dim sum at Chinese–Filipino', style: 'Wok · family-style', note: 'Wonton noodles, pancit, dim sum, at family-style na kanin-at-ulam mula sa Chinese–Filipino dining tradition ng lungsod.' },
        { name: 'Lutong-bahay na pagkaing Filipino', style: 'Lutong-bahay · budget', note: 'Araw-araw na nilutong ulam, rice meals, at sabaw sa abot-kayang tradisyon ng "lutong-bahay" na matatagpuan sa buong downtown.' }
      ]
    },
    itinerary: {
      eyebrow: 'Lokal na itinerary',
      title: 'Gawin ang iyong heritage checklist.',
      lede: 'I-save ang mga lugar na gusto mong bisitahin. Ang listahan ay itinatago <strong>lamang sa iyong device</strong> sa pamamagitan ng localStorage—walang account, walang upload, walang server.',
      clearButton: 'Burahin ang lahat sa listahan',
      emptyState: 'Wala pang nai-save. I-save ang Fort o pumili ng mga hinto sa seksyong "Malapit."',
      privacyNote: 'Paunawa sa privacy: ang datos ng itinerary ay mananatili sa kasalukuyang browser/device hanggang sa ito ay iyong burahin o i-delete ang browser storage.',
      savedLabel: 'Nai-save sa itinerary',
      removeLabel: 'Burahin'
    },
    map: {
      eyebrow: 'Lokasyon',
      title: 'Lokasyon at Paano Bisitahin ang Fort San Pedro sa Lungsod ng Cebu',
      address: 'A. Pigafetta Street,<br />Lungsod ng Cebu 6000',
      note: 'Sa tabi ng Plaza Independencia at malapit sa Cebu Pier 1.',
      iframeTitle: 'Mapa ng Fort San Pedro, Lungsod ng Cebu'
    },
    sources: {
      eyebrow: 'Mga Pinagmulan',
      title: 'Opisyal na mga pinagmulan at sanggunian.',
      lede: 'Para sa opisyal na mga update at impormasyong panturismo sa rehiyon, bisitahin ang:',
      items: [
        { name: 'Philippines Department of Tourism', url: 'https://beta.tourism.gov.ph/', label: 'Opisyal na tourism portal ng Pilipinas' },
        { name: 'Cebu City Government', url: 'https://www.cebucity.gov.ph/', label: 'Opisyal na website ng Lungsod ng Cebu' },
        { name: 'National Museum of the Philippines', url: 'https://www.nationalmuseum.gov.ph/', label: 'Opisyal na website ng National Museum' },
        { name: 'Fort San Pedro sa Google Maps', url: 'https://maps.app.goo.gl/MdpB9LcfKuXbGCmk8', label: 'Tingnan ang listing at mga review' }
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Mga madalas itanong.',
      items: [
        { q: 'Magkano ang entrance fee sa Fort San Pedro?', a: 'Ang kasalukuyang regular na entrance fee na iniulat sa lokal na balita ay ₱50; ₱40 para sa mga estudyante at senior citizen. Mabuting kumpirmahin pa rin sa pasukan dahil maaaring magbago ang mga polisiya.' },
        { q: 'Anong oras bukas ang kuta?', a: 'Ang kasalukuyang Google Maps listing ay nagpapakita ng 8:00 AM–5:00 PM araw-araw. Maaaring magbago ang oras tuwing holiday, kapag may event, o para sa maintenance.' },
        { q: 'Gaano katagal ang sapat para sa pagbisita?', a: 'Para sa karamihan, 45–90 minuto ay sapat na para sa courtyard, ramparts, mga kanyon, at mga display. Dagdagan ang oras kung isasama mo rin ang Plaza Independencia at iba pang downtown heritage sites.' },
        { q: 'Maaari bang lakarin mula sa Magellan’s Cross?', a: 'Oo. Ang Fort San Pedro, Plaza Independencia, Basilica del Santo Niño, at Magellan’s Cross ay nasa parehong downtown heritage area at praktikal na pagsamahin sa iisang walking route.' },
        { q: 'Mayroon bang paradahan?', a: 'May paradahan sa paligid ng Plaza Independencia, ngunit limitado ang espasyo at maaaring mapuno. Karaniwang mas madali ang taxi/Grab o pagdating nang maaga.' },
        { q: 'Angkop ba ang Fort San Pedro para sa bata at senior?', a: 'Ang mababang courtyard ay madaling ma-access, ngunit ang ilang hagdan at rampart section ay may hindi pantay na ibabaw ng bato. Maglaan ng oras at humingi ng tulong kung kinakailangan.' },
        { q: 'May museo ba sa loob ng Fort San Pedro?', a: 'Oo. Ang kuta ay may maliit na museo na nagpapakita ng mga makasaysayang artifact, painting, at memorabilia mula sa panahon ng kolonyal na Espanyol, kasama ang garden courtyard at mga lumang kanyon.' },
        { q: 'Maaari bang kumuha ng litrato sa loob ng kuta?', a: 'Karaniwang pinapayagan ang pagkuha ng litrato sa courtyard at museo. Ang ilang exhibit ay maaaring magbawal ng flash photography; sundin ang mga nakapaskil na paunawa at kawani ng museo.' },
        { q: 'May banyo, tindahan, at mga kainan ba malapit sa kuta?', a: 'Oo. May pampublikong palikuran sa loob ng fort complex, at sa paligid ng Plaza Independencia at downtown ay may mga convenience store, kainan, bangko na may ATM, at tuluyan sa iba\'t ibang presyo. Bilang non-commercial guide, mga uri lamang ang inilalarawan namin, hindi mga partikular na establisimyento.' },
        { q: 'Ano ang kasaysayan sa likod ng Fort San Pedro?', a: 'Nagsimula ito bilang kahoy na depensa para sa unang Spanish settlement na itinatag ni Miguel López de Legazpi noong 1565, muling itinayo sa batong-koral noong 1738 bilang tatsulok na kuta na may tatlong balwarte, at mula noon ay nagsilbing garison, pansamantalang zoo ng lungsod, at ngayon bilang hardin at museo.' },
        { q: 'May guided tour ba sa Fort San Pedro?', a: 'Walang regular na nakatakdang guided tour. Ang kuta ay naka-set up para sa self-guided na pagbisita na may mga interpretive panel at maliit na museo. Para sa malalaking grupo o school trip, magtanong sa pasukan o makipag-ugnayan nang maaga sa mga tourism office ng Lungsod ng Cebu.' },
        { q: 'Pwede bang mag-prenup, kasal, o commercial photo shoot dito?', a: 'Karaniwang pinapayagan ang kaswal na pagkuha ng litrato, ngunit ang pagdala ng tripod, props, ilaw, o buong crew ay karaniwang nangangailangan ng pahintulot mula sa administrasyon ng kuta at maaaring may dagdag na bayad. Magtanong sa pasukan bago ang petsa ng shoot.' },
        { q: 'Ano pa ang pwede gawin sa Lungsod ng Cebu malapit sa kuta?', a: 'Ang Fort San Pedro ay nasa loob ng compact na heritage corridor: ang Plaza Independencia ay nasa labas mismo ng tarangkahan, at ang Magellan’s Cross, Basilica Minore del Santo Niño, Cebu Metropolitan Cathedral, at National Museum of the Philippines – Cebu ay lahat ay kayang lakarin.' }
      ]
    },
    footer: {
      title: 'Fort San Pedro · Cebu',
      subtitle: 'Independent visitor guide',
      disclaimer: 'Hindi ito ang opisyal na website ng Fort San Pedro, Cebu City Government, National Museum, o anumang ahensya ng gobyerno. Ang impormasyon ay para lamang sa pagpaplano ng biyahe; laging kumpirmahin ang kasalukuyang bayad, oras, at mga panuntunan sa pagpasok bago bumisita.',
      creditsSummary: 'Photo credits',
      creditsText: 'Hero: xiquinhosilva, CC BY 2.0. Main entrance & courtyard: Eugene Alvin Villar, CC BY-SA 4.0. Cannon: Farro, public domain. Local copies are included in the project; see CREDITS.md for source pages and license notes.',
      backToTop: 'Bumalik sa itaas ↑'
    },
    guides: {
      eyebrow: 'Mga gabay sa paglalakbay',
      title: 'Planuhin ang natitirang bahagi ng iyong itinerary sa Cebu.',
      lede: 'Mas mahahabang artikulo tungkol sa mga praktikal na tanong na madalas hanapin ng mga bisita: magkano, ano ang malapit, at paano isiksik ang lahat sa isang araw.',
      readGuide: 'Basahin ang gabay'
    },
    languageSwitcher: {
      label: 'Pamimili ng wika',
      en: 'English',
      fil: 'Filipino',
      ja: '日本語',
      zh: '繁體中文'
    },
    alternates: {
      en: '/',
      fil: '/fil/',
      ja: '/ja/',
      zh: '/zh/'
    }
  },
  ja: {
    meta: {
      title: 'サンペドロ要塞（セブ島）観光ガイド：入場料・営業時間・アクセス',
      description:
        'セブ島最古のスペイン要塞「サンペドロ要塞」の最新観光情報。入場料（₱50）、営業時間（8:00〜17:00）、歴史、行き方、地図、周辺のおすすめスポットまでわかりやすく解説します。',
      ogTitle: 'サンペドロ要塞（セブ島）｜入場料・営業時間・行き方',
      ogDescription: 'セブ市ダウンタウンにある三角形状の石造り要塞、サンペドロ要塞の観光ガイドです。',
      ogLocale: 'ja_JP',
      htmlLang: 'ja'
    },
    schema: {
      attractionName: 'サンペドロ要塞',
      attractionAlternateName: 'フォート・サン・ペドロ',
      attractionDescription: '1738年に石造りで再建された、セブ市のスペイン植民地時代の要塞。現在は庭園と小さな博物館が公開されています。',
      attractionType: '要塞',
      ratingValue: '4.2',
      reviewCount: '8047'
    },
    nav: {
      skipToContent: '本文へスキップ',
      navLabel: 'メインナビゲーション',
      homeLabel: 'サンペドロ要塞 ホーム',
      siteTagline: 'セブ · セブ市',
      navOverview: '概要',
      navHistory: '歴史',
      navVisit: '訪問情報',
      navTransport: '交通アクセス',
      navNearby: '周辺スポット',
      navFacilities: '施設',
      navItinerary: 'マイ旅程'
    },
    hero: {
      eyebrow: 'フォート・サン・ペドロ · セブ市',
      headingPrimary: '石、海、',
      headingAccent: 'そして歴史。',
      subheading: 'プラザ・インデペンデンシアのほとりにたたずむ、コンパクトな三角形状の石造り要塞。セブ市中心部のヘリテージウォークは、ここから始まります。',
      cta1: '訪問を計画する',
      cta2: '地図を見る',
      statRegularLabel: '一般料金',
      statHoursLabel: '現在の営業時間',
      statDurationLabel: '滞在目安'
    },
    overview: {
      eyebrow: '概要',
      title: 'サンペドロ要塞について',
      breadcrumbLabel: '現在地',
      crumbs: ['サンペドロ要塞', 'セブ市', 'セブ州', 'フィリピン'],
      intro: '<strong>サンペドロ要塞</strong>へようこそ。<strong>フィリピン・セブ州セブ市</strong>の中心部にあり、この地域を訪れる旅行者がまず立ち寄る、スペイン統治時代を代表する要塞です。',
      typeLabel: '種類',
      typeValue: '要塞',
      ratingLabel: '評価',
      ratingValue: '4.2 · 8,047件のレビュー',
      hoursLabel: '営業時間',
      hoursValue: '08:00 – 17:00',
      addressLabel: '住所',
      addressValue: '7WR4+X7J, A. Pigafetta Street, Cebu City 6000, Philippines',
      nearbyTitle: 'サンペドロ要塞の周辺スポット',
      nearbyText: '<strong>サンペドロ要塞</strong>を訪れる際は、<strong>サント・ニーニョ・バシリカ</strong>や<strong>マゼランクロス</strong>など、周辺の歴史的ランドマークもあわせて巡ることができます。',
      mapsLabel: 'Googleマップで見る'
    },
    whyVisit: {
      eyebrow: '訪れる理由',
      title: '小さな敷地、大きな物語。',
      lede: 'サンペドロ要塞は、セブに築かれた最初のスペイン入植地を守る防御施設として始まりました。現在の石造りの姿は、サンゴ石の壁、古い大砲、庭の中庭、そして城壁からの眺めを備えた三角形状の稜堡式要塞です。',
      saveButton: '要塞を旅程に追加',
      year1: '1565',
      year1Text: 'この地に最初の防御施設が築かれ、後に石造りで再建・強化されました。',
      year2: '1738',
      year2Text: '現在の石造りの要塞は一般に18世紀のものとされ、セブを代表するスペイン統治時代の軍事遺産のひとつです。'
    },
    images: {
      entranceAlt: 'サンペドロ要塞の石造りの門とファサード',
      courtyardAlt: 'サンペドロ要塞内部の中庭',
      cannonAlt: 'サンペドロ要塞の古い大砲',
      heroAlt: 'セブ市サンペドロ要塞の正面入口'
    },
    visit: {
      eyebrow: '実用ガイド',
      title: '門をくぐる前に。',
      ticketLabel: '入場料',
      ticketRegularNote: '現在報じられている一般入場料は₱50、学生とシニアは₱40です。割引を受けるには身分証明書をご持参ください。',
      ticketTip: '※料金は変更される場合があります。当日、入口で必ずご確認ください。',
      hoursLabel: '営業時間',
      hoursNote: '現在の案内は毎日営業です。祝日、イベント、メンテナンスにより変更される場合があります。',
      stayLabel: '滞在時間',
      stayUnit: '分',
      stayNote: '中庭、城壁の遊歩道、大砲、展示を回るのに十分な時間です。歴史や写真がお好きな方は、さらに時間をみてください。',
      bestTimeLabel: 'おすすめの時間帯',
      bestTimeTitle: '早朝または夕方',
      bestTimeText: '気温が快適で、石壁にあたる光も美しくなります。静かな中庭を望むなら、日中よりも開園直後が狙い目です。',
      parkingLabel: '駐車場',
      parkingTitle: '台数が限られているので早めに。',
      parkingText: 'プラザ・インデペンデンシア周辺に駐車できますが、混雑時やイベント時はすぐに埋まります。駐車場を探したくない場合はタクシーやGrabが簡単です。'
    },
    transport: {
      eyebrow: '交通アクセス',
      title: '要塞への行き方。',
      intro: '配車アプリで「Fort San Pedro」または「Plaza Independencia」と検索してください。入口はセブ・ピエール1とダウンタウンのヘリテージエリア近く、A. Pigafetta Streetにあります。',
      routes: [
        {
          title: 'マクタン・セブ国際空港から',
          text: '<strong>簡単：</strong>タクシーまたはGrabでサンペドロ要塞／プラザ・インデペンデンシアへ直行。<strong>節約：</strong>空港からMyBusでSM City Cebuへ、そこからジープニーまたはタクシー／Grabでダウンタウンへ。セブの渋滞は変動が大きいため、正確な所要時間は見込まないでください。'
        },
        {
          title: 'ジープニー／公共交通機関',
          text: '<strong>プラザ・インデペンデンシア／ピエール地区</strong>を通る路線を探してください。12I系統はSM City Cebuとプラザ・インデペンデンシア〜サンペドロ要塞周辺を結ぶことで知られています。路線は変更される場合があるため、乗車前に運転手または車掌にご確認ください。'
        },
        {
          title: 'タクシー／Grab',
          text: 'ホテル、IT Park、Ayala、SMから最も分かりやすい手段です。<strong>Fort San Pedro, A. Pigafetta Street</strong>を目的地に設定してください。乗車場所は、混雑時には門の前よりもプラザ・インデペンデンシアの端の方がスムーズなことがあります。'
        },
        {
          title: 'セブ・ピエール1から',
          text: '要塞は港湾地区の近くにあります。ピエール1からは、荷物と暑さ次第で短い徒歩またはタクシー／配車が現実的です。'
        }
      ]
    },
    nearby: {
      eyebrow: 'ヘリテージルート',
      title: '要塞だけで終わらせないで。',
      lede: 'サンペドロ要塞を最もよく味わう方法は、旧市街ダウンタウンと組み合わせることです。セブ市の主要なランドマークの多くは、歩いて回れるヘリテージ回廊の中に集まっています。',
      places: [
        { id: 'plaza', name: 'プラザ・インデペンデンシア', type: '公園 · 隣接', text: '要塞のすぐ外にある広々とした緑地。休憩やヘリテージウォークの出発点に最適です。', saveButton: '旅程に追加' },
        { id: 'magellans-cross', name: 'マゼランクロス', type: 'ヘリテージ · ダウンタウン', text: 'セブを代表するランドマークのひとつで、要塞から徒歩圏内です。', saveButton: '旅程に追加' },
        { id: 'basilica', name: 'サント・ニーニョ・バシリカ', type: '教会 · ヘリテージ', text: '旧市街セブの中心にある、宗教的にも歴史的にも重要な場所です。', saveButton: '旅程に追加' },
        { id: 'museum-cebu', name: 'フィリピン国立博物館 セブ館', type: '博物館 · A. Pigafetta', text: '要塞とあわせて訪れると、セブの歴史への理解が深まる博物館です。', saveButton: '旅程に追加' },
        { id: 'cathedral', name: 'セブ・メトロポリタン大聖堂', type: '教会 · ダウンタウン', text: 'セブ市ヘリテージ地区にある、もうひとつの主要な立ち寄り先です。', saveButton: '旅程に追加' },
        { id: 'casa-gorordo', name: 'カサ・ゴロルド博物館', type: '博物館 · Parian', text: '旧市街セブの暮らしと建築を伝えるヘリテージハウスです。', saveButton: '旅程に追加' }
      ]
    },
    history: {
      eyebrow: '歴史',
      title: '小さな要塞の四世紀。',
      lede: '木造の防御施設から石造りの要塞へ。サンペドロ要塞は、セブの四世紀以上にわたる物語を見つめてきました。',
      timeline: [
        { year: '1565', title: 'スペインの足場', text: '1565年、コンキスタドールのミゲル・ロペス・デ・レガスピがセブに到着し、フィリピン初の恒久的なスペイン入植地を築きました。この地には入植地を守るための簡素な木造の砦が建てられました。' },
        { year: '1738', title: '石で再建', text: '木の柵はサンゴ石の要塞へと置き換わりました。ラ・コンセプシオン、イグナシオ・デ・ロヨラ、サン・ミゲルと名付けられた三つの稜堡を持つ三角形の平面は、スペイン植民地時代の防御建築を反映しています。' },
        { year: '1898', title: '革命の到来', text: 'フィリピン革命の中、1898年に要塞は革命勢力によってスペイン守備隊から奪われ、数世紀にわたる植民地支配が終わりに近づきました。' },
        { year: '1900年代–1940年代', title: '新たな駐屯地', text: 'アメリカ統治時代には軍のキャンプとして使われ、第二次世界大戦中には再び駐屯地となり、戦後には一時的にセブ市の動物園として使われました。' },
        { year: '現在', title: '公園、博物館、庭園', text: '近年に修復された要塞は、整備された庭園、小さな博物館、そしてセブの重層的な歴史の象徴として一般に公開されています。' }
      ]
    },
    stories: {
      eyebrow: '物語と伝説',
      title: '壁だけではない。',
      lede: '要塞はただの石ではありません。そこには物語も育ちます。歴史に記録されたものもあれば、セブの民間伝承として生き続けるものもあります。',
      items: [
        { kind: '記録された歴史', title: '三つの稜堡、三つの聖人', text: '要塞の三つの角はラ・コンセプシオン、イグナシオ・デ・ロヨラ、サン・ミゲルと名付けられています。信仰と防御がスペイン植民地世界でいかに結びついていたかを示す宗教的な名前です。' },
        { kind: '地元の伝説', title: '隠された隧道', text: '地元の言い伝えでは、かつて要塞からサント・ニーニョ教会方面へ秘密の隧道が伸びていたとされます。確認された通路は見つかっていませんが、セブで最も愛される「もしも」のひとつとして語り継がれています。' },
        { kind: '記録された歴史', title: 'セブの海からのサンゴ', text: '壁は近くで採れたサンゴ石と石灰モルタルで築かれました。この素材が要塞に淡く凹凸のある表情を与え、その建設を島自身の海岸線に結びつけています。' },
        { kind: '地元の記憶', title: '要塞から動物園へ', text: 'セブの年配の住民の中には、中庭が一時的に小さな市営動物園として使われていた時代を覚えている人もいます。その後、庭園と博物館として修復されました。' }
      ]
    },
    facilities: {
      eyebrow: '施設',
      title: '周囲にあるもの。',
      lede: '近隣のサービスに関する中立的なガイドです。具体的な店舗や事業者ではなく、種類のみを掲載しています。',
      items: [
        { name: 'トイレ', hint: '要塞内', text: '要塞敷地内に公衆トイレがあります。古い石畳は凹凸があるため、時間に余裕を持ってください。' },
        { name: '駐車場', hint: 'プラザ・インデペンデンシア', text: 'プラザ・インデペンデンシア周辺の駐車場は限られており、すぐに埋まります。タクシーや配車アプリの方が一般的に簡単です。' },
        { name: '食事', hint: 'ダウンタウン＆港側', text: '地元の食堂では、焼き魚などのシーフード、バーベキュー、麺料理、家庭的なフィリピン料理が楽しめます。営業時間は事前にご確認ください。' },
        { name: '宿泊', hint: '徒歩圏内', text: '格安宿、ホステル、中級ホテル、港側のビジネスホテルが手軽に利用できる範囲にあります。要塞内に宿泊施設はありません。' },
        { name: '店舗・コンビニ', hint: '市内中心部', text: 'コンビニエンスストア、ATMのある銀行、土産物店がダウンタウンに点在しています。水や軽食は簡単に見つかります。' },
        { name: '給油・充電', hint: '市内の通り', text: '主要な通りにガソリンスタンドがあり、セブ市ではEV充電スポットも徐々に増えています。最寄りはアプリでご確認ください。' }
      ]
    },
    food: {
      eyebrow: '近隣の食事',
      title: '石の後は、食べる。',
      lede: 'ダウンタウン・セブを中立的に味わうために、特定のレストランではなく料理の種類のみを紹介します。営業時間は事前にご確認ください。',
      items: [
        { name: 'グリルシーフードとフィリピンバーベキュー', style: 'イニハウ · カジュアル', note: '焼き魚、イカ、豚・鶏の串焼き、定番のフィリピンバーベキューを、屋台や気軽な食堂で提供しています。' },
        { name: '麺・飲茶・中華フィリピン料理', style: '中華鍋 · ファミリースタイル', note: 'ワンタン麺、パンシット、飲茶、そして中華系フィリピン料理の家庭的なご飯とおかずの数々。' },
        { name: '家庭的なフィリピン料理', style: 'ルートン・バハイ · 予算向け', note: '日替わりのおかず、ご飯もの、スープを、ダウンタウンのあちこちで手頃な「ルートン・バハイ」スタイルで提供しています。' }
      ]
    },
    itinerary: {
      eyebrow: 'ローカル旅程',
      title: 'ヘリテージのチェックリストを作ろう。',
      lede: '訪れたい場所を保存できます。リストはlocalStorageにより<strong>お使いの端末にのみ</strong>保存されます。アカウント不要、アップロードなし、サーバーへの送信もありません。',
      clearButton: 'リストをすべて削除',
      emptyState: 'まだ保存されていません。要塞を保存するか、「周辺スポット」セクションで行き先を選んでください。',
      privacyNote: 'プライバシーに関する注記：旅程データは、削除するかブラウザの保存領域を消去するまで、現在のブラウザ／端末に残ります。',
      savedLabel: '旅程に保存しました',
      removeLabel: '削除'
    },
    map: {
      eyebrow: '所在地',
      title: 'セブ市サンペドロ要塞の所在地と訪問方法',
      address: 'A. Pigafetta Street,<br />Cebu City 6000',
      note: 'プラザ・インデペンデンシアに隣接し、セブ・ピエール1の近くです。',
      iframeTitle: 'セブ市サンペドロ要塞の地図'
    },
    sources: {
      eyebrow: '情報源',
      title: '公式の情報源と参考文献。',
      lede: '最新情報や地域の観光情報については、以下をご覧ください。',
      items: [
        { name: 'フィリピン観光省', url: 'https://beta.tourism.gov.ph/', label: 'フィリピン公式観光ポータル' },
        { name: 'セブ市政府', url: 'https://www.cebucity.gov.ph/', label: 'セブ市公式サイト' },
        { name: 'フィリピン国立博物館', url: 'https://www.nationalmuseum.gov.ph/', label: '国立博物館 公式サイト' },
        { name: 'Googleマップのサンペドロ要塞', url: 'https://maps.app.goo.gl/MdpB9LcfKuXbGCmk8', label: '掲載情報とレビューを見る' }
      ]
    },
    faq: {
      eyebrow: 'よくある質問',
      title: 'よくある質問。',
      items: [
        { q: 'サンペドロ要塞の入場料はいくらですか？', a: '地元報道によると、現在の一般入場料は₱50、学生とシニアは₱40です。方針は変更される可能性があるため、入口でご確認いただくのが確実です。' },
        { q: '要塞は何時から開いていますか？', a: '現在のGoogleマップの掲載情報では、毎日8:00〜17:00です。祝日、イベント、メンテナンスの際は変更される場合があります。' },
        { q: '見学にはどのくらい時間が必要ですか？', a: '多くの方にとって、中庭、城壁、大砲、展示を回るなら45〜90分で十分です。プラザ・インデペンデンシアや他のダウンタウンのヘリテージスポットも巡る場合は、さらに時間をみてください。' },
        { q: 'マゼランクロスから歩いて行けますか？', a: 'はい。サンペドロ要塞、プラザ・インデペンデンシア、サント・ニーニョ・バシリカ、マゼランクロスは同じダウンタウンのヘリテージエリア内にあり、実質的にひとつのウォーキングルートとして回れます。' },
        { q: '駐車場はありますか？', a: 'プラザ・インデペンデンシア周辺に駐車できますが、台数が限られ、満車になることもあります。タクシーやGrabを使うか、早めに到着する方が一般的に簡単です。' },
        { q: '子どもや高齢者でも楽しめますか？', a: '下の中庭は比較的アクセスしやすいですが、階段や城壁の一部は石の表面が凹凸しています。時間に余裕を持ち、必要に応じて助けを求めてください。' },
        { q: '要塞の中に博物館はありますか？', a: 'はい。要塞内には小さな博物館があり、スペイン植民地時代の歴史的遺物、絵画、記念品を展示しています。庭の中庭や古い大砲も見どころです。' },
        { q: '要塞の中で写真を撮ってもいいですか？', a: '中庭や博物館エリアでの撮影は一般的に許可されています。一部の展示ではフラッシュ撮影が制限される場合があります。掲示や博物館スタッフの指示に従ってください。' },
        { q: '要塞の近くにトイレ、店、食事処はありますか？', a: 'はい。要塞敷地内に公衆トイレがあり、プラザ・インデペンデンシアとダウンタウン周辺にはコンビニ、食堂、ATMのある銀行、さまざまな価格帯の宿泊施設があります。非商用ガイドとして、具体的な店舗ではなく種類のみを紹介しています。' },
        { q: 'ガイドツアーはありますか？', a: '定期開催のガイドツアーは確認されていません。園内には解説パネルがあり、展示は自由に見学できます。団体で訪問する場合は、事前にセブ市の観光窓口に問い合わせるとよいでしょう。' },
        { q: '婚礼写真や前撮りの撮影はできますか？', a: '通常の撮影は概ね可能ですが、三脚、道具、照明機材の持ち込みや本格的な撮影には管理者の許可が必要で、追加料金が発生する場合があります。撮影日の前に入口でご相談ください。' },
        { q: '要塞の近くで他に何ができますか？', a: 'サンペドロ要塞はコンパクトなヘリテージ回廊の中にあります。門のすぐ外がプラザ・インデペンデンシアで、マゼランクロス、サント・ニーニョ・バシリカ、セブ・メトロポリタン大聖堂、フィリピン国立博物館セブ館へはいずれも徒歩で行けます。' },
        { q: 'サンペドロ要塞の歴史を教えてください。', a: '1565年にミゲル・ロペス・デ・レガスピが築いた最初のスペイン入植地を守る木造の防御施設として始まり、1738年ごろに三つの稜堡を持つ三角形状のサンゴ石の要塞として再建されました。その後は駐屯地、一時的に市営動物園として使われ、現在は庭園と博物館として公開されています。' }
      ]
    },
    footer: {
      title: 'サンペドロ要塞 · セブ',
      subtitle: '独立系ビジターガイド',
      disclaimer: '本サイトは、サンペドロ要塞、セブ市政府、国立博物館、またはいかなる政府機関の公式サイトでもありません。情報は旅行計画の参考としてのみ提供しています。訪問前に必ず最新の料金、営業時間、入場規則をご確認ください。',
      creditsSummary: '写真クレジット',
      creditsText: 'ヒーロー画像: xiquinhosilva, CC BY 2.0。正面入口と中庭: Eugene Alvin Villar, CC BY-SA 4.0。大砲: Farro, パブリックドメイン。ローカルコピーはプロジェクトに含まれています。出典ページとライセンスの詳細は CREDITS.md をご覧ください。',
      backToTop: 'トップへ戻る ↑'
    },
    guides: {
      eyebrow: 'トラベルガイド',
      title: 'セブの旅程の残りを組み立てる。',
      lede: '訪問者が最も検索する実用的な疑問についての読み物：料金、周辺スポット、そして1日でどう回すか。',
      readGuide: 'ガイドを読む'
    },
    languageSwitcher: {
      label: '言語選択',
      en: 'English',
      fil: 'Filipino',
      ja: '日本語',
      zh: '繁體中文'
    },
    alternates: {
      en: '/',
      fil: '/fil/',
      ja: '/ja/',
      zh: '/zh/'
    }
  },
  zh: {
    meta: {
      title: '宿霧聖佩德羅堡 Fort San Pedro｜門票、營業時間、歷史攻略',
      description:
        '探索宿霧最古老的西班牙堡壘「聖佩德羅堡」。提供最新門票價格（₱50）、開放時間（8:00–17:00）、交通方式、歷史故事與周邊景點推薦，出發前先看這一篇。',
      ogTitle: '宿霧聖佩德羅堡 Fort San Pedro｜門票、營業時間、歷史攻略',
      ogDescription: '宿霧市區的三角形石造堡壘聖佩德羅堡，完整整理門票、開放時間、交通與周邊景點。',
      ogLocale: 'zh_TW',
      htmlLang: 'zh-Hant'
    },
    schema: {
      attractionName: '聖佩德羅堡',
      attractionAlternateName: 'Fort San Pedro',
      attractionDescription: '宿霧市的西班牙殖民時期堡壘，1738 年以珊瑚石重建為三角形要塞，現開放為花園與小型博物館。',
      attractionType: '堡壘',
      ratingValue: '4.2',
      reviewCount: '8047'
    },
    nav: {
      skipToContent: '跳至主要內容',
      navLabel: '主導覽列',
      homeLabel: '聖佩德羅堡 首頁',
      siteTagline: '宿霧 · 宿霧市',
      navOverview: '景點介紹',
      navHistory: '歷史',
      navVisit: '參觀資訊',
      navTransport: '交通方式',
      navNearby: '周邊景點',
      navFacilities: '周邊設施',
      navItinerary: '我的行程'
    },
    hero: {
      eyebrow: '聖佩德羅堡 · 宿霧市',
      headingPrimary: '石牆、海風、',
      headingAccent: '與四百年歷史。',
      subheading: '座落於獨立廣場旁的三角形石造堡壘，是走讀宿霧老城區最理想的起點。',
      cta1: '開始規劃行程',
      cta2: '查看地圖',
      statRegularLabel: '全票',
      statHoursLabel: '目前開放時間',
      statDurationLabel: '建議停留'
    },
    overview: {
      eyebrow: '景點介紹',
      title: '關於聖佩德羅堡',
      breadcrumbLabel: '目前位置',
      crumbs: ['聖佩德羅堡', '宿霧市', '宿霧省', '菲律賓'],
      intro: '歡迎來到<strong>聖佩德羅堡</strong>。它位於<strong>菲律賓宿霧省宿霧市</strong>市中心，是西班牙殖民時期最具代表性的堡壘，也是造訪宿霧的旅客必定停留的一站。',
      typeLabel: '類型',
      typeValue: '堡壘',
      ratingLabel: '評分',
      ratingValue: '4.2 · 8,047 則評論',
      hoursLabel: '開放時間',
      hoursValue: '08:00 – 17:00',
      addressLabel: '地址',
      addressValue: '7WR4+X7J, A. Pigafetta Street, Cebu City 6000, Philippines',
      nearbyTitle: '聖佩德羅堡周邊景點',
      nearbyText: '造訪<strong>聖佩德羅堡</strong>時，可以順遊周邊的歷史地標，包括<strong>聖嬰聖殿</strong>與<strong>麥哲倫十字架</strong>。',
      mapsLabel: '在 Google 地圖查看'
    },
    whyVisit: {
      eyebrow: '為什麼值得來',
      title: '腹地不大，故事很長。',
      lede: '聖佩德羅堡最初是為了守護宿霧第一個西班牙聚落而建。現存的石造堡壘為三角形棱堡式設計，擁有珊瑚石牆面、古砲、庭園中庭，以及從城牆望出去的視野。',
      saveButton: '將堡壘加入行程',
      year1: '1565',
      year1Text: '此地最早的防禦工事在此年建立，日後以石材重建並加固。',
      year2: '1738',
      year2Text: '現存的石造堡壘一般推定為十八世紀遺構，是宿霧最獨特的西班牙時期軍事地標之一。'
    },
    images: {
      entranceAlt: '聖佩德羅堡的石門與立面',
      courtyardAlt: '聖佩德羅堡內的庭園中庭',
      cannonAlt: '聖佩德羅堡的古砲',
      heroAlt: '宿霧市聖佩德羅堡的正門入口'
    },
    visit: {
      eyebrow: '實用資訊',
      title: '走進城門之前。',
      ticketLabel: '門票',
      ticketRegularNote: '目前當地報導的全票為 ₱50，學生與長者為 ₱40。享優惠票請攜帶有效證件。',
      ticketTip: '提醒：票價可能調整，請於參觀當天在入口再次確認。',
      hoursLabel: '開放時間',
      hoursNote: '目前公告為每日開放，但假日、活動或維護期間可能調整。',
      stayLabel: '停留時間',
      stayUnit: '分鐘',
      stayNote: '足以走完中庭、城牆步道、古砲與展覽；喜歡歷史或攝影的話可以多留一些時間。',
      bestTimeLabel: '最佳時段',
      bestTimeTitle: '清晨或傍晚',
      bestTimeText: '氣溫較舒適，光線打在石牆上也更好看。想要安靜的中庭，建議選開園時段而非正午。',
      parkingLabel: '停車',
      parkingTitle: '車位有限，建議早點到。',
      parkingText: '獨立廣場周邊可以停車，但人潮與活動時段很快就會客滿。不想找車位的話，搭計程車或 Grab 更省事。'
    },
    transport: {
      eyebrow: '交通方式',
      title: '怎麼到堡壘。',
      intro: '在叫車 App 搜尋「Fort San Pedro」或「Plaza Independencia」即可。入口位於 A. Pigafetta Street，靠近第一碼頭與老城區。',
      routes: [
        {
          title: '從馬克坦－宿霧國際機場出發',
          text: '<strong>最省事：</strong>搭計程車或 Grab 直達聖佩德羅堡／獨立廣場。<strong>省錢：</strong>先搭機場 MyBus 到 SM City Cebu，再轉吉普車或計程車／Grab 前往市區。宿霧車況變化大，不要預設精確的行車時間。'
        },
        {
          title: '吉普車／大眾運輸',
          text: '尋找行經<strong>獨立廣場／碼頭區</strong>的路線。12I 路線已知可從 SM City Cebu 連接到獨立廣場－聖佩德羅堡一帶。路線可能調整，上車前請先向司機或隨車人員確認。'
        },
        {
          title: '計程車／Grab',
          text: '從飯店、IT Park、Ayala 或 SM 出發最直接。目的地請設定<strong>Fort San Pedro, A. Pigafetta Street</strong>。人潮多時，在獨立廣場邊緣上車有時比在門口更容易。'
        },
        {
          title: '從宿霧第一碼頭出發',
          text: '堡壘就在港區附近。從第一碼頭視行李與天氣狀況，短程步行或搭計程車／叫車都很務實。'
        }
      ]
    },
    nearby: {
      eyebrow: '古蹟路線',
      title: '別只在堡壘停下來。',
      lede: '體驗聖佩德羅堡最好的方式，是把它和宿霧老城區串在一起。市內許多重要地標都集中在步行可達的古蹟廊道上。',
      places: [
        { id: 'plaza', name: '獨立廣場', type: '公園 · 緊鄰', text: '就在堡壘外的寬闊綠地，適合休息，也是展開古蹟步行的起點。', saveButton: '加入行程' },
        { id: 'magellans-cross', name: '麥哲倫十字架', type: '古蹟 · 市中心', text: '宿霧最具代表性的地標之一，從堡壘步行即可抵達。', saveButton: '加入行程' },
        { id: 'basilica', name: '聖嬰聖殿', type: '教堂 · 古蹟', text: '位於老宿霧核心地帶，兼具宗教與歷史意義。', saveButton: '加入行程' },
        { id: 'museum-cebu', name: '菲律賓國家博物館宿霧分館', type: '博物館 · A. Pigafetta', text: '與堡壘安排在一起，可以更深入了解宿霧的歷史脈絡。', saveButton: '加入行程' },
        { id: 'cathedral', name: '宿霧主教座堂', type: '教堂 · 市中心', text: '宿霧市古蹟核心區中另一個重要的停留點。', saveButton: '加入行程' },
        { id: 'casa-gorordo', name: '哥羅多故居博物館', type: '博物館 · Parian', text: '展示老宿霧生活樣貌與建築特色的古宅博物館。', saveButton: '加入行程' }
      ]
    },
    history: {
      eyebrow: '歷史',
      title: '一座小堡壘，四個世紀。',
      lede: '從木造防禦工事到石造要塞，聖佩德羅堡見證了宿霧四百多年來的變化。',
      timeline: [
        { year: '1565', title: '西班牙的立足點', text: '1565 年，征服者米格爾·洛佩斯·德·黎牙實比抵達宿霧，建立菲律賓第一個永久性的西班牙聚落，並在此興建簡易的木造砦堡作為第一批防禦工事。' },
        { year: '1738', title: '以石材重建', text: '木造柵欄被珊瑚石要塞取代。三個分別名為 La Concepción、Ignacio de Loyola 與 San Miguel 的棱堡構成三角形平面，反映西班牙殖民時期的防禦建築思維。' },
        { year: '1898', title: '革命來臨', text: '在菲律賓革命的脈絡下，革命勢力於 1898 年自西班牙守軍手中奪下堡壘，數百年的殖民統治接近尾聲。' },
        { year: '1900 年代–1940 年代', title: '新的駐軍地', text: '美國統治時期，堡壘作為軍營使用；二次大戰期間再度成為駐地，戰後曾短暫作為宿霧市立動物園。' },
        { year: '今日', title: '公園、博物館、花園', text: '近數十年經修復後，堡壘以花園、小型博物館，以及宿霧層層疊疊歷史的象徵，對外開放。' }
      ]
    },
    stories: {
      eyebrow: '故事與傳說',
      title: '不只是一道牆。',
      lede: '堡壘不只是石頭，也會長出故事。有些被寫進歷史，有些則活在宿霧的民間傳說裡。',
      items: [
        { kind: '史料記載', title: '三座棱堡，三位聖人', text: '堡壘的三個角分別命名為 La Concepción、Ignacio de Loyola 與 San Miguel，這些宗教性的名字說明了西班牙殖民世界中信仰與防禦如何交織。' },
        { kind: '在地傳說', title: '隱藏的隧道', text: '在地傳說中，曾有一條秘密隧道從堡壘通往聖嬰教堂一帶。至今沒有發現任何已確認的通道，但這個故事仍是宿霧最受歡迎的「如果當初」之一。' },
        { kind: '史料記載', title: '來自宿霧海域的珊瑚石', text: '牆體由附近開採的珊瑚石與石灰砂漿築成，這些材料賦予堡壘淡色而帶紋理的表面，也把它的興築與這座島嶼的海岸線連結起來。' },
        { kind: '在地記憶', title: '從要塞到動物園', text: '一些年長的宿霧人還記得，堡壘中庭曾短暫作為市立小型動物園，之後才修復為花園與博物館。' }
      ]
    },
    facilities: {
      eyebrow: '周邊設施',
      title: '附近有哪些機能。',
      lede: '中立介紹周邊服務，只列出類型，不指名特定店家或業者。',
      items: [
        { name: '洗手間', hint: '堡壘內', text: '堡壘園區內設有公共洗手間。舊石板路可能高低不平，請預留時間。' },
        { name: '停車', hint: '獨立廣場', text: '獨立廣場周邊車位有限且很快客滿。搭計程車或叫車通常比較省事。' },
        { name: '用餐', hint: '市中心與港邊', text: '在地餐館供應烤海鮮、燒烤、麵食與家常菲律賓菜。前往前請先確認營業時間。' },
        { name: '住宿', hint: '步行可達', text: '平價旅館、青年旅舍、中階飯店與港邊商務飯店都在容易抵達的範圍內，堡壘內沒有住宿設施。' },
        { name: '商店與機能', hint: '市中心', text: '便利商店、設有 ATM 的銀行與紀念品店遍布市中心，水和零食都很好買。' },
        { name: '加油與充電', hint: '市區道路', text: '主要幹道上都有加油站，宿霧市的電動車充電站也陸續增加。最近的據點請查你的 App。' }
      ]
    },
    food: {
      eyebrow: '周邊美食',
      title: '看完石牆，來吃點東西。',
      lede: '中立呈現宿霧市區的味道：只描述料理類型，不指名特定餐廳。前往前請先確認營業時間。',
      items: [
        { name: '炭烤海鮮與菲律賓烤肉', style: 'Inihaw · 平價', note: '烤魚、烤魷魚、豬肉與雞肉串，以及經典菲律賓烤肉，在路邊攤與平價餐館都吃得到。' },
        { name: '麵食、飲茶與華菲料理', style: '快炒 · 家庭式', note: '雲吞麵、菲式炒麵、飲茶，以及華裔菲律賓飲食傳統中的家庭式飯菜。' },
        { name: '家常菲律賓菜', style: 'Lutong-bahay · 平價', note: '每日現做的家常菜、飯類餐點與湯品，是市區常見、價格親民的 lutong-bahay 飲食方式。' }
      ]
    },
    itinerary: {
      eyebrow: '在地行程',
      title: '建立你的古蹟清單。',
      lede: '把想去的地點存起來。清單<strong>只儲存在你的裝置上</strong>（localStorage），不需要帳號、不會上傳、也不會送到任何伺服器。',
      clearButton: '清除整份清單',
      emptyState: '尚未儲存任何地點。先加入堡壘，或到「周邊景點」區挑選想去的站點。',
      privacyNote: '隱私說明：行程資料會留在目前的瀏覽器／裝置上，直到你清除或刪除瀏覽器儲存資料為止。',
      savedLabel: '已加入行程',
      removeLabel: '移除'
    },
    map: {
      eyebrow: '位置',
      title: '宿霧市聖佩德羅堡的位置與參觀方式',
      address: 'A. Pigafetta Street,<br />Cebu City 6000',
      note: '緊鄰獨立廣場，靠近宿霧第一碼頭。',
      iframeTitle: '宿霧市聖佩德羅堡地圖'
    },
    sources: {
      eyebrow: '資料來源',
      title: '官方來源與參考資料。',
      lede: '如需最新公告與區域旅遊資訊，請參考：',
      items: [
        { name: '菲律賓觀光部', url: 'https://beta.tourism.gov.ph/', label: '菲律賓官方觀光入口網站' },
        { name: '宿霧市政府', url: 'https://www.cebucity.gov.ph/', label: '宿霧市官方網站' },
        { name: '菲律賓國家博物館', url: 'https://www.nationalmuseum.gov.ph/', label: '國家博物館官方網站' },
        { name: 'Google 地圖上的聖佩德羅堡', url: 'https://maps.app.goo.gl/MdpB9LcfKuXbGCmk8', label: '查看商家資訊與評論' }
      ]
    },
    faq: {
      eyebrow: '常見問題',
      title: '常見問題。',
      items: [
        { q: '聖佩德羅堡的門票多少錢？', a: '依當地報導，目前全票為 ₱50，學生與長者為 ₱40。票務政策可能調整，建議在入口再次確認。' },
        { q: '堡壘幾點開放？', a: '目前 Google 地圖上的資訊為每日 8:00–17:00。假日、活動或維護期間可能調整。' },
        { q: '參觀需要多久？', a: '對多數旅客來說，走完中庭、城牆、古砲與展覽約 45–90 分鐘已足夠。若還要順遊獨立廣場與市區其他古蹟，請再多安排時間。' },
        { q: '可以從麥哲倫十字架走過來嗎？', a: '可以。聖佩德羅堡、獨立廣場、聖嬰聖殿與麥哲倫十字架都位於同一個市中心古蹟區，實務上可以串成一條步行路線。' },
        { q: '有停車位嗎？', a: '獨立廣場周邊有停車空間，但數量有限且可能客滿。搭計程車／Grab 或提早抵達通常比較容易。' },
        { q: '適合兒童與長者參觀嗎？', a: '下層中庭的動線相對友善，但部分階梯與城牆段的石板表面高低不平。請放慢腳步，必要時請求協助。' },
        { q: '堡壘裡面有博物館嗎？', a: '有。堡壘內設有小型博物館，展出西班牙殖民時期的歷史文物、畫作與紀念物，另有庭園中庭與古砲可看。' },
        { q: '堡壘內可以拍照嗎？', a: '中庭與博物館區域一般可以拍照，部分展覽可能限制使用閃光燈。請遵守現場告示與館方人員指示。' },
        { q: '堡壘附近有洗手間、商店和用餐地點嗎？', a: '有。堡壘園區內有公共洗手間，獨立廣場與市中心周邊也有便利商店、餐館、設有 ATM 的銀行與各式價位的住宿。作為非商業指南，我們只說明類型，不指名特定業者。' },
        { q: '有導覽服務嗎？', a: '目前沒有固定的導覽團。園內設有解說牌，展覽可自由參觀。團體或學校參訪建議事先向宿霧市觀光單位詢問安排。' },
        { q: '可以在這裡拍婚紗或商業攝影嗎？', a: '一般拍照通常沒有問題，但攜帶腳架、道具、燈光或整組攝影團隊通常需要堡壘管理單位同意，並可能加收費用。請在拍攝日前先到入口洽詢。' },
        { q: '堡壘附近還能去哪裡？', a: '聖佩德羅堡位於緊湊的古蹟廊道中：城門外就是獨立廣場，麥哲倫十字架、聖嬰聖殿、宿霧主教座堂與菲律賓國家博物館宿霧分館都可以步行抵達。' },
        { q: '聖佩德羅堡的歷史是什麼？', a: '它始於 1565 年米格爾·洛佩斯·德·黎牙實比建立的第一個西班牙聚落的木造防禦工事，約在 1738 年改建為擁有三座棱堡的三角形珊瑚石要塞，之後曾作為駐軍地、短暫的市立動物園，今日則是花園與博物館。' }
      ]
    },
    footer: {
      title: '聖佩德羅堡 · 宿霧',
      subtitle: '獨立旅客指南',
      disclaimer: '本站並非聖佩德羅堡、宿霧市政府、國家博物館或任何政府機關的官方網站。資訊僅供行程規劃參考，造訪前請務必確認最新的票價、開放時間與入園規定。',
      creditsSummary: '圖片來源',
      creditsText: '首圖：xiquinhosilva，CC BY 2.0。正門與中庭：Eugene Alvin Villar，CC BY-SA 4.0。古砲：Farro，公有領域。專案內含本地副本，出處頁面與授權說明請見 CREDITS.md。',
      backToTop: '回到頁首 ↑'
    },
    guides: {
      eyebrow: '旅行指南',
      title: '安排宿霧行程的其餘部分。',
      lede: '針對旅客最常搜尋的實用問題所寫的長文：花費多少、附近有什麼、以及如何在一天內走完。',
      readGuide: '閱讀指南'
    },
    languageSwitcher: {
      label: '語言選擇',
      en: 'English',
      fil: 'Filipino',
      ja: '日本語',
      zh: '繁體中文'
    },
    alternates: {
      en: '/',
      fil: '/fil/',
      ja: '/ja/',
      zh: '/zh/'
    }
  }
};

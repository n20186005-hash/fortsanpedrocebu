export type Locale = 'ceb' | 'en' | 'fil';

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
  };
  nav: {
    skipToContent: string;
    homeLabel: string;
    siteTagline: string;
    navVisit: string;
    navTransport: string;
    navNearby: string;
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
    address: string;
    note: string;
    iframeTitle: string;
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
  languageSwitcher: {
    label: string;
    ceb: string;
    en: string;
    fil: string;
  };
  alternates: {
    ceb: string;
    en: string;
    fil: string;
  };
}

export const translations: Record<Locale, Translation> = {
  ceb: {
    meta: {
      title: 'Fort San Pedro Cebu | Giya sa Pagbisita',
      description: 'Cebuano nga giya sa Fort San Pedro: entrance fee, oras, transport, parking, duol nga pagkaon, heritage stops, mapa ug itinerary checklist.',
      ogTitle: 'Fort San Pedro Cebu | Giya sa Pagbisita',
      ogDescription: 'Planohi ang imong pagbisita sa pinakailang Spanish-era stone fort sa Cebu City.',
      ogLocale: 'ceb_PH',
      htmlLang: 'ceb'
    },
    schema: {
      attractionName: 'Fort San Pedro',
      attractionAlternateName: 'Kuta sa San Pedro',
      attractionDescription: 'Usa ka makasaysayang tatsulok nga kuta sa Cebu City, duol sa Plaza Independencia ug pantalan.'
    },
    nav: {
      skipToContent: 'Adto sa sulod',
      homeLabel: 'Fort San Pedro home',
      siteTagline: 'Cebu · Sugbo',
      navVisit: 'Pagbisita',
      navTransport: 'Transport',
      navNearby: 'Duol',
      navItinerary: 'Akong itinerary'
    },
    hero: {
      eyebrow: 'Kuta sa San Pedro · Cebu City',
      headingPrimary: 'Bato, dagat,',
      headingAccent: 'ug kasaysayan.',
      subheading: 'Usa ka compact nga triangular stone fort sa daplin sa Plaza Independencia—usa ka kusgan nga pagsugod sa imong heritage walk sa downtown Cebu.',
      cta1: 'Planoha ang pagbisita',
      cta2: 'Tan-awa ang mapa',
      statRegularLabel: 'Regular',
      statHoursLabel: 'Kasamtangang oras',
      statDurationLabel: 'Igo nga oras'
    },
    whyVisit: {
      eyebrow: 'Ngano moanhi',
      title: 'Gamaya ang footprint, dako ang storya.',
      lede: 'Ang Fort San Pedro nagsugod isip depensa sa unang Spanish settlement sa Cebu. Ang kasamtangang stone structure nagdala sa porma sa usa ka triangular bastioned fort—mga pader nga koral-stone, old cannons, garden courtyard ug views gikan sa ramparts.',
      saveButton: 'I-save ang Fort sa itinerary',
      year1: '1565',
      year1Text: 'Nagsugod ang unang fortification sa lugar; sa ulahi gihimo ug gipakusog sa bato ang kuta.',
      year2: '1738',
      year2Text: 'Ang kasamtangang stone fort kasagarang gi-date sa ika-18 nga siglo, usa sa pinakaklarong Spanish-era military landmarks sa Cebu.'
    },
    images: {
      entranceAlt: 'Stone gate ug façade sa Fort San Pedro',
      courtyardAlt: 'Garden courtyard sulod sa Fort San Pedro',
      cannonAlt: 'Karaang kanyon sa Fort San Pedro',
      heroAlt: 'Pangunang entrada sa Fort San Pedro sa Cebu City'
    },
    visit: {
      eyebrow: 'Praktikal nga giya',
      title: 'Sa dili pa mosulod sa ganghaan.',
      ticketLabel: 'Ticket / bayad',
      ticketRegularNote: '₱40 alang sa estudyante ug senior citizen sumala sa kasamtangang gipatik nga city fee proposal nga nag-retain sa existing basic rates. Dad-a ang valid ID para sa discounted rate.',
      ticketTip: 'Tip: ang fee mahimong mausab; kumpirmaha sa entrance.',
      hoursLabel: 'Oras',
      hoursNote: 'Kasamtangang listing: adlaw-adlaw. Holidays, events ug maintenance mahimong makaapekto.',
      stayLabel: 'Stay',
      stayUnit: 'minutos',
      stayNote: 'Igo para sa courtyard, wall walk, kanyon ug display; dugangi kon hilig ka sa history o photography.',
      bestTimeLabel: 'Pinakamaayong oras',
      bestTimeTitle: 'Sayo sa buntag o ulahi sa hapon',
      bestTimeText: 'Mas komportable ang kainit ug mas nindot ang kahayag sa stone walls. Kon gusto nimo og mas hilom nga courtyard, sulayi ang opening hours imbes tunga sa adlaw.',
      parkingLabel: 'Parking',
      parkingTitle: 'Limitado, busa pag-abot sayo.',
      parkingText: 'Adunay parking sa palibot sa Plaza Independencia, apan mahimong mapuno labi na sa busy hours ug events. Taxi/Grab ang mas simple kung dili ka gusto mangita og slot.'
    },
    transport: {
      eyebrow: 'Detailed transport',
      title: 'Paingon sa kuta.',
      intro: 'I-search sa ride app ang "Fort San Pedro" o "Plaza Independencia." Ang entrance naa sa A. Pigafetta Street, duol sa Pier 1 ug downtown heritage area.',
      routes: [
        {
          title: 'Gikan sa Mactan-Cebu International Airport',
          text: '<strong>Pinakasayon:</strong> taxi o Grab diretso sa Fort San Pedro / Plaza Independencia. <strong>Budget option:</strong> MyBus gikan sa airport paingon sa SM City Cebu, dayon jeepney o taxi/Grab para sa final leg pa-downtown. Ayaw pag-budget og eksaktong travel time kay kusog mausab ang trapiko sa Cebu.'
        },
        {
          title: 'Jeepney / public transport',
          text: 'Pangitaa ang mga ruta nga moagi sa <strong>Plaza Independencia / Pier area</strong>. Ang 12I route nailhan nga nagkonektar sa SM City Cebu ngadto sa Plaza Independencia–Fort San Pedro corridor. Pangutana sa driver o conductor sa dili pa mosakay kay mahimong mausab ang routing.'
        },
        {
          title: 'Taxi / Grab',
          text: 'Maoy pinakastraightforward gikan sa hotel, IT Park, Ayala o SM. I-pin ang <strong>Fort San Pedro, A. Pigafetta Street</strong>. Para sa pickup, mas sayon usahay sa edge sa Plaza Independencia kaysa mismong gate kon daghan ang tawo.'
        },
        {
          title: 'Gikan sa Cebu Pier 1',
          text: 'Ang fort naa duol sa port district; gikan sa Pier 1, praktikal ang mubo nga lakaw o dali nga taxi/ride depende sa imong bagahe ug kainit.'
        }
      ]
    },
    nearby: {
      eyebrow: 'Heritage loop',
      title: 'Ayaw hunong sa fort.',
      lede: 'Ang pinakamaayo nga paagi sa pagtan-aw sa Fort San Pedro mao ang pag-combine niini sa karaang downtown Cebu. Daghan sa importante nga landmarks naa sa usa ka compact nga heritage corridor.',
      places: [
        { id: 'plaza', name: 'Plaza Independencia', type: 'Parke · tupad ra', text: 'Halapad nga green space sa gawas mismo sa kuta—maayo para mopahuway ug magsugod sa heritage walk.', saveButton: 'I-save sa itinerary' },
        { id: 'magellans-cross', name: 'Magellan’s Cross', type: 'Heritage · downtown', text: 'Usa sa pinakaila nga landmark sa Cebu, sulod sa mubo nga lakaw gikan sa fort.', saveButton: 'I-save sa itinerary' },
        { id: 'basilica', name: 'Basilica Minore del Santo Niño', type: 'Simbahan · heritage', text: 'Importante nga relihiyoso ug makasaysayang site sa sentro sa karaang Cebu.', saveButton: 'I-save sa itinerary' },
        { id: 'museum-cebu', name: 'National Museum of the Philippines – Cebu', type: 'Museyo · A. Pigafetta', text: 'Duol nga museyo nga maayo i-pares sa fort para sa mas lawom nga konteksto sa kasaysayan sa Cebu.', saveButton: 'I-save sa itinerary' },
        { id: 'cathedral', name: 'Cebu Metropolitan Cathedral', type: 'Simbahan · downtown', text: 'Usa pa ka prominenteng stop sa heritage core sa Cebu City.', saveButton: 'I-save sa itinerary' },
        { id: 'casa-gorordo', name: 'Casa Gorordo Museum', type: 'Museyo · Parian', text: 'Heritage house nga nagpakita sa domestic life ug arkitektura sa karaang Cebu.', saveButton: 'I-save sa itinerary' }
      ]
    },
    food: {
      eyebrow: 'Duol nga pagkaon',
      title: 'Human sa bato, kaon.',
      lede: 'Pipila ka practical nga stops sa downtown/port side. Check gihapon ang current opening hours sa restaurant sa dili pa moadto.',
      items: [
        { name: 'KKD STK + BBQ', style: 'Sugba · seafood · Filipino', note: 'Praktikal nga stop duol sa Fort San Pedro para sa grilled seafood, barbecue ug classic Filipino dishes.' },
        { name: 'Manila Foodshoppe', style: 'Chinese–Filipino', note: 'Old-school downtown favorite para sa noodles, dim sum ug family-style nga pagkaon.' },
        { name: 'Alvar’s Food Haus', style: 'Lutong-bahay · budget', note: 'Simple ug budget-friendly nga pagkaon duol sa port area; maayo kung gusto kag dali nga local meal.' }
      ]
    },
    itinerary: {
      eyebrow: 'Local itinerary',
      title: 'Himoa imong heritage checklist.',
      lede: 'I-save ang gusto nimong adtoan. Ang lista gitipigan <strong>lamang sa imong device</strong> pinaagi sa localStorage—walay account, walay upload, walay server.',
      clearButton: 'Tangtanga tanan sa lista',
      emptyState: 'Wala pa kay gi-save. I-save ang Fort o pili og stops sa "Duol" nga seksyon.',
      privacyNote: 'Privacy note: ang itinerary data magpabilin sa kasamtangang browser/device hangtod imo kining i-clear o i-delete ang browser storage.',
      savedLabel: 'Na-save sa itinerary',
      removeLabel: 'Tangtanga'
    },
    map: {
      eyebrow: 'Lokasyon',
      address: 'A. Pigafetta Street,<br />Cebu City 6000',
      note: 'Tapad sa Plaza Independencia ug duol sa Cebu Pier 1.',
      iframeTitle: 'Mapa sa Fort San Pedro, Cebu City'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Kasagarang pangutana.',
      items: [
        { q: 'Pila ang entrance fee sa Fort San Pedro?', a: 'Ang kasamtangang regular nga entrance fee nga gipatik sa lokal nga balita mao ang ₱50; ₱40 alang sa estudyante ug senior citizen. Maayong kumpirmahon gihapon sa entrance kay mahimong mausab ang polisiya.' },
        { q: 'Unsa orasa bukas ang kuta?', a: 'Ang kasamtangang Google Maps listing nagpakita og 8:00 AM–5:00 PM adlaw-adlaw. Ang oras mahimong mausab sa holidays, events, o maintenance.' },
        { q: 'Pila ka oras ang igo para sa pagbisita?', a: 'Alang sa kadaghanan, 45–90 minutos igo na para sa courtyard, ramparts, mga kanyon, ug mga display. Dugangi og oras kon apilon nimo ang Plaza Independencia ug ubang heritage sites sa downtown.' },
        { q: 'Pwede ra ba lakawon gikan sa Magellan’s Cross?', a: 'Oo. Ang Fort San Pedro, Plaza Independencia, Basilica del Santo Niño, ug Magellan’s Cross naa sa parehas nga downtown heritage area ug praktikal nga i-combine sa usa ka walking route.' },
        { q: 'Aduna bay parking?', a: 'Adunay parking sa palibot sa Plaza Independencia, apan limitado ang espasyo ug mahimong mapuno. Mas sayon kasagaran ang taxi/Grab o pag-abot sayo.' },
        { q: 'Maayo ba ang Fort San Pedro para sa bata ug senior?', a: 'Ang ubos nga courtyard sayon ra ma-access, apan ang pipila ka hagdanan ug rampart sections adunay uneven nga bato. Paghinay ug pangayo og tabang kon kinahanglan.' }
      ]
    },
    footer: {
      title: 'Fort San Pedro · Cebu',
      subtitle: 'Independent visitor guide',
      disclaimer: 'Dili kini opisyal nga website sa Fort San Pedro, Cebu City Government, National Museum, o bisan unsang ahensya sa gobyerno. Ang impormasyon alang lamang sa trip planning; kumpirmaha ang current fees, hours ug access rules sa dili pa mobisita.',
      creditsSummary: 'Photo credits',
      creditsText: 'Hero: xiquinhosilva, CC BY 2.0. Main entrance & courtyard: Eugene Alvin Villar, CC BY-SA 4.0. Cannon: Farro, public domain. Local copies are included in the project; see CREDITS.md for source pages and license notes.',
      backToTop: 'Balik sa taas ↑'
    },
    languageSwitcher: {
      label: 'Panglantaw sa pinulongan',
      ceb: 'Cebuano',
      en: 'English',
      fil: 'Filipino'
    },
    alternates: {
      ceb: '/',
      en: '/en/',
      fil: '/fil/'
    }
  },
  en: {
    meta: {
      title: 'Fort San Pedro Cebu | Visitor Guide',
      description: 'English guide to Fort San Pedro: entrance fee, opening hours, transport, parking, nearby dining, heritage stops, map and itinerary checklist.',
      ogTitle: 'Fort San Pedro Cebu | Visitor Guide',
      ogDescription: 'Plan your visit to Cebu City\'s most iconic Spanish-era stone fort.',
      ogLocale: 'en_PH',
      htmlLang: 'en'
    },
    schema: {
      attractionName: 'Fort San Pedro',
      attractionAlternateName: 'Fuerte de San Pedro',
      attractionDescription: 'A historic triangular fort in Cebu City, adjacent to Plaza Independencia and the port area.'
    },
    nav: {
      skipToContent: 'Skip to content',
      homeLabel: 'Fort San Pedro home',
      siteTagline: 'Cebu · Sugbo',
      navVisit: 'Visit',
      navTransport: 'Transport',
      navNearby: 'Nearby',
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
    food: {
      eyebrow: 'Nearby dining',
      title: 'After the stone, eat.',
      lede: 'A few practical stops on the downtown/port side. Always confirm current restaurant opening hours before going.',
      items: [
        { name: 'KKD STK + BBQ', style: 'Grilled · seafood · Filipino', note: 'A practical stop near Fort San Pedro for grilled seafood, barbecue, and classic Filipino dishes.' },
        { name: 'Manila Foodshoppe', style: 'Chinese–Filipino', note: 'An old-school downtown favorite for noodles, dim sum, and family-style meals.' },
        { name: 'Alvar’s Food Haus', style: 'Home-style · budget', note: 'Simple, budget-friendly food near the port area; good if you want a quick local meal.' }
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
      address: 'A. Pigafetta Street,<br />Cebu City 6000',
      note: 'Beside Plaza Independencia and near Cebu Pier 1.',
      iframeTitle: 'Map of Fort San Pedro, Cebu City'
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
        { q: 'Is Fort San Pedro suitable for children and seniors?', a: 'The lower courtyard is reasonably accessible, but some staircases and rampart sections have uneven stone surfaces. Take your time and ask for assistance if needed.' }
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
    languageSwitcher: {
      label: 'Language selector',
      ceb: 'Cebuano',
      en: 'English',
      fil: 'Filipino'
    },
    alternates: {
      ceb: '/',
      en: '/en/',
      fil: '/fil/'
    }
  },
  fil: {
    meta: {
      title: 'Fort San Pedro Cebu | Gabay sa Pagbisita',
      description: 'Gabay sa Filipino tungkol sa Fort San Pedro: entrance fee, oras, transportasyon, paradahan, kalapit na kainan, heritage stops, mapa at checklist ng itinerary.',
      ogTitle: 'Fort San Pedro Cebu | Gabay sa Pagbisita',
      ogDescription: 'Plano ang iyong pagbisita sa pinakakilalang Spanish-era stone fort sa Cebu City.',
      ogLocale: 'fil_PH',
      htmlLang: 'fil'
    },
    schema: {
      attractionName: 'Fort San Pedro',
      attractionAlternateName: 'Kuta ng San Pedro',
      attractionDescription: 'Isang makasaysayang tatsulok na kuta sa Cebu City, malapit sa Plaza Independencia at daungan.'
    },
    nav: {
      skipToContent: 'Laktawan patungo sa nilalaman',
      homeLabel: 'Fort San Pedro home',
      siteTagline: 'Cebu · Sugbo',
      navVisit: 'Pagbisita',
      navTransport: 'Transportasyon',
      navNearby: 'Malapit',
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
    food: {
      eyebrow: 'Kalapit na kainan',
      title: 'Pagkatapos ng bato, kumain.',
      lede: 'Ilang praktikal na hinto sa downtown/port side. Laging kumpirmahin ang kasalukuyang oras ng pagbubukas ng restaurant bago pumunta.',
      items: [
        { name: 'KKD STK + BBQ', style: 'Inihaw · seafood · Filipino', note: 'Praktikal na hinto malapit sa Fort San Pedro para sa inihaw na seafood, barbecue, at mga klasikong pagkaing Filipino.' },
        { name: 'Manila Foodshoppe', style: 'Chinese–Filipino', note: 'Isang lumang paborito sa downtown para sa noodles, dim sum, at family-style na pagkain.' },
        { name: 'Alvar’s Food Haus', style: 'Lutong-bahay · budget', note: 'Simple at budget-friendly na pagkain malapit sa port area; mainam kung gusto mo ng mabilis na lokal na pagkain.' }
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
      address: 'A. Pigafetta Street,<br />Lungsod ng Cebu 6000',
      note: 'Sa tabi ng Plaza Independencia at malapit sa Cebu Pier 1.',
      iframeTitle: 'Mapa ng Fort San Pedro, Lungsod ng Cebu'
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
        { q: 'Angkop ba ang Fort San Pedro para sa bata at senior?', a: 'Ang mababang courtyard ay madaling ma-access, ngunit ang ilang hagdan at rampart section ay may hindi pantay na ibabaw ng bato. Maglaan ng oras at humingi ng tulong kung kinakailangan.' }
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
    languageSwitcher: {
      label: 'Pamimili ng wika',
      ceb: 'Cebuano',
      en: 'English',
      fil: 'Filipino'
    },
    alternates: {
      ceb: '/',
      en: '/en/',
      fil: '/fil/'
    }
  }
};

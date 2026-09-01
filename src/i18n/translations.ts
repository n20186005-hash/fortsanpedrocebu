export type Locale = 'en' | 'fil';

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
  languageSwitcher: {
    label: string;
    en: string;
    fil: string;
  };
  alternates: {
    en: string;
    fil: string;
  };
}

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: 'Fort San Pedro (Cebu City) - Visitor Guide & Location',
      description: 'Discover Fort San Pedro, the iconic Spanish-built triangular stone fortress in Cebu City, Philippines, dating back to 1738. View location map, opening hours, nearby Basilica del Santo Niño, and travel tips.',
      ogTitle: 'Fort San Pedro - Cebu City Travel Guide',
      ogDescription: 'Visitor guide to Fort San Pedro in Cebu City, Cebu, Philippines.',
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
        { q: 'What is the history behind Fort San Pedro?', a: 'It began as a wooden defense for the first Spanish settlement founded by Miguel López de Legazpi in 1565, was rebuilt in coral stone around 1738 as a triangular fortress with three bastions, and has since served as a garrison, briefly as a city zoo, and today as a garden and museum.' }
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
      en: 'English',
      fil: 'Filipino'
    },
    alternates: {
      en: '/en/',
      fil: '/'
    }
  },
  fil: {
    meta: {
      title: 'Fort San Pedro (Lungsod ng Cebu) - Gabay sa Pagbisita at Lokasyon',
      description: 'Tuklasin ang Fort San Pedro, ang iconic na Spanish-era triangular stone fortress sa Lungsod ng Cebu, Pilipinas, mula pa noong 1738. Tingnan ang mapa ng lokasyon, oras ng pagbubukas, kalapit na Basilica del Santo Niño, at mga travel tips.',
      ogTitle: 'Fort San Pedro - Gabay sa Paglalakbay sa Lungsod ng Cebu',
      ogDescription: 'Gabay sa pagbisita sa Fort San Pedro sa Lungsod ng Cebu, Cebu, Pilipinas.',
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
        { q: 'Ano ang kasaysayan sa likod ng Fort San Pedro?', a: 'Nagsimula ito bilang kahoy na depensa para sa unang Spanish settlement na itinatag ni Miguel López de Legazpi noong 1565, muling itinayo sa batong-koral noong 1738 bilang tatsulok na kuta na may tatlong balwarte, at mula noon ay nagsilbing garison, pansamantalang zoo ng lungsod, at ngayon bilang hardin at museo.' }
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
      en: 'English',
      fil: 'Filipino'
    },
    alternates: {
      en: '/en/',
      fil: '/'
    }
  }
};

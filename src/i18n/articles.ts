import type { Locale } from './translations';

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  items?: { name: string; text: string }[];
}

export interface ArticleTranslation {
  /** URL segment for this locale, e.g. /guides/fort-san-pedro-entrance-fee-guide/ */
  slug: string;
  /** <title> — kept under ~60 characters */
  title: string;
  /** meta description — kept under ~160 characters */
  description: string;
  h1: string;
  intro: string;
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
  relatedLabel: string;
  updatedLabel: string;
  backToGuideLabel: string;
}

export interface Article {
  id: string;
  image: string;
  /** Key into `translations[locale].images` so the alt text is localized. */
  imageAltKey: 'courtyardAlt' | 'entranceAlt';
  datePublished: string;
  dateModified: string;
  translations: Record<Locale, ArticleTranslation>;
}

/**
 * Editorial guides. Each entry is one topic with a fully localized version per
 * locale; `slug` is localized so every language gets its own keyword-bearing URL.
 */
export const articles: Article[] = [
  {
    id: 'things-to-do-near-fort-san-pedro',
    image: '/images/fort-san-pedro-courtyard.jpg',
    imageAltKey: 'courtyardAlt',
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    translations: {
      en: {
        slug: 'things-to-do-near-fort-san-pedro',
        title: 'Top 10 Things to Do in Cebu City Near Fort San Pedro',
        description:
          'A walkable half-day route through downtown Cebu: 10 stops starting at Fort San Pedro, from Magellan’s Cross and the Basilica to museums, markets and the seafront.',
        h1: 'Top 10 things to do in Cebu City near Fort San Pedro',
        intro:
          'Fort San Pedro is not an isolated stop — it sits inside the compact heritage core of downtown Cebu. Almost everything visitors want to see in the old city is within a short walk of the fort gate, which makes it the most efficient place to start a half-day route.',
        sections: [
          {
            heading: 'The 10 stops',
            items: [
              { name: '1. Fort San Pedro', text: 'The triangular coral-stone fort itself. Give it 45–90 minutes for the courtyard, the wall walk, the vintage cannons and the small museum.' },
              { name: '2. Plaza Independencia', text: 'Immediately outside the gate. A shaded green space that works as a rest stop and the natural starting line for the walking route.' },
              { name: '3. Magellan’s Cross', text: 'One of the most recognizable landmarks in Cebu, a few minutes on foot from the fort. The painted ceiling inside the kiosk is the detail most people miss.' },
              { name: '4. Basilica Minore del Santo Niño', text: 'The religious heart of old Cebu and the oldest church in the Philippines. Expect queues on Sundays and feast days.' },
              { name: '5. Cebu Metropolitan Cathedral', text: 'A short detour from the Basilica; its austere interior is a sharp contrast to the ornate basilica next door.' },
              { name: '6. National Museum of the Philippines – Cebu', text: 'On A. Pigafetta Street, the same street as the fort. Free-flowing context on Cebu’s pre-colonial and colonial past.' },
              { name: '7. Casa Gorordo Museum', text: 'A heritage house in the Parián district that shows how a wealthy Cebuano family lived in the 19th century.' },
              { name: '8. Parián district and Colon Street', text: 'The oldest street in the Philippines. Busy, hot and unglamorous, but it is the commercial spine that explains why the fort was built where it was.' },
              { name: '9. Downtown eateries and carinderias', text: 'Around the market and side streets you will find grilled seafood, Filipino barbecue, noodle dishes and cheap home-style rice meals.' },
              { name: '10. The seafront and Pier 1 area', text: 'The fort was built to watch this coastline. Walking the edge of the port district at the end of the route closes the loop historically and geographically.' }
            ]
          },
          {
            heading: 'How long does the route take?',
            paragraphs: [
              'Three to four hours covers the fort plus the heritage core at a relaxed pace. If you only have a morning, do Fort San Pedro, Plaza Independencia, Magellan’s Cross and the Basilica — that cluster alone takes about two hours.',
              'Adding the National Museum and Casa Gorordo turns it into a half day. Do not try to schedule exact transfer times between stops: downtown Cebu is dense, and crossings, queues and the heat will decide the pace.'
            ]
          },
          {
            heading: 'Practical tips for the walk',
            paragraphs: [
              'Start early. The heritage core has limited shade and the midday heat is the main reason people cut the route short.',
              'Bring cash in small denominations. Entrance fees, offerings and market food are cash-first, and small bills are easier than cards at this end of town.',
              'Dress for churches. Shoulders and knees covered for the Basilica and the Cathedral; a light shirt or scarf solves the problem.',
              'Use a ride-hailing app for the first and last leg rather than walking from your hotel — arriving fresh matters more than the modest fare.'
            ]
          },
          {
            heading: 'Is there a UNESCO World Heritage Site near Cebu City?',
            paragraphs: [
              'No. Cebu City has no UNESCO World Heritage Site, and there is none in the surrounding province either. Travellers who search for one are usually looking for the Spanish-era heritage core described above.',
              'What Cebu does have is a dense cluster of nationally and locally protected structures — Fort San Pedro, Magellan’s Cross and the Basilica Minore del Santo Niño among them — protected under Philippine heritage law rather than UNESCO inscription.'
            ]
          }
        ],
        faq: [
          { q: 'Is Fort San Pedro worth visiting if I only have one day in Cebu City?', a: 'Yes, because of its location rather than its size. The fort itself takes under 90 minutes, but it puts you inside walking distance of Magellan’s Cross, the Basilica, the Cathedral and two museums.' },
          { q: 'Do I need a guide for this route?', a: 'No. The stops are close together and signposted, and the fort has interpretive panels. A guide adds historical depth but is not required to follow the route.' },
          { q: 'Is the downtown heritage area walkable and safe?', a: 'It is walkable and busiest during the day, which is when you should do it. Standard city precautions apply: keep valuables out of sight and be aware of traffic at crossings.' },
          { q: 'What should I wear when visiting the churches?', a: 'Cover shoulders and knees inside the Basilica Minore del Santo Niño and the Cebu Metropolitan Cathedral. Lightweight, breathable clothing works better than heavy fabrics in the Cebu heat.' }
        ],
        relatedLabel: 'More guides',
        updatedLabel: 'Updated',
        backToGuideLabel: 'Back to the Fort San Pedro guide'
      },
      fil: {
        slug: 'mga-pwedeng-gawin-malapit-sa-fort-san-pedro',
        title: 'Top 10 na Pwedeng Gawin sa Lungsod ng Cebu Malapit sa Fort San Pedro',
        description:
          'Isang kalahating araw na walking route sa downtown Cebu: 10 hinto mula sa Fort San Pedro — Magellan’s Cross, Basilica, mga museo, palengke at baywalk.',
        h1: 'Top 10 na pwedeng gawin sa Lungsod ng Cebu malapit sa Fort San Pedro',
        intro:
          'Hindi isolated na hinto ang Fort San Pedro — nasa loob ito ng compact na heritage core ng downtown Cebu. Halos lahat ng gustong makita ng mga bisita sa lumang lungsod ay nasa maikling lakad mula sa tarangkahan ng kuta, kaya ito ang pinaka-epektibong simula ng isang kalahating araw na ruta.',
        sections: [
          {
            heading: 'Ang 10 hinto',
            items: [
              { name: '1. Fort San Pedro', text: 'Ang mismong tatsulok na kuta na gawa sa batong-koral. Maglaan ng 45–90 minuto para sa courtyard, wall walk, mga lumang kanyon at maliit na museo.' },
              { name: '2. Plaza Independencia', text: 'Nasa labas mismo ng tarangkahan. May lilim na green space na mainam na pahingahan at natural na panimulang linya ng walking route.' },
              { name: '3. Magellan’s Cross', text: 'Isa sa mga pinakakilalang landmark sa Cebu, ilang minuto lamang mula sa kuta. Ang pinturang kisame sa loob ng kiosk ang madalas na hindi napapansin.' },
              { name: '4. Basilica Minore del Santo Niño', text: 'Ang relihiyosong puso ng lumang Cebu at pinakamatandang simbahan sa Pilipinas. Asahan ang pila tuwing Linggo at kapistahan.' },
              { name: '5. Cebu Metropolitan Cathedral', text: 'Maiksing detour mula sa Basilica; ang payak na interior nito ay malinaw na kaibahan sa ornate na basilica sa tabi nito.' },
              { name: '6. National Museum of the Philippines – Cebu', text: 'Nasa A. Pigafetta Street, kaparehong kalsada ng kuta. Nagbibigay ng malinaw na konteksto sa pre-kolonyal at kolonyal na nakaraan ng Cebu.' },
              { name: '7. Casa Gorordo Museum', text: 'Isang heritage house sa distrito ng Parián na nagpapakita ng pamumuhay ng isang mayamang pamilyang Cebuano noong ika-19 siglo.' },
              { name: '8. Distrito ng Parián at Colon Street', text: 'Ang pinakamatandang kalsada sa Pilipinas. Maingay, mainit at hindi kaakit-akit, ngunit ito ang komersyal na gulugod na nagpapaliwanag kung bakit doon itinayo ang kuta.' },
              { name: '9. Mga kainan at carinderia sa downtown', text: 'Sa paligid ng palengke at mga side street ay makikita ang inihaw na seafood, Filipino barbecue, pansit at murang lutong-bahay na rice meals.' },
              { name: '10. Baywalk at lugar ng Pier 1', text: 'Itinayo ang kuta upang bantayan ang baybaying ito. Ang paglakad sa gilid ng port district sa dulo ng ruta ay nagsasara ng loop sa aspetong historikal at heograpikal.' }
            ]
          },
          {
            heading: 'Gaano katagal ang ruta?',
            paragraphs: [
              'Tatlo hanggang apat na oras ay sapat para sa kuta at heritage core sa relaxed na bilis. Kung umaga lang ang oras mo, gawin ang Fort San Pedro, Plaza Independencia, Magellan’s Cross at Basilica — ang cluster na ito pa lang ay mga dalawang oras.',
              'Ang pagdagdag ng National Museum at Casa Gorordo ay gagawin itong kalahating araw. Huwag magtakda ng eksaktong oras sa pagitan ng mga hinto: siksik ang downtown Cebu, at ang mga tawiran, pila at init ang magdidikta ng bilis.'
            ]
          },
          {
            heading: 'Mga praktikal na tip sa paglakad',
            paragraphs: [
              'Simulan nang maaga. Limitado ang lilim sa heritage core at ang init sa tanghali ang pangunahing dahilan kung bakit pinapaikli ng mga tao ang ruta.',
              'Magdala ng cash sa maliliit na denominasyon. Ang entrance fee, mga offering at pagkain sa palengke ay cash-first, at mas madali ang maliliit na bill kaysa card sa bahaging ito ng lungsod.',
              'Magsuot nang angkop sa simbahan. Takpan ang balikat at tuhod sa Basilica at Cathedral; malulutas ng magaan na shirt o scarf ang problema.',
              'Gamitin ang ride-hailing app para sa unang at huling bahagi ng biyahe sa halip na maglakad mula sa hotel — mas mahalaga ang dumating nang hindi pagod kaysa sa maliit na pamasahe.'
            ]
          },
          {
            heading: 'May UNESCO World Heritage Site ba malapit sa Lungsod ng Cebu?',
            paragraphs: [
              'Wala. Ang Lungsod ng Cebu ay walang UNESCO World Heritage Site, at wala ring ganito sa karatig na probinsya. Ang mga naghahanap nito ay karaniwang ang heritage core mula sa panahon ng Espanyol na inilarawan sa itaas ang hinahanap.',
              'Ang mayroon ang Cebu ay isang siksik na cluster ng mga estrukturang protektado sa antas na national at local — kabilang ang Fort San Pedro, Magellan’s Cross at Basilica Minore del Santo Niño — na protektado sa ilalim ng batas sa pamana ng Pilipinas, hindi ng UNESCO inscription.'
            ]
          }
        ],
        faq: [
          { q: 'Sulit bang bisitahin ang Fort San Pedro kung isang araw lang sa Lungsod ng Cebu?', a: 'Oo, dahil sa lokasyon nito kaysa sa laki nito. Ang kuta mismo ay wala pang 90 minuto, ngunit inilalagay ka nito sa walking distance mula sa Magellan’s Cross, Basilica, Cathedral at dalawang museo.' },
          { q: 'Kailangan ba ng guide sa rutang ito?', a: 'Hindi. Magkakalapit ang mga hinto at may mga karatula, at may interpretive panel ang kuta. Ang guide ay nagdadagdag ng lalim sa kasaysayan ngunit hindi kailangan upang sundan ang ruta.' },
          { q: 'Ligtas ba at kayang lakarin ang downtown heritage area?', a: 'Kayang lakarin at pinaka-abala tuwing umaga, kaya ito ang pinakamainam na oras. Sundin ang karaniwang pag-iingat sa lungsod: ilayo ang mga mahahalagang gamit sa paningin at maging alerto sa trapiko sa mga tawiran.' },
          { q: 'Ano ang dapat isuot kapag bumibisita sa mga simbahan?', a: 'Takpan ang balikat at tuhod sa loob ng Basilica Minore del Santo Niño at Cebu Metropolitan Cathedral. Mas mainam ang magaan at preskong damit kaysa sa makakapal na tela sa init ng Cebu.' }
        ],
        relatedLabel: 'Higit pang gabay',
        updatedLabel: 'Na-update',
        backToGuideLabel: 'Bumalik sa gabay ng Fort San Pedro'
      },
      ja: {
        slug: 'sanpedoro-yousai-shuhen-kankou',
        title: 'サンペドロ要塞周辺のおすすめ観光スポット10選｜セブ市',
        description:
          'セブ市ダウンタウンを半日で歩くルート。サンペドロ要塞を起点に、マゼランクロス、サント・ニーニョ教会、博物館、市場、港まで徒歩で巡る10か所を紹介します。',
        h1: 'サンペドロ要塞周辺のおすすめ観光スポット10選',
        intro:
          'サンペドロ要塞は孤立した見どころではありません。セブ市ダウンタウンのコンパクトなヘリテージ地区のど真ん中にあります。旧市街で見たい場所のほとんどが要塞の門から徒歩圏内にあるため、半日のルートを始めるのに最も効率的な地点です。',
        sections: [
          {
            heading: '10か所のモデルルート',
            items: [
              { name: '1. サンペドロ要塞', text: 'サンゴ石で築かれた三角形の要塞そのもの。中庭、城壁の遊歩道、古い大砲、小さな博物館を見て回るなら45〜90分をみてください。' },
              { name: '2. プラザ・インデペンデンシア', text: '門のすぐ外にあります。日陰のある緑地で、休憩地点としても、ウォーキングルートの自然な出発点としても機能します。' },
              { name: '3. マゼランクロス', text: '要塞から徒歩数分、セブを代表するランドマークのひとつ。キオスク内部の天井画は、多くの人が見落とす見どころです。' },
              { name: '4. サント・ニーニョ・バシリカ', text: '旧市街セブの宗教的な中心であり、フィリピン最古の教会です。日曜日と祝祭日は行列を覚悟してください。' },
              { name: '5. セブ・メトロポリタン大聖堂', text: 'バシリカから少し寄り道した場所にあります。質素な内部は、隣の装飾的なバシリカとの鮮明な対照を見せます。' },
              { name: '6. フィリピン国立博物館 セブ館', text: '要塞と同じ A. Pigafetta Street にあります。セブの先コロニアル期と植民地時代の歴史への理解が深まります。' },
              { name: '7. カサ・ゴロルド博物館', text: 'パリアン地区にあるヘリテージハウスで、19世紀の裕福なセブの家族の暮らしを伝えています。' },
              { name: '8. パリアン地区とコロン・ストリート', text: 'フィリピン最古のストリート。騒がしく、暑く、華やかさはありませんが、なぜ要塞がこの場所に築かれたのかを説明する商業の背骨です。' },
              { name: '9. ダウンタウンの食堂とカリンデリア', text: '市場や路地の周辺には、焼き魚などのシーフード、フィリピンバーベキュー、麺料理、手頃な家庭的なご飯ものがあります。' },
              { name: '10. 海岸沿いとピエール1周辺', text: '要塞はこの海岸線を監視するために築かれました。ルートの最後に港地区の端を歩けば、歴史的にも地理的にもループが閉じます。' }
            ]
          },
          {
            heading: 'ルートにはどのくらいかかる？',
            paragraphs: [
              '要塞とヘリテージ地区をゆったり回るなら3〜4時間が目安です。午前中しかない場合は、サンペドロ要塞、プラザ・インデペンデンシア、マゼランクロス、バシリカに絞ってください。このまとまりだけで約2時間です。',
              '国立博物館とカサ・ゴロルドを足すと半日になります。各スポット間の正確な移動時間は見込まないでください。ダウンタウン・セブは密度が高く、横断、行列、暑さがペースを決めます。'
            ]
          },
          {
            heading: '歩くときの実用ポイント',
            paragraphs: [
              '早めに出発しましょう。ヘリテージ地区は日陰が限られており、日中の暑さが旅程を短く切る主な理由になります。',
              '小額の現金を持参してください。入場料、献金、市場の食事は現金が基本で、この地域ではカードよりも小額紙幣がスムーズです。',
              '教会に合わせた服装を。バシリカと大聖堂では肩とひざを覆います。薄手のシャツやスカーフがあれば解決します。',
              'ホテルからの最初と最後の移動は徒歩ではなく配車アプリを使いましょう。わずかな運賃より、疲れていない状態で到着することの方が大切です。'
            ]
          },
          {
            heading: 'セブ市周辺にユネスコ世界遺産はありますか？',
            paragraphs: [
              'ありません。セブ市にはユネスコ世界遺産がなく、周辺の州にも存在しません。この条件で検索する旅行者の多くは、実際には上記のスペイン統治時代のヘリテージ地区を探しています。',
              'セブにあるのは、ユネスコの登録ではなくフィリピンの文化遺産法の下で保護される、国・地方レベルの保護建造物の密集したまとまりです。サンペドロ要塞、マゼランクロス、サント・ニーニョ・バシリカなどがこれにあたります。'
            ]
          }
        ],
        faq: [
          { q: 'セブ市に1日しかない場合、サンペドロ要塞は見る価値がありますか？', a: 'はい。規模ではなく立地が理由です。要塞そのものは90分以内で回れますが、マゼランクロス、バシリカ、大聖堂、2つの博物館へ徒歩圏内に身を置けます。' },
          { q: 'このルートにガイドは必要ですか？', a: '不要です。見どころは近接しており案内表示もあり、要塞には解説パネルがあります。ガイドは歴史的な深みを足してくれますが、ルートをたどるために必須ではありません。' },
          { q: 'ダウンタウンのヘリテージ地区は歩けますか？安全ですか？', a: '徒歩で回れ、日中が最も人通りが多いのでその時間帯に歩くのが最適です。一般的な都市での注意は必要です。貴重品は見えないようにし、横断時の交通に気をつけてください。' },
          { q: '教会を訪れる際の服装は？', a: 'サント・ニーニョ・バシリカとセブ・メトロポリタン大聖堂では、肩とひざを覆ってください。セブの暑さでは厚手よりも軽く通気性の良い服が適しています。' }
        ],
        relatedLabel: '他のガイド',
        updatedLabel: '更新日',
        backToGuideLabel: 'サンペドロ要塞のガイドに戻る'
      },
      zh: {
        slug: 'shengpeideluobao-zhoubian-jingdian',
        title: '宿霧聖佩德羅堡周邊必去景點 Top 10｜市區步行路線',
        description:
          '用半天走完宿霧老城區：以聖佩德羅堡為起點的 10 個景點，從麥哲倫十字架、聖嬰聖殿到博物館、市場與港邊，附所需時間與動線建議。',
        h1: '宿霧聖佩德羅堡周邊必去景點 Top 10',
        intro:
          '聖佩德羅堡不是一個孤立的景點，它位於宿霧市區緊湊的古蹟核心正中央。老城區裡旅客想看的東西，幾乎都在堡壘城門的步行範圍內，這也讓它成為半天行程最有效率的起點。',
        sections: [
          {
            heading: '10 個站點',
            items: [
              { name: '1. 聖佩德羅堡', text: '以珊瑚石築成的三角形堡壘本體。中庭、城牆步道、古砲與小型博物館走完約需 45–90 分鐘。' },
              { name: '2. 獨立廣場', text: '就在城門外。有遮蔭的綠地，既是休息點，也是步行路線最自然的起點。' },
              { name: '3. 麥哲倫十字架', text: '距堡壘步行數分鐘，是宿霧最具代表性的地標之一。亭內天花板上的彩繪，是大多數人會錯過的細節。' },
              { name: '4. 聖嬰聖殿', text: '老宿霧的宗教中心，也是菲律賓最古老的教堂。假日與慶典期間請預期人潮排隊。' },
              { name: '5. 宿霧主教座堂', text: '從聖殿稍微繞過去就到。簡樸的內部與隔壁華麗的聖殿形成鮮明對比。' },
              { name: '6. 菲律賓國家博物館宿霧分館', text: '位於 A. Pigafetta Street，與堡壘同一條街。可以更完整理解宿霧在前殖民與殖民時期的歷史。' },
              { name: '7. 哥羅多故居博物館', text: '位於 Parián 區的古宅博物館，展示 19 世紀富裕宿霧家族的生活方式。' },
              { name: '8. Parián 區與 Colon Street', text: '菲律賓最古老的街道。吵雜、炎熱也不怎麼好看，但它正是解釋堡壘為何蓋在這裡的商業動脈。' },
              { name: '9. 市中心餐館與 carinderia', text: '市場與巷弄周邊可以找到炭烤海鮮、菲律賓烤肉、麵食，以及便宜的家常飯菜。' },
              { name: '10. 海岸線與第一碼頭一帶', text: '堡壘當年就是為了監視這段海岸而建。在路線末端沿著港區邊緣走，能同時在歷史與地理上把這趟路線收尾。' }
            ]
          },
          {
            heading: '這條路線要多久？',
            paragraphs: [
              '以輕鬆的步調走完堡壘與古蹟核心，約需 3–4 小時。如果只有一個上午，就走聖佩德羅堡、獨立廣場、麥哲倫十字架與聖嬰聖殿——光是這一區就大約兩小時。',
              '再加上國家博物館與哥羅多故居，就會變成半天行程。不要預估各站之間的精確移動時間：市區密度很高，過馬路、排隊與炎熱會決定你的速度。'
            ]
          },
          {
            heading: '步行實用建議',
            paragraphs: [
              '早點出發。古蹟核心遮蔭有限，正午的炎熱是多數人把行程縮短的主因。',
              '準備小額現金。門票、奉獻與市場小吃都以現金為主，在這一帶小鈔比刷卡方便。',
              '配合教堂穿著。進入聖嬰聖殿與主教座堂時請遮住肩膀與膝蓋，一件薄上衣或圍巾就能解決。',
              '頭尾兩段交通建議用叫車 App，不要從飯店走過來——省下那一點車費，不如讓自己不帶疲態抵達。'
            ]
          },
          {
            heading: '宿霧市附近有世界遺產嗎？',
            paragraphs: [
              '沒有。宿霧市沒有聯合國教科文組織世界遺產，周邊省份也沒有。會這樣搜尋的旅客，通常其實是在找上面所描述的西班牙時期古蹟核心。',
              '宿霧有的是一批受菲律賓國家與地方文化資產法保護的密集歷史建築——包括聖佩德羅堡、麥哲倫十字架與聖嬰聖殿——屬於菲律賓國內法規的保護，而非聯合國教科文組織的登錄。'
            ]
          }
        ],
        faq: [
          { q: '如果只在宿霧市停留一天，聖佩德羅堡值得去嗎？', a: '值得，原因在於位置而非規模。堡壘本身 90 分鐘內可以走完，但它讓你處於麥哲倫十字架、聖嬰聖殿、主教座堂與兩座博物館的步行範圍內。' },
          { q: '這條路線需要導遊嗎？', a: '不需要。各站距離很近且有指標，堡壘內也有解說牌。導遊能補充歷史深度，但不是走完路線的必要條件。' },
          { q: '市區古蹟一帶適合步行嗎？安全嗎？', a: '適合步行，日間人潮最多，也是建議行走的時段。請保持一般都市警覺：貴重物品不要外露，過馬路時留意車流。' },
          { q: '參觀教堂該怎麼穿？', a: '進入聖嬰聖殿與宿霧主教座堂時請遮住肩膀與膝蓋。在宿霧的炎熱氣候下，輕薄透氣的衣物比厚重的布料更合適。' }
        ],
        relatedLabel: '更多指南',
        updatedLabel: '更新日期',
        backToGuideLabel: '回到聖佩德羅堡指南'
      }
    }
  },
  {
    id: 'entrance-fee-visitor-guide',
    image: '/images/fort-san-pedro-entrance.jpg',
    imageAltKey: 'entranceAlt',
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    translations: {
      en: {
        slug: 'fort-san-pedro-entrance-fee-guide',
        title: 'Fort San Pedro Entrance Fee, Hours & Visitor Guide',
        description:
          'Current Fort San Pedro entrance fee (₱50 regular, ₱40 student/senior), 8:00 AM–5:00 PM opening hours, how to get there from the airport or Pier 1, and how long to spend inside.',
        h1: 'Fort San Pedro: entrance fee, opening hours and visitor guide',
        intro:
          'This is the practical page: what the fort costs, when it is open, how to get there and how much time to allow. Fees and hours are listed as currently published, but they do change — confirm at the gate on the day of your visit.',
        sections: [
          {
            heading: 'Entrance fee',
            paragraphs: [
              'The regular entrance fee currently reported is ₱50. Students and senior citizens pay ₱40, and you will need a valid ID to claim the discounted rate.',
              'The ticket covers the courtyard, the wall walk, the vintage cannons and the small museum inside the fort. There is no separate museum charge reported. Bring cash in small bills — this is a cash-first ticket window.'
            ]
          },
          {
            heading: 'Opening hours and the best time to visit',
            paragraphs: [
              'The current listing is 8:00 AM to 5:00 PM, daily. Holidays, special events and maintenance work can change this, so treat the hours as a default rather than a guarantee.',
              'Early morning is the most comfortable slot: cooler air, softer light on the coral-stone walls, and a quieter courtyard. Late afternoon works too, but you will share the ramparts with more people.'
            ]
          },
          {
            heading: 'How to get to Fort San Pedro',
            items: [
              { name: 'From Mactan-Cebu International Airport', text: 'Taxi or Grab straight to Fort San Pedro / Plaza Independencia is simplest. On a budget, take the MyBus to SM City Cebu, then a jeepney or ride-hail for the downtown leg.' },
              { name: 'Jeepney', text: 'Look for routes passing Plaza Independencia or the pier area; the 12I route is known to link SM City Cebu with the fort corridor. Confirm with the driver before boarding.' },
              { name: 'Taxi or Grab', text: 'Set the destination to “Fort San Pedro, A. Pigafetta Street”. For pickup, the edge of Plaza Independencia is often easier than the gate when it is crowded.' },
              { name: 'From Cebu Pier 1', text: 'The fort is next to the port district — a short walk or a quick ride, depending on your luggage and the heat.' }
            ]
          },
          {
            heading: 'How long to spend, and what to see',
            paragraphs: [
              'Most visitors spend 45 to 90 minutes. That is enough for the garden courtyard, the rampart walk, the cannons and the museum displays; add time if you like history or photography.',
              'The three bastions — La Concepción, Ignacio de Loyola and San Miguel — are the structural detail worth noticing, along with the coral-stone walls quarried from nearby waters.'
            ]
          },
          {
            heading: 'Practical tips before you go',
            paragraphs: [
              'Bring cash in small denominations and a valid ID if you are claiming a student or senior rate.',
              'There is no shade on much of the rampart walk, so water, a hat and sunscreen matter more here than at most city attractions.',
              'The lower courtyard is reasonably accessible, but some stairs and rampart sections have uneven stone. Take your time and ask for help if needed.',
              'Parking around Plaza Independencia is limited and fills quickly. Arriving early or using a ride-hailing app avoids the search.'
            ]
          }
        ],
        faq: [
          { q: 'How much is the entrance fee at Fort San Pedro?', a: '₱50 for regular admission, ₱40 for students and senior citizens with a valid ID. Fees can change — confirm at the entrance on the day.' },
          { q: 'What are the opening hours?', a: 'The current listing is 8:00 AM–5:00 PM daily, subject to change on holidays, during events, or for maintenance.' },
          { q: 'Is the museum included in the entrance fee?', a: 'Yes. No separate museum charge is reported; the ticket covers the courtyard, ramparts, cannons and the small museum inside the fort.' },
          { q: 'Are there restrooms inside the fort?', a: 'Yes. Public restrooms are available inside the fort complex.' },
          { q: 'Can I take photos inside?', a: 'Photography is generally allowed in the courtyard and museum areas, though some exhibits may restrict flash. Follow posted signs and staff instructions.' }
        ],
        relatedLabel: 'More guides',
        updatedLabel: 'Updated',
        backToGuideLabel: 'Back to the Fort San Pedro guide'
      },
      fil: {
        slug: 'fort-san-pedro-bayad-at-gabay',
        title: 'Fort San Pedro: Bayad, Oras at Gabay sa Pagbisita',
        description:
          'Kasalukuyang bayad sa Fort San Pedro (₱50 regular, ₱40 estudyante/senior), oras na 8:00 AM–5:00 PM, papunta mula airport o Pier 1, at kung gaano katagal manatili sa loob.',
        h1: 'Fort San Pedro: bayad, oras at gabay sa pagbisita',
        intro:
          'Ito ang praktikal na pahina: magkano ang kuta, kung kailan bukas, paano pumunta, at gaano katagal dapat manatili. Ang mga bayad at oras ay nakalista ayon sa kasalukuyang naipalathala, ngunit maaari itong magbago — kumpirmahin sa tarangkahan sa araw ng iyong pagbisita.',
        sections: [
          {
            heading: 'Bayad sa pagpasok',
            paragraphs: [
              'Ang kasalukuyang regular na entrance fee na iniulat ay ₱50. Ang mga estudyante at senior citizen ay nagbabayad ng ₱40, at kailangan ng valid ID para makuha ang may diskwentong halaga.',
              'Kasama na sa tiket ang courtyard, wall walk, mga lumang kanyon at ang maliit na museo sa loob ng kuta. Walang hiwalay na bayad sa museo na naiulat. Magdala ng cash sa maliliit na bill — cash-first ang ticket window dito.'
            ]
          },
          {
            heading: 'Oras ng pagbubukas at pinakamagandang oras ng pagbisita',
            paragraphs: [
              'Ang kasalukuyang listahan ay 8:00 AM hanggang 5:00 PM, araw-araw. Maaaring magbago ito dahil sa mga holiday, espesyal na event at maintenance, kaya ituring ang mga oras na ito bilang default, hindi garantiya.',
              'Ang maagang umaga ang pinakakomportableng oras: mas malamig na hangin, mas malambot na liwanag sa mga pader na batong-koral, at mas tahimik na courtyard. Pwede rin ang huling bahagi ng hapon, ngunit mas marami kang kasama sa ramparts.'
            ]
          },
          {
            heading: 'Paano pumunta sa Fort San Pedro',
            items: [
              { name: 'Mula sa Mactan-Cebu International Airport', text: 'Pinakasimple ang taxi o Grab nang diretso sa Fort San Pedro / Plaza Independencia. Kung tipid, sumakay ng MyBus papuntang SM City Cebu, pagkatapos ay jeepney o ride-hail papuntang downtown.' },
              { name: 'Jeepney', text: 'Maghanap ng mga rutang dumadaan sa Plaza Independencia o pier area; kilala ang rutang 12I na nag-uugnay sa SM City Cebu at fort corridor. Kumpirmahin sa drayber bago sumakay.' },
              { name: 'Taxi o Grab', text: 'Itakda ang destinasyon sa “Fort San Pedro, A. Pigafetta Street”. Para sa pickup, madalas na mas madali ang gilid ng Plaza Independencia kaysa sa tarangkahan kapag maraming tao.' },
              { name: 'Mula sa Cebu Pier 1', text: 'Ang kuta ay katabi ng port district — maikling lakad o mabilis na biyahe, depende sa iyong bagahe at sa init.' }
            ]
          },
          {
            heading: 'Gaano katagal manatili, at ano ang makikita',
            paragraphs: [
              'Karamihan ay gumugugol ng 45 hanggang 90 minuto. Sapat na ito para sa garden courtyard, rampart walk, mga kanyon at mga display ng museo; dagdagan ang oras kung mahilig ka sa kasaysayan o potograpiya.',
              'Ang tatlong balwarte — La Concepción, Ignacio de Loyola at San Miguel — ang detalyeng pang-estruktura na dapat pansinin, kasama ang mga pader na batong-koral na mina sa malapit na tubig.'
            ]
          },
          {
            heading: 'Mga praktikal na tip bago pumunta',
            paragraphs: [
              'Magdala ng cash sa maliliit na denominasyon at ng valid ID kung kukuha ka ng student o senior rate.',
              'Walang lilim sa malaking bahagi ng rampart walk, kaya mas mahalaga dito ang tubig, sombrero at sunscreen kaysa sa karamihan ng mga atraksyon sa lungsod.',
              'Ang mababang courtyard ay medyo accessible, ngunit ang ilang hagdan at bahagi ng ramparts ay may hindi pantay na bato. Maglaan ng oras at humingi ng tulong kung kinakailangan.',
              'Limitado ang paradahan sa paligid ng Plaza Independencia at mabilis mapuno. Ang pagdating nang maaga o paggamit ng ride-hailing app ay makakaiwas sa paghahanap ng slot.'
            ]
          }
        ],
        faq: [
          { q: 'Magkano ang entrance fee sa Fort San Pedro?', a: '₱50 para sa regular na pagpasok, ₱40 para sa mga estudyante at senior citizen na may valid ID. Maaaring magbago ang bayad — kumpirmahin sa pasukan sa mismong araw.' },
          { q: 'Ano ang oras ng pagbubukas?', a: 'Ang kasalukuyang listahan ay 8:00 AM–5:00 PM araw-araw, ngunit maaaring magbago tuwing holiday, kapag may event, o para sa maintenance.' },
          { q: 'Kasama ba sa entrance fee ang museo?', a: 'Oo. Walang hiwalay na bayad sa museo na naiulat; kasama na sa tiket ang courtyard, ramparts, mga kanyon at ang maliit na museo sa loob ng kuta.' },
          { q: 'May banyo ba sa loob ng kuta?', a: 'Oo. May pampublikong palikuran sa loob ng fort complex.' },
          { q: 'Pwede bang kumuha ng litrato sa loob?', a: 'Karaniwang pinapayagan ang pagkuha ng litrato sa courtyard at mga museo, bagaman maaaring bawalan ang flash sa ilang exhibit. Sundin ang mga nakapaskil na paunawa at tagubilin ng mga kawani.' }
        ],
        relatedLabel: 'Higit pang gabay',
        updatedLabel: 'Na-update',
        backToGuideLabel: 'Bumalik sa gabay ng Fort San Pedro'
      },
      ja: {
        slug: 'sanpedoro-yousai-nyujoryou-guide',
        title: 'サンペドロ要塞の入場料・営業時間・行き方｜セブ島',
        description:
          'サンペドロ要塞の最新入場料（一般₱50、学生・シニア₱40）、営業時間8:00〜17:00、空港・ピエール1からの行き方、滞在時間の目安をまとめました。',
        h1: 'サンペドロ要塞：入場料、営業時間、行き方',
        intro:
          'このページは実用情報に特化しています。料金、営業時間、行き方、滞在時間の目安をまとめました。料金と時間は現在報じられている内容ですが、変更される場合があります。訪問当日に入口でご確認ください。',
        sections: [
          {
            heading: '入場料',
            paragraphs: [
              '現在報じられている一般入場料は₱50です。学生とシニアは₱40で、割引を受けるには身分証明書が必要です。',
              'チケットには中庭、城壁の遊歩道、古い大砲、そして要塞内の小さな博物館が含まれます。博物館の別料金は報じられていません。小額紙幣の現金をご用意ください。この窓口は現金が基本です。'
            ]
          },
          {
            heading: '営業時間とおすすめの時間帯',
            paragraphs: [
              '現在の案内は毎日8:00〜17:00です。祝日、特別イベント、メンテナンスで変更される場合があるため、この時間は既定値として扱い、確実なものとは考えないでください。',
              '早朝が最も快適です。空気が涼しく、珊瑚石の壁に当たる光が柔らかく、中庭も静かです。夕方も悪くありませんが、城壁は人出が増えます。'
            ]
          },
          {
            heading: 'サンペドロ要塞への行き方',
            items: [
              { name: 'マクタン・セブ国際空港から', text: 'タクシーまたはGrabでサンペドロ要塞／プラザ・インデペンデンシアへ直行するのが最も簡単です。節約するなら、MyBusでSM City Cebuへ行き、そこからジープニーまたは配車でダウンタウンへ。' },
              { name: 'ジープニー', text: 'プラザ・インデペンデンシアまたはピエール地区を通る路線を探してください。12I系統はSM City Cebuと要塞周辺を結ぶことで知られています。乗車前に運転手へご確認ください。' },
              { name: 'タクシーまたはGrab', text: '目的地は「Fort San Pedro, A. Pigafetta Street」に設定してください。乗車時は、混雑している場合、門の前よりもプラザ・インデペンデンシアの端の方が簡単なことが多いです。' },
              { name: 'セブ・ピエール1から', text: '要塞は港地区の隣にあります。荷物と暑さ次第で、短い徒歩または短時間の乗車で移動できます。' }
            ]
          },
          {
            heading: '滞在時間の目安と見どころ',
            paragraphs: [
              '多くの訪問者は45〜90分を過ごします。庭の中庭、城壁の遊歩道、大砲、博物館の展示を回るには十分で、歴史や写真が好きな方はさらに時間をみてください。',
              'ラ・コンセプシオン、イグナシオ・デ・ロヨラ、サン・ミゲルの三つの稜堡は、近海で採れた珊瑚石の壁とともに、ぜひ注目したい構造上の見どころです。'
            ]
          },
          {
            heading: '出発前の実用ポイント',
            paragraphs: [
              '小額の現金と、学生・シニア料金を利用する場合は身分証明書をご持参ください。',
              '城壁の遊歩道には日陰がほとんどありません。市内の他の観光地よりも、水、帽子、日焼け止めが重要になります。',
              '下の中庭は比較的アクセスしやすいですが、階段や城壁の一部は石面が凹凸しています。時間に余裕を持ち、必要に応じて助けを求めてください。',
              'プラザ・インデペンデンシア周辺の駐車場は限られており、すぐに埋まります。早めに到着するか、配車アプリを使えば探す手間が省けます。'
            ]
          }
        ],
        faq: [
          { q: 'サンペドロ要塞の入場料はいくらですか？', a: '一般が₱50、身分証明書を提示できる学生とシニアが₱40です。料金は変更される可能性があるため、当日に入口でご確認ください。' },
          { q: '営業時間は何時から何時までですか？', a: '現在の案内は毎日8:00〜17:00です。祝日、イベント、メンテナンスにより変更される場合があります。' },
          { q: '入場料に博物館は含まれますか？', a: 'はい。博物館の別料金は報じられていません。チケットで中庭、城壁、大砲、そして要塞内の小さな博物館を見学できます。' },
          { q: '要塞内にトイレはありますか？', a: 'はい。要塞敷地内に公衆トイレがあります。' },
          { q: '内部で写真を撮ってもいいですか？', a: '中庭と博物館エリアでの撮影は一般的に許可されていますが、一部の展示ではフラッシュが制限される場合があります。掲示とスタッフの指示に従ってください。' }
        ],
        relatedLabel: '他のガイド',
        updatedLabel: '更新日',
        backToGuideLabel: 'サンペドロ要塞のガイドに戻る'
      },
      zh: {
        slug: 'shengpeideluobao-menpiao-gonglue',
        title: '宿霧聖佩德羅堡門票、營業時間與參觀攻略',
        description:
          '聖佩德羅堡最新門票（全票 ₱50、學生與長者 ₱40）、8:00–17:00 開放時間、從機場與第一碼頭出發的交通方式，以及建議停留時間。',
        h1: '聖佩德羅堡：門票、營業時間與參觀攻略',
        intro:
          '這一頁專注於實用資訊：門票多少、幾點開放、怎麼去、建議停留多久。票價與時間依目前公告整理，但仍可能變動——請在參觀當天於入口再次確認。',
        sections: [
          {
            heading: '門票價格',
            paragraphs: [
              '目前公告的全票為 ₱50。學生與長者為 ₱40，享優惠票需出示有效證件。',
              '門票已包含中庭、城牆步道、古砲與堡壘內的小型博物館，目前沒有公告額外的博物館費用。請準備小額現金——這個售票窗口以現金為主。'
            ]
          },
          {
            heading: '開放時間與最佳參觀時段',
            paragraphs: [
              '目前公告為每日 8:00–17:00。假日、特別活動與維護工程可能調整，請把這個時間視為預設值而非保證。',
              '清晨最舒適：空氣較涼、光照在珊瑚石牆上更柔和，中庭也較安靜。傍晚也可以，但城牆上的人會比較多。'
            ]
          },
          {
            heading: '怎麼到聖佩德羅堡',
            items: [
              { name: '從馬克坦－宿霧國際機場', text: '搭計程車或 Grab 直達聖佩德羅堡／獨立廣場最省事。想省錢可搭 MyBus 到 SM City Cebu，再轉吉普車或叫車前往市區。' },
              { name: '吉普車', text: '尋找行經獨立廣場或碼頭區的路線；12I 路線已知可連接 SM City Cebu 與堡壘一帶。上車前請向司機確認。' },
              { name: '計程車或 Grab', text: '目的地請設定「Fort San Pedro, A. Pigafetta Street」。人潮多時，在獨立廣場邊緣上車通常比在門口更容易。' },
              { name: '從宿霧第一碼頭', text: '堡壘緊鄰港區，視行李與天氣狀況，短程步行或搭車前往都很務實。' }
            ]
          },
          {
            heading: '建議停留時間與看點',
            paragraphs: [
              '多數旅客停留 45 到 90 分鐘。足以走完庭園中庭、城牆步道、古砲與博物館展覽；喜歡歷史或攝影的話可以再加時間。',
              '三座棱堡——La Concepción、Ignacio de Loyola 與 San Miguel——以及就近海域開採的珊瑚石牆面，是最值得留意的建築細節。'
            ]
          },
          {
            heading: '出發前的實用提醒',
            paragraphs: [
              '請準備小額現金；若要享學生或長者票價，請攜帶有效證件。',
              '城牆步道大多沒有遮蔭，水、帽子與防曬乳在這裡比多數市區景點更重要。',
              '下層中庭動線相對友善，但部分階梯與城牆段的石板高低不平。請放慢腳步，必要時請求協助。',
              '獨立廣場周邊車位有限且很快客滿。提早抵達或使用叫車 App 可以省下找車位的時間。'
            ]
          }
        ],
        faq: [
          { q: '聖佩德羅堡的門票多少錢？', a: '全票 ₱50，出示有效證件的學生與長者為 ₱40。票價可能調整，請於參觀當天在入口再次確認。' },
          { q: '開放時間是幾點？', a: '目前公告為每日 8:00–17:00，但假日、活動或維護期間可能變動。' },
          { q: '門票有包含博物館嗎？', a: '有。目前沒有公告額外的博物館費用，門票即可參觀中庭、城牆、古砲與堡壘內的小型博物館。' },
          { q: '堡壘內有洗手間嗎？', a: '有，堡壘園區內設有公共洗手間。' },
          { q: '裡面可以拍照嗎？', a: '中庭與博物館區域一般可以拍照，但部分展覽可能限制使用閃光燈。請遵守現場告示與工作人員指示。' }
        ],
        relatedLabel: '更多指南',
        updatedLabel: '更新日期',
        backToGuideLabel: '回到聖佩德羅堡指南'
      }
    }
  }
];

const translationsBasePath = (locale: Locale): string => (locale === 'en' ? '/' : `/${locale}/`);

/** Site-relative path for an article in a given locale, e.g. /ja/guides/<slug>/ */
export const articlePath = (locale: Locale, article: Article): string =>
  `${translationsBasePath(locale)}guides/${article.translations[locale].slug}/`;

export const findArticleBySlug = (locale: Locale, slug: string): Article | undefined =>
  articles.find((article) => article.translations[locale].slug === slug);

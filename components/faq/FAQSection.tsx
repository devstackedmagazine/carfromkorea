import FAQCategory from "./FAQCategory";
import { FAQCategoryData } from "./types";

/**
 * FAQData
 * Separating static data from the component for maintainability.
 */
const faqData: FAQCategoryData[] = [
  {
    id: "buying-process",
    name: "Procesi i Blerjes",
    items: [
      {
        id: 1,
        title: "Si mund të blej një makinë?",
        answer: "Procesi ynë i blerjes është i thjeshtë për lehtësinë tuaj. Mund të filloni duke rezervuar një automjet online, duke planifikuar një konsultim privat në studion tonë, ose duke kontaktuar ekipin tonë të shërbimit direkt. Më pas, ne trajtojmë të gjithë dokumentacionin në mënyrë dixhitale ose personalisht, sipas preferencës tuaj."
      },
      {
        id: 2,
        title: "Çfarë dokumentash më duhen?",
        answer: "Për të blerë një automjet, do t'ju nevojitet një patentë shoferi e vlefshme, vërtetim sigurimi dhe informacione pagese. Nëse jeni duke financuar ose duke shkëmbyer një automjet, mund të ju nevojitet gjithashtu vërtetim i të ardhurave, vërtetim i vendbanimit dhe titulli ose informacioni i shlyerjes së automjetit tuaj aktual."
      },
      {
        id: 3,
        title: "A mund ta provoj makinën para blerjes?",
        answer: "Absolutisht. Ne inkurajojmë provat private për t'u siguruar që automjeti i plotëson pritshmëritë tuaja. Për shkak të vlerës së lartë të inventarit tonë, provat janë të mundshme vetëm me takim. Ju lutemi kontaktoni ekipin tonë për të caktuar një takim për shikim dhe provë."
      },
      {
        id: 4,
        title: "A pranoni shkëmbime?",
        answer: "Po, ne pranojmë shkëmbime premium dhe luksoze. Vlerësuesit tanë ekspertë do të ofrojnë një vlerësim konkurrues të tregut për automjetin tuaj aktual, i cili mund të aplikohet drejtpërdrejt në blerjen tuaj të re."
      },
      {
        id: 5,
        title: "Cila është politika juaj e kthimit?",
        answer: "Ne garantojmë cilësinë e automjeteve tona. Ne ofrojmë një politikë kthimi 7-ditor ose 250 milje (cilado të vijë e para) për shumicën e blerjeve, me kusht që automjeti të jetë në gjendjen e tij origjinale. Disa porosi speciale mund të jenë të përjashtuara."
      }
    ]
  },
  {
    id: "financing-payments",
    name: "Financimi dhe Pagesat",
    items: [
      {
        id: 6,
        title: "A ofroni financim?",
        answer: "Po, CarFromKorea bashkëpunon me institucione financiare të nivelit të lartë për të ofruar zgjidhje të personalizuara financimi të përshtatura për profilin tuaj unik financiar, duke përfshirë struktura të personalizuara qiraje dhe financim tradicional."
      },
      {
        id: 7,
        title: "Cilat janë normat e interesit?",
        answer: "Normat e interesit janë shumë konkurruese dhe varen nga profili juaj i kreditit, afati i kredisë dhe automjeti specifik. Kontaktoni ekipin tonë financiar për një kuotë të personalizuar pa ndikim në rezultatin tuaj të kreditit."
      },
      {
        id: 8,
        title: "Cila është pagesa minimale paradhënie?",
        answer: "Ndërsa shumë transaksione kërkojnë një pagesë paradhënie prej 10-20%, ne ofrojmë struktura të personalizuara. Në disa raste, blerësit shumë të kualifikuar mund të kualifikohen për opsione pa pagesë paradhënie."
      },
      {
        id: 9,
        title: "A mund të paguaj para afatit pa gjobë?",
        answer: "Shumica e kredive tona premium automobilistike janë kredi me interes të thjeshtë pa gjoba për shlyerje të parakohshme. Ne do të sigurohemi që kjo të qartësohet para nënshkrimit të çdo marrëveshjeje."
      },
      {
        id: 10,
        title: "A punoni me bankën ose unionin tim të kreditit?",
        answer: "Po, ne jemi të lumtur të punojmë drejtpërdrejt me bankën, menaxherin e pasurisë ose unionin tuaj të kreditit. Ne do të koordinohemi drejtpërdrejt me ta për të trajtuar dokumentacionin përfundimtar dhe financimin."
      }
    ]
  },
  {
    id: "shipping-delivery",
    name: "Transporti dhe Dorëzimi",
    items: [
      {
        id: 11,
        title: "A bëni dërgesa ndërkombëtare?",
        answer: "Po, ne ofrojmë shërbime ndërkombëtare transporti me standard të lartë. Ne koordinohemi me ndërmjetësues elitarë doganor dhe rrjete të specializuara globale transporti për të siguruar dorëzim të sigurt në mbarë botën."
      },
      {
        id: 12,
        title: "Sa kushton transporti?",
        answer: "Kostot e transportit ndryshojnë në bazë të destinacionit, metodës së transportit (transport i mbyllur, ajror, detar) dhe madhësisë së automjetit. Transporti vendor i mbyllur zakonisht fillon rreth $1,500, ndërsa kuotat ndërkombëtare ofrohen me kërkesë."
      },
      {
        id: 13,
        title: "Sa zgjat dorëzimi?",
        answer: "Dorëzimi vendor zakonisht zgjat 3 deri në 10 ditë pune në varësi të distancës dhe planifikimit të transportit. Dorëzimet ndërkombëtare të personalizuara marrin mesatarisht 4-8 javë."
      },
      {
        id: 14,
        title: "A mund të dërgoni në adresën time të shtëpisë?",
        answer: "Po, transportuesit tanë të mbyllur ofrojnë shërbim derë më derë, direkt në rrugën tuaj, garazh ose objektin e caktuar."
      },
      {
        id: 15,
        title: "A ofroni sigurim transporti?",
        answer: "Të gjitha automjetet e dërguara përmes rrjetit tonë logjistik janë të siguruara plotësisht për vlerën e tyre të plotë të blerjes gjatë tranzitit."
      }
    ]
  },
  {
    id: "warranty-support",
    name: "Garancia dhe Mbështetja",
    items: [
      {
        id: 16,
        title: "Çfarë garancish përfshihen?",
        answer: "Shumica e automjeteve tona mbajnë pjesën e mbetur të garancive të tyre origjinale të fabrikës. Për automjetet jashtë garancisë, ne ofrojmë kontrata të zgjeruara shërbimi nga ofrues të nivelit të lartë."
      },
      {
        id: 17,
        title: "Ku mund ta servisoj automjetin tim?",
        answer: "Ju mund ta servisoni automjetin tuaj në çdo përfaqësi të autorizuar dhe të certifikuar për markën tuaj në mbarë botën. Nëse blihet me garanci të zgjeruar, mund të përdorni gjithashtu çdo mekanik luksoz të certifikuar."
      },
      {
        id: 18,
        title: "A ofroni mbështetje pas blerjes?",
        answer: "Absolutisht. Kur blini nga CarFromKorea, fitoni një kontakt të përjetshëm të shërbimit që mund të ndihmojë me planifikimin e mirëmbajtjes, transportin e ardhshëm, detajimin e specializuar dhe blerjet e ardhshme."
      },
      {
        id: 19,
        title: "A janë të inspektuara automjetet?",
        answer: "Çdo automjet në inventarin tonë i nënshtrohet një inspektimi rigoroz 150-pikësh mekanik, elektrik dhe estetik nga teknikë të certifikuar master përpara se të listohet."
      },
      {
        id: 20,
        title: "A mund të marr një kopje të historisë së automjetit?",
        answer: "Po, një raport historie Carfax/AutoCheck plotësues dhe falas, së bashku me raportin tonë të brendshëm të gjendjes, ofrohen krahas çdo automjeti."
      }
    ]
  }
];

/**
 * FAQSection Component
 * 
 * Main container for the FAQs.
 * Manages the layout and maps over category data.
 */
export default function FAQSection() {
  return (
    <section className="bg-[#111415] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pyetjet e Bëra Më Shpesh
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Gjithçka që duhet të dini për blerjen, financimin dhe transportin e automjetit tuaj të ardhshëm luksoz me CarFromKorea.
          </p>
        </div>

        <div className="flex flex-col">
          {faqData.map((category) => (
            <FAQCategory key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-12 text-center border-t border-[#2A2E34] pt-12">
          <p className="text-gray-400 mb-6">
            Nuk e gjeni përgjigjen që kërkoni?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#3A4569] text-white rounded-md bg-[#3A4569]/10 hover:bg-[#3A4569]/20 transition-colors duration-300 font-medium"
          >
            Kontaktoni Shërbimin Tonë
          </a>
        </div>
      </div>
    </section>
  );
}

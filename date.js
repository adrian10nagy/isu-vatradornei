// 1) Destinația locului producerii evenimentului (locații)
const locatiiData = [
  { "nr": 0, "den": "Nu este cazul" },
  { "nr": 1, "den": "Dormitor" },
  { "nr": 2, "den": "Bucătărie" },
  { "nr": 3, "den": "Cameră de zi, sufragerie" },
  { "nr": 4, "den": "Pod, mansardă, acoperiș" },
  { "nr": 5, "den": "Casa scării" },
  { "nr": 6, "den": "Casa ascensor" },
  { "nr": 7, "den": "Coridor, vestibul, hol, balcon" },
  { "nr": 8, "den": "Grup sanitar, baie" },
  { "nr": 9, "den": "Sala de întrunire, conferințe, recepții, tribună etc." }
  // ... aici poți continua cu restul celor 126 locații
];

// 2) Sursa probabilă de aprindere
const sursaAprindereData = [
  { "code": 0,  "label": "Nu este cazul" },
  { "code": 1,  "label": "Arc sau scânteie electrică (și de la sudură electrică)" },
  { "code": 2,  "label": "Efectul termic al curentului electric" },
  { "code": 3,  "label": "Scurtcircuit electric" },
  { "code": 4,  "label": "Electricitate statică" },
  { "code": 5,  "label": "Flacără (focuri în aer liber, chibrit, flăcări de la aparate termice etc.)" },
  { "code": 6,  "label": "Jar sau scântei" },
  { "code": 7,  "label": "Efect termic (căldură prin contact sau radiație, frecare etc.)" },
  { "code": 8,  "label": "Scântei mecanice" },
  { "code": 9,  "label": "Autoaprindere" },
  { "code": 10, "label": "Reacție chimică, scânteie generată de reacție chimică" },
  { "code": 11, "label": "Explozie, efectul termic al unor substanțe incendiare aprinse" },
  { "code": 12, "label": "Trăsnet, fulger globular" },
  { "code": 13, "label": "Alte surse (radiație solară, energie nucleară, căderea unor corpuri din atmosferă)" },
  { "code": 14, "label": "Propagat de la un alt incendiu" },
  { "code": 15, "label": "În curs de stabilire" },
  { "code": 16, "label": "Nedeterminată" }
];

// 3) Mijloace care pot produce arderea
const mijloaceData = [
  {
    "title": "Aparate electrocasnice / electronice",
    "icon": "bi-plug",
    "items": [
      { "code": 1, "label": "Aprinzător electric" },
      { "code": 2, "label": "Aspirator praf" },
      { "code": 3, "label": "Fier de călcat" },
      { "code": 4, "label": "Filtru de cafea" },
      { "code": 5, "label": "Frigider" },
      { "code": 6, "label": "Încălzitor pentru apă sau alte lichide" },
      { "code": 7, "label": "Mașină de bărbierit" },
      { "code": 8, "label": "Mașină de spălat" },
      { "code": 9, "label": "Aparat aer condiționat" },
      { "code": 10, "label": "Radio, televizor" },
      { "code": 11, "label": "Combină, video" },
      { "code": 12, "label": "Robot de bucătărie" },
      { "code": 13, "label": "Alte tipuri de aparate electrocasnice/electronice" }
    ]
  },
  {
    "title": "Mijloace de iluminat electrice",
    "icon": "bi-lightbulb",
    "items": [
      { "code": 14, "label": "Bec" },
      { "code": 15, "label": "Tub fluorescent" },
      { "code": 16, "label": "Firmă luminoasă" },
      { "code": 17, "label": "Ghirlandă luminoasă" },
      { "code": 18, "label": "Lampadar" },
      { "code": 19, "label": "Proiector (reflector)" },
      { "code": 20, "label": "Lampă de iluminat" },
      { "code": 21, "label": "Lanternă" },
      { "code": 22, "label": "Orgă de lumini" },
      { "code": 23, "label": "Alte aparate de iluminat" }
    ]
  },
  {
    "title": "Aparate de încălzit electrice",
    "icon": "bi-thermometer-sun",
    "items": [
      { "code": 24, "label": "Aerotermă" },
      { "code": 25, "label": "Calorifer electric" },
      { "code": 26, "label": "Radiator (elevuză)" },
      { "code": 27, "label": "Reșou" },
      { "code": 28, "label": "Boiler" },
      { "code": 29, "label": "Cuptor cu microunde / friteuză / aparat de gătit" },
      { "code": 30, "label": "Pătură, pernă electrică" },
      { "code": 31, "label": "Încălzire prin radiații (UV, IR etc.)" },
      { "code": 32, "label": "Alte tipuri de aparate electrice de încălzire" }
    ]
  },
  {
    "title": "Motoare și aparate de prelucrare a curentului electric",
    "icon": "bi-cpu",
    "items": [
      { "code": 33, "label": "Generator electric" },
      { "code": 34, "label": "Motor electric" },
      { "code": 35, "label": "Transformator electric (autotransformator)" },
      { "code": 36, "label": "Redresor" },
      { "code": 37, "label": "Acumulator, baterie" },
      { "code": 38, "label": "Alternator" },
      { "code": 39, "label": "Alte motoare sau aparate de prelucrare a curentului electric" }
    ]
  },
  {
    "title": "Alte aparate electrice / electronice",
    "icon": "bi-device-hdd",
    "items": [
      { "code": 40, "label": "Computer de bord" },
      { "code": 41, "label": "Aparat de proiecție (filme, diafilme, diapozitive)" },
      { "code": 42, "label": "Aparat medical" },
      { "code": 43, "label": "Aparat muzical" }
    ]
  },
  {
    "title": "Conductori și aparate de întrerupere și control",
    "icon": "bi-toggles2",
    "items": [
      { "code": 51, "label": "Cablu electric, conductor electric" },
      { "code": 52, "label": "Comutator, întrerupător" },
      { "code": 53, "label": "Releu, contactor" },
      { "code": 54, "label": "Contor" },
      { "code": 55, "label": "Cutie de conexiuni, manson, doză" },
      { "code": 56, "label": "Tablou de distribuție" },
      { "code": 57, "label": "Tablou (aparat) de măsură, comandă și control" },
      { "code": 58, "label": "Priză de curent" },
      { "code": 59, "label": "Termostat" },
      { "code": 60, "label": "Instalație electrică volantă" },
      { "code": 61, "label": "Alt tip de conductori sau aparate de întrerupere și control" }
    ]
  },
  {
    "title": "Sisteme care produc electricitate statică",
    "icon": "bi-lightning",
    "items": [
      { "code": 62, "label": "Sisteme de depozitare, vehicule și transport lichide combustibile" },
      { "code": 63, "label": "Sisteme de depozitare, vehicule și transport pulberi combustibile" },
      { "code": 64, "label": "Utilaj prelucrare materiale/substanțe ce se încarcă electrostatic (malaxor, valt etc.)" },
      { "code": 65, "label": "Sisteme de transmitere a mișcării (curele de transmisie etc.)" },
      { "code": 66, "label": "Spălare în lichide combustibile" }
    ]
  },
  {
    "title": "Echipamente încărcate electrostatic",
    "icon": "bi-person-bounding-box",
    "items": [
      { "code": 67, "label": "Echipament ce se încarcă electrostatic (îmbrăcăminte, încălțăminte)" },
      { "code": 68, "label": "Unelte și scule ce se încarcă electrostatic" }
    ]
  },
  {
    "title": "Mijloace cu flacără",
    "icon": "bi-fire",
    "items": [
      { "code": 69, "label": "Brichetă" },
      { "code": 70, "label": "Chibrituri" },
      { "code": 71, "label": "Lampă de iluminat cu combustibil lichid" },
      { "code": 72, "label": "Lampă cu combustibil gazos" },
      { "code": 73, "label": "Lampă de gătit cu combustibil lichid" },
      { "code": 74, "label": "Lampă spirtieră" },
      { "code": 75, "label": "Lumânare" },
      { "code": 76, "label": "Torță, făclie, feștilă, felinar" },
      { "code": 77, "label": "Alte mijloace folosite pentru iluminare sau aprindere" }
    ]
  },
  {
    "title": "Foc în aer liber",
    "icon": "bi-tree",
    "items": [
      { "code": 78, "label": "Foc în aer liber" }
    ]
  },
  {
    "title": "Țigară",
    "icon": "bi-slash-circle",
    "items": [
      { "code": 79, "label": "Țigară" }
    ]
  },
  {
    "title": "Aparate de încălzit cu combustibil",
    "icon": "bi-fire",
    "items": [
      { "code": 80, "label": "Centrală de încălzire cu combustibil solid" },
      { "code": 81, "label": "Centrală de încălzire cu combustibil lichid/gazos" },
      { "code": 82, "label": "Șemineu" },
      { "code": 83, "label": "Cuptor" },
      { "code": 84, "label": "Mașină de gătit pentru bucătărie (aragaz)" },
      { "code": 85, "label": "Sobă cu acumulare de căldură (cărămidă, teracotă)" },
      { "code": 86, "label": "Sobă fără acumulare de căldură (metalică)" },
      { "code": 87, "label": "Afumătoare" },
      { "code": 88, "label": "Cazan de topit bitum" },
      { "code": 89, "label": "Clocitoare" },
      { "code": 90, "label": "Cubilou" },
      { "code": 91, "label": "Uscător" },
      { "code": 92, "label": "Dispozitiv pentru sudură, tăiere, lipire cu gaze sau lichide combustibile" },
      { "code": 93, "label": "Alte aparate de încălzit (cuptor tehnologic)" }
    ]
  },
  {
    "title": "Utilaje și sisteme de acționare",
    "icon": "bi-gear-wide-connected",
    "items": [
      { "code": 94, "label": "Desprăfuitor" },
      { "code": 95, "label": "Elevator" },
      { "code": 96, "label": "Fierăstrău mecanic" },
      { "code": 97, "label": "Grup electrogen" },
      { "code": 98, "label": "Locomotivă" },
      { "code": 99, "label": "Motor cu ardere internă" },
      { "code": 100, "label": "Motor cu aburi" },
      { "code": 101, "label": "Motor cu reacție" },
      { "code": 102, "label": "Motor cu turbină (turboreactor)" },
      { "code": 103, "label": "Mașină agricolă" },
      { "code": 104, "label": "Sistem de acționare bandă transportoare" },
      { "code": 105, "label": "Alte tipuri de utilaje și sisteme de acționare" }
    ]
  },
  {
    "title": "Metale și materiale topite",
    "icon": "bi-droplet-half",
    "items": [
      { "code": 106, "label": "Material topit (metal, sticlă, masă plastică etc.)" },
      { "code": 107, "label": "Material incandescent (lemn, cărbune etc.)" },
      { "code": 108, "label": "Alte materiale metalice care ard sau scurgeri ale materialelor topite" }
    ]
  },
  {
    "title": "Conducte și canale pentru agent termic / ventilare",
    "icon": "bi-pipeline",
    "items": [
      { "code": 109, "label": "Burlan (țeavă) metalic" },
      { "code": 110, "label": "Canal (coș) de fum" },
      { "code": 111, "label": "Conductă de aer cald" },
      { "code": 112, "label": "Conductă de apă caldă sau supraîncălzită" },
      { "code": 113, "label": "Canal de aerisire, ventilare, condiționare mediu" },
      { "code": 114, "label": "Canal de încălzire" },
      { "code": 115, "label": "Conductă de abur" },
      { "code": 116, "label": "Conductă tehnologică cu lichide sau gaze încălzite" },
      { "code": 117, "label": "Tobă de eșapament" },
      { "code": 118, "label": "Alte tipuri de conducte/canale" }
    ]
  },
  {
    "title": "Căldură solară",
    "icon": "bi-brightness-high",
    "items": [
      { "code": 119, "label": "Căldură solară directă, acumulată, concentrată sau reflectată de obiecte" }
    ]
  },
  {
    "title": "Produse ce se pot autoaprinde",
    "icon": "bi-flame",
    "items": [
      { "code": 120, "label": "Metale (ex.: sodiu, potasiu, magneziu etc.)" },
      { "code": 121, "label": "Substanțe chimice solide" },
      { "code": 122, "label": "Lichide combustibile" },
      { "code": 123, "label": "Gaze combustibile" },
      { "code": 124, "label": "Semințe" },
      { "code": 125, "label": "Uleiuri" },
      { "code": 126, "label": "Plante tehnice, furaje, industriale" }
    ]
  },
  {
    "title": "Rumeguș, pulberi, prafuri și făină combustibilă",
    "icon": "bi-cloud-drizzle",
    "items": [
      { "code": 127, "label": "Rumeguș, pulberi, prafuri și făină combustibilă" },
      { "code": 128, "label": "Fibre și fire vegetale, sintetice, artificiale, de origine animală" },
      { "code": 129, "label": "Grăsimi și alte substanțe grase" },
      { "code": 130, "label": "Cărbune" },
      { "code": 131, "label": "Cârpe, deșeuri textile" },
      { "code": 132, "label": "Alte materiale și substanțe" }
    ]
  },
  {
    "title": "Produse și substanțe care pot produce explozii",
    "icon": "bi-exclamation-octagon",
    "items": [
      { "code": 133, "label": "Materiale explozive (muniție, artificii, pocnitori, explozivi etc.)" },
      { "code": 134, "label": "Amestecuri de pulberi, gaze sau vapori cu aerul" }
    ]
  },
  {
    "title": "Trăsnet",
    "icon": "bi-cloud-lightning",
    "items": [
      { "code": 135, "label": "Trăsnet direct" },
      { "code": 136, "label": "Trăsnet prin instalația de paratrăsnet" }
    ]
  },
  {
    "title": "Surse nucleare",
    "icon": "bi-radioactive",
    "items": [
      { "code": 137, "label": "Reactor cercetare" },
      { "code": 138, "label": "Reactor energetic" },
      { "code": 139, "label": "Armă nucleară" },
      { "code": 140, "label": "Altă sursă nucleară" }
    ]
  },
  {
    "title": "Alte mijloace, nedeterminate, în curs de stabilire",
    "icon": "bi-question-circle",
    "items": [
      { "code": 141, "label": "Alte mijloace care pot produce aprinderea" },
      { "code": 142, "label": "Nedeterminate" },
      { "code": 143, "label": "În curs de stabilire" }
    ]
  },
  {
    "title": "Nu este cazul",
    "icon": "bi-x-circle",
    "items": [
      { "code": 0, "label": "Nu este cazul" }
    ]
  }
];

const primulMaterialCareAAars = [
  {
    "title": "Gaze combustibile",
    "items": [
      { "code": 1, "label": "Acetilenă" },
      { "code": 2, "label": "Butan, propan" },
      { "code": 3, "label": "Metan" },
      { "code": 4, "label": "Hidrogen" },
      { "code": 5, "label": "Gaz de sondă" },
      { "code": 7, "label": "Alte gaze combustibile" }
    ]
  },
  {
    "title": "Lichide combustibile (sau vapori)",
    "items": [
      { "code": 8,  "label": "Benzină" },
      { "code": 9,  "label": "Motorină, păcură" },
      { "code": 10, "label": "Petrol" },
      { "code": 11, "label": "Țiței" },
      { "code": 12, "label": "Produse chimice de curățat" },
      { "code": 13, "label": "Gazolină, solvenți" },
      { "code": 14, "label": "Alcool și produse pe bază de alcool" },
      { "code": 15, "label": "Ulei" },
      { "code": 16, "label": "Lacuri" },
      { "code": 17, "label": "Vopsele" },
      { "code": 18, "label": "Adezivi" },
      { "code": 19, "label": "Substanțe pentru deratizări, dezinfectii, etc." },
      { "code": 20, "label": "Alte lichide combustibile" }
    ]
  },
  {
    "title": "Produse chimice solide",
    "items": [
      { "code": 21, "label": "Mase plastice (articole din mase plastice, izolație cabluri)" },
      { "code": 22, "label": "Naftalină" }
    ]
  },
  {
    "title": "Materiale diverse (chimice / plastice / asfalt)",
    "items": [
      { "code": 23, "label": "Linoleum" },
      { "code": 24, "label": "Cauciuc (articole de cauciuc, izolație cabluri din cauciuc)" },
      { "code": 25, "label": "Vatā minerală" },
      { "code": 26, "label": "Parafină, ceară" },
      { "code": 27, "label": "Îngrășăminte chimice" },
      { "code": 28, "label": "Bitum, asfalt" },
      { "code": 29, "label": "Pânză, carton asfaltat" },
      { "code": 30, "label": "Explozivi" },
      { "code": 31, "label": "Alte produse chimice" }
    ]
  },
  {
    "title": "Pulberi combustibile",
    "items": [
      { "code": 32, "label": "Pulberi metalice" },
      { "code": 33, "label": "Pulberi de cărbune" },
      { "code": 34, "label": "Pulberi de lemn" },
      { "code": 35, "label": "Pulberi de textile" },
      { "code": 36, "label": "Pulberi de făină" },
      { "code": 37, "label": "Pulberi de produse chimice" },
      { "code": 38, "label": "Alte pulberi combustibile" }
    ]
  },
  {
    "title": "Materiale combustibile solide (organice)",
    "items": [
      {
        "code": 39,
        "label": "Lemn (copaci, pomi, bușteni, cherestea de foc, mobilier, ambalaj, rumeguș)"
      },
      {
        "code": 40,
        "label": "Hârtie și carton (sul, balot, vrac, stivă, articole de hârtie, deșeuri, etc.)"
      },
      {
        "code": 41,
        "label": "Textile naturale (lână, bumbac, in, iută, cânepă, sub formă de fire, vrac)"
      },
      {
        "code": 42,
        "label": "Textile artificiale și chimice (fire, fibre, baloți, vrac, ambalaje, deșeuri)"
      }
    ]
  },
  {
    "title": "Materiale combustibile diverse",
    "items": [
      {
        "code": 43,
        "label": "Piele naturală sau sintetică (sub formă de vrac, baloți, îmbrăcăminte, etc.)"
      },
      {
        "code": 44,
        "label": "Păr de origine animală (sub formă de vrac, baloți, articole din păr, etc.)"
      },
      {
        "code": 45,
        "label": "Cereale (sub formă de cultură, recoltă, semințe, pleavă, miriște, deșeuri, etc.)"
      },
      {
        "code": 46,
        "label": "Plante tehnice (in, cânepă, sub formă de cultură, semințe, ulei, tutun, deșeuri, etc.)"
      },
      {
        "code": 47,
        "label": "Plante furajere (fân, lucernă, trifoi, sub formă de vrac, șiră, căpițe, deșeuri)"
      },
      {
        "code": 48,
        "label": "Cărbune (antracit, cocs, huilă, turbă, lignit)"
      },
      {
        "code": 49,
        "label": "Grăsime (untură, slănină)"
      }
    ]
  },
  {
    "title": "Deșeuri (nereutilizabile)",
    "items": [
      { "code": 50, "label": "Funingine" },
      { "code": 51, "label": "Grăsimi depuse pe tubulatură" },
      { "code": 52, "label": "Frunze, cetină și scoarță de copaci" },
      { "code": 53, "label": "Cârpe îmbibate în ulei și alte produse" },
      { "code": 54, "label": "Reziduuri de decantare" },
      { "code": 55, "label": "Șpan și așchii metalice" },
      { "code": 56, "label": "Gunoi, reziduuri menajere" },
      { "code": 57, "label": "Mărăciniș, lăstăriș și altă vegetație uscată" },
      { "code": 58, "label": "Alte deșeuri nereutilizabile" }
    ]
  },
  {
    "title": "Alte materiale",
    "items": [
      { "code": 59, "label": "Alte materiale" }
    ]
  }
];

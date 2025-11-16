// 1) Destinația locului producerii evenimentului (locații)
const locatiiData = [
  {
    title: "Destinația locului producerii evenimentului (locații)",
    items: [
      { code: 0, label: "Nu este cazul" },
      { code: 1, label: "Dormitor" },
      { code: 2, label: "Bucătărie" },
      { code: 3, label: "Cameră de zi, sufragerie" },
      { code: 4, label: "Pod, mansardă, acoperiș" },
      { code: 5, label: "Casa scării" },
      { code: 6, label: "Casa ascensor" },
      { code: 7, label: "Coridor, vestibul, hol, balcon" },
      { code: 8, label: "Grup sanitar, baie" },
      { code: 9, label: "Debara, cămară" },
      { code: 10, label: "Pivniță, subsol" },
      { code: 11, label: "Centrală (punct) termică" },
      { code: 12, label: "Lift" },
      { code: 13, label: "Ghenă de ventilație, climatizare" },
      { code: 14, label: "Garaj" },
      { code: 15, label: "Spălătorie, uscătorie" },
      { code: 16, label: "Curte, grădină" },
      { code: 17, label: "Distilerii de alcool" },
      { code: 18, label: "Magazie, șopron, baracă materiale, afumătoare" },
      { code: 19, label: "Birou, sediu de firmă" },
      { code: 20, label: "Vestiariu" },
      { code: 21, label: "Încăpere pentru cazare (inclusiv creșă, cămin)" },
      { code: 22, label: "Oficiu" },
      { code: 23, label: "Recepție, cabină portar" },
      { code: 24, label: "Farmacie" },
      { code: 25, label: "Sală pentru bolnavi, sală de consultație" },
      { code: 26, label: "Laborator analize" },
      { code: 27, label: "Salon frizerie, coafură, cosmetică" },
      { code: 28, label: "Sală de întrunire, conferințe, recepții, tribună, protocol" },
      { code: 29, label: "Sală de sport / festivitate" },
      { code: 30, label: "Atelier încălzit" },
      { code: 31, label: "Loc cu mult praf și sunet, cabluri și motoare" },
      { code: 32, label: "Piecări, tipografii" },
      { code: 33, label: "Spațiu de producție" },
      { code: 34, label: "Încăperi depozitare lemn, mobilă" },
      { code: 35, label: "Foaier, garderobă" },
      { code: 36, label: "Sală de antrenament (clasă de dans etc.)" },
      { code: 37, label: "Arhivă, bibliotecă, muzeu" },
      { code: 38, label: "Lăcaș de cult (biserici, mănăstiri)" },
      { code: 39, label: "Loc de expunere marfă (vitrină)" },
      { code: 40, label: "Încapere pentru vânzare" },
      { code: 41, label: "Piață, târg" },
      { code: 42, label: "Magazin tip supermarket" },
      { code: 43, label: "Hol, coridor instituții" },
      { code: 44, label: "Cafenea, restaurant, bar" },
      { code: 45, label: "Sufragerie internat, local de alimentație" },
      { code: 46, label: "Laborator chimic, magazie de substanțe" },
      { code: 47, label: "Clădiri locale tehnice, depozite" },
      { code: 48, label: "Pepiniere, depozite semințe" },
      { code: 49, label: "Moară, uscător cereale" },
      { code: 50, label: "Instalații tehnice industriale" },
      { code: 51, label: "Platforme industriale" },
      { code: 52, label: "Uzine metalurgice" },
      { code: 53, label: "Uzine, rafinării" },
      { code: 54, label: "Fabrici de materiale de construcții" },
      { code: 55, label: "Fabrici textile, tricotaje" },
      { code: 56, label: "Atelier de creație, proiectare" },
      { code: 57, label: "Atelier de întreținere" },
      { code: 58, label: "Atelier de producție" },
      { code: 59, label: "Atelier de reparații, service" },
      { code: 60, label: "Alte ateliere" },
      { code: 61, label: "Laboratoare" },
      { code: 62, label: "Brutărie" },
      { code: 63, label: "Moară" },
      { code: 64, label: "Abator, carmangerie" },
      { code: 65, label: "Cameră de comandă și control" },
      { code: 66, label: "Generator, transformator electric" },
      { code: 67, label: "Tablou electric" },
      { code: 68, label: "Stație de transformatoare, releu comunicații" },
      { code: 69, label: "Instalații tehnologice" },
      { code: 70, label: "Presă de ulei" },
      { code: 71, label: "Turnătorie" },
      { code: 72, label: "Gospodării de cabluri" },
      { code: 73, label: "Mașini și utilaje" },
      { code: 74, label: "Bandă transportoare" },
      { code: 75, label: "Compresoare" },
      { code: 76, label: "Sondă, platformă foraj, extracție" },
      { code: 77, label: "Exploatări miniere" },
      { code: 78, label: "Conducte de transport" },
      { code: 79, label: "Conducte tehnologice" },
      { code: 80, label: "Sală de mașini, sală pompare" },
      { code: 81, label: "Hală de producție" },
      { code: 82, label: "Hală și gater" },
      { code: 83, label: "Tipografii, spații de multiplicat și copiat" },
      { code: 84, label: "Stație pilot, laborator de încercare" },
      { code: 85, label: "Stație alimentare benzină, motorină, GPL" },
      { code: 86, label: "Stație de dezbenzinare" },
      { code: 87, label: "Stație de îmbuteliere" },
      { code: 88, label: "Rezervoare, buncăr, bazin" },
      { code: 89, label: "Depozit general (mix)" },
      { code: 90, label: "Depozit de materiale combustibile solide" },
      { code: 91, label: "Depozit de materiale combustibile lichide" },
      { code: 92, label: "Depozit de materiale combustibile gazoase" },
      { code: 93, label: "Depozit de materiale explozibile" },
      { code: 94, label: "Depozit substanțe toxice sau radioactive" },
      { code: 95, label: "Depozit de produse alimentare" },
      { code: 96, label: "Container" },
      { code: 97, label: "Depozit furaje" },
      { code: 98, label: "Adăpost animale (grajd, staul, șaivan, stână)" },
      { code: 99, label: "Adăpost de păsări" },
      { code: 100, label: "Crestătorie albine" },
      { code: 101, label: "Crestătorie de pește" },
      { code: 102, label: "Dispersant veterinar" },
      { code: 103, label: "Lanuri" },
      { code: 104, label: "Miriște" },
      { code: 105, label: "Mașini și utilaje agricole" },
      { code: 106, label: "Moară pentru preparare furaje" },
      { code: 107, label: "Pepiniere" },
      { code: 108, label: "Plantație (livadă) pomicolă sau viticolă" },
      { code: 109, label: "Sere, ciupercării" },
      { code: 110, label: "Siloze, pătu ce cereale, hambare, șure" },
      { code: 111, label: "Uscătoare cereale, fructe, legume" },
      { code: 112, label: "Pajiște, pășune ocol silvic" },
      { code: 113, label: "Pădure – plantație" },
      { code: 114, label: "Pădure – litieră" },
      { code: 115, label: "Pădure – coronament" },
      { code: 116, label: "Izlazuri, pășuni comunale" },
      { code: 117, label: "Depouri, remize, garaje" },
      { code: 118, label: "Locomotivă" },
      { code: 119, label: "Mijloc de transport mărfuri" },
      { code: 120, label: "Mijloc de transport persoane" },
      { code: 121, label: "Rame și garnituri de tren" },
      { code: 122, label: "Roți de tren" },
      { code: 123, label: "Rampe de încărcare, descărcare" },
      { code: 124, label: "Parcuri, locuri de joacă" },
      { code: 125, label: "Patinoare" },
      { code: 126, label: "Săli antrenament" },
      { code: 127, label: "Tribună stadion" },
      { code: 128, label: "Cabină telefonică" },
      { code: 129, label: "Cimitir" },
      { code: 130, label: "Teren viran" },
      { code: 131, label: "Groapă de gunoi" },
      { code: 132, label: "Diverse neîncadrate (canton, ghenă, poligon trageri, culoar frontieră)" },
      { code: 133, label: "Nedeterminate" },
      { code: 134, label: "Vegetație uscată" },
      { code: 135, label: "Stație autobuz/tramvai" },
      { code: 136, label: "Spațiu comercial" },
      { code: 137, label: "Market / Supermarket / Hipermarket" },
      { code: 138, label: "Stație metrou" },
      { code: 139, label: "Fântână" },
      { code: 140, label: "Ape curgătoare" },
      { code: 141, label: "Ape stătătoare" },
      { code: 142, label: "Mal" },
      { code: 143, label: "Drum județean" },
      { code: 144, label: "Drum național/european" },
      { code: 145, label: "Autostradă" },
      { code: 146, label: "Stradă/alee pietonală din interiorul localităților" }
    ]
  }
];

// 2) Sursa probabilă de aprindere
const sursaAprindereData = [
  {
    title: "Sursa probabilă de aprindere",
    items: [
      { code: 0, label: "Nu este cazul" },
      { code: 1, label: "Arc sau scânteie electrică (și de la sudură electrică)" },
      { code: 2, label: "Efectul termic al curentului electric" },
      { code: 3, label: "Scurtcircuit electric" },
      { code: 4, label: "Electricitate statică" },
      { code: 5, label: "Flacără (focuri în aer liber, chibrit, flăcări de la aparate termice etc.)" },
      { code: 6, label: "Jar sau scântei" },
      { code: 7, label: "Efect termic (căldură prin contact sau radiație, frecare etc.)" },
      { code: 8, label: "Scântei mecanice" },
      { code: 9, label: "Autoaprindere" },
      { code: 10, label: "Reacție chimică, scânteie generată de reacție chimică" },
      { code: 11, label: "Explozie, efectul termic al unor substanțe incendiare aprinse" },
      { code: 12, label: "Trăsnet, fulger globular" },
      { code: 13, label: "Alte surse (radiație solară, energie nucleară, căderea unor corpuri din atmosferă)" },
      { code: 14, label: "Propagat de la un alt incendiu" },
      { code: 15, label: "În curs de stabilire" },
      { code: 16, label: "Nedeterminată" }
    ]
  }
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

// 4)
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

// 5)
const imprejurariData = [
  {
    title: "Instalații electrice defecte",
    items: [
      { code: 1, label: "Folosire generator, motor electric, cu defecțiuni sau suprasolicitat" },
      { code: 2, label: "Transformator, redresor, condensator defect sau suprasolicitat" },
      { code: 3, label: "Contor sau aparat de măsură, comandă și control defect" },
      { code: 4, label: "Tablou de distribuție, manson, doză, cu defecțiuni, neizolat corespunzător sau suprasolicitat" },
      { code: 5, label: "Aparat de conectare, pornire, oprire, reglaj, comutare sau priză defectă" },
      { code: 6, label: "Siguranțe fuzibile sau alte aparate de protecție defecte ori supradimensionate" },
      { code: 7, label: "Conductori, cabluri electrice defecte, neizolate corespunzător sau cu izolația deteriorată în urma unei acțiuni mecanice ori fizice" },
      { code: 8, label: "Aparate electrice de încălzire defecte, amplasate ori neizolate corespunzător" },
      { code: 9, label: "Aparate electrocasnice defecte amplasate ori neizolate corespunzător" },
      { code: 10, label: "Echipamente de iluminat electric, neizolate, amplasate necorespunzător" },
      { code: 11, label: "Neîndepărtarea materialelor și substanțelor combustibile de pe instalații, utilaje și aparate electrice" },
      { code: 12, label: "Acumulator electric defect" },
      { code: 13, label: "Mașini, utilaje sau alte aparate ori consumatori electrici cu defecțiuni" }
    ]
  },
  {
    title: "Echipamente electrice improvizate",
    items: [
      { code: 14, label: "Mașini și utilaje electrice cu improvizații" },
      { code: 15, label: "Aparate electrice de încălzire cu improvizații sau folosite în alte scopuri" },
      { code: 16, label: "Echipamente de iluminat electric improvizate" },
      { code: 17, label: "Conductori electrici improvizați" },
      { code: 18, label: "Contacte electrice improvizate" },
      { code: 19, label: "Aparate de măsură și control cu improvizații" },
      { code: 20, label: "Siguranțe fuzibile improvizate" },
      { code: 21, label: "Aparate electrice diverse cu improvizații sau folosite în alte scopuri" }
    ]
  },
  {
    title: "Aparate electrice sub tensiune nesupravegheate",
    items: [
      { code: 22, label: "Aparate electrice de încălzire lăsate sub tensiune nesupravegheate" },
      { code: 23, label: "Aparate electrocasnice lăsate sub tensiune" },
      { code: 24, label: "Mijloace de iluminat electrice lăsate sub tensiune" },
      { code: 25, label: "Mașini, utilaje și aparate tehnologice lăsate sub tensiune" },
      { code: 26, label: "Aparate de măsură și control lăsate sub tensiune" },
      { code: 27, label: "Acumulator electric lăsat sub sarcină" },
      { code: 28, label: "Alte aparate electrice lăsate sub tensiune" }
    ]
  },
  {
    title: "Sisteme de încălzire defecte",
    items: [
      { code: 29, label: "Sisteme de încălzire (sau gătit) defecte, neizolate termic corespunzător" },
      { code: 30, label: "Sisteme de încălzire (sau gătit) amplasate necorespunzător față de materiale combustibile" },
      { code: 31, label: "Agent termic (abur etc.) supraincălzit" },
      { code: 32, label: "Alimentarea defectuoasă cu combustibili a sistemelor de încălzire" },
      { code: 33, label: "Sistem de încălzire necorespunzător pericolului de incendiu existent" }
    ]
  },
  {
    title: "Mijloace de încălzire improvizate",
    items: [
      { code: 34, label: "Mijloc de încălzire locală improvizat" },
      { code: 35, label: "Corp de încălzire centrală improvizat" },
      { code: 36, label: "Mijloc de încălzire tehnologică improvizat" },
      { code: 37, label: "Aparat de gătit improvizat" }
    ]
  },
  {
    title: "Mijloace de încălzire nesupravegheate",
    items: [
      { code: 38, label: "Mod greșit de aprindere" },
      { code: 39, label: "Mijloc de încălzire locală nesupravegheat ori supraincălzit" },
      { code: 40, label: "Mijloc de încălzire tehnologică nesupravegheat ori supraincălzit" },
      { code: 41, label: "Aparat de gătit nesupravegheat ori supraincălzit" },
      { code: 42, label: "Modificarea poziției normale a mijloacelor de încălzire (cădere, răsturnare)" }
    ]
  },
  {
    title: "Coșuri de fum, cenușă, jar",
    items: [
      { code: 43, label: "Coș, canal sau burlan de fum deteriorat" },
      { code: 44, label: "Coș, canal, burlan de fum amplasat ori neprotejat termic față de materiale combustibile" },
      { code: 45, label: "Coș, canal, burlan de fum fără sită parascântei" },
      { code: 46, label: "Coș, canal, burlan de fum necurățat de funingine" },
      { code: 47, label: "Depozitarea cenușii și jarului nestins în apropierea materialelor combustibile" },
      { code: 48, label: "Jar ori scântei purtate de vânt și căzute pe materiale și substanțe combustibile" },
      { code: 49, label: "Jar căzut din sistemele de încălzit" }
    ]
  },
  {
    title: "Jocul copiilor cu focul",
    items: [
      { code: 50, label: "Jocul copiilor cu focul (< 6 ani)" },
      { code: 51, label: "Jocul copiilor cu focul (> 6 ani)" }
    ]
  },
  {
    title: "Fumatul",
    items: [
      { code: 52, label: "Fumatul în locuri nepermise sau în locuri neprotejate corespunzător" },
      { code: 53, label: "Fumatul în timpul somnului" }
    ]
  },
  {
    title: "Foc deschis",
    items: [
      { code: 54, label: "Foc deschis în spații deschise (vegetal uscat, deșeuri, miriște, foc de tabără etc.)" },
      { code: 55, label: "Foc deschis în spații închise (lumânări, făclii, chibrituri, brichete)" }
    ]
  },
  {
    title: "Sudare, tăiere, lipire",
    items: [
      { code: 56, label: "Sudare fără permis de lucru cu foc" },
      { code: 57, label: "Sudare cu permis de lucru cu foc, dar fără respectarea normelor" },
      { code: 58, label: "Tăiere, lipire fără respectarea normelor" }
    ]
  },
  {
    title: "Autopornire / reacții chimice",
    items: [
      { code: 59, label: "Autoaprindere (contact cu aerul, contact cu oxigenul)" },
      { code: 60, label: "Autoaprindere (contact cu apa sau umiditate mărită)" },
      { code: 61, label: "Autoaprindere (reacția chimică dintre substanțe)" },
      { code: 62, label: "Autoaprinderea substanțelor aflate în amestec" },
      { code: 63, label: "Autoaprindere (neaerisire sau neventilare)" }
    ]
  },
  {
    title: "Scântei mecanice, electrostatice și frecare",
    items: [
      { code: 64, label: "Scântei mecanice" },
      { code: 65, label: "Scântei de la locomotive, vehicule (mașini agricole)" },
      { code: 66, label: "Scântei electrostatice" },
      { code: 67, label: "Frecare, patinare, alunecare" }
    ]
  },
  {
    title: "Scurgeri (scăpări) de produse inflamabile",
    items: [
      { code: 68, label: "Topituri de metale sau alte substanțe" },
      { code: 69, label: "Scurgeri de lichide combustibile" },
      { code: 70, label: "Scăpări de vapori inflamabili" },
      { code: 71, label: "Scăpări de gaze combustibile" },
      { code: 72, label: "Degajări de pulberi combustibile" }
    ]
  },
  {
    title: "Defecțiuni tehnice de proiectare, construcții și montaj",
    items: [
      { code: 73, label: "Defecțiuni de proiectare" },
      { code: 74, label: "Defecțiuni de fabricare sau execuție" },
      { code: 75, label: "Amplasare (montaj) necorespunzătoare" },
      { code: 76, label: "Neprevederea sistemelor, dispozitivelor sau aparatelor de protecție, măsură, control" },
      { code: 77, label: "Necorelarea nivelului (gradului) de protecție prevăzut cu pericolul existent" }
    ]
  },
  {
    title: "Defecțiuni tehnice de exploatare",
    items: [
      { code: 78, label: "Nerespectarea parametrilor tehnologici" },
      { code: 79, label: "Nefuncționarea (lipsa) sistemelor de protecție, siguranță, măsură, control" },
      { code: 80, label: "Manevră sau mod de operare greșit" },
      { code: 81, label: "Defectare (deteriorare) pe timpul exploatării" },
      { code: 82, label: "Reglaj defectuos" },
      { code: 83, label: "Neprotejarea termică corespunzătoare" },
      { code: 84, label: "Nerespectarea instrucțiunilor de lucru sau a regulamentului de fabricație" },
      { code: 85, label: "Neexecutarea verificărilor, întreținerilor, reviziilor periodice" }
    ]
  },
  {
    title: "Nereguli organizatorice",
    items: [
      { code: 86, label: "Nesupravegherea locului de muncă" },
      { code: 87, label: "Părăsirea locului de muncă" },
      { code: 88, label: "Folosirea de scule, unelte, dispozitive, instrumente de lucru necorespunzătoare" },
      { code: 89, label: "Introducerea sau utilizarea de materiale periculoase în loc interzis" },
      { code: 90, label: "Accesul altor persoane decât al celor admise" }
    ]
  },
  {
    title: "Explozie urmată de incendiu",
    items: [
      { code: 91, label: "Depozitarea sau păstrarea necorespunzătoare a materialelor combustibile" },
      { code: 92, label: "Depozitarea sau păstrarea necorespunzătoare a produselor inflamabile" },
      { code: 93, label: "Efectuarea unor lucrări, operații periculoase" },
      { code: 94, label: "Manipulare, transport, utilizare, depozitare necorespunzătoare a explozivilor" },
      { code: 95, label: "Formarea de amestecuri explozive" },
      { code: 96, label: "Pierderea calităților fizico-chimice ale unor instalații, armături, conducte" }
    ]
  },
  {
    title: "Accident urmat de incendiu",
    items: [
      { code: 97, label: "Avarie tehnologică urmată de incendiu" },
      { code: 98, label: "Ieșire de sub control a procesului tehnologic" },
      { code: 99, label: "Catastrofă naturală urmată de incendiu sau explozie" },
      { code: 100, label: "Căderea unui obiect (aeronavă, proiectile, cablu electric aerian etc.)" },
      { code: 101, label: "Șoc (coliziune, ciocnire, lovire)" }
    ]
  },
  {
    title: "Trăsnet și alte fenomene naturale",
    items: [
      { code: 102, label: "Trăsnet" },
      { code: 103, label: "Cutremur" },
      { code: 104, label: "Furtună puternică" },
      { code: 105, label: "Temperatură atmosferică excesivă" },
      { code: 106, label: "Alte cazuri" }
    ]
  },
  {
    title: "Acțiune intenționată",
    items: [
      { code: 107, label: "Acoperirea (camuflarea) unei infracțiuni grave" },
      { code: 108, label: "Folosirea intenționată a sursei de aprindere pentru a genera incendiul" },
      { code: 109, label: "Crearea intenționată sau din culpă a condițiilor de a genera incendiul" },
      { code: 110, label: "Acțiunea unor persoane iresponsabile (inclusiv autoincendierea)" }
    ]
  },
  {
    title: "Alte împrejurări",
    items: [
      { code: 111, label: "Punerea în libertate a energiei nucleare" },
      { code: 112, label: "Acțiunea unor animale (pisici, păsări, șobolani etc.)" },
      { code: 113, label: "În curs de stabilire" },
      { code: 114, label: "Nedeterminate" }
    ]
  }
];

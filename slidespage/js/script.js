let queObj = {
  1: {
    type: "regular",
    question: "Für wen suchen Sie eine 24 Stunden Pflege?",
    name: "fuerwen",
    options: [
      {
        title: "Mich selbst",
        image_name: "q1_1.png",
        value: "selber",
        name: "fuerwen",
        id: "option1-1",
        next: "2",
      },
      {
        title: "Angehörigen",
        image_name: "q1_2.png",
        value: "s Angehörige(r)/Bekannte(r)",
        name: "fuerwen",
        id: "option1-2",
        next: "2",
      },      
    ],
  },
  2: {
    type: "regular",
    question: "Wie viele Personen leben im Haushalt?",
    name: "haushaltspersonen",
    options: [
      {
        title: "Eine Person",
        image_name: "q14_2.png",
        value: "eine Person",
        name: "haushaltspersonen",
        id: "option2-1",
        next: "q3",
      },
      {
        title: "Mehrere Personen",
        image_name: "q1_1.png",
        value: "mehrere Personen",
        name: "haushaltspersonen",
        id: "option2-2",
        next: "11",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        value: "noch unklar",
        name: "haushaltspersonen",
        id: "option2-3",
        next: "q3",
      },
    ],
  },
  q3: {
    type: "form",
    question: "Um was für einen Angehörigen handelt es sich?",
    name: "angehoeriger",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        value: "",
        name: "angehoeriger",
        id: "q3",
        next: "q50",
      },
    ],
  },
  q50: {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    name: "alterperson",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        value: "",
        name: "alterperson",
        id: "q50",
        next: "3",
      }
    ]
  },
  3: {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    name: "pflegegrad",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        value:  "2",
        name: "pflegegrad",
        id: "option3-1",
        next: "4",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        value:  "3",
        name: "pflegegrad",
        id: "option3-2",
        next: "4",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        value:  "4",
        name: "pflegegrad",
        id: "option3-3",
        next: "4",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        value:  "5",
        name: "pflegegrad",
        id: "option3-4",
        next: "4",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        value:  "beantragt/noch unklar",
        name: "pflegegrad",
        id: "option3-5",
        next: "4",
      },
    ],
  },
  4: {
    type: "regular",
    question: "Wie mobil ist die pflegebedürftige Person?",
    name: "mobilitaet",
    options: [
      {
        title: "Uneingeschränkt mobil",
        image_name: "q3_1.png",
        value: "keine Einschränkung",
        name: "mobilitaet",
        id: "option4-1",
        next: "5",
      },
      {
        title: "Leichte Einschränkung",
        image_name: "q3_2.png",
        value: "leichte Einschränkung",
        name: "mobilitaet",
        id: "option4-2",
        next: "5",
      },
      {
        title: "Rollstuhl erforderlich",
        image_name: "q3_3.png",
        value: "Rollstuhl erforderlich",
        name: "mobilitaet",
        id: "option4-3",
        next: "5",
      },
      {
        title: "Bettlägerig",
        image_name: "q_bett.png",
        value: "bettlägerig",
        name: "mobilitaet",
        id: "option4-4",
        next: "5",
      },
    ]
  },
  5: {
    type: "regular",
    question: "Ist die pflegebedürftige Person dement?",
    name: "demenz",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        value: "nein",
        name: "demenz",
        id: "option5-1",
        next: "6",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        value: "Ja",
        name: "demenz",
        id: "option5-2",
        next: "6",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        value: "ja, leichte Demenz",
        name: "demenz",
        id: "option5-3",
        next: "6",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        value: "noch unklar",
        name: "demenz",
        id: "option5-4",
        next: "6",
      },
    ],
  },
  6: {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    name: "nacht",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        value: "nein",
        name: "nacht",
        id: "option6-1",
        next: "7",
      },
      {
        title: "Ja, regelmäßig",
        image_name: "q_check.png",
        value: "ja, regelmäßig",
        name: "nacht",
        id: "option6-2",
        next: "7",
      },
      {
        title: "Ja, gelegentlich",
        image_name: "q_check_klein.png",
        value: "ja, gelegentlich",
        name: "nacht",
        id: "option6-3",
        next: "7",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        value: "noch unklar",
        name: "nacht",
        id: "option6-4",
        next: "7",
      },
    ],
  },
  7: {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    name: "sprache",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        value: "Grundkenntnisse",
        name: "sprache",
        id: "option7-1",
        next: "8",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        value: "mittlere Kenntnisse",
        name: "sprache",
        id: "option7-2",
        next: "8",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        value: "gute Kenntnisse",
        name: "sprache",
        id: "option7-3",
        next: "8",
      },
     {
        title: "Noch unklar",
        image_name: "q4_4.png",
        value: "noch unklar",
        name: "sprache",
        id: "option7-4",
        next: "8",
      },
    ],
  },
  8:  {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    name: "unterbringung",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        value: "Gästezimmer vorhanden",
        id: "option8-1",
        name: "unterbringung",
        next: "9",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        value: "Wohnung vorhanden",
        id: "option8-2",
        name: "unterbringung",
        next: "9",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        value: "nein",
        id: "option8-3",
        name: "unterbringung",
        next: "9",
      },
    ],
  },
  9:  {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    name: "dauer",
    options: [
      {
        title: "4-6 Wochen",
        image_name: "q5_2.png",
        value: "4-6 Wochen",
        id: "option9-1",
        name: "dauer",
        next: "10",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        value: "länger als 6 Wochen",
        id: "option9-2",
        name: "dauer",
        next: "10",
      },
      {
        title: "Weniger als 4 Wochen",
        image_name: "q8_1.png",
        value: "weniger als 4 Wochen",
        id: "option9-3",
        name: "dauer",
        next: "10",
      },
    ],
  },
  10:
   {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    name: "zeitpunkt",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        value: "schnellstmöglich",
        name: "zeitpunkt",
        id: "option10-1",
        next: "q351",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        name: "zeitpunkt",
        value: "in 2-3 Wochen",
        id: "option10-2",
        next: "q351",
      },
      {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        name: "zeitpunkt",
        value: "in 1-2 Monaten",
        id: "option10-3",
        next: "q351",
      },
      {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        name: "zeitpunkt",
        value: "später/noch unklar",
        id: "option10-4",
        next: "q351",
      },
    ],
  },
  11:
  {
    type: "regular",
    question: "Soll mehr als eine Person im Haushalt gepflegt werden?",
    name: "betreuungspersonen",
    options: [
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "betreuungspersonen",
        value: "zwei Personen",
        id: "option11-1",
        next: "q522",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "betreuungspersonen",
        value: "eine Person",
        id: "option11-2",
        next: "q131",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        name: "betreuungspersonen",
        value: "noch unklar",
        id: "option11-3",
        next: "q131",
      },
    ]
  },
  q131:
  {
    type: "form",
    question: "Um was für einen Angehörigen handelt es sich?",
    name: "angehoerigerb",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        name: "angehoerigerb",
        value: "",
        id: "q131",
        next: "q511",
      }
    ]
  },
  q511:
  {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    name: "alterpersonb",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersonb",
        value: "",
        id: "q511",
        next: "12",
      }
    ]
  },
  q522:
  {
    type: "form",
    question: "Wie alt ist Ihr erster pflegebedürftiger Angehöriger?",
    name: "alterpersonca",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersonca",
        value: "",
        id: "q522",
        next: "q271",
      }
    ]
  },
  q271:
  {
    type: "form",
    question: "Wie alt ist Ihr zweiter pflegebedürftiger Angehöriger?",
    name: "alterpersoncb",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersoncb",
        value: "",
        id: "q271",
        next: "22",
      }
    ]
  },
  12:
  {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    name: "pflegegradb",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        name: "pflegegradb",
        value: "2",
        id: "option12-1",
        next: "13",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        name: "pflegegradb",
        value: "3",
        id: "option12-2",
        next: "13",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        name: "pflegegradb",
        value: "4",
        id: "option12-3",
        next: "13",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        name: "pflegegradb",
        value: "5",
        id: "option12-4",
        next: "13",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        name: "pflegegradb",
        value: "beantragt/noch unklar",
        id: "option12-5",
        next: "13",
      },
    ]
  },
  13:
  {
    type: "regular",
    question: "Wie mobil ist die pflegebedürftige Person?",
    name: "mobilitaetb",
    options: [
      {
        title: "Uneingeschränkt",
        image_name: "q3_1.png",
        name: "mobilitaetb",
        value: "keine Einschränkung",
        id: "option13-1",
        next: "14",
      },
      {
        title: "Leichte Einschränkung",
        image_name: "q3_2.png",
        name: "mobilitaetb",
        value: "leichte Einschränkung",
        id: "option13-2",
        next: "14",
      },
      {
        title: "Rollstuhl erforderlich",
        image_name: "q3_3.png",
        name: "mobilitaetb",
        value: "Rollstuhl erforderlich",
        id: "option13-3",
        next: "14",
      },
      {
        title: "Bettlägerig",
        image_name: "q_bett.png",
        name: "mobilitaetb",
        value: "bettlägerig",
        id: "option13-4",
        next: "14",
      },
    ]
  },
  14:
  {
    type: "regular",
    question: "Ist die pflegebedürftige Person dement?",
    name: "demenzb",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "demenzb",
        value: "nein",
        id: "option14-1",
        next: "15",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "demenzb",
        value: "ja",
        id: "option14-2",
        next: "15",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        name: "demenzb",
        value: "ja, leichte Demenz",
        id: "option14-3",
        next: "15",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        name: "demenzb",
        value: "noch unklar",
        id: "option14-4",
        next: "15",
      },
    ]
  },
  15:
  {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    name: "nachtb",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "nachtb",
        value: "nein",
        id: "option15-1",
        next: "16",
      },
      {
        title: "Ja, regelmäßig",
        image_name: "q_check.png",
        name: "nachtb",
        value: "ja, regelmäßig",
        id: "option15-2",
        next: "16",
      },
      {
        title: "Ja, gelegentlich",
        image_name: "q_check_klein.png",
        name: "nachtb",
        value: "ja, gelegentlich",
        id: "option15-3",
        next: "16",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        name: "nachtb",
        value: "noch unklar",
        id: "option15-4",
        next: "16",
      },
    ]
  },
  16:
  {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    name: "spracheb",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        name: "spracheb",
        value: "Grundkenntnisse",
        id: "option16-1",
        next: "17",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        name: "spracheb",
        value: "mittlere Kenntnisse",
        id: "option16-2",
        next: "17",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        name: "spracheb",
        value: "gute Kenntnisse",
        id: "option16-3",
        next: "17",
      },
      {
        title: "Noch unklar",
        image_name: "q4_4.png",
        name: "spracheb",
        value: "noch unklar",
        id: "option16-4",
        next: "17",
      },
    ]
  },
  17:
  {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    name: "unterbringungb",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        name: "unterbringungb",
        value: "Gästezimmer vorhanden",
        id: "option17-1",
        next: "18",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        name: "unterbringungb",
        value: "Wohnung vorhanden",
        id: "option17-2",
        next: "18",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "unterbringungb",
        value: "nein",
        id: "option17-3",
        next: "18",
      },
    ]
  },
  18:
  {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    name: "dauerb",
    options: [
      {
        title: "4-6 Wochen",
        image_name: "q5_2.png",
        name: "dauerb",
        value: "4-6 Wochen",
        id: "option18-1",
        next: "19",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        name: "dauerb",
        value: "länger als 6 Wochen",
        id: "option18-2",
        next: "19",
      },
      {
        title: "Weniger als 4 Wochen",
        image_name: "q8_1.png",
        name: "dauerb",
        value: "weniger als 4 Wochen",
        id: "option18-3",
        next: "19",
      },
    ]
  },
  19:
  {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    name: "zeitpunktb",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        name: "zeitpunktb",
        value: "schnellstmöglich",
        id: "option19-1",
        next: "q351",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        name: "zeitpunktb",
        value: "in 2-3 Wochen",
        id: "option19-2",
        next: "q351",
      },
      {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        name: "zeitpunktb",
        value: "in 1-2 Monaten",
        id: "option19-3",
        next: "q351",
      },
      {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        name: "zeitpunktb",
        value: "später/noch unklar",
        id: "option19-4",
        next: "q351",
      },
    ]
  },
  22:
  {
    type: "regular",
    question: "Hat Ihr erster Angehöriger bereits einen Pflegegrad?",
    name: "pflegegradca",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        name: "pflegegradca",
        value: "2",
        id: "option22-1",
        next: "23",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        name: "pflegegradca",
        value: "3",
        id: "option22-2",
        next: "23",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        name: "pflegegradca",
        value: "4",
        id: "option22-3",
        next: "23",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        name: "pflegegradca",
        value: "5",
        id: "option22-4",
        next: "23",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        name: "pflegegradca",
        value: "beantragt/noch unklar",
        id: "option22-5",
        next: "23",
      },
    ]
  },
  23:
  {
    type: "regular",
    question: "Hat Ihr zweiter Angehöriger bereits einen Pflegegrad?",
    name: "pflegegradcb",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        name: "pflegegradcb",
        value: "2",
        id: "option23-1",
        next: "24",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        name: "pflegegradcb",
        value: "3",
        id: "option23-2",
        next: "24",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        name: "pflegegradcb",
        value: "4",
        id: "option23-3",
        next: "24",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        name: "pflegegradcb",
        value: "5",
        id: "option23-4",
        next: "24",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        name: "pflegegradcb",
        value: "beantragt/noch unklar",
        id: "option23-5",
        next: "24",
      },
    ]
  },
  24:
  {
    type: "regular",
    question: "Ist Ihr erster pflegebedürftiger Angehöriger dement?",
    name: "demenzca",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "demenzca",
        value: "nein",
        id: "option24-1",
        next: "25",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "demenzca",
        value: "ja",
        id: "option24-2",
        next: "25",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        name: "demenzca",
        value: "ja, leichte Demenz",
        id: "option24-3",
        next: "25",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        name: "demenzca",
        value: "noch unklar",
        id: "option24-4",
        next: "25",
      },
    ]
  },
  25:
  {
    type: "regular",
    question: "Ist Ihr zweiter pflegebedürftiger Angehöriger dement?",
    name: "demenzcb",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "demenzcb",
        value: "nein",
        id: "option25-1",
        next: "26",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "demenzcb",
        value: "ja",
        id: "option25-2",
        next: "26",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        name: "demenzcb",
        value: "ja, leichte Demenz",
        id: "option25-3",
        next: "26",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        name: "demenzcb",
        value: "noch unklar",
        id: "option25-4",
        next: "26",
      },
    ]
  },
  26:
  {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    name: "nachtc",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "nachtc",
        value: "nein",
        id: "option26-1",
        next: "27",
      },
      {
        title: "Ja, regelmäßig",
        image_name: "q_check.png",
        name: "nachtc",
        value: "ja, regelmäßig",
        id: "option26-2",
        next: "27",
      },
      {
        title: "Ja, gelegentlich",
        image_name: "q_check_klein.png",
        name: "nachtc",
        value: "ja, gelegentlich",
        id: "option26-3",
        next: "27",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        name: "nachtc",
        value: "noch unklar",
        id: "option26-4",
        next: "27",
      },
    ]
  },
  27:
  {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    name: "sprachec",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        name: "sprachec",
        value: "Grundkenntnisse",
        id: "option27-1",
        next: "28",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        name: "sprachec",
        value: "mittlere Kenntnisse",
        id: "option27-2",
        next: "28",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        name: "sprachec",
        value: "gute Kenntnisse",
        id: "option27-3",
        next: "28",
      },
      {
        title: "Noch unklar",
        image_name: "q4_4.png",
        name: "sprachec",
        value: "noch unklar",
        id: "option27-4",
        next: "28",
      },
    ]
  },
  28:
  {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    name: "unterbringungc",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        name: "unterbringungc",
        value: "Gästezimmer vorhanden",
        id: "option28-1",
        next: "29",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        name: "unterbringungc",
        value: "Wohnung vorhanden",
        id: "option28-2",
        next: "29",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "unterbringungc",
        value: "nein",
        id: "option28-3",
        next: "29",
      },
    ]
  },
  29:
  {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    name: "dauerc",
    options: [
      {
        title: "4-6 Wochen",
        image_name: "q5_2.png",
        name: "dauerc",
        value: "4-6 Wochen",
        id: "option29-1",
        next: "30",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        name: "dauerc",
        value: "länger als 6 Wochen",
        id: "option29-2",
        next: "30",
      },
      {
        title: "Weniger als 4 Wochen",
        image_name: "q8_1.png",
        name: "dauerc",
        value: "weniger als 4 Wochen",
        id: "option29-3",
        next: "30",
      },
    ]
  },
  30:
  {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    name: "zeitpunktc",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        name: "zeitpunktc",
        value: "schnellstmöglich",
        id: "option30-1",
        next: "q351",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        name: "zeitpunktc",
        value: "in 2-3 Wochen",
        id: "option30-2",
        next: "q351",
      },
      {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        name: "zeitpunktc",
        value: "in 1-2 Monaten",
        id: "option30-3",
        next: "q351",
      },
      {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        name: "zeitpunktc",
        value: "später/noch unklar",
        id: "option30-4",
        next: "q351",
      },
    ]
  },
  q351: {
    type: "form",
    question: "In welcher Region suchen Sie die 24 Stunden Pflege?",
    name: "postcode",
    inputs: [
      {
        title: "Postleitzahl oder Wohnort:",
        image_name: "map_deutschland.gif",
        value: "",
        name: "postcode",
        id: "q351",
        next: "loading",
      },
      
    ],
  },
  finish: {
    type: "wrapper",
    question: "Nur noch ein Schritt zu Ihrem Anbietervergleich",
    colms: [
      {
        r1: "Frau",
        r2: "Herr",
        title: "Wer soll die Betreuungsangebote erhalten?",
        value: "",
        next: "",
      },      
    ],
  },
};

let slideR = true;
let questionApp = document.querySelector("#questionApp");
let previousButton = document.querySelector("#previous");
let spanInfo = document.querySelector("#spanInfo");
let progressBar = document.getElementById("progress-contain");
let nextButton = document.querySelector("#next");
let previousKey;
let previousHistory = [];
// let previousNumber = [];
let qLength = Object.keys(queObj).length;


questionApp.style.width = qLength * 100 + "%";
//questionApp.style.height =  "350px";

function popFunc() {
  for (let s in queObj) {
    newElem = ``;
    let currentElement = queObj[s];
    
    if (currentElement.type) {
      newElem += `<div id="${
        Object.keys(queObj).indexOf(s) + 1
      }" class="fly-about ht-${
        Object.keys(queObj).indexOf(s) + 1
      }" style="width: ${100 / qLength}%;">
          <h2 class="text-center question-title"><!--<span id="opt_${
            Object.keys(queObj).indexOf(s) + 1
          }"></span>--> ${currentElement.question}</h2>`;

      if (currentElement.type == "regular") {
        if (currentElement.options && Array.isArray(currentElement.options)) {
          for (let cE in currentElement.options) {
            newElem += `
          <label class="section_items  overflow-hidden {
            Object.keys(queObj).indexOf(s) + 1
          }" for="que${s}-opt${cE}">
            <img src="img/${currentElement.options[cE].image_name}" class="mx-auto d-block img-fluid">
            <div class="row">
              <input type="radio" id="que${s}-opt${cE}" data-next="${currentElement.options[cE].next}" name="que${s}" value="${currentElement.options[cE].value}"  class="d-none" onClick="loadNext()">
              <div class="section_items_title col-md-12 text-center text-white font-weight-bold">${currentElement.options[cE].title}</div>
            </div>
          </label>`;
          }
        }
      } else if (currentElement.type == "form") {
        if (currentElement.inputs && Array.isArray(currentElement.inputs)) {
          newElem += `<div class="jumbotron form-panel col-10 mx-auto"><div class="form-group">`;

          for (let cE in currentElement.inputs) {
            newElem += `
            <img class="angehoeriger-icon" src="img/${currentElement.inputs[cE].image_name}">
          <label class="text-center size18" for="que${s}-opt${cE}">${
              currentElement.inputs[cE].title
            }</label>
          <input type="text" name="que${s}" id="que${s}-opt${cE}"value="${
              currentElement.inputs[cE].value || ""
            }"  class="form-control col-md-5 mx-auto">
           <div class="plz-button-wrapper plz-button-wrapper-angehoeriger">
<div class="option-selector">
<a name="12" id="q131" onclick="javascript: window.location ='#que${currentElement.inputs[cE].next}'" style="display: block;"><button name="button" type="button" class="button-design button plz-button next-button continue-button">weiter »</button></a>
</div>
<p></p></div>
            `;
          }

          for (let cE in currentElement.buttons) {
            newElem += `
          <button type="button" data-next="${currentElement.buttons[cE].next}"  class="col-md-5 mx-auto btn btn-primary btn-lg mt-3 bg-orange-active" onClick="loadNext()">${currentElement.buttons[cE].value}</button>`;
          }

          newElem += `</div></div>`;
        }
      }else if (currentElement.type == "wrapper") {
        if (currentElement.colms && Array.isArray(currentElement.colms)) {
          newElem += ``;

          for (let cE in currentElement.colms) {
            newElem += `
            
          <br>
          <div class="participant-wrapper">
<div class="participant-column-wrapper">
<div class="advantage-column">
<div class="advantage-wrapper">
<div class="advantage-box">
<div class="advantage-space">
<div class="advantage-header">
Erhalten Sie nun Ihre <span style="font-family: opensans-bold;">individuellen</span> Angebote
</div>
<div class="advantage-bullet-wrapper">
<div class="advantage-bullet">
Geprüfte Anbieter
</div>
<div class="advantage-bullet">
Legale Betreuung
</div>
<div class="advantage-bullet">
Zeit- &amp; Geldersparnis
</div>
<p></p></div>
<p></p></div>
<p></p></div>
<div class="advantage-col-left">
Unser Service:<br>
• 100% kostenlos &amp; unverbindlich<br>
• keine Auftragspflicht<br>
• Bis zu 3 passende Angebote
</div>
<div class="advantage-col-right">
<div class="coop-img-wrapper"><img class="cooperation-img" src="img/erfolgsfaktor_familie.png"></div>
<div class="coop-img-wrapper cooperation-img-van"><img class="cooperation-img" src="img/charta_pflege.png"></div>
<p></p></div>
<p></p></div>
<p></p></div>
<div class="participant-column">
<div class="participant-box">
<div class="participant-row">
<div class="participant-header"><label class="text-center size18" for="que${s}-opt${cE}">${
              currentElement.colms[cE].title
            }</label></div>
</div>
<div class="participant-row">
<div class="participant-inline"><input type="radio" name="gender" class="female" value="Frau" id="sex-female" aria-invalid="false"></div>
<div class="participant-inline"><label for="sex-female" class="">Frau</label></div>
<div class="participant-inline"><input type="radio" name="gender" value="Herr" id="sex-male" aria-invalid="false" required="" class="valid"></div>
<div class="participant-inline"><label for="sex-male" class="">Herr</label></div>
</div>
<div class="participant-row">
<div class="participant-inline participant-col-left"><input type="text" name="firstname" value="" id="first-name" placeholder="Vorname" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="given-name" autocompletetype="given-name" aria-required="true" aria-invalid="true"></div>
<div class="participant-inline participant-col-right"><input type="text" name="lastname" value="" id="last-name" placeholder="Nachname" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="family-name" autocompletetype="family-name" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-single"><input type="tel" name="phone" value="" id="phone" placeholder="Telefon" class="input" required="required" data-required="true" data-remote-validate="false" x-autocompletetype="number" autocompletetype="number" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-single"><input type="email" name="email" value="" id="email" placeholder="E-Mail" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="email" autocompletetype="email" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-button">
<input type="submit" value="Angebote erhalten »" id="form-submit-button" class="q361 submit-button button button-design">
</div>
</div>
<div class="legal-check-two">
Hiermit stimme ich  zu.

</div>


           
            `;
          }

          for (let cE in currentElement.buttons) {
            newElem += `
          <button type="button" data-next="${currentElement.buttons[cE].next}"  class="col-md-5 mx-auto btn btn-primary btn-lg mt-3 bg-orange-active" onClick="loadNext()">${currentElement.buttons[cE].value}</button>`;
          }

          newElem += `</div></div>`;
        }
      }
      newElem += `</div>`;
    }
    questionApp.innerHTML += newElem;
    newElem = ``;
  }
  document.body.style.display = ''
}

let GlobalcurrentKey = 1;

let moveOnly = false;
let queNumber = 0;

function hashChange(hash) {
  location.hash = "que" + hash;
  console.log($('.ht-'+hash).height());
  var height = $('.ht-'+hash).height();
  questionApp.style.height =  height+"px";

    /*if(hash==15){
      questionApp.style.height =  "450px";
    }else{
      questionApp.style.height =  "350px";

    }*/
}

function loadQue(currentKey = null, moreOpts = null, moveTime = 500) {
  if (slideR) {
    slideR = false;
    setTimeout(function () {
      if ((currentKey || moreOpts == "1") && currentKey in queObj) {
        // if (queObj[currentKey].finish) {
        //   questionApp.submit();
        //   return;
        // }
      }

      if (!currentKey) {
        if (moreOpts == "0") {
          currentKey = previousKey;

          console.log("yes ! Getting previous key.");
          console.log("the key", previousKey);
        }
      }

      if (!currentKey) {
        // get the first key of the object
        currentKey = Object.keys(queObj)[0];
      }

      console.log(Object.keys(queObj).indexOf(String(currentKey)));

      movePosition(currentKey);

      previousButton.style.display = currentKey <= 1 ? "none" : "";

      spanInfo.style.display = currentKey <= 1 ? "" : "none";

      nextButton.style.display = currentKey >= qLength ? "none" : "";

      if (moreOpts == "0") {
        queNumber = Math.min(Object.keys(queObj).length, queNumber - 1);
      }
      // fill in the question number
      else queNumber = Math.max(1, queNumber + 1);

      GlobalcurrentKey = currentKey;

      // add History
      if (!moveOnly && !previousHistory.includes(GlobalcurrentKey)) {
        previousHistory.push(GlobalcurrentKey);
      }

      // document.getElementById(`opt_${currentKey}`).innerText =
      previousHistory.length;
      hashChange(GlobalcurrentKey);
    }, moveTime);
    setTimeout(function () {
      slideR = true;
    }, 500);
    initiated = true;
  }
}

function loadNext() {
  let nextKey = getNextKey();

  if (queObj[String(GlobalcurrentKey)].finish) {
    return questionApp.submit();
  }

  console.log("the next key:", nextKey);
  if (!nextKey) {
    return;
  }

  hashChange(nextKey);
  // loadQue(nextKey, null, false, 500);
}

function loadPrevious() {
  previousHistory.pop();
  let nextKey;
  if (!previousHistory.length) {
    nextKey = Object.keys(queObj)[0];
  } else {
    nextKey = previousHistory[previousHistory.length - 1];
  }

  hashChange(nextKey);
}

function getNextKey() {
  let selectedInput, theNext;
  let et = event.target;
  let currElem;
  moveOnly = false;

  // if (
  //   et.classList.contains("section_items") ||
  //   (et.closest.classList && et.closest.classList.contains("section_items"))
  // ) {
  //   if (et.classList.contains("section_items")) {
  //     currElem = et;
  //   } else {
  //     currElem = et.closest;
  //   }

  //   console.log('the current element:', currElem)
  //   selectedInput = currElem.querySelector(`#${currElem.getAttribute("for")}`);
  //   selectedInput.checked = true;
  //   theNext = selectedInput.dataset.next;
  // } else {
  let curr = document.getElementById(GlobalcurrentKey);
  selectedInput = curr.querySelector("input[type=radio]:checked");
  if (selectedInput) {
    theNext = selectedInput.dataset.next;
  } else {
    selectedInput = curr.querySelector("button");

    let theSelectedNext = queObj[GlobalcurrentKey].next;
    theNext = theSelectedNext;
    moveOnly = true;
    // if (selectedInput) {

    //   theNext = selectedInput.dataset.next;
    // } else {
    //   let theSelectedNext = queObj[GlobalcurrentKey].next;
    //   theNext = theSelectedNext;
    //   moveOnly = true;
    // }
  }
  // }

  return theNext;
}

function findRow(node) {
  var i = 2;
  while ((node = node.previousSibling)) i += node.nodeType ^ 3;
  return i >> 1;
}

let initiated = false;

// instantiate the loadQue
window.onload = function () {
  popFunc();
  let theKey = location.hash
    ? location.hash.replace(/\D+/gim, "")
    : Object.keys(queObj)[0];
  loadQue(theKey, null, 0);
};

window.onhashchange = function (e) {
  e.preventDefault();
  if (initiated) loadQue(location.hash.replace(/\D+/gim, ""), null, 500);
};

function movePosition(currentKey) {
  let theCurrentKey = 1;
  let theElement, currentPosition, theCurrentElement, theLeftPosition, theRow;
  // currentKey = parseInt(currentKey);

  if (GlobalcurrentKey) {
    theCurrentKey = parseInt(GlobalcurrentKey);
  }
  theElement = document.getElementById(theCurrentKey);
  theCurrentElement = document.getElementById(currentKey);
  theLeftPosition = parseInt(questionApp.style.left) || 0;

  console.log(
    "the current elements",
    theElement,
    theCurrentElement,
    theLeftPosition
  );

  theRow = findRow(theCurrentElement);

  currentPosition = 100 - theRow * 100;

  // currentPosition = (currentPosition / 100) * 620

  console.log("the current position", currentPosition);
  // questionApp.style.left = 0;

  if (GlobalcurrentKey + 1 < currentKey) {
    questionApp.style.left = currentPosition + 100 + "%";
  } else if (GlobalcurrentKey > currentKey + 1) {
    questionApp.style.left = currentPosition - 100 + "%";
  }

  if (parseInt(currentPosition) != 0) {
    currentPosition += "%";
  }
  console.log(currentPosition + "%");
  $(questionApp).animate({ left: currentPosition });

  console.log("set the width");

  console.log(Object.keys(queObj).indexOf(currentKey) / (qLength - 1));
  progressBar.style.width =
    (Object.keys(queObj).indexOf(currentKey) / (qLength - 1)) * 100 + "%";
}



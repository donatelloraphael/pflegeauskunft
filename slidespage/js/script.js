let queObj = {
  1: {
    type: "regular",
    question: "Für wen suchen Sie eine 24 Stunden Pflege?",
    name: "fuerwen",
    id: "1",
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
    id: "2",
    options: [
      {
        title: "Eine Person",
        image_name: "q14_2.png",
        value: "eine Person",
        name: "haushaltspersonen",
        id: "option2-1",
        next: "3",
      },
      {
        title: "Mehrere Personen",
        image_name: "q1_1.png",
        value: "mehrere Personen",
        name: "haushaltspersonen",
        id: "option2-2",
        next: "13",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        value: "noch unklar",
        name: "haushaltspersonen",
        id: "option2-3",
        next: "3",
      },
    ],
  },
  3: {
    type: "form",
    question: "Um was für einen Angehörigen handelt es sich?",
    name: "angehoeriger",
    id: "3",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        value: "",
        name: "angehoeriger",
        id: "option3-1",
        next: "4",
      },
    ],
  },
  4: {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    name: "alterperson",
    id: "4",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        value: "",
        name: "alterperson",
        id: "option4-1",
        next: "5",
      }
    ]
  },
  5: {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    name: "pflegegrad",
    id: "5",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        value:  "2",
        name: "pflegegrad",
        id: "option5-1",
        next: "6",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        value:  "3",
        name: "pflegegrad",
        id: "option5-2",
        next: "6",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        value:  "4",
        name: "pflegegrad",
        id: "option5-3",
        next: "6",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        value:  "5",
        name: "pflegegrad",
        id: "option5-4",
        next: "6",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        value:  "beantragt/noch unklar",
        name: "pflegegrad",
        id: "option5-5",
        next: "6",
      },
    ],
  },
  6: {
    type: "regular",
    question: "Wie mobil ist die pflegebedürftige Person?",
    name: "mobilitaet",
    id: "6",
    options: [
      {
        title: "Uneingeschränkt mobil",
        image_name: "q3_1.png",
        value: "keine Einschränkung",
        name: "mobilitaet",
        id: "option6-1",
        next: "7",
      },
      {
        title: "Leichte Einschränkung",
        image_name: "q3_2.png",
        value: "leichte Einschränkung",
        name: "mobilitaet",
        id: "option6-2",
        next: "7",
      },
      {
        title: "Rollstuhl erforderlich",
        image_name: "q3_3.png",
        value: "Rollstuhl erforderlich",
        name: "mobilitaet",
        id: "option6-3",
        next: "7",
      },
      {
        title: "Bettlägerig",
        image_name: "q_bett.png",
        value: "bettlägerig",
        name: "mobilitaet",
        id: "option6-4",
        next: "7",
      },
    ]
  },
  7: {
    type: "regular",
    question: "Ist die pflegebedürftige Person dement?",
    name: "demenz",
    id: "7",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        value: "nein",
        name: "demenz",
        id: "option7-1",
        next: "8",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        value: "Ja",
        name: "demenz",
        id: "option7-2",
        next: "8",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        value: "ja, leichte Demenz",
        name: "demenz",
        id: "option7-3",
        next: "8",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        value: "noch unklar",
        name: "demenz",
        id: "option7-4",
        next: "8",
      },
    ],
  },
  8: {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    name: "nacht",
    id: "8",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        value: "nein",
        name: "nacht",
        id: "option8-1",
        next: "9",
      },
      {
        title: "Ja, regelmäßig",
        image_name: "q_check.png",
        value: "ja, regelmäßig",
        name: "nacht",
        id: "option8-2",
        next: "9",
      },
      {
        title: "Ja, gelegentlich",
        image_name: "q_check_klein.png",
        value: "ja, gelegentlich",
        name: "nacht",
        id: "option8-3",
        next: "9",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        value: "noch unklar",
        name: "nacht",
        id: "option8-4",
        next: "9",
      },
    ],
  },
  9: {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    name: "sprache",
    id: "9",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        value: "Grundkenntnisse",
        name: "sprache",
        id: "option9-1",
        next: "10",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        value: "mittlere Kenntnisse",
        name: "sprache",
        id: "option9-2",
        next: "10",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        value: "gute Kenntnisse",
        name: "sprache",
        id: "option9-3",
        next: "10",
      },
     {
        title: "Noch unklar",
        image_name: "q4_4.png",
        value: "noch unklar",
        name: "sprache",
        id: "option9-4",
        next: "10",
      },
    ],
  },
  10:  {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    name: "unterbringung",
    id: "10",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        value: "Gästezimmer vorhanden",
        id: "option10-1",
        name: "unterbringung",
        next: "11",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        value: "Wohnung vorhanden",
        id: "option10-2",
        name: "unterbringung",
        next: "11",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        value: "nein",
        id: "option10-3",
        name: "unterbringung",
        next: "11",
      },
    ],
  },
  11:  {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    name: "dauer",
    id: "11",
    options: [
      {
        title: "4-6 Wochen",
        image_name: "q5_2.png",
        value: "4-6 Wochen",
        id: "option11-1",
        name: "dauer",
        next: "12",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        value: "länger als 6 Wochen",
        id: "option11-2",
        name: "dauer",
        next: "12",
      },
      {
        title: "Weniger als 4 Wochen",
        image_name: "q8_1.png",
        value: "weniger als 4 Wochen",
        id: "option11-3",
        name: "dauer",
        next: "12",
      },
    ],
  },
  12:
   {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    name: "zeitpunkt",
    id: "12",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        value: "schnellstmöglich",
        name: "zeitpunkt",
        id: "option12-1",
        next: "35",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        name: "zeitpunkt",
        value: "in 2-3 Wochen",
        id: "option12-2",
        next: "35",
      },
      {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        name: "zeitpunkt",
        value: "in 1-2 Monaten",
        id: "option12-3",
        next: "35",
      },
      {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        name: "zeitpunkt",
        value: "später/noch unklar",
        id: "option12-4",
        next: "35",
      },
    ],
  },
  13:
  {
    type: "regular",
    question: "Soll mehr als eine Person im Haushalt gepflegt werden?",
    name: "betreuungspersonen",
    id: "13",
    options: [
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "betreuungspersonen",
        value: "zwei Personen",
        id: "option13-1",
        next: "14",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "betreuungspersonen",
        value: "eine Person",
        id: "option13-2",
        next: "16",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        name: "betreuungspersonen",
        value: "noch unklar",
        id: "option13-3",
        next: "16",
      },
    ]
  },
  14:
  {
    type: "form",
    question: "Wie alt ist Ihr erster pflegebedürftiger Angehöriger?",
    name: "alterpersonca",
    id: "14",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersonca",
        value: "",
        id: "14",
        next: "15",
      }
    ]
  },
  15:
  {
    type: "form",
    question: "Wie alt ist Ihr zweiter pflegebedürftiger Angehöriger?",
    name: "alterpersoncb",
    id: "15",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersoncb",
        value: "",
        id: "15",
        next: "26",
      }
    ]
  },
  16:
  {
    type: "form",
    question: "Um was für einen Angehörigen handelt es sich?",
    name: "angehoerigerb",
    id: "16",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        name: "angehoerigerb",
        value: "",
        id: "16",
        next: "17",
      }
    ]
  },
  17:
  {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    name: "alterpersonb",
    id: "17",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersonb",
        value: "",
        id: "17",
        next: "18",
      }
    ]
  },
  18:
  {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    name: "pflegegradb",
    id: "18",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        name: "pflegegradb",
        value: "2",
        id: "option18-1",
        next: "19",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        name: "pflegegradb",
        value: "3",
        id: "option18-2",
        next: "19",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        name: "pflegegradb",
        value: "4",
        id: "option18-3",
        next: "19",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        name: "pflegegradb",
        value: "5",
        id: "option18-4",
        next: "19",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        name: "pflegegradb",
        value: "beantragt/noch unklar",
        id: "option18-5",
        next: "19",
      },
    ]
  },
  19:
  {
    type: "regular",
    question: "Wie mobil ist die pflegebedürftige Person?",
    name: "mobilitaetb",
    id: "19",
    options: [
      {
        title: "Uneingeschränkt",
        image_name: "q3_1.png",
        name: "mobilitaetb",
        value: "keine Einschränkung",
        id: "option19-1",
        next: "20",
      },
      {
        title: "Leichte Einschränkung",
        image_name: "q3_2.png",
        name: "mobilitaetb",
        value: "leichte Einschränkung",
        id: "option19-2",
        next: "20",
      },
      {
        title: "Rollstuhl erforderlich",
        image_name: "q3_3.png",
        name: "mobilitaetb",
        value: "Rollstuhl erforderlich",
        id: "option19-3",
        next: "20",
      },
      {
        title: "Bettlägerig",
        image_name: "q_bett.png",
        name: "mobilitaetb",
        value: "bettlägerig",
        id: "option19-4",
        next: "20",
      },
    ]
  },
  20:
  {
    type: "regular",
    question: "Ist die pflegebedürftige Person dement?",
    name: "demenzb",
    id: "20",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "demenzb",
        value: "nein",
        id: "option20-1",
        next: "21",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "demenzb",
        value: "ja",
        id: "option20-2",
        next: "21",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        name: "demenzb",
        value: "ja, leichte Demenz",
        id: "option20-3",
        next: "21",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        name: "demenzb",
        value: "noch unklar",
        id: "option20-4",
        next: "21",
      },
    ]
  },
  21:
  {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    name: "nachtb",
    id: "21",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "nachtb",
        value: "nein",
        id: "option21-1",
        next: "22",
      },
      {
        title: "Ja, regelmäßig",
        image_name: "q_check.png",
        name: "nachtb",
        value: "ja, regelmäßig",
        id: "option21-2",
        next: "22",
      },
      {
        title: "Ja, gelegentlich",
        image_name: "q_check_klein.png",
        name: "nachtb",
        value: "ja, gelegentlich",
        id: "option21-3",
        next: "22",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        name: "nachtb",
        value: "noch unklar",
        id: "option21-4",
        next: "22",
      },
    ]
  },
  22:
  {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    name: "spracheb",
    id: "22",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        name: "spracheb",
        value: "Grundkenntnisse",
        id: "option22-1",
        next: "23",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        name: "spracheb",
        value: "mittlere Kenntnisse",
        id: "option22-2",
        next: "23",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        name: "spracheb",
        value: "gute Kenntnisse",
        id: "option22-3",
        next: "23",
      },
      {
        title: "Noch unklar",
        image_name: "q4_4.png",
        name: "spracheb",
        value: "noch unklar",
        id: "option22-4",
        next: "23",
      },
    ]
  },
  23:
  {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    name: "unterbringungb",
    id: "23",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        name: "unterbringungb",
        value: "Gästezimmer vorhanden",
        id: "option23-1",
        next: "24",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        name: "unterbringungb",
        value: "Wohnung vorhanden",
        id: "option23-2",
        next: "24",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "unterbringungb",
        value: "nein",
        id: "option23-3",
        next: "24",
      },
    ]
  },
  24:
  {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    name: "dauerb",
    id: "24",
    options: [
      {
        title: "4-6 Wochen",
        image_name: "q5_2.png",
        name: "dauerb",
        value: "4-6 Wochen",
        id: "option24-1",
        next: "25",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        name: "dauerb",
        value: "länger als 6 Wochen",
        id: "option24-2",
        next: "25",
      },
      {
        title: "Weniger als 4 Wochen",
        image_name: "q8_1.png",
        name: "dauerb",
        value: "weniger als 4 Wochen",
        id: "option24-3",
        next: "25",
      },
    ]
  },
  25:
  {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    name: "zeitpunktb",
    id: "25",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        name: "zeitpunktb",
        value: "schnellstmöglich",
        id: "option25-1",
        next: "35",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        name: "zeitpunktb",
        value: "in 2-3 Wochen",
        id: "option25-2",
        next: "35",
      },
      {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        name: "zeitpunktb",
        value: "in 1-2 Monaten",
        id: "option25-3",
        next: "35",
      },
      {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        name: "zeitpunktb",
        value: "später/noch unklar",
        id: "option25-4",
        next: "35",
      },
    ]
  },
  26:
  {
    type: "regular",
    question: "Hat Ihr erster Angehöriger bereits einen Pflegegrad?",
    name: "pflegegradca",
    id: "26",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        name: "pflegegradca",
        value: "2",
        id: "option26-1",
        next: "27",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        name: "pflegegradca",
        value: "3",
        id: "option26-2",
        next: "27",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        name: "pflegegradca",
        value: "4",
        id: "option26-3",
        next: "27",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        name: "pflegegradca",
        value: "5",
        id: "option26-4",
        next: "27",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        name: "pflegegradca",
        value: "beantragt/noch unklar",
        id: "option26-5",
        next: "27",
      },
    ]
  },
  27:
  {
    type: "regular",
    question: "Hat Ihr zweiter Angehöriger bereits einen Pflegegrad?",
    name: "pflegegradcb",
    id: "27",
    options: [
      {
        title: "Pflegegrad 1-2",
        image_name: "q2_11.png",
        name: "pflegegradcb",
        value: "2",
        id: "option27-1",
        next: "28",
      },
      {
        title: "Pflegegrad 3",
        image_name: "q2_21.png",
        name: "pflegegradcb",
        value: "3",
        id: "option27-2",
        next: "28",
      },
      {
        title: "Pflegegrad 4",
        image_name: "q2_31.png",
        name: "pflegegradcb",
        value: "4",
        id: "option27-3",
        next: "28",
      },
      {
        title: "Pflegegrad 5",
        image_name: "q2_41.png",
        name: "pflegegradcb",
        value: "5",
        id: "option27-4",
        next: "28",
      },
      {
        title: "Beantragt/Unklar",
        image_name: "q_questionmarck.png",
        name: "pflegegradcb",
        value: "beantragt/noch unklar",
        id: "option27-5",
        next: "28",
      },
    ]
  },
  28:
  {
    type: "regular",
    question: "Ist Ihr erster pflegebedürftiger Angehöriger dement?",
    name: "demenzca",
    id: "28",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "demenzca",
        value: "nein",
        id: "option28-1",
        next: "29",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "demenzca",
        value: "ja",
        id: "option28-2",
        next: "29",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        name: "demenzca",
        value: "ja, leichte Demenz",
        id: "option28-3",
        next: "29",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        name: "demenzca",
        value: "noch unklar",
        id: "option28-4",
        next: "29",
      },
    ]
  },
  29:
  {
    type: "regular",
    question: "Ist Ihr zweiter pflegebedürftiger Angehöriger dement?",
    name: "demenzcb",
    id: "29",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "demenzcb",
        value: "nein",
        id: "option29-1",
        next: "30",
      },
      {
        title: "Ja",
        image_name: "q_check.png",
        name: "demenzcb",
        value: "ja",
        id: "option29-2",
        next: "30",
      },
      {
        title: "Ja, leichte Demenz",
        image_name: "q_check_klein.png",
        name: "demenzcb",
        value: "ja, leichte Demenz",
        id: "option29-3",
        next: "30",
      },
      {
        title: "Unklar",
        image_name: "q_questionmarck.png",
        name: "demenzcb",
        value: "noch unklar",
        id: "option29-4",
        next: "30",
      },
    ]
  },
  30:
  {
    type: "regular",
    question: "Wird eine nächtliche Betreuung benötigt?",
    name: "nachtc",
    id: "30",
    options: [
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "nachtc",
        value: "nein",
        id: "option30-1",
        next: "31",
      },
      {
        title: "Ja, regelmäßig",
        image_name: "q_check.png",
        name: "nachtc",
        value: "ja, regelmäßig",
        id: "option30-2",
        next: "31",
      },
      {
        title: "Ja, gelegentlich",
        image_name: "q_check_klein.png",
        name: "nachtc",
        value: "ja, gelegentlich",
        id: "option30-3",
        next: "31",
      },
      {
        title: "Noch unklar",
        image_name: "q_questionmarck.png",
        name: "nachtc",
        value: "noch unklar",
        id: "option30-4",
        next: "31",
      },
    ]
  },
  31:
  {
    type: "regular",
    question: "Welche Deutschkenntnisse soll Ihre Pflegekraft haben?",
    name: "sprachec",
    id: "31",
    options: [
      {
        title: "Grundkenntnisse",
        image_name: "q4_1.png",
        name: "sprachec",
        value: "Grundkenntnisse",
        id: "option31-1",
        next: "32",
      },
      {
        title: "Mittlere Kenntnisse",
        image_name: "q4_2.png",
        name: "sprachec",
        value: "mittlere Kenntnisse",
        id: "option31-2",
        next: "32",
      },
      {
        title: "Gute Kenntnisse",
        image_name: "q4_3.png",
        name: "sprachec",
        value: "gute Kenntnisse",
        id: "option31-3",
        next: "32",
      },
      {
        title: "Noch unklar",
        image_name: "q4_4.png",
        name: "sprachec",
        value: "noch unklar",
        id: "option31-4",
        next: "32",
      },
    ]
  },
  32:
  {
    type: "regular",
    question: "Gibt es eine Möglichkeit zur Unterbringung der Pflegekraft?",
    name: "unterbringungc",
    id: "32",
    options: [
      {
        title: "Gästezimmer",
        image_name: "q_bett.png",
        name: "unterbringungc",
        value: "Gästezimmer vorhanden",
        id: "option32-1",
        next: "33",
      },
      {
        title: "Wohnung",
        image_name: "q7_2.png",
        name: "unterbringungc",
        value: "Wohnung vorhanden",
        id: "option32-2",
        next: "33",
      },
      {
        title: "Nein",
        image_name: "q_x.png",
        name: "unterbringungc",
        value: "nein",
        id: "option32-3",
        next: "33",
      },
    ]
  },
  33:
  {
    type: "regular",
    question: "Wie lange benötigen Sie die Betreuung?",
    name: "dauerc",
    id: "33",
    options: [
      {
        title: "4-6 Wochen",
        image_name: "q5_2.png",
        name: "dauerc",
        value: "4-6 Wochen",
        id: "option33-1",
        next: "34",
      },
      {
        title: "Länger als 6 Wochen",
        image_name: "q5_1.png",
        name: "dauerc",
        value: "länger als 6 Wochen",
        id: "option33-2",
        next: "34",
      },
      {
        title: "Weniger als 4 Wochen",
        image_name: "q8_1.png",
        name: "dauerc",
        value: "weniger als 4 Wochen",
        id: "option33-3",
        next: "34",
      },
    ]
  },
  34:
  {
    type: "regular",
    question: "Wann soll die Betreuung beginnen?",
    name: "zeitpunktc",
    id: "34",
    options: [
      {
        title: "Schnellstmöglich",
        image_name: "q5_1.png",
        name: "zeitpunktc",
        value: "schnellstmöglich",
        id: "option34-1",
        next: "35",
      },
      {
        title: "In 2-3 Wochen",
        image_name: "q5_2.png",
        name: "zeitpunktc",
        value: "in 2-3 Wochen",
        id: "option34-2",
        next: "35",
      },
      {
        title: "In 1-2 Monaten",
        image_name: "q5_3.png",
        name: "zeitpunktc",
        value: "in 1-2 Monaten",
        id: "option34-3",
        next: "35",
      },
      {
        title: "Später/Noch unklar",
        image_name: "q5_4.png",
        name: "zeitpunktc",
        value: "später/noch unklar",
        id: "option34-4",
        next: "35",
      },
    ]
  },
  35: {
    type: "form",
    question: "In welcher Region suchen Sie die 24 Stunden Pflege?",
    name: "postcode",
    id: "35",
    inputs: [
      {
        title: "Postleitzahl oder Wohnort:",
        image_name: "map_deutschland.gif",
        value: "",
        name: "postcode",
        id: "35",
        next: "36",
      },
    ],
  },
  36: {
    type: "loading",
    question: "Bitte haben Sie einen Augenblick Geduld.",
    message: "Unser System sucht aus über 200 Anbietern die passenden für Ihren Pflegebedarf heraus.",
    image_name: "loading.gif",
    id: "wait-animation",
  },
  37: {
    type: "wrapper",
    question: "Nur noch ein Schritt zu Ihrem Anbietervergleich",
    next: "",
    id: "37",
    colms: [
      {
        r1: "Frau",
        r2: "Herr",
        title: "Wer soll die Betreuungsangebote erhalten?",
        value: "",
        next: "",
        id: "q-submit",
      },      
    ],
  },
};

let slideR = true;
let questionApp = document.querySelector("#questionApp");
let spanInfo = document.querySelector("#spanInfo");
let progressBar = document.getElementById("progress-contain");
let previousKey;
let previousHistory = [];
// let previousNumber = [];
let qLength = Object.keys(queObj).length;

let formData = {};
let currentOption = {};
let currentQuestion = "1";

questionApp.style.width = "100%";
//questionApp.style.height =  "350px";

function popFunc() {
  for (let item in queObj) {
    newElem = ``;
    let currentElement = queObj[item];
    
    if (currentElement.type) {
      newElem += `<div id="${item}" class="inactive question">
          <h2 class="text-center question-title" data-type="${currentElement.type}">${currentElement.question}</h2>`;

      if (currentElement.type == "regular") {
        if (currentElement.options && Array.isArray(currentElement.options)) {
          for (let cE in currentElement.options) {
            newElem += `
          <label class="section_items overflow-hidden" for="${currentElement.options[cE].id}">
            <img src="img/${currentElement.options[cE].image_name}" class="mx-auto d-block img-fluid">
            <div class="row">
              <input type="radio" id="${currentElement.options[cE].id}" data-next="${currentElement.options[cE].next}" name="${currentElement.options[cE].name}" value="${currentElement.options[cE].value}"  class="d-none" onClick="setCurrentOption(event); loadNext(); addFormData(event);">
              <div class="section_items_title col-md-12 text-center text-white font-weight-bold">${currentElement.options[cE].title}</div>
            </div>
          </label>`;
          }
        }
      } else if (currentElement.type == "form") {

        if (currentElement.inputs && Array.isArray(currentElement.inputs)) {
          newElem += `<div class="jumbotron form-panel col-10 mx-auto" id="${item}"><div class="form-group">`;

          for (let cE in currentElement.inputs) {
            newElem += `
            <img class="angehoeriger-icon" src="img/${currentElement.inputs[cE].image_name}">
          <label class="text-center size18" for="${currentElement.inputs[cE].name}">${
              currentElement.inputs[cE].title
            }</label>
          <input type="text" name="${currentElement.inputs[cE].name}" id="${currentElement.inputs[cE].id}" value="${
              currentElement.inputs[cE].value || ""}" class="form-control col-md-5 mx-auto" onkeydown="nextItemOnEnter(event)" onchange="addFormData(event)">
           <div class="plz-button-wrapper plz-button-wrapper-angehoeriger">
<div class="option-selector">
<a name="12" onclick="javascript: window.location ='#/${currentElement.inputs[cE].next}'" style="display: block;"><button name="button" type="button" class="button-design button plz-button next-button continue-button">weiter »</button></a>
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
      } else if (currentElement.type === "loading") {
          newElem += `<div class="jumbotron form-panel col-10 mx-auto" class="loading" id="${item}"><div class="form-group">`;
            newElem += `<h4>${currentElement.message}</h4>
            <img alt="loading animation" src="img/${currentElement.image_name}">
          </div></div>`;

      } else if (currentElement.type == "wrapper") {
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
<div class="participant-column" @onkeydown="checkSubmitOnEnter(event)">
<div class="participant-box">
<div class="participant-row">
<div class="participant-header"><label class="text-center size18" for="que${item}-opt${cE}">${
              currentElement.colms[cE].title
            }</label></div>
</div>
<div class="participant-row">
<div class="participant-inline"><input type="radio" name="gender" onchange="addFormData(event);" class="female" value="Frau" id="sex-female" aria-invalid="false"></div>
<div class="participant-inline"><label for="sex-female" class="">Frau</label></div>
<div class="participant-inline"><input type="radio" name="gender" value="Herr" id="sex-male" onchange="addFormData(event);" aria-invalid="false" required="" class="valid"></div>
<div class="participant-inline"><label for="sex-male" class="">Herr</label></div>
</div>
<div class="participant-row">
<div class="participant-inline participant-col-left"><input type="text" name="firstname" value="" id="first-name" onchange="addFormData(event);" placeholder="Vorname" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="given-name" autocompletetype="given-name" aria-required="true" aria-invalid="true"></div>
<div class="participant-inline participant-col-right"><input type="text" name="lastname" value="" id="last-name" onchange="addFormData(event);" placeholder="Nachname" required="required" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="family-name" autocompletetype="family-name" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-single"><input type="tel" name="phone" value="" id="phone" placeholder="Telefon" class="input" onchange="addFormData(event);" required="required" data-required="true" data-remote-validate="false" x-autocompletetype="number" autocompletetype="number" aria-required="true" aria-invalid="true"></div>
</div>
<div class="participant-row">
<div class="participant-single"><input type="email" name="email" value="" id="email" placeholder="E-Mail" required="required" onchange="addFormData(event);" data-required="true" data-remote-validate="false" class="input" x-autocompletetype="email" autocompletetype="email" aria-required="true" aria-invalid="true"></div>
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

          newElem += `</div></div>`;
        }
      }
      newElem += `</div>`;
    }
    questionApp.innerHTML += newElem;
    newElem = ``;
  }
  document.body.style.display = '';
}

// Re-directs to hash of next question
function loadNext() {
  const nextKey = currentOption.next;
  window.location.hash = "/" + nextKey;
}

// Creates formData object to post to server
function addFormData(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;
  console.log("FORM_DATA:", formData);
}

// Advances to next question on Enter key down
function nextItemOnEnter(e) {
  if (e.keycode === 13) {
    e.preventDefault();
    loadNext();
  }
}

// Set currently selected option
function setCurrentOption(e) {
  e.preventDefault();

  currentOption.name = e.target.name;
  currentOption.value = e.target.value;
  currentOption.id = e.target.id;
  currentOption.next = e.target.getAttribute("data-next");
}

// On changing hash values
function hashChange(oldHash, newHash, back = false) {
  let hash;
  if (back) {
    previousHistory.pop();
    loadQuestion(oldHash, newHash, true);
  } else {
    previousHistory.push(newHash);
    loadQuestion(oldHash, newHash, false);
  }
}

// Load current question in the middle of the form container
function loadQuestion(oldHash, newHash, isBack) {
  // make oldHash falsy value if file path is given by parameter
  if (oldHash && oldHash.length > 6) {
    oldHash = false;
  }

  if (newHash > "1") {
    document.getElementById("spanInfo").classList.add("inactive");
  } else {
    document.getElementById("spanInfo").classList.remove("inactive");
  }
  if (!oldHash && !newHash) {
    document.getElementById("1").classList.add("active");
    document.getElementById("1").classList.remove("inactive");
    return;

  } else if (newHash && oldHash) {
    if (!isBack) {
      document.getElementById(oldHash).classList.remove("active");
      document.getElementById(oldHash).classList.add("moveout");
      document.getElementById(newHash).classList.remove("inactive");
      document.getElementById(newHash).classList.add("active");
      setTimeout(() => {
        document.getElementById(oldHash).classList.remove("moveout");
        document.getElementById(oldHash).classList.add("backin");
      }, 600);

    } else {
      // If it is backward button
      if (parseInt(newHash) < parseInt(oldHash)) {
        document.getElementById(newHash).classList.remove("backin");
        document.getElementById(newHash).classList.add("active");

        document.getElementById(oldHash).classList.remove("active");
        document.getElementById(oldHash).classList.add("backout");
        setTimeout(() => {
          document.getElementById(oldHash).classList.remove("backout");
          document.getElementById(oldHash).classList.add("inactive");
        }, 600);
      // If forward button
      } else {
        document.getElementById(oldHash).classList.remove("active");
        document.getElementById(oldHash).classList.add("moveout");
        document.getElementById(newHash).classList.remove("inactive");
        document.getElementById(newHash).classList.add("active");
      }
    }
  } else if(newHash && !oldHash) {
    document.getElementById("1").classList.add("active");
    document.getElementById("1").classList.remove("inactive");
  }
}

// Check for special conditions
function checkForSpecialConditions(hash) {
  // Delayed redirect to final form if on loading form component
  if (parseInt(hash) === 36) {
    setTimeout(() => {
      window.location.hash = "/37";
    }, 3000);
  }

  // Disable back button if on final form
  if (parseInt(hash) === 37) {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
    });
  }
}

// Checks if pressed key is Enter and if so, calls submitData function
function checkSubmitOnEnter(e) {
  if (e.keycode === 13) {
    e.preventDefault();
    if (verifyRequired()) {
      submitForm();
    }
  }
}

// Verifies if necessary data is entered on the final contact form
function verifyRequired() {
  if (formData.gender && formData.firstname && formData.lastname && formData.phone && formData.email) {
    return true;
  } else {
    return false;
  }
}

// Posts the form data to backend
function submitForm() {

}
/********************EVENT LISTENERS********************/

// instantiate the items
window.onload = function () {
  popFunc();
  window.location.hash = "/1";
  loadQuestion(null, 1, false);
};

//User's mouse is inside the page.
document.onmouseover = function() {
    window.innerDocClick = true;
};

//User's mouse has left the page.
document.onmouseleave = function() {
    window.innerDocClick = false;
};

// Detect backspace button click and call hashChange
window.onhashchange = function(e) {  
  let oldHash = e.oldURL.slice(e.oldURL.lastIndexOf("#/") + 2);
  let newHash = e.newURL.slice(e.newURL.lastIndexOf("#/") + 2);
  checkForSpecialConditions(newHash);
  console.log("OLD", oldHash)
  console.log("NEW", newHash)
  if (window.innerDocClick) {
    hashChange(oldHash, newHash, false);
  } else {
    hashChange(oldHash, newHash, true);
  }
};
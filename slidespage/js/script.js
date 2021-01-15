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
    id: "q3",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        value: "",
        name: "angehoeriger",
        id: "qq3",
        next: "q50",
      },
    ],
  },
  q50: {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    name: "alterperson",
    id: "q50",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        value: "",
        name: "alterperson",
        id: "qq50",
        next: "3",
      }
    ]
  },
  3: {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    name: "pflegegrad",
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "q131",
    inputs: [
      {
        title: "z.B. Verwandtschaftsverhältnis:",
        image_name: "zu-pflegende.png",
        name: "angehoerigerb",
        value: "",
        id: "qq131",
        next: "q511",
      }
    ]
  },
  q511:
  {
    type: "form",
    question: "Wie alt ist Ihr zu pflegender Angehöriger?",
    name: "alterpersonb",
    id: "q511",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersonb",
        value: "",
        id: "qq511",
        next: "12",
      }
    ]
  },
  q522:
  {
    type: "form",
    question: "Wie alt ist Ihr erster pflegebedürftiger Angehöriger?",
    name: "alterpersonca",
    id: "q522",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersonca",
        value: "",
        id: "qq522",
        next: "q271",
      }
    ]
  },
  q271:
  {
    type: "form",
    question: "Wie alt ist Ihr zweiter pflegebedürftiger Angehöriger?",
    name: "alterpersoncb",
    id: "q271",
    inputs: [
      {
        title: "Alter oder Geburtsdatum:",
        image_name: "zu-pflegende.png",
        name: "alterpersoncb",
        value: "",
        id: "qq271",
        next: "22",
      }
    ]
  },
  12:
  {
    type: "regular",
    question: "Ist ein Pflegegrad bereits vorhanden?",
    name: "pflegegradb",
    id: "12",
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
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
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
    id: "18",
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
    id: "19",
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
    id: "22",
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
    id: "23",
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
    id: "24",
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
    id: "25",
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
    id: "26",
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
    id: "27",
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
    id: "28",
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
    id: "29",
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
    id: "30",
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
    id: "q351",
    inputs: [
      {
        title: "Postleitzahl oder Wohnort:",
        image_name: "map_deutschland.gif",
        value: "",
        name: "postcode",
        id: "qq351",
        next: "finish",
      },
      
    ],
  },
  finish: {
    type: "wrapper",
    question: "Nur noch ein Schritt zu Ihrem Anbietervergleich",
    next: "finished",
    id: "finish",
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
      newElem += `<div id="${item}" class="inactive">
        <h2 class="text-center question-title">${currentElement.question}</h2>`;

      if (currentElement.type == "regular") {
        if (currentElement.options && Array.isArray(currentElement.options)) {
          for (let cE in currentElement.options) {
            newElem += `
          <label class="section_items overflow-hidden" for="${currentElement.options[cE].id}">
            <img src="img/${currentElement.options[cE].image_name}" class="mx-auto d-block img-fluid">
            <div class="row">
              <input type="radio" id="${currentElement.options[cE].id}" data-next="${currentElement.options[cE].next}" name="${currentElement.options[cE].name}" value="${currentElement.options[cE].value}"  class="d-none" onClick="setCurrentOption(event); loadNext(); addFormData(event)">
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
<a name="12" onclick="javascript: window.location ='#${currentElement.inputs[cE].next}'" style="display: block;"><button name="button" type="button" class="button-design button plz-button next-button continue-button">weiter »</button></a>
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
<div class="participant-column">
<div class="participant-box">
<div class="participant-row">
<div class="participant-header"><label class="text-center size18" for="que${item}-opt${cE}">${
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
  window.location.hash = nextKey;
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
  if (newHash > "1") {
    document.getElementById("spanInfo").classList.add("inactive");
  } else {
    document.getElementById("spanInfo").classList.remove("inactive");
  }

  if (!newHash && oldHash) {
    document.getElementById(oldHash).classList.add("inactive");
    document.getElementById("1").classList.remove("inactive");
    return;

  } else if(newHash && !oldHash) {
    document.getElementById(newHash).classList.remove("inactive");
    document.getElementById("1").classList.add("inactive");
    return;

  } else if (!newHash && !oldHash) {
    document.getElementById("1").classList.remove("inactive");
    return;

  } else {
    document.getElementById("1").classList.add("inactive");
    document.getElementById(oldHash).classList.add("inactive");
    document.getElementById(newHash).classList.remove("inactive");
  }
}

/********************EVENT LISTENERS********************/

// instantiate the items
window.onload = function () {
  window.location.hash = "1";
  popFunc();
  document.getElementById("1").classList.remove("inactive");
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
  let oldHash = e.oldURL.slice(e.oldURL.lastIndexOf("#") + 1);
  let newHash = e.newURL.slice(e.newURL.lastIndexOf("#") + 1);

  if (window.innerDocClick) {
    hashChange(oldHash, newHash, false);
  } else {
    hashChange(oldHash, newHash, true);
  }
};
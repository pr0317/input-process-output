const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: ["Amparo",
    "Seddik",        
    "M",
    "Laarbi",
    "Grietje",
    "Nacor",
    "Soufia",
    "Laura",
    "Rogers",
    "Annalisa",
    "Els",
    "Jimmie",
    "Braulia",
    "Salete",
    "Marinel",
    "Maimoun",
    "Quique",
    "Alexsandro",
    "Alta",
    "Jessenia",
    "Etor",
    "Pelegri",
    "Isabel",
    "Zabulon",
    "Youcef",
    "Dunia",
    "Elisabete",
    "Brahima",
    "Danya",
    "Bart"],
  datasets: [
    {
      label: 'taller',
      data: [3,1,3,3,3,4,3,4,3,3,2,2,5,2,4,2,1,5,4,1,2,3,5,3,4,5,2,5,3,4],
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      order: 1
    },
    {
      label: 'investigacion',
      data: [5,5,2,5,1,2,1,5,1,2,4,4,4,3,4,3,5,2,1,2,2,5,4,4,5,3,1,5,4,2],
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      order: 1
    },
    {
      label: 'parcial',
      data: [1,4,4,3,5,1,5,4,2,1,2,5,4,3,5,3,4,1,1,2,1,5,1,2,5,5,3,4,5,3],
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      order: 1
    },
    {
      label: 'definitiva',
      data: [3,3.33,3,3.67,3,2.33,3,4.33,2,2,2.67,3.67,4.33,2.67,4.33,2.67,3.33,2.67,2,1.67,1.67,4.33,3.33,3,4.67,4.33,2,4.67,4,3],
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      type: 'line',
      order: 0
    }
  ]
};
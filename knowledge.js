const knowledgeBase = [

  {
    stage: "Дифференциальный прихват",
    baseSuccess: 70,
    condition: d => d.stickType === "differential",
    description: "Вращение колонны с разгрузкой веса",
    tool: "Ротор, лебёдка",
    fishing: "Не требуется",
    limits: d => d.mudDensity > 1.3,
    source: "Пустовойтенко, API RP 7G"
  },

  {
    stage: "Дифференциальный прихват",
    baseSuccess: 55,
    condition: d => d.stickType === "differential",
    description: "Химическая ванна (нефтяная, ПАВ)",
    tool: "Химическая ванна",
    fishing: "В случае неудачи — ясс гидравлический",
    limits: d => d.depth > 3500,
    source: "Halliburton Fishing Tools Manual"
  },

  {
    stage: "Механический прихват",
    baseSuccess: 65,
    condition: d => d.stickType === "mechanical",
    description: "Расхаживание с ударной нагрузкой",
    tool: "Лебёдка",
    fishing: "Гидроударник, ясс",
    limits: d => d.bha === "motor",
    source: "Weatherford Fishing Handbook"
  },

  {
    stage: "Осыпание / обвал",
    baseSuccess: 60,
    condition: d => d.stickType === "sloughing",
    description: "Интенсивная промывка и проработка",
    tool: "Буровые насосы",
    fishing: "Метчик, колокол",
    limits: d => d.fluidLoss > 10,
    source: "Schlumberger Oilfield Review"
  },

  {
    stage: "Крайние меры",
    baseSuccess: 20,
    condition: d => true,
    description: "Отворот и ловильные работы",
    tool: "Ловильный инструмент",
    fishing: "Метчик, колокол, фрезер",
    limits: d => false,
    source: "Пустовойтенко"
  }

];

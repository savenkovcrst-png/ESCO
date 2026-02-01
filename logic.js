function solve() {

  const d = {
    stickType: document.getElementById("stickType").value,
    depth: +document.getElementById("depth").value,
    mudDensity: +document.getElementById("mudDensity").value,
    mudViscosity: +document.getElementById("mudViscosity").value,
    fluidLoss: +document.getElementById("fluidLoss").value,
    bha: document.getElementById("bha").value,
    diameter: +document.getElementById("diameter").value
  };

  const result = document.getElementById("result");
  result.innerHTML = "";

  knowledgeBase
    .filter(r => r.condition(d))
    .forEach(r => {

      let success = r.baseSuccess;

      if (d.depth > 3000) success -= 10;
      if (d.mudDensity > 1.35) success -= 10;
      if (d.mudViscosity < 35) success -= 5;
      if (d.fluidLoss > 10) success -= 10;

      if (success < 0) success = 0;

      let warn = r.limits(d) ? "⚠ НЕ РЕКОМЕНДУЕТСЯ при данных условиях" : "";

      let color = success > 60 ? "green" : success > 40 ? "orange" : "red";

      const div = document.createElement("div");
      div.className = "node";
      div.innerHTML = `
        <div class="stage">${r.stage}</div>
        ${r.description}<br>
        <span class="tool">Инструмент: ${r.tool}</span><br>
        <span class="tool">Ловильный инструмент: ${r.fishing}</span><br>
        <span class="prob" style="color:${color}">
          Вероятность успеха: ${success}%
        </span><br>
        <span class="warn">${warn}</span><br>
        <small>${r.source}</small>
      `;

      result.appendChild(div);
    });
}

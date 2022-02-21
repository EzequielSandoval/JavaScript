// inicializacion
let costePlan = 0
let costeMeses = 0

// localStorage agregado
let planLite = document.getElementById("btnPlanLite")
planLite.onclick = () => {
    plan = "Plan Lite";
    costePlan = 149;
    localStorage.setItem('tipoPlan', plan);
    localStorage.setItem('costePlan', costePlan);
    window.document.location = 'pages/resumen.html'

}

let planPlus = document.getElementById("btnPlanPlus")
planPlus.onclick = () => {
    plan = "Plan Plus";
    costePlan = 269;
    localStorage.setItem('tipoPlan', plan);
    localStorage.setItem('costePlan', costePlan);
    window.document.location = 'pages/resumen.html'

}

let planFull = document.getElementById("btnPlanFull")
planFull.onclick = () => {
    plan = "Plan Full";
    costePlan = 399;
    localStorage.setItem('tipoPlan', plan);
    localStorage.setItem('costePlan', costePlan);
    window.document.location = 'pages/resumen.html'

}








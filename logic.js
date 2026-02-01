function solve(){
const acc=document.getElementById('accident').value;
const trees={stuck_pipe:stuckPipeTree,pipe_failure:pipeFailureTree,circulation_loss:circulationLossTree,kicks:kicksTree,collapses:collapsesTree,motors:motorsTree,tool_failure:toolFailureTree};
const res=document.getElementById('result');
res.innerHTML='';
trees[acc].forEach(r=>{
const d=document.createElement('div');
d.className='node';
d.innerHTML=`<b>${r.stage}</b><br>${r.description}<br><i>Инструмент: ${r.fishing}</i>`;
res.appendChild(d);
});
}
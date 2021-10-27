function Calcular() { 
    var vr1 = document.getElementById('t1').value; 
    var vr2 = document.getElementById('t2').value; 
    var vr3 = document.getElementById('t3').value;
    var vr4 = document.getElementById('t4').value; 
    var s = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4)); document.getElementById('suma').innerHTML = s;
    var p = (parseFloat(vr1*0.25)+parseFloat(vr2*0.20)+parseFloat(vr3*0.25)+parseFloat(vr4*0.30)); document.getElementById('promedio').innerHTML = p; 
    
} 
function borrar() {
    
}
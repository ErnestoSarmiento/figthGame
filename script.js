class Personaje{

    constructor(){
        this.salud = 100;   
    }

    atacar(d,personaje){
        if(document.getElementById('mensaje').innerHTML==0&&document.getElementById('status').innerHTML==0){
            personaje.salud=personaje.salud-10;
            document.getElementById('status').innerHTML=`<p hidden="">1</p>`;
            this.click(d,personaje);
            if(personaje.salud<=0){
                document.getElementById('mensaje').innerHTML=`<h3> Game Over <h3>`;
                document.getElementById('reset').innerHTML=`<button id="btn-reset">Reset</button>`;
            }
        }
    }

    click(d,personaje){
        switch(d.id){
            case "btn-uno":
                document.getElementById('jugador-uno').src="img/img_dot_fina_atack.gif";
                setTimeout(function(){
                    document.getElementById('jugador-uno').src="img/img_dot_fina_mov.gif";
                    document.getElementById('salud-dos').innerText=personaje.salud;
                    document.getElementById('status').innerHTML=``;
                },2400);
            break;
            case "btn-dos":
                document.getElementById('jugador-dos').src="img/img_dot_rain_atack.gif";
                setTimeout(function(){
                    document.getElementById('jugador-dos').src="img/img_dot_rain_mov.gif";
                    document.getElementById('salud-uno').innerText=personaje.salud;
                    document.getElementById('status').innerHTML=``;
                },2400);
            break;
        }
    }

}

var flag 

personajeUno = new Personaje();
personajeDos = new Personaje();

var button = document.getElementById('reset');

button.onclick = function(){
    personajeUno = new Personaje();
    personajeDos = new Personaje(); 
    document.getElementById('salud-uno').innerText=100;
    document.getElementById('salud-dos').innerText=100;
    document.getElementById('status').innerHTML=``;
    document.getElementById('btn-reset').innerHTML=``;
}

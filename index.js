var corpo1 = document.getElementById('corpo').style.backgroundColor = "#943E3E";
var fonteG1 = document.getElementById("h1").style.textAlign = "center";
var fonteG2 = document.getElementById('h1').style.background = "#000000";
var fontG3 = document.getElementById('h1').style.color = "#FFFFFF";
var musica = document.getElementById("musica");
var artista = document.getElementById("artista");
var estilo = document.getElementById("estilo");
var table = document.createElement("table");
var thead = document.createElement("thead");
var index;

var th1 = document.createElement("th");
	th1.innerHTML = "Música";
	
var th2 = document.createElement("th");
	th2.innerHTML = "Artista";
	
var th3 = document.createElement("th");
	th3.innerHTML = "Estilo";
	
var th4 = document.createElement("th");
	th4.innerHTML = "Excluir";
	
var th5 = document.createElement("th");
     th5.innerHTML = "Alterar";
	
var tbody = document.createElement("tbody");
	
thead.appendChild(th1);
thead.appendChild(th2);
thead.appendChild(th3);
thead.appendChild(th4);
thead.appendChild(th5);

thead.style.backgroundColor = "#000000";
th1.style.paddingLeft = "100px";
th1.style.paddingRight= "100px";
th1.style.marginLeft = "20px";
th1.style.marginRight = "20px";
th1.style.color = "#FFFFFF";
th2.style.paddingLeft = "100px";
th2.style.paddingRight= "100px";
th2.style.marginLeft = "20px";
th2.style.marginRight = "20px";
th2.style.color = "#FFFFFF";
th3.style.paddingLeft = "100px";
th3.style.paddingRight= "100px";
th3.style.marginLeft = "20px";
th3.style.marginRight = "20px";
th3.style.color = "#FFFFFF";
th4.style.paddingLeft = "100px";
th4.style.paddingRight= "100px";
th4.style.marginLeft = "20px";
th4.style.marginRight = "20px";
th4.style.color = "#FFFFFF";
th5.style.paddingLeft = "100px";
th5.style.paddingRight= "100px";
th5.style.marginLeft = "20px";
th5.style.marginRight = "20px";
th5.style.color = "#FFFFFF";

table.appendChild(thead)
table.appendChild(tbody)

document.body.appendChild(table)

function adicionar(){	
	var tr = document.createElement("tr");
	
	var td1 = document.createElement("td");
		td1.innerHTML = musica.value;
		
	var td2 = document.createElement("td");
		td2.innerHTML = artista.value;
		
	var td3 = document.createElement("td");
		td3.innerHTML = estilo.value;
		
	var td4 = document.createElement("td");
	var botaoExc = document.createElement("button");
		botaoExc.innerHTML = "Excluir";
		botaoExc.setAttribute("onclick","excluirLinha(this)");
		td4.appendChild(botaoExc);
	
	var td5 = document.createElement("td");
    var botaoAlt = document.createElement("button");
        botaoAlt.innerHTML = "Alterar";
        botaoAlt.setAttribute("onclick","altItem(musica.value,artista.value,estilo.value,this)");
        td5.appendChild(botaoAlt);
			
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tbody.appendChild(tr);
	
	campForm();
}

function excluirLinha(i){
	tbody.deleteRow(i);
}	
	
function altItem(musica, artista, estilo, botao) {

	index = botao.parentElement.parentElement.rowIndex;

    table.rows[index].cells[0].innerHTML = musica;
    table.rows[index].cells[1].innerHTML = artista;
	table.rows[index].cells[2].innerHTML = estilo;
	table.rows[index].style.backgroundColor = "#E79896";

	this.musica.value = "";
	this.artista.value = "";
	this.estilo.value = "";
	
}

function campForm() {
	 for(var i = 0; i < table.rows.length; i++){
	    table.rows[i].ondblclick = function(){
	    index = this.rowIndex;           
	    musica.value = table.rows[index].cells[0].innerText;
	    artista.value = table.rows[index].cells[1].innerText;
		estilo.value = table.rows[index].cells[2].innerText;
	    table.rows[index].style.backgroundColor = "#876C6C";
	       }
	   }
}




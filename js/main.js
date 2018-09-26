
// 
// Editar Usuario Ventana Emergente
function editUserWO() {
    myWindow = window.open("windows_open/edit_user.html", "", "width=600, height=600");   // Opens a new window
}
//
function closeWO(){
    if(confirm("Esta seguro de realizar esta acción?")){
        alert('Registro Modicado con Exito!');
        close();
    }else{
        close_window();
    }
}
// Cerrar las Ventanas
function closeThisShit(){
  window.close();
}



//Buscar Clientes
function buscarClientesWO() {
    myWindow = window.open("windows_open/find_client.html", "", "width=1124, height=468");   // Opens a new window
}

//Buscar Clientes
function imprimirFacturaWO() {
    myWindow = window.open("windows_open/print_invoice.html", "", "width=1200, height=800");   // Opens a new window
}
// show Tuesday, 06 of October of 2015  10:51:59
var clock = (function(){
    'use-strict';
    return {
        // new date
        now: new Date(),
        // short selector
        _: function(e){
            return document.querySelector(e);
        },
        // check time
        checkTime: function(a){
            return (((a < 10) ? "0" : "") + a);
        },
        // show date
        showDate: function(){
            // if exists
            if (this._("#date")) {
                // days
                var days = [
                    'Domingo', 'Lunes',
                    'Martes', 'Miercoles',
                    'Jueves', 'Viernes', 
                    'Sabado'
                ];
                // months
                var months = [
                    'Enero', 'Febrero', 'Marzo', 
                    'Abril', 'Mayop', 'Junio', 
                    'Julio', 'Agosto', 'Septiembre', 
                    'Octbre', 'Noviembre', 'Diciembre'
                ];
                // show html
                this._("#date").innerHTML = 
                    days[this.now.getDay()] + ", " +
                    this.checkTime(this.now.getDate()) + " de " +
                    months[this.now.getMonth()] + " de " +
                    this.now.getFullYear();
            }
        },
        // new clock
        newClock: function(){
            var self = clock;// this not work :(
            var now = new Date();
            // show html clock
            self._("#clock").innerHTML = 
            self.checkTime(now.getHours()) + 
            ":" + 
            self.checkTime(now.getMinutes()) + 
            ":" + 
            self.checkTime(now.getSeconds());
        },
        // init clock and date
        init: function(){
            var self = this;
            setInterval(this.newClock,1000);
            this.showDate();
        }
    };
})();
clock.init();












//POS PRESS KEYS
var inputNamevar = document.getElementById("inputName"); // input Name of CLients
var inputBuscarvar = document.getElementById("inputBuscar"); // input Find Products
var inputPagovar = document.getElementById("inputPago"); // input Find Products


$( "#mainPOS" ).on( 'keydown', function ( e ) {
  if ( e.keyCode === 113 ) { //F2
    inputNamevar.focus(); 
  }
  else if  ( e.keyCode === 115 ) { //F4
    inputBuscarvar.focus(); 
  }
  else if  ( e.keyCode === 119 ) { //F4
    inputPagovar.focus(); 
  }
  else if  ( e.keyCode === 119 ) { //F4
    inputPagovar.focus(); 
  }
  else if  ( e.keyCode === 118 ) { //F4
    buscarClientesWO(); 
  }
});













(function() {
	'use strict';
	var tasker = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.evalTasklist();
		},
		cacheDom: function() {
			this.taskInput = document.getElementById("input-task");
			this.addBtn = document.getElementById("add-task-btn");
			this.tasklist = document.getElementById("tasks");
			this.tasklistChildren = this.tasklist.children;
			this.errorMessage = document.getElementById("error");
		},
		bindEvents: function() {
			this.addBtn.onclick = this.addTask.bind(this);
			this.taskInput.onkeypress = this.enterKey.bind(this);
		},
		evalTasklist: function() {
			var i, chkBox, delBtn;
			//BIND CLICK EVENTS TO ELEMENTS
			for (i = 0; i < this.tasklistChildren.length; i += 1) {
				//ADD CLICK EVENT TO CHECKBOXES
				chkBox = this.tasklistChildren[i].getElementsByTagName("input")[0];
				chkBox.onclick = this.completeTask.bind(this, this.tasklistChildren[i], chkBox);
				//ADD CLICK EVENT TO DELETE BUTTON
				delBtn = this.tasklistChildren[i].getElementsByTagName("button")[0];
				delBtn.onclick = this.delTask.bind(this, i);
			}
		},
		render: function() {
			var taskLi, taskChkbx, taskVal, taskBtn, taskTrsh;
			//BUILD HTML
			taskLi = document.createElement("li");
			taskLi.setAttribute("class", "task");
			//CHECKBOX
			taskChkbx = document.createElement("input");
			taskChkbx.setAttribute("type", "checkbox");
			//USER TASK
			taskVal = document.createTextNode(this.taskInput.value);
			//DELETE BUTTON
			taskBtn = document.createElement("button");
			//TRASH ICON
			taskTrsh = document.createElement("i");
			taskTrsh.setAttribute("class", "fa fa-trash");
			//INSTERT TRASH CAN INTO BUTTON
			taskBtn.appendChild(taskTrsh);

			//APPEND ELEMENTS TO TASKLI
			taskLi.appendChild(taskChkbx);
			taskLi.appendChild(taskVal);
			taskLi.appendChild(taskBtn);

			//ADD TASK TO TASK LIST
			this.tasklist.appendChild(taskLi);

		},
		completeTask: function(i, chkBox) {
			if (chkBox.checked) {
				i.className = "task completed";
			} else {
				this.incompleteTask(i);
			}
		},
		incompleteTask: function(i) {
			i.className = "task";
		},
		enterKey: function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				this.addTask();
			}
		},
		addTask: function() {
			var value = this.taskInput.value;
			this.errorMessage.style.display = "none";

			if (value === "") {
				this.error();
			} else {
				this.render();
				this.taskInput.value = "";
				this.evalTasklist();
			}
		},
		delTask: function(i) {
			this.tasklist.children[i].remove();
			this.evalTasklist();
		},
		error: function() {
			this.errorMessage.style.display = "block";
		}
	};

	tasker.init();
}());


///


var clients = [
	{ "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
	{ "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
	{ "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
	{ "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
	{ "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
];

var countries = [
	{ Name: "", Id: 0 },
	{ Name: "United States", Id: 1 },
	{ Name: "Canada", Id: 2 },
	{ Name: "United Kingdom", Id: 3 }
];

$("#jsGrid").jsGrid({
	width: "100%",
	height: "400px",

	inserting: true,
	editing: true,
	sorting: true,
	paging: true,

	data: clients,

	fields: [
		{ name: "Name", type: "text", width: 150, validate: "required" },
		{ name: "Age", type: "number", width: 50 },
		{ name: "Address", type: "text", width: 200 },
		{ name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
		{ name: "Married", type: "checkbox", title: "Is Married", sorting: false },
		{ type: "control" }
	]
});


///

$(function() {
 
    $("#jsGrid").jsGrid({
        height: "90%",
        width: "100%",
 
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
 
        pageSize: 15,
        pageButtonCount: 5,
 
        deleteConfirm: "Do you really want to delete the client?",
 
        controller: db,
 
        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            { type: "control" }
        ]
    });
 
});
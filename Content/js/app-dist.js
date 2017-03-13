'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var app = document.getElementById('divApp');
var tablaLlamadas = document.getElementById('tablaLlamadas');
var tablaLlamadasBody = document.getElementById('tablaLlamadasBody');

//Lo que venga de la base de datos, debe tener Ids
var pruebaDatos = [{
	idPlan: '1',
	fechaNotificacion: '01/01/2017',
	dias: '1',
	nroSolicitud: '1533124',
	razonSocial: 'Jonatan Alvarez',
	comercializadora: 'MOTORMAX',
	marca: 'Ford',
	estadoUltimaLlamada: 'Tomada'
}, {
	idPlan: '2',
	fechaNotificacion: '01/01/2017',
	dias: '3',
	nroSolicitud: '1234444',
	razonSocial: 'Dario Rick',
	comercializadora: 'MOTORMAX',
	marca: 'Ford',
	estadoUltimaLlamada: 'Contestador'
}];

$(function () {
	var sonLlamadasCerradas = $('#sonLlamadasCerradas').val();
	if (sonLlamadasCerradas === "False") {
		setInterval(refrescarTabla, 5000); // Traigo datos frescos cada 5 segundos.
	}
});

function refrescarTabla() {
	//AJAX no se puede probar sin tener el backend
	/*
    $.ajax({
        url: '@Url.Action("refrescarTabla", "Llamadas")',
        type: 'POST',
        dataType: 'json',
         error: function (data, textStatus, jqXHR) {
            alert('Ocurrio un error: ' + data.responseText);
        },
         success: function (data, textStatus, jqXHR) {
            tablaLlamadas.empty();
            //ReactDOM.render(<resultadoBackend listaResultados=pruebaDatos, app);
        }
    });
    */

	//Prueba con Json de arriba
	var temp = document.createElement("div");
	ReactDOM.render(React.createElement(TBoodyLlamadasScoring, { listaLlamadas: pruebaDatos }), temp);
	var container = document.getElementById('tablaLlamadas');
	container.replaceChild(temp.querySelector('#tablaLlamadasBody'), document.getElementById('tablaLlamadasBody'));
}

//Clases React JS con JSX


var TBoodyLlamadasScoring = function (_React$Component) {
	_inherits(TBoodyLlamadasScoring, _React$Component);

	function TBoodyLlamadasScoring() {
		_classCallCheck(this, TBoodyLlamadasScoring);

		return _possibleConstructorReturn(this, (TBoodyLlamadasScoring.__proto__ || Object.getPrototypeOf(TBoodyLlamadasScoring)).apply(this, arguments));
	}

	_createClass(TBoodyLlamadasScoring, [{
		key: 'render',
		value: function render() {
			var bodyStyle = {
				textAlign: 'center'
			};

			//Mapeo 	JSON contra TableRows de HTML
			var lista = this.props.listaLlamadas.map(function (llamada, i) {
				return React.createElement(RowLlamada, { llamada: llamada, key: i });
			});
			return React.createElement('tbody', { id: 'tablaLlamadasBody', style: bodyStyle }, lista);
		}
	}]);

	return TBoodyLlamadasScoring;
}(React.Component);

var RowLlamada = function (_React$Component2) {
	_inherits(RowLlamada, _React$Component2);

	function RowLlamada() {
		_classCallCheck(this, RowLlamada);

		return _possibleConstructorReturn(this, (RowLlamada.__proto__ || Object.getPrototypeOf(RowLlamada)).apply(this, arguments));
	}

	_createClass(RowLlamada, [{
		key: 'render',
		value: function render() {
			return React.createElement('tr', { className: '' }, React.createElement('td', null, ' ', this.props.llamada.fechaNotificacion, ' '), React.createElement('td', null, ' ', React.createElement('span', { className: 'label label-danger' }, this.props.llamada.dias, ' ')), React.createElement('td', null, ' ', this.props.llamada.nroSolicitud, ' '), React.createElement('td', null, ' ', this.props.llamada.razonSocial, ' '), React.createElement('td', null, ' ', this.props.llamada.comercializadora, ' '), React.createElement('td', null, ' ', this.props.llamada.marca, ' '), React.createElement('td', null, React.createElement('div', { className: 'btn-group' }, React.createElement('label', { className: 'btn-xs btn-info glyphicon glyphicon-ok' }), React.createElement('label', { className: 'btn-xs btn-info glyphicon glyphicon-ok' }), React.createElement('label', { className: 'btn-xs btn-info glyphicon glyphicon-ok' }), React.createElement('label', { className: 'btn-xs btn-info glyphicon glyphicon-ok' }))), React.createElement('td', null, ' ', this.props.llamada.estadoUltimaLlamada, ' '), React.createElement('td', null, React.createElement(BtnLlamar, { idPlan: this.props.llamada.idPlan })));
		}
	}]);

	return RowLlamada;
}(React.Component);

var BtnLlamar = function (_React$Component3) {
	_inherits(BtnLlamar, _React$Component3);

	function BtnLlamar() {
		_classCallCheck(this, BtnLlamar);

		return _possibleConstructorReturn(this, (BtnLlamar.__proto__ || Object.getPrototypeOf(BtnLlamar)).apply(this, arguments));
	}

	_createClass(BtnLlamar, [{
		key: 'render',
		value: function render() {
			return React.createElement('div', null, React.createElement('a', { className: 'btn btn-success btn-small', href: '/Cuestionario/CuestionarioScoring?idPlan=' + this.props.idPlan }, React.createElement('i', { className: 'fa fa-phone' }), ' Llamar'));
		}
	}]);

	return BtnLlamar;
}(React.Component);
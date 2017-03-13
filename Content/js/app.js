
var app = document.getElementById('divApp');
var tablaLlamadas = document.getElementById('tablaLlamadas');
var tablaLlamadasBody = document.getElementById('tablaLlamadasBody');

//Lo que venga de la base de datos, debe tener Ids
const pruebaDatos = [
	{
		idPlan: '1',
        fechaNotificacion: '01/01/2017',
        dias: '1',
        nroSolicitud: '1533124',
        razonSocial: 'Jonatan Alvarez',
        comercializadora: 'MOTORMAX',
        marca: 'Ford',
        estadoUltimaLlamada: 'Tomada'
	},
	{
		idPlan: '2',
        fechaNotificacion: '01/01/2017',
        dias: '3',
        nroSolicitud: '1234444',
        razonSocial: 'Dario Rick',
        comercializadora: 'MOTORMAX',
        marca: 'Ford',
        estadoUltimaLlamada: 'Contestador'
	}
];


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
    ReactDOM.render(<TBoodyLlamadasScoring listaLlamadas = {pruebaDatos} />, temp);
    var container = document.getElementById('tablaLlamadas');
    container.replaceChild(temp.querySelector('#tablaLlamadasBody'), document.getElementById('tablaLlamadasBody'));

}


//Clases React JS con JSX


class TBoodyLlamadasScoring extends React.Component {
	render(){
		const bodyStyle = {
		  textAlign: 'center'
		};

		//Mapeo 	JSON contra TableRows de HTML
		const lista = this.props.listaLlamadas.map((llamada,i) => <RowLlamada llamada={llamada} key={i} />);
		return ( 
			<tbody id='tablaLlamadasBody' style={bodyStyle}>
				{lista}
			</tbody>
		)
	}
}

class RowLlamada extends React.Component {
	render(){
		return (
			<tr className=''>
	            <td> {this.props.llamada.fechaNotificacion} </td>
	            <td> <span className="label label-danger">{this.props.llamada.dias} </span></td>
	            <td> {this.props.llamada.nroSolicitud} </td>
	            <td> {this.props.llamada.razonSocial} </td>
	            <td> {this.props.llamada.comercializadora} </td>
	            <td> {this.props.llamada.marca} </td>
	            <td>
	                <div className="btn-group">
	                    <label className="btn-xs btn-info glyphicon glyphicon-ok"></label>
	                    <label className="btn-xs btn-info glyphicon glyphicon-ok"></label>
	                    <label className="btn-xs btn-info glyphicon glyphicon-ok"></label>
	                    <label className="btn-xs btn-info glyphicon glyphicon-ok"></label>
	                </div>
            	</td>
            	<td> {this.props.llamada.estadoUltimaLlamada} </td>
	            <td>
	                <BtnLlamar idPlan = {this.props.llamada.idPlan}/>
            	</td>
			</tr>
		)
	}
}

class BtnLlamar extends React.Component{
	render(){
		return (
			<div>
                <a className="btn btn-success btn-small" href={'/Cuestionario/CuestionarioScoring?idPlan=' + this.props.idPlan} >
                    <i className="fa fa-phone"></i> Llamar
                </a>
			</div>
		)
	}
}




import React, { useState, useEffect } from 'react';
import InputNumber from './components/InputNumber';

import './App.scss';

function App() {
	const [data, setData] = useState({
		puntos: '',
		medida: '',
		puntosTotales: '',
		medidaTotal: '',
	});

	const changeData = (value, type) => {
		let valueNumber;
		if (Number(value) === 0) {
			valueNumber = '';
		} else {
			valueNumber = Number(value);
		}

		switch (type) {
			case 'Puntos':
				setData({
					...data,
					puntos: valueNumber,
				});
				break;

			case 'Medida':
				setData({
					...data,
					medida: valueNumber,
				});
				break;

			case 'PuntosTotales':
				setData({
					...data,
					puntosTotales: valueNumber,
				});
				break;

			case 'MedidaTotal':
				setData({
					...data,
					medidaTotal: valueNumber,
				});
				break;

			default:
				break;
		}
	};

	const calculateResults = () => {
		if (data.medida && data.puntos) {
			if (data.puntosTotales) {
				let medidaTotal = (data.puntosTotales * data.medida) / data.puntos;
				setData({
					...data,
					medidaTotal,
				});
			}
			if (data.medidaTotal) {
				let puntosTotales = (data.medidaTotal * data.puntos) / data.medida;
				setData({
					...data,
					puntosTotales,
				});
			}
		}
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<section className="App">
			<h1>Artes Mafe</h1>
			<form className="calculator">
				<div className="calculator__field">
					<label htmlFor="puntos">Ingrese los puntos:</label>
					<InputNumber
						allowed={true}
						type="Puntos"
						value={data.puntos}
						setValue={(value) => changeData(value, 'Puntos')}
					/>
				</div>
				<div className="calculator__field">
					<label htmlFor="medida">Ingrese la medida (en cm):</label>
					<InputNumber
						allowed={true}
						value={data.medida}
						setValue={(value) => changeData(value, 'Medida')}
					/>
				</div>
				<div className="calculator__field">
					<label htmlFor="puntosTotal">Ingrese puntos totales:</label>
					<InputNumber
						allowed={
							data.medidaTotal && data.puntosTotales
								? true
								: data.medidaTotal
								? false
								: true
						}
						type="Puntos"
						value={data.puntosTotales}
						setValue={(value) => changeData(value, 'PuntosTotales')}
					/>
				</div>
				<div className="calculator__field">
					<label htmlFor="medidaTotal">Ingrese medida total (en cm):</label>
					<InputNumber
						allowed={
							data.puntosTotales && data.medidaTotal
								? true
								: data.puntosTotales
								? false
								: true
						}
						value={data.medidaTotal}
						setValue={(value) => changeData(value, 'MedidaTotal')}
					/>
				</div>
				<div className="calculator__field span">
					<button type="button" onClick={() => calculateResults()}>
						Calcular faltante
					</button>
				</div>
			</form>
		</section>
	);
}

export default App;

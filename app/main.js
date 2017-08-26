require(['react', 'react-dom', 'jsx!app/Calculator'], function (React, ReactDOM, Calculator) {
	Calculator = React.createFactory(Calculator);

	ReactDOM.render(
		Calculator(),
		document.getElementById('calculator')
	);
});
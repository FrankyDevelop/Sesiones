//TODO: Archivo de ejecucion del proyecto

const app=require('./app');

app.listen(app.get('port'), () => {
console.log('server on port', app.get('port'));
});
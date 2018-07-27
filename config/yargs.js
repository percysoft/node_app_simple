const opts ={
    base: {
        demand:true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default:10
    }
}

const argv = require('yargs')
                    .command('listar', 'Imprime en cosola multiplicar',opts)
                    .command('crear', 'Genera un archivo de la tabla multiplicar',opts)
                    .help()       
                    .argv;

module.exports = { argv };
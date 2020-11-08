var code = document.getElementById("iptCod")
var nom = document.getElementById("iptNom")
var desc = document.getElementById("iptDes")
var cant = document.getElementById("iptCant")
var cost = document.getElementById("iptCost")
var codeB = document.getElementById("iptCodeB")
var busCod = document.getElementById("iptBuscar")

class Producto {
    constructor(codigo, nombre, desc, cantidad, costo) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._desc = desc;
        this._cantidad = cantidad;
        this._costo = costo;
        this._siguiente = null;
    }
    getSiguiente(producto){
        this._siguiente= producto;
    }
    setSiguiente(){
        return this._siguiente;
    }
    setCodigo() {
        return this._codigo
    }
    mostrarInfo() {
        return this._codigo + '._ ' + this._nombre + ' (' + this._desc + ') ' + this._cantidad + ' unidades ' + this._costo + ' pesos'
    }
}
class Inventario {
    constructor() {
        this._inicio= null;
        this.size= 0;
    }
    
    agregarNuevo(producto){
        if(this._inicio== null){
            this._inicio= producto;
        }else{
            let aux= this._inicio;
            while(aux.setSiguiente() !== null){
                 aux= setSiguiente();
            }
            aux.getSiguiente(producto)
        }
        this.size++
    }

    eliminarInicio(){
       let aux= this._inicio;
        this._inicio= this.inicio.setSiguiente();
        aux.setSiguiente()= null; 
        return aux
    }

    eliminarC(codigo){
        if(this._inicio== codigo){
            return this.eliminarInicio();
        } else{
            let aux= this._inicio;
            while(aux.setSiguiente().codigo !== codigo){
                aux= aux.setSiguiente();
            }if(aux.setSiguiente() !==null){
                temp= aux.setSiguiente();
                aux.setSiguiente()= temp.setSiguiente();
                temp.setSiguiente() = null;

            }else{
                return null; 
            }
             
        }
    }

    buscar(codigo){
        while(aux.setSiguiente().codigo !== codigo){
            aux= aux.setSiguiente();
        }if(aux.setSiguiente().codigo == codigo){
            return aux.setCodigo(); 
        } 
    }
   

    mostrar() {
        for (this.size = 0; this.size < 20; this.size++) {
            console.log(this._productos.mostrarInfo())
        }
    }
}

var Prueba = new Inventario()
btnAgregar.addEventListener('click', () => {
    let nuevoP = new Producto(code.value, nom.value, desc.value, cant.value, cost.value)
    if (Prueba.agregarNuevo(nuevoP) === true) {
        alert('Producto guardado')
        Prueba.mostrar()
    } else {
        alert('Producto no guardado no hay espacio')
    }
})


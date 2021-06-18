//Forma de insercion: Desordenada
//Eliminacion Unica de primer dato encontrado
//Busqueda de primer metodo encontrado

class Nodo{ //Clase Nodo
    //Constructor
    constructor(dato){
        this.siguiente = null;
        this.dato = dato;
    }

    //Setters & Getters
    getDato(){
        return dato;
    }

    setDato(dato){
        this.dato = dato;
    }
}

class ListaCS{ //Clase Lista Circular Simple
    constructor(){
        this.cabeza = null;
        this.cola = null;
        this.size = 0;
    }

    //Metodo Insertar
    insert(dato){
        let nodo = new Nodo(dato);
        //Insercion de primer nodo
        if(this.cabeza == null){
            this.cabeza = nodo;
            this.cola = nodo;
            this.size++;
        }else if(this.cabeza != null){ // Insercion de nodo No Cabeza
            let aux = this.cabeza;
            while(aux != this.cola){
                aux = aux.siguiente;
            }
            aux.siguiente = nodo;
            nodo.siguiente = this.cabeza;
            this.cola = nodo;
            this.size++;
        }
    }

    //Metodo Imprimir
    print(){
        let aux = this.cabeza;
        while (aux != this.cola){
            console.log(aux.dato);
            aux = aux.siguiente
        }
        if(aux == this.cola){
            console.log(aux.dato);
        }
    }
}
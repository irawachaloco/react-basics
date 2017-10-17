const a:boolean = 3 > 2;

const f = (val : number) : boolean => val > 2;

// const y let permiten declarar variables en el mundo de los Valores
let g : (n: number) => boolean;

g = (val)=>val > 2;


// En el mundo de los tipos están p. ej. type, interface o class
//Esto es un alias de tipo (es como una variable en el mundo de los tipos)
type Name = string;

const nameOmar : Name = 'omar'; 

type CompareNumber = (n: number) => boolean;

let h : CompareNumber;

h = (v)=> v > 2;

//Interface es una especie de contrato (templete o forma)
interface Punto {
    //Miembros o propiedades
    //x es un identificador de miembro
    x: number,
    y: number,
    //esta propiedad es opcional (signo ? justo antes de los dos puntos)
    name?: string
}

const b : Punto = {x:2, y:3, name: 'pancho'};

const c : Punto = {x: 2, y: 4};

//notar que aquí se usa ';' en vez de ','
class Rectangle {
    h: number;
    w: number;
    constructor(h : number, w : number){
        this.h = h;
        this.w = w;
    }
    //esto se llama método
    //es una función que depende de la instancia (this)
    area(): number {
        return this.h * this.w;
    };
}

const r = new Rectangle(2,3);

r.area()

type Rect = Rectangle;

const r2 : Rect = new Rectangle(2, 3);

//Type es una asignación de variables
//Aquí estamos sumando tipos
type StringOrNumber = string | number;

const l : StringOrNumber = 'pepe';

//Tipos genéricos
//Una definición genérica es una función en el mundo de los tipos
//Wrapper recibe un argumento de tipo y devuelve un 'Tipo' (parametrizado)
interface Wrapper<T> {
    value: T
}

const w : Wrapper<number> = { value: 2 }

const k : Wrapper<string> = { value:'pepe' }

//los tipos están ordenados, tienen relación de orden (a veces no)
//Hay dos Tipos principales: object y undefined
//relación de herencia o ser subtipo de alguien, hay dos formas
// 1) heredero de, se dice 'extender a alguien'
// 2) implementación de, se comporta como
// interface son muy débiles como para tener implementación, no herencia
// type son muy débiles como para tener implementación o herencia

//Esto es la herencia:
class A {
    a: number;
}

class B extends A {
    b: string;
}

const aa : A = new A();

aa.a = 2;
//aa sí tiene a, pero no tiene b

const bb : B = new B();

// en cambio b, tiene ambos, porque extiende a 'A'
bb.a = 8;
bb.b = 'pepe';

//aquí podemos usar B porque B extiende a A
// a esto se le dice que es asignable (B es asignable a A)
const a2 : A = new B();
//aquí ya no le gusta a typescript porque A no tiene b
//const b2 : B = new A();

//======
//Implementación
//aquí se construye una versión del Tipo, es una especie de copia
class C implements B {
    x: number;
    a: number;
    b: string;
}
const a3 : A = new C();


//tipado estructural. Algo con la misma forma, digamos A, puede ser asignado a un a
//creamos de la nada un objeto que tiene la misma forma que A
const a4 : A = {
    a: 2
}
// Aquí se queja porque namde no está en las propiedades de A, no tiene la forma
/* const a5 : A = {
    name: 'pepe'
} */


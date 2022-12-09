export interface Usuario{
    uid: string,
    rut: string,
    password: string,
    name: string,
    lastname: string,
    gender: 'M' | 'F',
    email:string,
    age:string
}
export interface Clase{
    nombre: string,
    id: string,
    descripcion:string,
    usuario: Usuario
}
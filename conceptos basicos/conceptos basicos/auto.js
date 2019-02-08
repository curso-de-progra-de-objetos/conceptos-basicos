 export default class auto {
constructor(marca, modelo, color, kilometraje = 0) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kilometraje = kilometraje;
    this.estado = "Apagado";
    
   }
   mostrarEstado () {

console.log(`El auto ${this.marca} ${this.color} del año ${this.modelo} 
tiene un kilometraje de ${this.kilometraje} kms y esta ${this.estado}`);
   }

   encender() {
      this.estado = "Encendido";
      this.mostrarEstado();
   }
  apagar() {
      this.estado = "Apagado";
      this.mostrarEstado();
   }
   avanzar(velocidad, tiempo) {
      if(this.estado === "Apagado") {
         console.log("El auto no puede avanzar por que esta apagado");
      } else {
         let distancia = velocidad * tiempo;
         this.kilometraje = this.kilometraje + distancia;
         this.mostrarEstado();
      }
   }
}
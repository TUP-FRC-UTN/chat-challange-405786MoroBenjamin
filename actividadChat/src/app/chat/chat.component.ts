import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Mensaje } from '../models/Mensaje';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent{
  @Output() mensajeEmitter = new EventEmitter<Mensaje>();
  @Input() usuario : string = "a";

  mensaje : Mensaje = {Usuario: this.usuario , Mensaje: ""};

  enviarMensaje(){
    let nuevoMensaje: Mensaje = { Usuario: this.usuario, Mensaje: this.mensaje.Mensaje };

    this.mensajeEmitter.emit(nuevoMensaje);
    this.mensaje.Mensaje = "";
  }

}

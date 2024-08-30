import { Component, EventEmitter, Output } from '@angular/core';
import { ChatComponent } from "../chat/chat.component";
import { NgClass, NgStyle } from '@angular/common';
import { Mensaje } from '../models/Mensaje';

@Component({
  selector: 'app-sala-chat',
  standalone: true,
  imports: [ChatComponent, ChatComponent, NgClass, NgStyle],
  templateUrl: './sala-chat.component.html',
  styleUrl: './sala-chat.component.css'
})
export class SalaChatComponent {
    mensajes: Mensaje[] = [];

    recibirMensaje(mensaje: Mensaje){
        this.mensajes.push(mensaje);
        console.log(this.mensajes);
    }
}

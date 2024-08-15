import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

    //i18n Select
    public name: string = 'Juanskpc';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla'
    }

    changeClient():void{
        this.name = 'Marcela';
        this.gender = 'female';
    }

    //i18n Plural

    public clients: string[] = ['Juan', 'Santi', 'Marcela', 'Imelda'];
    public clientsMap = {
        '=0': 'no tenemos ningún cliente esperando.',
        '=1': 'tenemos un cliente esperando.',
        '=2': 'tenemos 2 clientes esperando.',
        'other': 'tenemos # clientes esperando.'
    }

    deleteClient():void{
        this.clients.pop();
    }

    //KeyValue Pipe

    public persona = {
        name: 'Jinx',
        age: 21,
        address: 'Piltover, Arcane'
    }

    //Async Pipe
    public myObservableTimer = interval(2000);
}

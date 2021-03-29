import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TaskbarService {

    constructor() { }

    getTime(): Date {
       // var date = new Date(); // had to remove the colon (:) after the T in order to make it work
       // var day = date.getDate();
       // var monthIndex = date.getMonth();
       // var year = date.getFullYear();
       // var minutes = date.getMinutes();
       // var hours = date.getHours();
       // var seconds = date.getSeconds();
       // var myFormattedDate =  hours+":"+minutes+":"+seconds;

        return new Date();
    }
}

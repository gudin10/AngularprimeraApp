import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  
  valor:number=0;
  valor1:number=0;
  
  dadoimg='img/dado1.png';

  constructor() { }

  ngOnInit(): void {
    this.valor=Math.trunc(Math.random()*6)+1;
    this.valor1=Math.trunc(Math.random()*6)+1;
  }

  imagen(): void {
    //if(this.valor1==1{
      //this.valor1=this.dadoimg;
    //})
  }

}

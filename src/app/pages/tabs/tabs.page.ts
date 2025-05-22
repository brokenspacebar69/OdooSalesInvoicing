// src/app/pages/tabs/tabs.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false // Change to false if you want to use NgModule approach
})
export class TabsPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
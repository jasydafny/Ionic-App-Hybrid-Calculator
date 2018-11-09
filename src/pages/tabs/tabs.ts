import { Component } from '@angular/core';

import { CalculatorPage } from '../Calculator/Calculator';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalculatorPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

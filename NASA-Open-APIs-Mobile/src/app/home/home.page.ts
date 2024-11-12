import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular'; // Importando IonModal

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('apodModal') apodModal!: IonModal;
  @ViewChild('neowsModal') neowsModal!: IonModal;
  @ViewChild('donkiModal') donkiModal!: IonModal;
  @ViewChild('earthModal') earthModal!: IonModal;
  @ViewChild('eonetModal') eonethModal!: IonModal;
  @ViewChild('epictModal') epicModal!: IonModal;
  @ViewChild('exoplanetModal') exoplanetModal!: IonModal;
  @ViewChild('osdrModal') osdrModal!: IonModal;
  @ViewChild('insightModal') insightModal!: IonModal;
  @ViewChild('mrpModal') mrpModal!: IonModal;
  @ViewChild('nivlModal') nivlModal!: IonModal;
  @ViewChild('ttModal') ttModal!: IonModal;
  @ViewChild('sscModal') sscModal!: IonModal;
  @ViewChild('ssdModal') ssdModal!: IonModal;
  @ViewChild('techportModal') techportModal!: IonModal;
  @ViewChild('tleapiModal') tleapiModal!: IonModal;
  @ViewChild('wmtsModal') wmtsModal!: IonModal;
  presentingElement: Element | null = null;

  constructor() {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  dismissApodModal() {
    this.apodModal.dismiss();
  }

  dismissNeowsModal() {
    this.neowsModal.dismiss();
  }

  dismissDonkiModal() {
    this.donkiModal.dismiss();
  }

  dismissEarthModal() {
    this.earthModal.dismiss();
  }

  dismissEonetModal() {
    this.eonethModal.dismiss();
  }

  dismissEpicModal() {
    this.epicModal.dismiss();
  }

  dismissExoplanetModal() {
    this.exoplanetModal.dismiss();
  }

  dismissOsdrModal() {
    this.osdrModal.dismiss();
  }

  dismissInsightModal() {
    this.insightModal.dismiss();
  }

  dismissMrpModal() {
    this.mrpModal.dismiss();
  }

  dismissNivlModal() {
    this.nivlModal.dismiss();
  }

  dismissTtModal() {
    this.ttModal.dismiss();
  }

  dismissSscModal() {
    this.sscModal.dismiss();
  }

  dismissSsdModal() {
    this.ssdModal.dismiss();
  }

  dismissTechportModal() {
    this.techportModal.dismiss();
  }

  dismissTleapiModal() {
    this.tleapiModal.dismiss();
  }
  
  dismissWmtsModal() {
    this.wmtsModal.dismiss();
  }
}

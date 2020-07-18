import { Component, OnInit, ViewChild } from '@angular/core';
import * as data from './mockData.json';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal') myModal;
  private modalRef;
  data: any;
  filteredData: any;
  channelList: any;
  public slogan = 'We are providing broadband and cable TV service, the best service around.';
  constructor(private modalService: ModalManager) { }

  ngOnInit() {
    this.data = data;
    const jsonData = JSON.parse(JSON.stringify(data));
    this.data = jsonData.default.sort((a, b) => a.order - b.order);
  }
  filterData(packageName) {
    this.filteredData = this.data.filter((result) => packageName === result.pack_name);
  }
  openModal(packs: any) {
    this.channelList = packs;
    this.modalRef = this.modalService.open(this.myModal, {
      size: 'lg',
      modalClass: 'myModal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: 'modal-backdrop'
    });
  }
  closeModal() {
    this.modalService.close(this.modalRef);
    // or this.modalRef.close();
  }

}

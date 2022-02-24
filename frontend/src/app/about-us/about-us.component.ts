import { ResourceLoader } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import {} from "googlemaps";
import { ViewChild } from "@angular/core";
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  constructor() {}
  @ViewChild("map") mapElement: any;
  mapping!: google.maps.Map;
  ngOnInit(): void {
    // let loader = new Loader(){
    //   apiKey = 'AIzaSyBUoIIMSPHYH18I1Y0PVHX-2bBV2yNOAdY'
    // }
    // loader.load().then(() => {
    //   new google.maps.Map(document.getElementById('map'),{
    //     center : {lat  :51.233334, lng: 6.8333},
    //     zoom : 6
    //   })
    // })
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapId: "349bf6c66f572176",
    };
    this.mapping = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { GetCountryService } from '../services/get-country.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-region',
  templateUrl: './all-region.component.html',
  styleUrls: ['./all-region.component.css']
})
export class AllRegionComponent implements OnInit {


  countryName: string;
  regionName: string;
  latlng = [];
  arr = [];
  response: any;disableDIV1;
  disableDIV2;disableDIV3;disableDIV4;disableDIV5;



  constructor(private countryService: GetCountryService, public toastr: ToastrService) {

    this.toastr.info('', 'Click on any of the cards below displaying the regions')
  }

  getCountries(name: string) {

    this.latlng = [];
    this.countryService.getCountryNameByRegion(name).subscribe(
      (response: Response) => {
        this.response = response;
        for (let response of this.response) {

          this.latlng.push(response['latlng']);
        }
      }, error => {
        this.toastr.error('Something went Wrong', '');
      }
    )

  }





  ngOnInit() {
  }

}

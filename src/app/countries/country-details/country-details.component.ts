import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GetCountryService } from '../../services/get-country.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() countryName: string;
  constructor(public countryService: GetCountryService, public router: Router, public toastr: ToastrService) { }
  response;

  ngOnInit() {

  }


  ngOnChanges(changes: SimpleChanges) {

    if (this.countryName) {
      this.countryService.getCountryDetail(this.countryName).subscribe(

        (response: Response) => {
          this.response = response[0];

        }, error => {
          this.toastr.error('Something went Wrong', '');
        }
      )


    }
    else {
      this.response = null;
    }
  }

}

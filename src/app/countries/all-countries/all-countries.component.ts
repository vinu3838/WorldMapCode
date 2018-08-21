import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCountryService } from '../../services/get-country.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  public region: string;
  public language: string;
  public currency: string;
  public Prevregion: string;
  public Prevlanguage: string;
  public Prevcurrency: string;
  disableDIV = [];
  response;
  countryName;filter;p;
  constructor(public route: ActivatedRoute,
    public countryService: GetCountryService, public toastr: ToastrService, private router: Router) {

  }

  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = 'name';
    this.reverse = !this.reverse;
  }

  btnClick() {

    this.router.navigateByUrl('/countries');
  }


  getCountryDetail(name: string) {
    console.log(name);
    this.disableDIV = [];
    this.countryName = name;

  }

  ngDoCheck() {


    if (this.region && (this.region != this.Prevregion)) {
      this.countryName = null;
      this.response = null;
      this.Prevlanguage = null;
      this.Prevcurrency = null;
      this.disableDIV = [];
      this.countryService.getCountryNameByRegion(this.region).subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('Fitler Applied on Region!', 'These countries are present under ' + this.region + ' region');
        }, error => {
          this.toastr.error('Something Went Wrong', 'Sorry');
        }
      )
      this.Prevregion = this.region;

    }
    else if (this.language && (this.language != this.Prevlanguage)) {
      this.countryName = null;
      this.response = null;
      this.Prevregion = null;
      this.Prevcurrency = null;
      this.disableDIV = [];
      this.countryService.getCountryNameByLanguage(this.language).subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('These countries speak ' + this.language + ' language', 'Fitler Applied on Language!');
          //  console.log(this.response);
        }, error => {
          this.toastr.error('No Data Found, Click on Remove Filter', 'Sorry');
        }
      )
      this.Prevlanguage = this.language;

    }
    else if (this.currency && (this.currency != this.Prevcurrency)) {
      this.countryName = null;
      this.response = null;
      this.Prevlanguage = null;
      this.Prevregion = null;
      this.disableDIV = [];
      this.countryService.getCountryNameByCurrency(this.currency).subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('Fitler Applied on Currency!', 'These countries are using ' + this.currency + ' currency');
          //  console.log(this.response);
        }, error => {
          this.toastr.error('No Data Found, Click on Remove Filter', 'Sorry');
        }
      )

      this.Prevcurrency = this.currency;

    }

  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.countryName = null;
      this.response = null;
      this.region = null;
      this.language = null;
      this.currency = null;
      this.disableDIV = [];
      this.region = params['region'];
      this.language = params['language'];
      this.currency = params['currency'];
      console.log(this.language);
    });

    if (this.region) {
      this.disableDIV = [];
      this.countryService.getCountryNameByRegion(this.region).subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('Fitler Applied on Region!', 'These countries are present under ' + this.region + ' region');
        },
        error => {
          this.toastr.error('Something Went Wrong', 'Sorry');
        }
      )
      this.Prevregion = this.region;

    }
    else if (this.language) {
      this.disableDIV = [];
      this.countryService.getCountryNameByLanguage(this.language).subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('These countries speak ' + this.language + ' language', 'Fitler Applied on Language!');
        }, error => {
          this.toastr.error('No Data Found, Click on Remove Filter', 'Sorry');
        }
      )

      this.Prevlanguage = this.language;

    }
    else if (this.currency) {
      this.disableDIV = [];
      this.countryService.getCountryNameByCurrency(this.currency).subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('Fitler Applied on Currency!', 'These countries are using ' + this.currency + ' currency');
        }, error => {
          this.toastr.error('No Data Found, Click on Remove Filter', 'Sorry');
        }
      )

      this.Prevcurrency = this.currency;

    }
    else {
      this.disableDIV = [];
      this.countryService.getAllCountryName().subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.info('You are viewing all Countries', 'No Filter Applied');
        }, error => {
          this.toastr.error('No Data Found, Click on Remove Filter', 'Sorry');
        }

      )

    }

  }



}

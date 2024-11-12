import { Component, OnInit } from '@angular/core';
import { MarsWeatherService } from '../services/mars-weather.service';
import jsPDF from 'jspdf';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.page.html',
  styleUrls: ['./mars-weather.page.scss'],
})

export class MarsWeatherPage implements OnInit {
  marsWeather: any;
  errorMessage!: string;

  constructor(private marsWeatherService: MarsWeatherService) { }

  ngOnInit() {
    this.marsWeatherService.getMarsWeather().subscribe(
      data => {
        this.marsWeather = data;
      },
      error => {
        this.errorMessage = 'Mars climate data could not be loades.';
      }
    );
  }
  
  generatePDF() {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Latest Atmospheric Conditions on Mars", 10, 10);

    console.log('Button clicked!');
    
    this.marsWeather.sol_keys.forEach((sol: string, index: number) => {
      const { mx, mn } = this.marsWeather[sol].AT || { mx: 'N/A', mn: 'N/A' };
      const pressure = this.marsWeather[sol].PRE?.av || 'N/A';
      const windSpeed = this.marsWeather[sol].HWS?.av || 'N/A';
      
      doc.text(`Sun ${sol}`, 10, 20 + (index * 30));
      doc.text(`Maximum Temperature: ${mx} °C`, 10, 25 + (index * 30));
      doc.text(`Minimum Temperature: ${mn} °C`, 10, 30 + (index * 30));
      doc.text(`Atmospheric Pressure: ${pressure} Pa`, 10, 35 + (index * 30));
      doc.text(`Wind Speed: ${windSpeed} m/s`, 10, 40 + (index * 30));
    });
    
    doc.save('mars_weather_report.pdf');
  }
  
  generateCSV() {
    const csvData = [];
    csvData.push(['Sol', 'Max Temperature (°C)', 'Min Temperature (°C)', 'Atmospheric Pressure (Pa)', 'Wind Speed (m/s)']);
    
    console.log('Button clicked!');

    this.marsWeather.sol_keys.forEach((sol: string) => {
      const { mx, mn } = this.marsWeather[sol].AT || { mx: 'N/A', mn: 'N/A' };
      const pressure = this.marsWeather[sol].PRE?.av || 'N/A';
      const windSpeed = this.marsWeather[sol].HWS?.av || 'N/A';

      csvData.push([sol, mx, mn, pressure, windSpeed]);
    });

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'mars_weather_report.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slideIndex = 1;

  constructor() { 
  }

  ngOnInit(): void {
    // this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    console.log("slides Length = ", slides.length);
    console.log("dots length = ", dots.length);
    if (n > slides.length) {
      this.slideIndex = 1
    }    
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display:none;");
      // slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[this.slideIndex-1].style.display = "block";  
    slides[this.slideIndex-1].setAttribute("style", "display:block;");
    dots[this.slideIndex-1].className += " active";
  }

}

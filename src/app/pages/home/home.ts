import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductRevealCard } from '../../shared/components/product-reveal-card/product-reveal-card';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductRevealCard, TestimonialsComponent, CtaSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterMainSliderComponent } from './components/starter-home-context/inner-item/starter-main-slider/starter-main-slider.component';
import { StarterMainServicesComponent } from './components/starter-home-context/inner-item/starter-main-services/starter-main-services.component';
import { StarterPricingComponent } from './components/starter-pricing/starter-pricing.component';
import { StarterHomeContextComponent } from './components/starter-home-context/starter-home-context.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterFooterComponent,
    StarterHeaderComponent,
    StarterMainSliderComponent,
    StarterMainServicesComponent,
    StarterPricingComponent,
    StarterHomeContextComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }

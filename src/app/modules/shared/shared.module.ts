import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './components/chips/chips.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HoverDirective } from 'src/app/directives/hover-directive';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocalizationComponent } from './components/localization/localization.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    ChipsComponent,
    InputComponent,
    SelectComponent,
    HoverDirective,
    LocalizationComponent,
  ],
  exports: [
    ChipsComponent,
    InputComponent,
    SelectComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    HoverDirective,
    ReactiveFormsModule,
    GoogleMapsModule,
    LocalizationComponent,
    OverlayModule,
    A11yModule,
    LayoutModule,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    OverlayModule,
    A11yModule,
    LayoutModule,
  ],
})
export class SharedModule {}

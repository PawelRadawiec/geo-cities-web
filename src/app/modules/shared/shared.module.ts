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
import { AsideDirective } from 'src/app/directives/aside.directive';
import { HoverDirective } from 'src/app/directives/hover-directive';

@NgModule({
  declarations: [
    ChipsComponent,
    InputComponent,
    SelectComponent,
    HoverDirective,
    AsideDirective,
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
    AsideDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
  ],
})
export class SharedModule {}

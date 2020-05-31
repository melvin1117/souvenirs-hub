import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module imports
import { CoreMaterialModule } from './modules/core-material/core-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

// Component imports
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, CoreMaterialModule, FlexLayoutModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, FlexLayoutModule],
})
export class CoreModule {}

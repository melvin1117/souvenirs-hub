import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material module imports
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTabsModule],
  exports: [MatTabsModule],
})
export class TrashMaterialModule {}

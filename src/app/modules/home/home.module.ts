import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module imports
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeMaterialModule } from './modules/home-material/home-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

// Component imports
import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { CreateUpdatePostComponent } from './components/create-update-post/create-update-post.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PostComponent,
    CreateUpdatePostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HomeMaterialModule,
    HttpClientModule,
    AngularEditorModule,
  ],
})
export class HomeModule {}

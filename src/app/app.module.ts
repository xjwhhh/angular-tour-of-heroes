import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
//每个组件都必须在一个（且只有一个）Angular模块中声明。
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroFormComponent} from './hero-form.component';

import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { newHeroDetailComponent } from './new-hero-detail.component';
import { HeroListComponent } from './hero-list.component';
// import { HeroListContainerComponent } from './hero-list-container.component';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  //通常，declarations数组包含应用中属于该模块的组件、管道和指令的列表。 组件在被其它组件引用之前必须先在一个模块中声明过。
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroFormComponent,
    HeroListComponent,
    newHeroDetailComponent,
  ],
  // exports: [ // export for the DemoModule
  //   AppComponent,
  //   // newHeroDetailComponent,
  //   // HeroListComponent
  // ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftNavComponent } from './main-content/left-nav/left-nav.component';
import { RightNavComponent } from './main-content/right-nav/right-nav.component';
import { AuthModule } from 'src/auth/auth.module';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    LeftNavComponent,
    RightNavComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

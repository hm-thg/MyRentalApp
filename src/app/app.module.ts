import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RentalsComponent } from './home/rentals/rentals.component';
import { AddrentalComponent } from './home/addrental/addrental.component'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './home/index/index.component';
import { SinglepropertyComponent } from './home/rentals/singleproperty/singleproperty.component';
import { ErrorComponent } from './error/error.component';
import { EnquiriesComponent } from './home/enquiries/enquiries.component';
import { MypropertiesComponent } from './home/myproperties/myproperties.component';
import { UpdatepropertyComponent } from './home/myproperties/updateproperty/updateproperty.component';
import { DataComponent } from './data/data.component';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    RentalsComponent,
    AddrentalComponent,
    IndexComponent,
    SinglepropertyComponent,
    ErrorComponent,
    EnquiriesComponent,
    MypropertiesComponent,
    UpdatepropertyComponent,
    DataComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

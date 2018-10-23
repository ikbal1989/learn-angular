import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    PostDetailsComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'post/:id/:title', component: PostDetailsComponent },
      {path: 'post', component: PostComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [
    PostService,
    ProductsService,
    AuthService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../components/contact-component/contact.component'
import { FAQComponent } from '../components/faq-component/faq.component'

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FAQComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routedComponents = [ContactComponent] 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TablepositionComponent } from './pages/tableposition/tableposition.component';
import { GetNameComponent } from './pages/get-name/get-name.component';
import { GameComponent } from './pages/game/game.component'



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ranking', component: TablepositionComponent },
  { path: 'nombre', component: GetNameComponent },
  { path: 'juego', component: GameComponent },
  { path: '**', component: HomepageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

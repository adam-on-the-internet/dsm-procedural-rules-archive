import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {MarkdownViewerComponent} from "./components/markdown-viewer/markdown-viewer.component";
import {RulesVersionComponent} from './components/rules-version/rules-version.component';
import {RulesVersionsComponent} from './components/rules-versions/rules-versions.component';

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Current, component: DashboardComponent},
  {path: ROUTES_ENUM.Versions, component: RulesVersionsComponent},
  {path: ROUTES_ENUM.Version + "/:version", component: RulesVersionComponent},
  {path: ROUTES_ENUM.MarkdownViewer + "/:path", component: MarkdownViewerComponent},
  {path: "**", redirectTo: ROUTES_ENUM.Current},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: "legacy"})],
})
export class AppRoutingModule {
}

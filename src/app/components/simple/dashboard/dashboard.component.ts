import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/general/nav-helper.service";
import {SettingsService} from "../../../services/general/settings.service";
import {LinkService} from "../../../services/general/link.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  public dashboardMarkdownPath = `assets/dashboard.md`;

  constructor(
    private navHelper: NavHelperService,
    private settings: SettingsService,
    public linkService: LinkService,
  ) {
    this.settings.showNav = true;
  }

}

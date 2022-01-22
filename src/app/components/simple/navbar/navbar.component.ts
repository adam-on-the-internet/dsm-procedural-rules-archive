import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/general/nav-helper.service";
import {SettingsService} from "../../../services/general/settings.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  public asOfDate = this.settingsService.asOfDate;

  constructor(
    private settingsService: SettingsService,
    private navHelper: NavHelperService,
  ) {
  }

  public goToDashboard(): void {
    this.navHelper.goToCurrent();
  }
}

import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  constructor(
    private settingsService: SettingsService,
    private navHelper: NavHelperService,
  ) {
  }

  public goToDashboard(): void {
    this.navHelper.goToCurrent();
  }
}

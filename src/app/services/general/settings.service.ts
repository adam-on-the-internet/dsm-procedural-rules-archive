import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public showNav = true;
  public asOfDate = "April 24, 2023";
}

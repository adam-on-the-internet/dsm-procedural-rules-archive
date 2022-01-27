import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public showNav = true;
  public asOfDate = "January 26, 2022";
}

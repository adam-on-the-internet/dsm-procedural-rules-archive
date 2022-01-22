import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public showNav = true;
  public asOfDate = "January 22, 2022";
}

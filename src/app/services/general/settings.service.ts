import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public showNav = true;
  public currentVersionNumber = 17;
  public asOfDate = "October 18, 2021"; // TODO can we just get this from current version?
}

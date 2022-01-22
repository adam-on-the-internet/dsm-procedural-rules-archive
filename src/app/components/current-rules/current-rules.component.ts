import {Component} from '@angular/core';
import {SettingsService} from "../../services/general/settings.service";

@Component({
  selector: 'app-current-rules',
  templateUrl: './current-rules.component.html',
  styleUrls: ['./current-rules.component.css']
})
export class CurrentRulesComponent {
  public currentRulesMarkdownPath = `assets/current-rules.md`;
  public currentVersionNumber = this.settingsService.currentVersionNumber;

  constructor(
    private settingsService: SettingsService,
  ) {
  }
}

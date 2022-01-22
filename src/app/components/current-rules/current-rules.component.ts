import {Component} from '@angular/core';
import {SettingsService} from "../../services/general/settings.service";
import {RulesVersion} from "../../models/RulesVersion.model";
import {RULES_VERSIONS} from "../../constants/version.constants";

@Component({
  selector: 'app-current-rules',
  templateUrl: './current-rules.component.html',
  styleUrls: ['./current-rules.component.css']
})
export class CurrentRulesComponent {
  public currentRulesMarkdownPath = `assets/current-rules.md`;
  public currentVersionNumber = this.settingsService.currentVersionNumber;

  public get currentVersion(): RulesVersion {
    return RULES_VERSIONS.find((version) => {
      return version.versionNumber === this.currentVersionNumber;
    });
  }

  constructor(
    private settingsService: SettingsService,
  ) {
  }
}

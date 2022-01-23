import {Component} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";
import {VersionService} from "../../services/version.service";

@Component({
  selector: 'app-current-rules',
  templateUrl: './current-rules.component.html',
  styleUrls: ['./current-rules.component.css']
})
export class CurrentRulesComponent {
  public currentRulesMarkdownPath = `assets/current-rules.md`;

  public get currentVersion(): RulesVersion {
    return this.versionService.currentVersion;
  }

  constructor(
    private versionService: VersionService
  ) {
  }
}

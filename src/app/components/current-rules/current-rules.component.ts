import {Component} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";
import {RULES_VERSIONS} from "../../constants/version.constants";

@Component({
  selector: 'app-current-rules',
  templateUrl: './current-rules.component.html',
  styleUrls: ['./current-rules.component.css']
})
export class CurrentRulesComponent {
  public currentRulesMarkdownPath = `assets/current-rules.md`;

  public get currentVersion(): RulesVersion {
    return RULES_VERSIONS.find((version) => {
      return version.current;
    });
  }
}

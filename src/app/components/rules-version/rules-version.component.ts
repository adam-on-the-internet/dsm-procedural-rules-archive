import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {RulesVersion} from "../../models/RulesVersion.model";
import {RULES_VERSIONS} from "../../constants/version.constants";

@Component({
  selector: 'app-rules-version',
  templateUrl: './rules-version.component.html',
  styleUrls: ['./rules-version.component.css']
})
export class RulesVersionComponent implements OnInit {
  public versionNumber: number = null;

  public get version(): RulesVersion {
    return RULES_VERSIONS.find((version) => {
      return version.versionNumber === this.versionNumber;
    });
  }

  public get versionFound(): boolean {
    return this.version !== null && this.version !== undefined;
  }

  public get versionNumberReady(): boolean {
    return this.versionNumber !== null;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.setVersion();
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setVersion();
        }
      });
  }

  private setVersion() {
    const rawVersion = this.route.snapshot.paramMap.get("version");
    this.versionNumber = Number(rawVersion);
  }

}

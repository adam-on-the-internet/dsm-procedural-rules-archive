import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {RulesVersion} from "../../../models/RulesVersion.model";
import {VersionService} from "../../../services/version.service";

@Component({
  selector: "app-markdown-viewer",
  templateUrl: "./markdown-viewer.component.html",
  styleUrls: ["./markdown-viewer.component.css"]
})
export class MarkdownViewerComponent implements OnInit {
  public path: string = null;
  public disclaimerMarkdownPath = `assets/disclaimer.md`;

  public get ready(): boolean {
    return this.path !== null;
  }

  public get fullPath(): string {
    return `assets/${this.path}.md`;
  }

  public get isRulesArchive(): boolean {
    return this.path.startsWith("rules-archive/");
  }

  public get version(): RulesVersion {
    const date = this.path.split("/")[1];
    const datePieces = date.split("_");
    const day = Number(datePieces[2]);
    const month = Number(datePieces[1]);
    const year = Number(datePieces[0]);
    return this.versionService.getVersionByDayMonthYear(day, month, year);
  }

  public get versionNumber(): number {
    if (this.version) {
      return this.version.versionNumber;
    } else {
      return -1;
    }
  }

  constructor(
    private versionService: VersionService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.setPath();
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setPath();
        }
      });
  }

  private setPath() {
    const rawPath = this.route.snapshot.paramMap.get("path");
    this.path = rawPath.replace(/~/g, "/");
  }
}

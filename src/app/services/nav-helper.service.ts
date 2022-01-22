import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {
  constructor(
    private router: Router,
  ) {
  }

  public goToCurrent(): void {
    this.goToRoute(ROUTES_ENUM.Current);
  }

  public goToMarkdownViewer(filePath: string): void {
    this.goToRoutes([ROUTES_ENUM.MarkdownViewer, filePath]);
  }

  // ADMIN

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}

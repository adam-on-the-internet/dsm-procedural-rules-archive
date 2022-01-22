import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MarkdownModule, MarkedOptions, MarkedRenderer} from "ngx-markdown";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/simple/dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/simple/navbar/navbar.component";
import {FooterComponent} from "./components/simple/footer/footer.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/simple/login/login.component";
import {ProfileComponent} from "./components/simple/profile/profile.component";
import {AdminComponent} from "./components/simple/admin/admin.component";
import {HeaderComponent} from "./components/simple/header/header.component";
import {BodyComponent} from "./components/simple/body/body.component";
import {LoadingComponent} from "./components/simple/loading/loading.component";
import {CardComponent} from "./components/simple/card/card.component";
import {BodyAltComponent} from "./components/simple/body-alt/body-alt.component";
import {NumberInputComponent} from "./components/simple/form/number-input/number-input.component";
import {StringInputComponent} from "./components/simple/form/string-input/string-input.component";
import {SelectInputComponent} from "./components/simple/select-input/select-input.component";
import {OnOffSwitchComponent} from "./components/simple/form/on-off-switch/on-off-switch.component";
import {StringListInputComponent} from "./components/simple/form/string-list-input/string-list-input.component";
import {StringListDisplayComponent} from "./components/simple/string-list-display/string-list-display.component";
import {LinkListComponent} from "./components/simple/link-list/link-list.component";
import {LinkDisplayComponent} from "./components/simple/link-display/link-display.component";
import {QuillModule} from "ngx-quill";
import {ModalTriggerButtonComponent} from "./components/simple/modal-trigger-button/modal-trigger-button.component";
import {ModalBoxBasicComponent} from "./components/simple/modal-box-basic/modal-box-basic.component";
import {MarkdownViewerComponent} from "./components/simple/markdown-viewer/markdown-viewer.component";
import {RulesVersionComponent} from './components/rules-version/rules-version.component';
import {RulesVersionsComponent} from './components/rules-versions/rules-versions.component';
import {VersionTitleComponent} from './components/version-title/version-title.component';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return "<div class=\"card mb-2 bg-grey-alt\"><div class=\"card-body py-0 px-3\"><blockquote class=\"blockquote\"><p>" + text + "</p></blockquote></div></div>";
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    BodyAltComponent,
    NumberInputComponent,
    StringInputComponent,
    SelectInputComponent,
    OnOffSwitchComponent,
    StringListInputComponent,
    StringListDisplayComponent,
    LinkListComponent,
    LinkDisplayComponent,
    ModalTriggerButtonComponent,
    ModalBoxBasicComponent,
    MarkdownViewerComponent,
    RulesVersionComponent,
    RulesVersionsComponent,
    VersionTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

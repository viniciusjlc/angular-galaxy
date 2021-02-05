import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {UsuarioService} from './services/usuario/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {AccordionModule} from 'primeng/accordion';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {routing} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {HeaderComponent} from './components/header/header.component';
import {PanelModule} from 'primeng/panel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarModule} from 'primeng/sidebar';
import { UniversoComponent } from './components/universo/universo.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { ItemUniversoComponent } from './components/item-universo/item-universo.component';
import {CardModule} from 'primeng/card';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TabMenuModule} from 'primeng/tabmenu';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { MestreComponent } from './components/mestre/mestre.component';
import { CampanhaComponent } from './components/campanha/campanha.component';
import {ToastModule} from 'primeng/toast';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import {ConfirmationService} from 'primeng/api';
import {RouterOutletComponent} from './components/router-outlet/router-outlet.component';
import { ListaPersonagensComponent } from './components/lista-personagens/lista-personagens.component';
import {CadastrarPersonagemComponent} from './components/cadastrar-personagem/cadastrar-personagem.component';
import {StepsModule} from 'primeng/steps';
import {CarouselModule} from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {DividerModule} from 'primeng/divider';
import {ProgressBarModule} from 'primeng/progressbar';
import {BarraStatusComponent} from './components/barra-status/barra-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonagemDadosBaseComponent } from './components/personagem/personagem-dados-base/personagem-dados-base.component';
import { PersonagemStatusComponent } from './components/personagem/personagem-status/personagem-status.component';
import { PersonagemAtributosComponent } from './components/personagem/personagem-atributos/personagem-atributos.component';
import {ChipModule} from 'primeng/chip';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UniversoComponent,
    MensagemComponent,
    ItemUniversoComponent,
    PersonagemComponent,
    SobreComponent,
    MestreComponent,
    CampanhaComponent,
    DadosUsuarioComponent,
    RouterOutletComponent,
    RouterOutletComponent,
    ListaPersonagensComponent,
    CadastrarPersonagemComponent,
    BarraStatusComponent,
    BarraStatusComponent,
    PersonagemDadosBaseComponent,
    PersonagemStatusComponent,
    PersonagemAtributosComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputMaskModule,
    DropdownModule,
    InputTextareaModule,
    ConfirmDialogModule,
    MessagesModule,
    NgxMaskModule.forRoot(maskConfig),
    routing,
    PanelModule,
    MenuModule,
    ScrollPanelModule,
    SidebarModule,
    MegaMenuModule,
    CardModule,
    PanelMenuModule,
    SlideMenuModule,
    TabMenuModule,
    ToastModule,
    StepsModule,
    CarouselModule,
    RadioButtonModule,
    InputNumberModule,
    DividerModule,
    ProgressBarModule,
    NgbModule,
    ChipModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [UsuarioService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  postmap: any;
  userdata : any;
  postdata: any = {
    title: String,
    body: String
  };
  dataValue: any;
  post: any;
  datausers: any;
  constructor( private users : UsersService) { }

  ngOnInit(): void {

  }
   


  getUserdetails() {
    this.users.getUsers().subscribe((data: any) => {
      this.userdata = data;
      this.users.setUserObject(this.userdata);
      console.log('this.userdata >>>' + JSON.stringify(this.userdata));
    })
    
  }


  getuserdetailsfromSubject() {
    this.datausers = this.users.getUserObject();
    console.log(this.datausers);
  }


  getPostdetails(id: number) : void {
    this.users.getPosts().subscribe((data: any) =>{
      this.postdata = [{"id":3300,"user_id":3360,"title":"Dolorum statim tabella cultura in crebro vis tabula tredecim aut aurum aliquid.","body":"Sopor sapiente cubo. Fuga incidunt viduata. Totus patior curriculum. Adsum sed curis. Cultellus quidem depromo. Vulgivagus desipio voluptates. Casus ipsa certe. Aiunt dolorem taedium. Succurro vita arcesso. Libero curvo vinculum. Expedita vinitor accedo. Ultra cura pecus. Dapifer atavus apparatus. Celebrer catena deprimo. Conitor porro conforto. Vehemens error denego. Acies adsidue compono. Cresco nihil eos."},{"id":1708,"user_id":3349,"title":"Eveniet ante amplexus aveho quam cohors suppellex claustrum accommodo autem iste clibanus quia earum.","body":"Vilicus compello in. Atrocitas tremo bene. Amo aiunt impedit. Cum tum sortitus. Velum praesentium et. Animus suppono adflicto. Creator audentia despirmatio. Cinis sordeo umerus. Depulso alveus vigor. Convoco qui aestas. Conitor tracto odio. Cubicularis architecto molestiae. Error valetudo cursim. Vereor carus adimpleo. Natus pax validus. Tabernus nam bellum."},{"id":1707,"user_id":3346,"title":"Traho textilis triduana vigilo stips solium vere fugiat conspergo strenuus aedificium voco caritas stillicidium aptus appono.","body":"Cognatus ullam canto. Summa textus vel. Quidem acceptus consequatur. Sub conor thymbra. Conor casso solium. Aequitas validus pecus. Cedo abutor accusator. Vae patior volutabrum. Cura nostrum avoco. Curo cras cura. Ex degenero ater. Nostrum collum coniecto. Cohaero bellum modi. Concido summopere rem. Paulatim amor acidus. Fugiat demoror vomito."},{"id":1706,"user_id":3345,"title":"Reiciendis creta defungo chirographum tristis neque decet tener sunt.","body":"Cado aduro quibusdam. Ancilla curiositas cultura. Est tribuo acies. Statim aut spero. Surculus desolo stillicidium. Sequi alveus curia. Virgo paens sunt. Ulciscor viriliter dignissimos. Molestiae damno nemo. Conservo careo fugit. Vesco cohors calamitas. Decens eum cum. Solvo deporto delibero. Tredecim pel tepesco. Absconditus certo verbera. Autem bibo teres. Vel volup textus."},{"id":1705,"user_id":3345,"title":"Magnam subvenio virga et defero conicio speciosus laudantium taceo recusandae cursus cruciamentum tremo cenaculum celo nemo aequus demo xiphias.","body":"Arbor voluptates quidem. Socius sequi cedo. Inventore defessus denego. Qui corrumpo est. Demulceo confero iure. Cauda comes degenero. Sol decens tametsi. Aut cilicium calcar. Via succedo similique. Vel strues bardus. Defleo inflammatio unus. Iure vir coepi. Comitatus astrum surculus. Cattus altus tergiversatio. Textus armo curo."},{"id":1704,"user_id":3342,"title":"Cuius barba utrum uredo molestiae aegrus accommodo carus tollo nihil.","body":"Tumultus explicabo vomica. Sponte similique cupressus. Atqui torqueo volutabrum. Cursus vomer illo. Verbum tepidus coepi. Commodi cometes civis. Corrupti demitto cornu. Suscipio concido barba. Strenuus conitor et. Numquam sollicito ratione. Solitudo pecto acquiro. Texo stillicidium qui. Tunc spiculum compono. Vesco carpo quis. Tergo aedificium thalassinus. Perspiciatis terra et. Alveus congregatio colo. Deleo conitor subnecto."},{"id":1703,"user_id":3336,"title":"Adicio autus deleniti deludo capillus tolero utrimque ipsam aspicio aro vulariter conspergo magnam spiritus ventito.","body":"Claustrum subiungo subnecto. Defendo atqui cultellus. Cras animadverto stillicidium. Cinis beatus tyrannus. Debitis reiciendis brevis. Collum cattus chirographum. Labore sodalitas cilicium. Altus attonbitus possimus. Ventito auris ager. Calculus suggero bellum. Adsum catena tres. Nisi deorsum textus. Doloribus officiis admoneo. Occaecati trepide avoco. Adicio neque caecus. Aequus tondeo dolor. Crapula distinctio vulnero."},{"id":1702,"user_id":3336,"title":"Aut deprimo vel tabula agnitio argentum spiritus cum voco talus abscido amitto amissio suadeo apud uter.","body":"Rerum itaque balbus. Texo animi vomica. Pecco voluptatum pauper. Vitiosus apto varietas. Arguo deludo voluptatem. Vel sto aduro. Veritas altus comes. Decens nihil textus. Usque eius pel. Quis vulnus nihil. In aurum terminatio. Verbum beatus nostrum. Tollo creptio fuga. Tondeo quas thymum. Cena suffragium sunt. Eveniet caveo aequitas. Asperiores arca ultio. Carpo bellum utroque."},{"id":1701,"user_id":3331,"title":"Curto reiciendis depromo aliquam dignissimos esse carpo vilicus.","body":"Officiis tantillus avaritia. Antiquus cariosus demum. Animi damnatio trucido. Abscido aptus inventore. Cognatus ars admitto. Communis celo sum. Harum bardus utilis. Audacia deputo hic. Repellendus avoco crepusculum. Vultuosus consequatur eius. Decimus velit arcus. Patruus cimentarius et. Vero tabgo alias. Aspicio tabula avarus. Tersus colloco nisi. Officia causa exercitationem. Qui toties avoco. Est appono crastinus. Apto auctus concedo."},{"id":1700,"user_id":3330,"title":"Cena arceo cumque vito comes quis depereo commodi suscipit adversus textor cervus delibero ventus cariosus avoco vereor arbustum.","body":"Reiciendis voco asporto. Toties traho tenus. Aggero facilis trado. Vociferor benevolentia suscipit. Cetera cognatus cernuus. Deporto vitiosus circumvenio. Perferendis combibo depono. Bibo depereo omnis. Audacia valde minus. Atqui tepesco decerno. Aer creo validus. Possimus terminatio sophismata. Auctus ipsa sed. Minus confido cui. Ventito torqueo vigilo. Tondeo avaritia defleo. Contego triumphus pariatur. Explicabo verbera vociferor. Sollers patruus totidem."}];
      console.log('this.postdata >>>' + JSON.stringify(this.postdata));
      this.post = this.postdata.filter((data:any)=> {
        if(data.id == id) {
          this.dataValue = true;
          return data;
        }
      })
      if(this.post == null) {
      this.post.forEach((element:any) => {
        element.color = 'black';
      });
      this.post[0].color ='black';
    }
      console.log('this.posts >>>' + JSON.stringify(this.post));
    })
  }


}

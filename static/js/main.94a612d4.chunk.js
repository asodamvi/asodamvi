(this.webpackJsonpasodamvi=this.webpackJsonpasodamvi||[]).push([[0],{38:function(e,a,t){},39:function(e,a,t){},53:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var c=t(2),s=t.n(c),n=t(40),i=t.n(n),r=t(6),o=t(7),d=t(10),l=t(8),j=t.n(l),b=t(12),u=t(14),m=t(41),h=(t(49),t(70),m.a.initializeApp({apiKey:"AIzaSyBDVLVK0KVwl03YkYxFXpSYh4MdRTqTvpM",authDomain:"asodamvi-383c0.firebaseapp.com",databaseURL:"https://asodamvi-383c0-default-rtdb.firebaseio.com",projectId:"asodamvi-383c0",storageBucket:"asodamvi-383c0.appspot.com",messagingSenderId:"318086811336",appId:"1:318086811336:web:700eba6fc6e37cc6d7dffd",measurementId:"G-GL80ZBL726"})),O=h.auth(),p=h.firestore(),x=t(0),f=s.a.createContext(),v=function(){return Object(c.useContext)(f)},g=function(e){var a=e.children,t=Object(c.useState)(),s=Object(d.a)(t,2),n=s[0],i=s[1];Object(c.useEffect)((function(){return O.onAuthStateChanged(function(){var e=Object(u.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return e.next=3,p.collection("asociados").where("usuario","==",a.uid).limit(1).get().then((function(e){e.size&&(a=Object(b.a)(Object(b.a)(Object(b.a)({},a),e.docs[0].data()),{},{doc:e.docs[0].id}))}));case 3:i(a);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[]);var r={currentUser:n,registrarse:function(e,a){return O.createUserWithEmailAndPassword(e,a)},validateDoc:function(e){return p.collection("asociados").where("documento","==",e).limit(1).get()},updateUser:function(e,a){return p.collection("asociados").doc(a).update({usuario:e})},ingresar:function(e,a){return O.signInWithEmailAndPassword(e,a)},logout:function(){return O.signOut()},restorePassword:function(e){return O.sendPasswordResetEmail(e)},validateRole:function(){return"asodamvipopayan@gmail.com"===n.email?"admin":"asociado"},userData:function(){return p.collection("asociados").where("usuario","==",n.uid).limit(1).get()}};return Object(x.jsx)(f.Provider,{value:r,children:a})},_=t.p+"static/media/logo_asodamvi.d3af311b.png",N=(t(53),function(){var e=Object(c.useState)(""),a=Object(d.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)({position:"relative"}),i=Object(d.a)(n,2),o=i[0],l=i[1],j=v().currentUser;Object(c.useEffect)((function(){window.addEventListener("scroll",b)}),[]);var b=function(){var e=window.scrollY;window.screen.width<768?l({position:e>80?"fixed":"relative"}):l({fixed_menu:{position:"relative"}})};console.log(j);var u=function(){t&&s("")};return Object(x.jsx)("header",{className:"header",style:o,children:Object(x.jsxs)("div",{className:" container header__container",children:[Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("img",{className:"header__container_img",src:_,alt:"Asodamvi Popay\xe1n"})}),Object(x.jsxs)("div",{className:"header__container_menu",children:[Object(x.jsx)("nav",{className:t,children:Object(x.jsxs)("ul",{className:"nav__menu",children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",onClick:u,className:"nav__menu_link",children:"Inicio"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/acerca-de",onClick:u,className:"nav__menu_link",children:"Acerca de"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/galeria",onClick:u,className:"nav__menu_link",children:"Galer\xeda"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/documentos",onClick:u,className:"nav__menu_link",children:"Documentos"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#contacto",className:"nav__menu_link",onClick:u,children:"Cont\xe1ctanos"})}),j?Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/dashboard",onClick:u,className:"nav__menu_btn",children:"Mi perfil"})}):Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/ingresar",onClick:u,className:"nav__menu_btn",children:"Ingresar"})})]})}),Object(x.jsx)("button",{type:"button",className:"nav_btn",onClick:function(){s("active"===t?"":"active")},children:Object(x.jsx)("i",{className:"fas fa-align-left"})})]})]})})}),y=(t(58),function(){return Object(x.jsx)("section",{className:"section__contacto",id:"contacto",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h3",{className:"title",children:"Contacto"}),Object(x.jsxs)("div",{className:"section__contacto_container",children:[Object(x.jsx)("div",{className:"contacto__informacion",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{className:"fas fa-map-marked-alt"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{className:"contacto__item_title",children:" Direcci\xf3n"}),Object(x.jsx)("p",{children:"Carrera 11 No. 3N-30 Local 101 Barrio Modelo"}),Object(x.jsx)("p",{children:"Popay\xe1n, Cauca"})]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{className:"fas fa-phone"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{className:"contacto__item_title",children:" T\xe9lefonos"}),Object(x.jsx)("p",{children:"312 529 8438"}),Object(x.jsx)("p",{children:"304 630 9822"})]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{className:"far fa-envelope"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{className:"contacto__item_title",children:" E-mail"}),Object(x.jsx)("p",{children:"asodamvipopayan@gmail.com"})]})]})]})}),Object(x.jsx)("div",{className:"contacto__mapa",children:Object(x.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.0879948365646!2d-76.60944860373439!3d2.448408058677509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3003125ad35f0b%3A0x7fd4fad5f91e44ba!2sCra.%2011%20Nte.%20%233-30%2C%20Popay%C3%A1n%2C%20Cauca!5e0!3m2!1sen!2sco!4v1574893709741!5m2!1sen!2sco",width:"100%",height:"100%",title:"Mapa de Popay\xe1n, ASODAMVI Carrera 11 3N-30 Local 101 Barrio Modelo",style:{border:0}})})]})]})})}),w=(t(59),function(){window.scrollTo(0,0)}),k=function(){return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsxs)("div",{className:"container footer__container",children:[Object(x.jsxs)("div",{className:"footer__item",children:[Object(x.jsx)("h4",{className:"footer__item_title",children:"Mapa del Sitio"}),Object(x.jsxs)("ul",{className:"footer__item_nav",children:[Object(x.jsx)("li",{children:Object(x.jsxs)(r.b,{to:"/",onClick:w,children:[Object(x.jsx)("i",{className:"fas fa-angle-right"})," Inicio"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(r.b,{to:"/acerca-de",onClick:w,children:[Object(x.jsx)("i",{className:"fas fa-angle-right"})," Acerca de"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(r.b,{to:"/galeria",onClick:w,children:[Object(x.jsx)("i",{className:"fas fa-angle-right"})," Galer\xeda"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(r.b,{to:"/documentos",onClick:w,children:[Object(x.jsx)("i",{className:"fas fa-angle-right"})," Documentos"]})})]})]}),Object(x.jsxs)("div",{className:"footer__item",children:[Object(x.jsx)("h4",{className:"footer__item_title",children:"Horarios de Atenci\xf3n"}),Object(x.jsxs)("p",{children:["Lunes a Viernes ",Object(x.jsx)("br",{}),"8am - 12m | 2pm - 6pm"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["S\xe1bados ",Object(x.jsx)("br",{}),"8am - 12m"]})]}),Object(x.jsxs)("div",{className:"footer__item",children:[Object(x.jsx)("h4",{className:"footer__item_title",children:"Redes Sociales"}),Object(x.jsxs)("div",{className:"footer__item_redes",children:[Object(x.jsx)("a",{href:"https://api.whatsapp.com/send?phone=573125298438",target:"_blank",rel:"noopener noreferrer",className:"whatsapp",children:Object(x.jsx)("i",{className:"fab fa-whatsapp"})}),Object(x.jsx)("a",{href:"https://www.facebook.com/Asociaci%C3%B3n-Asodamvi-857217857947871/",target:"_blank",rel:"noopener noreferrer",className:"facebook",children:Object(x.jsx)("i",{className:"fab fa-facebook-f"})}),Object(x.jsx)("a",{href:"https://m.me/857217857947871",target:"_blank",rel:"noopener noreferrer",className:"messenger",children:Object(x.jsx)("i",{className:"fab fa-facebook-messenger"})})]})]}),Object(x.jsx)("div",{className:"footer__item",children:Object(x.jsxs)("div",{className:"footer__item_derechos",children:[Object(x.jsxs)("div",{className:"footer__item_logo",children:[Object(x.jsx)("h1",{children:"ASODAMVI"}),Object(x.jsx)("small",{children:"Nit. 900207664-5"})]}),Object(x.jsx)("div",{children:"\xa9 Todos los derechos Reservados"})]})}),Object(x.jsx)("button",{className:"btn__swipe_up",onClick:w,children:Object(x.jsx)("i",{className:"fas fa-sort-up"})})]})})},C=(t(38),function(e){var a=e.children;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(N,{}),a,Object(x.jsx)(y,{}),Object(x.jsx)(k,{})]})}),A=t(42),I=t.n(A),M=(t(60),t(61),function(){return Object(x.jsx)("div",{className:"carousel",children:Object(x.jsxs)("div",{className:"container carousel__container",children:[Object(x.jsx)("div",{className:"carousel__texto",children:Object(x.jsx)(I.a,{autoplay:1e4,previousButton:"",nextButton:"",className:"center",children:["Conoce nuestro trabajo por las viviendas de m\xe1s de 400 familias caucanas","Desde el a\xf1o 2008 trabajamos con cientos de familias por una vivienda digna","Una vivienda donde se construyan sue\xf1os para todos"].map((function(e,a){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"center",children:Object(x.jsx)("h2",{children:e})})},a)}))})}),Object(x.jsx)("div",{className:"carousel__image"})]})})}),S=(t(62),function(){return Object(x.jsx)("section",{className:"section__information",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"section__information_container",children:[Object(x.jsx)("div",{className:"information__title",children:Object(x.jsxs)("h2",{className:"title_left",children:["Sobre ",Object(x.jsx)("br",{}),"Nosotros"]})}),Object(x.jsx)("div",{className:"information__text",children:'La asociaci\xf3n de damnificados proyectos de vivienda "ASODAMVI" nace el 22 de febrero 2008 como una nueva esperanza para m\xe1s de 400 familias caucanas que buscan ver el sue\xf1o de tener su propia vivienda. Un sue\xf1o que se encuentra en planeaci\xf3n por parte de la junta directiva de ASODAMVI, la cual busca las mejores alternativas para todos sus asociados.'})]}),Object(x.jsx)("h3",{className:"title",children:"Objetivos"}),Object(x.jsxs)("div",{className:"section__objetivos_container",children:[Object(x.jsx)("div",{className:"objetivos__item",children:"Lograr que las autoridades investigaran y encontraran los responsables de la estafa que sufrieron cientos de familias caucanas."}),Object(x.jsx)("div",{className:"objetivos__item",children:"Comprar un predio para la construcci\xf3n de un proyecto de vivienda para las personas que hacen parte de la asociaci\xf3n."}),Object(x.jsx)("div",{className:"objetivos__item",children:"Gestionar y construir su propio proyecto de vivienda."})]})]})})}),L=t(29),D=t(30),P=t(25),z=t(32),q=t(31),F=function(e){Object(z.a)(t,e);var a=Object(q.a)(t);function t(e){var c;return Object(L.a)(this,t),(c=a.call(this,e)).showMenu=c.showMenu.bind(Object(P.a)(c)),c}return Object(D.a)(t,[{key:"showMenu",value:function(e){e.preventDefault(),this.props.showMenu(this.props.data.image)}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"galery__item",onClick:this.showMenu,children:Object(x.jsx)("img",{src:this.props.data.image,alt:"Asodamvi popay\xe1n fotos"})})}}]),t}(s.a.Component),E=function(e){return Object(x.jsx)("div",{className:"galery__item_show",onClick:e.showMenu,children:Object(x.jsx)("img",{src:e.image_url,alt:"Asodamvi Popay\xe1n Fotos"})})},V=(t(63),[{id:1,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i9c09d7c49fa86825/version/1447768667/image.jpg"},{id:2,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/id071b876dffc1606/version/1447768667/image.jpg"},{id:3,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i4670aa5b2e840dfe/version/1447768667/image.jpg"},{id:4,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i3baa5313cc738509/version/1447768667/image.jpg"},{id:5,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i7d3c0bc7586b9964/version/1447768667/image.jpg"},{id:6,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i4ce4cb8b02eadea9/version/1447768667/image.jpg"},{id:7,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/ia8fd4e3e9823c288/version/1447768667/image.jpg"},{id:8,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i24f20ad55ab920b8/version/1447768667/image.jpg"},{id:9,image:"https://image.jimcdn.com/app/cms/image/transf/none/path/s512bacf5cd2e8629/image/i88eb5fc4fa37ef88/version/1447768667/image.jpg"}]),B=function(e){Object(z.a)(t,e);var a=Object(q.a)(t);function t(e){var c;return Object(L.a)(this,t),(c=a.call(this,e)).state={open:!1,image_url:""},c._showMenu=c._showMenu.bind(Object(P.a)(c)),c}return Object(D.a)(t,[{key:"_showMenu",value:function(e){this.state.open?this.setState({open:!1,image_url:""}):this.setState({open:!0,image_url:e})}},{key:"render",value:function(){var e=this,a=this.props.dataItems?this.props.dataItems:V.length;return Object(x.jsxs)("section",{className:"section__galery",children:[Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h3",{className:"title",children:"Galeria"}),Object(x.jsx)("div",{className:"section__galery_container",children:V.slice(0,a).map((function(a){return Object(x.jsx)(F,{data:a,showMenu:e._showMenu},a.id)}))})]}),this.state.open&&Object(x.jsx)(E,{image_url:this.state.image_url,showMenu:this._showMenu})]})}}]),t}(s.a.Component),R=function(){return Object(x.jsxs)(C,{children:[Object(x.jsx)(M,{}),Object(x.jsx)(S,{}),Object(x.jsx)(B,{dataItems:"8"})]})},U=function(){return Object(x.jsxs)("div",{className:"section__information_container",children:[Object(x.jsx)("div",{className:"information__title",children:Object(x.jsxs)("h2",{className:"title_left",children:["Nuestra ",Object(x.jsx)("br",{}),"Historia"]})}),Object(x.jsxs)("div",{className:"information__text",children:[Object(x.jsx)("p",{children:"En la ciudad de Popay\xe1n, personas inescrupulosas aprovecharon el deseo de cientos de personas por tener una vivienda propia, recaudando miles de millones de pesos para la construcci\xf3n de varios proyectos de vivienda, proyectos que terminaron siendo la mayor estafa que en Colombia se hab\xeda consumado en el sector de vivienda, pues la cifra super\xf3 los diez mil millones de pesos."}),Object(x.jsx)("p",{children:"Pese a que muchas familias perdieron todos sus ahorros y con ellos sus esperanzas, un peque\xf1o grupo de personas liderado por Alirio Vidales Z\xfa\xf1iga, se dio a la ardua tarea de lograr que las autoridades colombianas tomaran cartas en el asunto, dejando al descubierto ante el mismo Presidente de la Rep\xfablica, a los autores de tales delitos, muchos de los cuales hoy se encuentran tras las rejas."}),Object(x.jsx)("p",{children:"Pero, para est\xe9 grupo no fue suficiente ver a los culpables tras las rejas, el d\xeda 22 de febrero de 2008, ante la incredulidad de muchos, crearon un Comit\xe9 Operativo, que tras varias reuniones tuvieron la valent\xeda de asociarse y fundar ASODAMVI, una Asociaci\xf3n sin animo de lucro, que de manera decidida y sin ayuda gubernamental lucha para construir el sue\xf1o de muchas familias de tener vivineda propia. En ASODAMVI So\xf1amos con ver a nuestros hijos y nietos crecer en un techo propio, en una vivienda digna que permita el desarrollo integral para todos, sue\xf1o en el que se trabaja d\xeda a d\xeda por parte de la nueva junta directiva, encabezada por el se\xf1or Hugo Alcides Fern\xe1ndez Mej\xeda."})]})]})},G=function(){return Object(x.jsxs)("div",{className:"section__asociacion",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"title",children:"Misi\xf3n"}),Object(x.jsx)("p",{children:"Fomentar el desarrollo de nuestros asociados a de la gesti\xf3n de proyectos comunitarios, sociales y pol\xedticos que permitan vivir dignamente."})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"title",children:"Visi\xf3n"}),Object(x.jsx)("p",{children:"Ser una asociaci\xf3n que contribuya a la gesti\xf3n social de las comunidades asociadas en asuntos relacionadas con vivienda, apoyando la planeaci\xf3n y construcci\xf3n de proyectos; con una gesti\xf3n que se anticipe y adapte al cambio, genere oportunidades y fomente la opini\xf3n constructiva."})]})]})},T=function(){return Object(x.jsxs)("div",{className:"section__directivos",children:[Object(x.jsx)("h3",{className:"title",children:"Directivos"}),Object(x.jsx)("div",{className:"section__directivos_table",children:Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Nombre"}),Object(x.jsx)("th",{children:"Cargo"})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Hugo Alcides Fern\xe1ndez Mej\xeda"}),Object(x.jsx)("td",{children:"Presidente y R.L"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Nancy Giron Bedoya"}),Object(x.jsx)("td",{children:"Tesorera"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Elcy Miryan Erazo Molina"}),Object(x.jsx)("td",{children:"Secretaria"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Reinaldo Mu\xf1oz"}),Object(x.jsx)("td",{children:"Suplente"})]})]})]})})]})},Y=t.p+"static/media/predio.1cfb3c41.png",H=function(){return Object(x.jsxs)("div",{className:"section_predio",children:[Object(x.jsx)("h3",{className:"title",children:"Predio"}),Object(x.jsxs)("div",{className:"section__predio_container",children:[Object(x.jsx)("div",{className:"section__predio_img",children:Object(x.jsx)("img",{src:Y,alt:"Predio Asodamvi"})}),Object(x.jsxs)("div",{className:"section_predio_texto",children:[Object(x.jsx)("p",{children:"A mediados del a\xf1o 2012 los asociados de ASODAMVI toman la valiente decisi\xf3n de volver a creer y empiezan un ahorro individual en el Banco Agrario con el fin de realizar una gran bolsa que sirviera para la compra de un terreno."}),Object(x.jsx)("p",{children:"Luego de recorrer la ciudad de Popay\xe1n y analizar varias opciones el 25 de enero de 2013 se firma la escritura No. 110 en la Notar\xeda Segunda del Circulo de Popay\xe1n, donde se concluye el segundo objetivo de ASODAMVI."}),Object(x.jsx)("p",{children:"El lote se encuentra ubicado en la variante norte de la ciudad, en un sector de gran valorizaci\xf3n y donde se construir\xe1 el proyecto de vivienda de los asociados de ASODAMVI."})]})]}),Object(x.jsx)("div",{className:"contacto__mapa",children:Object(x.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.0398696922875!2d-76.57410210764338!3d2.4937460620360072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjknMzguMiJOIDc2wrAzNCcyMS45Ilc!5e0!3m2!1sen!2sco!4v1575139578054!5m2!1sen!2sco",width:"100%",height:"100%",title:"Mapa de Popay\xe1n, ASODAMVI Carrera 11 3N-30 Local 101 Barrio Modelo",style:{border:0}})})]})},K=(t(64),function(){return Object(x.jsx)(C,{children:Object(x.jsx)("section",{className:"section__nosotros",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(U,{}),Object(x.jsx)(G,{}),Object(x.jsx)(T,{}),Object(x.jsx)(H,{})]})})})}),W=function(){return Object(x.jsx)(C,{children:Object(x.jsx)(B,{})})},J=function(e){return Object(x.jsxs)("div",{className:"documento__item",children:[Object(x.jsx)("div",{className:"documento__item_img"}),Object(x.jsx)("div",{className:"documento__item_name",children:Object(x.jsx)("h5",{children:e.name})}),Object(x.jsx)("div",{className:"documento__item_btn",children:Object(x.jsx)("a",{href:e.documento_url,target:"_blank",rel:"noopener noreferrer",children:Object(x.jsx)("i",{className:"fas fa-cloud-download-alt"})})})]})},Z=(t(65),t.p+"static/media/Informe.9f90b06a.pdf"),X=[{id:1,documento:Z,name:'Solicitud ante la DIAN como contribuyente del r\xe9gimen especial "ESAL"'},{id:2,documento:Z,name:"Informe de actividades"}],Q=function(){return Object(x.jsx)(C,{children:Object(x.jsx)("section",{className:"section__documentos",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h3",{className:"title",children:"Documentos"}),X.map((function(e){return Object(x.jsx)(J,{documento_url:e.documento,name:e.name},e.id)}))]})})})},$=t(82),ee=(t(66),function(){var e=Object(c.useState)(""),a=Object(d.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(""),i=Object(d.a)(n,2),l=i[0],b=i[1],m=v().ingresar,h=Object(o.g)(),O=function(){var e=Object(u.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m(t,l).then((function(){h.push("/dashboard")})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"container__login",children:[Object(x.jsx)("div",{className:"login__image"}),Object(x.jsx)("div",{className:"form__container",children:Object(x.jsxs)("form",{onSubmit:O,className:"login__form validate-form",children:[Object(x.jsx)("h1",{className:"title",children:"Ingresar"}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input","data-validate":"Name is required",children:[Object(x.jsx)("span",{className:"label-input100",children:"Correo electr\xf3nico"}),Object(x.jsx)("input",{type:"email",id:"email",onChange:function(e){return s(e.target.value)},className:"input100"}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[Object(x.jsx)("span",{className:"label-input100",children:"Contrase\xf1a"}),Object(x.jsx)("input",{type:"password",id:"password",onChange:function(e){return b(e.target.value)},className:"input100"}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"container-login100-form-btn",children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"submit",value:"Ingresar",className:"form__login_btn"})}),Object(x.jsxs)(r.c,{to:"/registrarse",className:"dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30",children:["Registarse",Object(x.jsx)($.a,{})]})]})]})})]})})}),ae=function(e){var a=e.asociado,t=a.nombres,s=a.apellidos,n=a.documento,i=a.doc,r=Object(c.useState)(""),l=Object(d.a)(r,2),b=l[0],m=l[1],h=Object(c.useState)(""),O=Object(d.a)(h,2),p=O[0],f=O[1],g=v(),_=g.registrarse,N=g.updateUser,y=Object(o.g)(),w=function(){var e=Object(u.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{_(b,p).then((function(e){N(e.user.uid,i).then((function(){y.push("/dashboard")}))}))}catch(t){console.log("Error:",t)}case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:"Bienvenido:"}),Object(x.jsxs)("span",{children:[t," ",s]}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:["C.C ",n]}),Object(x.jsx)("p",{children:"Por favor ingrese los siguiente datos para completar su registro:"}),Object(x.jsxs)("form",{onSubmit:w,children:[Object(x.jsx)("label",{htmlFor:"email",children:"Correo electr\xf3nico:"}),Object(x.jsx)("input",{type:"email",id:"email",onChange:function(e){return m(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a:"}),Object(x.jsx)("input",{type:"password",id:"password",onChange:function(e){return f(e.target.value)}}),Object(x.jsx)("button",{type:"submit",children:"Ingresar"})]})]})},te=function(e){var a=v().validateDoc,t=Object(c.useState)(null),s=Object(d.a)(t,2),n=s[0],i=s[1],r=Object(c.useState)(!0),o=Object(d.a)(r,2),l=o[0],m=o[1];Object(c.useEffect)(Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e.documento).then((function(e){e.size&&i(Object(b.a)(Object(b.a)({},e.docs[0].data()),{},{doc:e.docs[0].id})),m(!1)}));case 2:return t.abrupt("return",(function(){}));case 3:case"end":return t.stop()}}),t)}))),[]);return Object(x.jsxs)("div",{children:[l&&Object(x.jsx)("h1",{children:"Loading..."}),!n&&!l&&Object(x.jsx)("h1",{children:"No eres asociado no puedes registrarte en el sistema"}),n&&!n.estado&&!l&&Object(x.jsx)("h1",{children:"Eres un asociado inactivo contactanos para poder ayudarte."}),n&&null!==n.usuario&&n.estado&&!l&&Object(x.jsx)("h1",{children:"Ya tienes una cuenta registrada..."}),n&&null===n.usuario&&n.estado&&Object(x.jsx)(ae,{asociado:n})]})},ce=function(){var e=Object(c.useState)(null),a=Object(d.a)(e,2),t=a[0],s=a[1],n=function(){var e=Object(u.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),(t=a.target.elements.identificacion).value&&s(parseInt(t.value));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Registrarse"}),!t&&Object(x.jsxs)("form",{onSubmit:n,children:[Object(x.jsx)("label",{htmlFor:"identificacion",children:"Cedula de Ciudadania:"}),Object(x.jsx)("input",{type:"number",id:"identificacion",min:"1000000",max:"9999999999",placeholder:"N\xfamero de Identificaci\xf3n"}),Object(x.jsx)("button",{type:"submit",children:"Continuar"})]}),t&&Object(x.jsx)(te,{documento:t,setDocumento:s})]})},se=t(26),ne=function(e){var a=e.component,t=Object(se.a)(e,["component"]),c=v(),s=c.currentUser,n=(0,c.validateRole)();return Object(x.jsx)(o.b,Object(b.a)(Object(b.a)({},t),{},{render:function(e){return s&&"admin"===n?Object(x.jsx)(a,{}):Object(x.jsx)(o.a,{to:"/dashboard"})}}))},ie=t(83),re=t(84),oe=t(85),de=t(86),le=t(87),je=t(88),be=t(89),ue=t(90);t(67);function me(){var e=(0,v().validateRole)();return Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsx)("div",{className:"sidebarWrapper",children:Object(x.jsxs)("div",{className:"sidebarMenu",children:[Object(x.jsx)("h3",{className:"sidebarTitle",children:"Menu"}),Object(x.jsxs)("ul",{className:"sidebarList",children:[Object(x.jsx)(r.c,{exact:!0,to:"/dashboard",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(ie.a,{className:"sidebartListIcon"}),"Inicio"]})}),Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/perfil",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(re.a,{className:"sidebartListIcon"}),"Perfil"]})}),"admin"===e&&Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/asociados",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(oe.a,{className:"sidebartListIcon"}),"Asociados"]})}),Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/encuestas",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(de.a,{className:"sidebartListIcon"}),"Encuestas"]})}),"admin"===e&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/galeria",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(le.a,{className:"sidebartListIcon"}),"Galeria"]})}),Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/noticias",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(je.a,{className:"sidebartListIcon"}),"Noticias"]})})]}),Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/buzon-sugerencias",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(be.a,{className:"sidebartListIcon"}),"Buz\xf3n de Sugerencias"]})}),Object(x.jsx)(r.c,{exact:!0,to:"/dashboard/anuncios",className:"link",children:Object(x.jsxs)("li",{className:"sidebarListItem ",children:[Object(x.jsx)(ue.a,{className:"sidebartListIcon"}),"Anuncios"]})})]})]})})})}t(39);var he=t(91),Oe=function(){var e=v().logout,a=Object(o.g)(),t=function(){var t=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().then((function(){a.push("/ingresar")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("button",{type:"button",onClick:t,className:"topbarBtn",children:["Salir",Object(x.jsx)(he.a,{})]})})};function pe(){var e=v().currentUser;return Object(x.jsx)("div",{className:"topbar",children:Object(x.jsxs)("div",{className:"topbarWrapper",children:[Object(x.jsxs)(r.b,{to:"/dashboard",className:"topLogo",children:[Object(x.jsx)("img",{className:"topLogoImg",src:_,alt:"Asodamvi Popay\xe1n"}),Object(x.jsx)("span",{className:"topLogoTxt",children:"Asodamvi"})]}),Object(x.jsxs)("div",{className:"topInfo",children:[Object(x.jsx)(re.a,{}),Object(x.jsxs)("p",{children:[e.usuario&&"".concat(e.nombres," ").concat(e.apellidos),!e.usuario&&"Administrador"]}),Object(x.jsx)(Oe,{})]})]})})}var xe=function(){return Object(x.jsx)("h1",{children:"Inicio"})},fe=function(e){return Object(x.jsx)("h1",{children:"Perfil"})},ve=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{children:"Asociados"})})},ge=function(){return Object(x.jsx)("h1",{children:"Encuestas"})},_e=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{children:"Galer\xeda de Fotos"})})},Ne=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{children:"Noticias"})})},ye=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{children:"Buzon"})})},we=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{children:"Anuncios"})})},ke=(t(68),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(pe,{}),Object(x.jsxs)("div",{className:"container__app",children:[Object(x.jsx)(me,{}),Object(x.jsx)("div",{className:"content__app",children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{exact:!0,path:"/dashboard",component:xe}),Object(x.jsx)(o.b,{exact:!0,path:"/dashboard/perfil",component:fe}),Object(x.jsx)(ne,{exact:!0,path:"/dashboard/asociados",component:ve}),Object(x.jsx)(o.b,{exact:!0,path:"/dashboard/encuestas",component:ge}),Object(x.jsx)(ne,{exact:!0,path:"/dashboard/galeria",component:_e}),Object(x.jsx)(ne,{exact:!0,path:"/dashboard/noticias",component:Ne}),Object(x.jsx)(o.b,{exact:!0,path:"/dashboard/buzon-sugerencias",component:ye}),Object(x.jsx)(o.b,{exact:!0,path:"/dashboard/anuncios",component:we}),Object(x.jsx)(o.b,{component:xe})]})})]})]})}),Ce=function(e){var a=e.component,t=Object(se.a)(e,["component"]),c=v().currentUser;return Object(x.jsx)(o.b,Object(b.a)(Object(b.a)({},t),{},{render:function(e){return c?Object(x.jsx)(a,{}):Object(x.jsx)(o.a,{to:"/ingresar"})}}))},Ae=function(e){var a=e.component,t=Object(se.a)(e,["component"]),c=v().currentUser;return Object(x.jsx)(o.b,Object(b.a)(Object(b.a)({},t),{},{render:function(e){return c?Object(x.jsx)(o.a,{to:"/dashboard"}):Object(x.jsx)(a,{})}}))},Ie=function(e){var a=Object(c.useState)(""),t=Object(d.a)(a,2),s=t[0],n=t[1],i=Object(o.g)(),r=v().restorePassword,l=function(){var e=Object(u.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,r(s).then((function(){i.push("/ingresar")})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Restaurar Contrase\xf1a"}),Object(x.jsxs)("form",{onSubmit:l,children:[Object(x.jsx)("label",{htmlFor:"email",children:"Correo electr\xf3nico:"}),Object(x.jsx)("input",{type:"email",id:"email",onChange:function(e){return n(e.target.value)}}),Object(x.jsx)("button",{type:"submit",children:"Restaurar"})]})]})},Me=function(){return Object(x.jsx)(r.a,{basename:"/",children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{exact:!0,path:"/",component:R}),Object(x.jsx)(o.b,{exact:!0,path:"/acerca-de",component:K}),Object(x.jsx)(o.b,{exact:!0,path:"/galeria",component:W}),Object(x.jsx)(o.b,{exact:!0,path:"/documentos",component:Q}),Object(x.jsx)(Ae,{exact:!0,path:"/ingresar",component:ee}),Object(x.jsx)(Ae,{exact:!0,path:"/registrarse",component:ce}),Object(x.jsx)(Ae,{exact:!0,path:"/restaurar-contrasena",component:Ie}),Object(x.jsx)(Ce,{path:"/dashboard",component:ke}),Object(x.jsx)(o.b,{component:R})]})})};i.a.render(Object(x.jsx)(g,{children:Object(x.jsx)(Me,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.94a612d4.chunk.js.map
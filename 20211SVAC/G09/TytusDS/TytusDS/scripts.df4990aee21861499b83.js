class Nodo{constructor(t,e,i,n,o,l){this.data=t,this.next=e,this.id=i,this.x=n,this.disBtn=o,this.idFlecha=l}}class ListaSimple{constructor(){this.head=null,this.size=0,this.contId=0}add(t){const e=document.createElement("div");e.id="div"+this.contId.toString(),this.contId++;const i=document.getElementById("divInsert1");i.appendChild(e);const n=document.createElement("button"),o=document.createTextNode(t);n.appendChild(o),n.style.backgroundColor="rgb(25, 25, 112)",n.style.color="rgb(255,255,255)",n.style.fontSize="25px",n.style.borderRadius="5px",n.style.height="50px",n.style.textAlign="center",n.classList="animate__animated animate__bounce";const l=document.getElementById(e.id);l.style.position="absolute",l.appendChild(n);const s=new Nodo(t,null,e.id,null,n.offsetWidth,null);if(this.head){let t=this.head;for(;t.next;)t=t.next;this.contId++,s.x=t.x+t.disBtn+50,t.next=s,l.style.left=s.x.toString()+"px",l.style.top="20px";const e=document.createElement("div");i.appendChild(e),e.innerHTML='<img src="assets/img/flecha_izquierda.png" width="45px"/>',e.id="flecha"+this.contId.toString();const n=document.getElementById(e.id);n.style.position="absolute",n.classList="animate__animated animate__backInLeft",n.style.left=(s.x-45).toString()+"px",n.style.top="22px"}else this.head=s,this.contId++,this.head.x=10,l.style.left=this.head.x.toString()+"px",l.style.top="20px",console.log(l.style.left),console.log(this.head.x);this.size++}delete(t){let e,i=this.head;if(t!=i.data)for(;null!=i;){if(e=i.next,console.log(i.data+"  "+e.data),e.data==t){e=e.next,i.next=e,this.size--;break}i=i.next}else this.head=i.next}refresh(t,e){let i=this.head;for(;null!=i.next;){if(i.data==t)return void(i.data=e);i=i.next}}search(t){let e=this.head;for(;null!=e.next;){if(e.data==t)return!0;e=e.next}return!1}cargar(t){}guardar(){}print(){var t=[];let e=this.head;for(;null!=e;)t.push(e.data),e=e.next;return t}}const listSimple=new ListaSimple;var categoria,nombre,repeticion,animacion;function lsimpleAdd(t){return listSimple.add(t),listSimple.print()}function lsimpleDelete(t){listSimple.delete(t)}function lsimpleRefresh(t,e){listSimple.refresh(t,e)}function lsimpleSearch(t){return listSimple.search(t)}function lsimpleCargar(t){listSimple.cargar(t)}function lsimpleGuardar(t){listSimple.guardar()}function lsimplePrint(){return print()}function convertToText(t){var e=[];if("object"==typeof t&&null==t.join){for(prop in e.push("{"),t)e.push(prop,": ",convertToText(t[prop]),",");e.push("}")}else if("object"==typeof t&&null!=t.join){for(prop in e.push("["),t)e.push(convertToText(t[prop]),",");e.push("]")}else e.push("function"==typeof t?t.toString():JSON.stringify(t));return e.join("")}function onChange(t){var e=t.target.files[0],i=new FileReader;i.onload=function(t){let e=JSON.parse(t.target.result);for(var i in e)if("categoria"==i&&(categoria=e[i],console.log(categoria)),"nombre"==i&&(nombre=e[i],console.log(nombre)),"repeticion"==i&&(repeticion=e[i],console.log(repeticion)),"animacion"==i&&(animacion=e[i],console.log(animacion)),"valores"==i)for(var n in e[i])listSimple.add(e[i][n])},i.readAsText(e)}function download(t,e){lista=listSimple.print();var i=document.createElement("a");let n=JSON.stringify({categoria:categoria,nombre:nombre,repeticion:repeticion,animacion:animacion,valores:lista});i.setAttribute("href","data:json,"+n),i.setAttribute("download",t),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}
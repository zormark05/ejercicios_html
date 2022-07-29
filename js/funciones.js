//determina el mayor y menor entre dos numeros

function mayor_menor(){

    var a =parseFloat(document.form.n1.value);
	var b =parseFloat(document.form.n2.value);

		if(a==b){
			document.form.may.value= a;
			document.form.men.value= b;
		}
		else if(a>b){
			document.form.may.value= a;
			document.form.men.value= b;
			
		}
		else if (a<b){
			document.form.may.value= b;
			document.form.men.value= a;
		}

}

//determina la cantidad de cifras de número menor de un millón 
function calcula_cantidad(){

	var a =parseFloat(document.form.n1.value);

	if(a>=0 & a<=9){
		document.form.resp.value=("este numero tiene 1 cifra");
		
	}
	else if(a>=10 & a<=99){
		document.form.resp.value=("este numero tiene 2 cifra");
	}
	else if(a>=100 & a<=999){

		document.form.resp.value=("este numero tiene 3 cifra");
	}
	else if(a>=1000 & a<=9999){
		document.form.resp.value=("este numero tiene 4 cifra");
	}
	else if(a>=10000 & a<=99999){
		document.form.resp.value=("este numero tiene 5 cifra");
	}
	else if(a>=100000 & a<=999999){
		document.form.resp.value=("este numero tiene 6 cifra");
	}
	else if(a>=1000000){
		alert(":: este numero supera los valores requeridos::");
	}
	else if(a<=0){

		alert(":: este número no alcanza los valores rqueridos ::")
	}

}

//tablas de multiplicar automaticas 

function tablas(){
    var a = parseFloat(document.form.n1.value);
	
	while(a>=14){
		alert=("::este numero supera el valor requerido::")
		
	}

   //condicion
    for( var i = 1; i<=10; i++)// operacion
{
document.write(+a + 'x' +i+ '=' +a*i +'<br>'); // MUESTRA EN PANTALLA
}
}

//tablas V2 de multiplicar
function moestrar_tabla(){

	var n = parseInt(document.tablas.numero.value);
	var r =" ";
	for( var i=1; i <=10; i++){

		r= r + n +" "+ i + " = " + (n*i) + "<br>";

	}
	var capa_result = document.getElementById(
		"resultado"
	);
	capa_result.innerHTML = r;
}

//conversor

function conversor(){
	var oper =parseInt(document.conversor.oper.value)

	switch (oper)
{
	case 1:
		document.conversor.resp.value=("su conversion es "+" = "+ (a / 1000))
	case 2:cout<<"su conversion fue"<<"="<<"\t"<< a / 10 <<endl;break;
	case 3:cout<<"su conversion es"<<"="<< "\t"<< a * 10 <<endl;break;
	case 4:cout<<"su conversion es"<<"="<< "\t"<< a * 100 <<endl;break;	
}

}
//hamburguesa
function menuHamburguesa(

	
	char  oper,a,a1,b,c,d,e;
cout<<"escoge que llevra tu hambiguesa";
cout<<"\n 1.Si, escoge lo que llevara ";
cout<<"\n 2.No, deseo llevarla con todo";
cin>>a;
switch(a){
	case '1':cout<<"escoge lo que llevara tu hamburguesa \n";
					switch (a){
						 case '1' : cout<<"escoge tus ingredintes: \n";
											cout<<"\n 1.pan \n\n";
											cout<<"\n 2.platano \n\n";
											cin>>b;
											switch(b){
												case '1': cout<<"\n 1.burger pan \n\n ";
															break;
												case '2': cout<<"\n 2.burger platano \n\n ";
														  break;}
								case '2':cout<<"escoge opcion: \n\n";
										cout<<"\n 1.sin cebolla \n";
										cout<<"\n 2.con cebolla \n";
										cin>>c;
										switch(c){
													case '1':cout<<"\n 1.sin cebolla \n ";
													break;
													case '2':cout<<"\n 2.con cebolla \n ";
													break;
													}
								case '3':cout<<"escoge opción: \n\n";
										 cout<<"\n 1.sin ripio \n";
										 cout<<"\n 2.con ripio \n";
										 cin>>d;
										 switch(d){
										 		case '1':cout<<"\n 1.sin ripio \n";
												break;
												case '2':cout<<"\n 2.con ripio \n";
												break;
										 }
								case '4':cout<<"escoge opción: \n\n";
										 cout<<" \n 1.sin salsa \n";
										 cout<<"\n 2.con salsa \n";
										 cin>>e;
										 switch(e){
										 		case '1':cout<<"\n 1.sin salsa \n";
												break;
												case '2':cout<<"\n 2.con salsa \n\n"<<endl;
												break;
												}
					}             
								
	case '2':cout<<"tu orden estara listo en unos minutos \n\n"<<endl;
					break;}

)

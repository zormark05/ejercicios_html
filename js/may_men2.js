function mayor_menor2(){
    var a =parseFloat(document.form.a.value);
    var b =parseFloat(document.form.b.value);
	var c =parseFloat(document.form.c.value);

			if (a==b && b==c){
					
				document.form.may.value= a;
				document.form.inter.value= b;
				document.form.men.value= c;	
				
			}
			else if(a==b & b>c){
				document.form.may.value= a;
				document.form.inter.value= b;
				document.form.men.value= c;	
			}
			else if (a>b & b==c){
				document.form.may.value=a ;
				document.form.inter.value= b;
				document.form.men.value= c;	
			}
			else if (a<b & b==c){
				document.form.may.value= b;
				document.form.inter.value= c;
				document.form.men.value= a;	

			}
			else if (a==b & b<c){
				document.form.may.value= c;
				document.form.inter.value= b;
				document.form.men.value= a;	
						
			}
			else if (a==c & b>c){
				document.form.may.value= b;
				document.form.inter.value= a;
				document.form.men.value= c;	
			}
			else if (a==c & b<c){
				document.form.may.value= a;
				document.form.inter.value= c;
				document.form.men.value= b;	
			}

			else if(a>b & b>c & c<b){
				document.form.may.value= a;
				document.form.inter.value= b;
				document.form.men.value= c;	
			}
			else if(a<b & b<c & c>b){
				document.form.may.value= c;
				document.form.inter.value= b;
				document.form.men.value= a;	
				
				
			}
			else if(b>a & a>c & c<a){
				document.form.may.value= b;
				document.form.inter.value= a;
				document.form.men.value= c;	
				
			}
			else if( a>c & b>c & c<b){
				document.form.may.value= a;
				document.form.inter.value= c;
				document.form.men.value= b;	
				
			}
			else if(b>c & c>a & a<c){
				document.form.may.value= b;
				document.form.inter.value= c;
				document.form.men.value= a;	
				
			}
			else if(b>a & a>c & c<a){
				document.form.may.value= b;
				document.form.inter.value= a;
				document.form.men.value= c;	
				
				
			}
			else if(c>a & a>b & b<a){
				document.form.may.value= c;
				document.form.inter.value= a;
				document.form.men.value= b;	
			}
}

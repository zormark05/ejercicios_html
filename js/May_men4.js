function mayor_menor(){
    var A =parseFloat(document.form1.n1.value);
    var B =parseFloat(document.form1.n2.value);
    var C =parseFloat(document.form1.n3.value);
    var D =parseFloat(document.form1.n4.value);
    var X =parseFloat;
    var Y =parseFloat;

    if(A > B && A > C && A > D){
        X=A;
    }else{
        if(B > A && B > C && B > D){
            X=B;
        }else{
            if(C > A && C > B && C > D){
                X=C;
            }else
                X=D;
        }
    }
    if(A < B && A < C && A < D){
        Y=A;
    }else{
        if(B < A && B < C && B < D){
            Y=B;
        }else{
            if(C < A && C < B && C < D){
                Y=C;
            }else
                Y=D;
        }
    } 

        if (A==B & B==C & C==D) 
        {
            document.form1.may.value=A;
            document.form1.men.value=B;
        }
            if (A>B & B==C & D<C) 
            {
                document.form1.may.value=A;
                document.form1.men.value=D;
           
            }
            if (A>B & C==D & B<C) 
            {
                document.form1.may.value=A;
                document.form1.men.value=B;
            }
            if (A==B & C>A & A>D) 
            { 
                document.form1.may.value=C;
                document.form1.men.value=D;
            }
            if (A==B & D>A & A>C) 
            { 
                document.form1.may.value=D;
                document.form1.men.value=C;
            }
            if (B>C & A==D & C<D)
            {
                document.form1.may.value=B;
                document.form1.men.value=C;
            }
            if ( D>A & B==C & A<D) 
            {
                document.form1.may.value=D;
                document.form1.men.value=A;
            }
            if (A>D & B==C & D<A) 
                {
                    document.form1.may.value=A;
                    document.form1.men.value=D;
                }
            if(Y!=X){
                    document.form1.may.value=X;
                    document.form1.men.value=Y
                cout<<"\n\t el mayor es: "<<X<<"\n\t el menor es:"<<Y<<"\n";
                }
                
}
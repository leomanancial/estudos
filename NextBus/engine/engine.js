 //Esse script ficara separado
    $(document).ready(function(){
        $("a").bind('click',function(){
        var tabela = this.id // Tras o id do link clicado      
        var myClock = new Date();
        var hour = myClock.getHours();
        var min = '';
        if(myClock.getMinutes()<10){
          var min = '0'+myClock.getMinutes();
        }else{
          var min = myClock.getMinutes();
        }
        var now = hour+''+min;
        var mostrahora = []; //Segunda lista que é adicionada os horários maiores que a hora local
        // Tabelas ( Arrays) que serão Json em um webservice
        var tabelaR = new Array()    
        tabelaR['Cacula'] = [425,445,505,525,545,605,625,640,705,725,745,805,845,910,925,1000,1025,1100,1120,1140,1200,1220,1240,1300,1320,1340,1400,1420,1440,1500,1520,1540,1600,1620,1645,1705,1725, 1745,1810,1830,1850,1915,1940,2020,2100,2140,2210,2245,2320,2355,0010]
        tabelaR['SBC'] = [350,430,500,525,545,610,630,715,735,800,830,900,930,1025,1050,1115,1145,1210,1240,1305,1330,1355,1425,1445,1535,1555,1615,1635,1705,1730,1830,1900,1930,2010,2050,2130,2220,2310]
        var tabelaC = []
        //Localiza a tabela clicada e manda para comparar horario
        for( x in tabelaR){
          if(x == tabela ){
            tabelaC = tabelaR[x]
          }
        }
       //Compara a tabela com horario do equipamento
        for (var i =0; i <tabelaC.length;i++ ){ 
          if( now <= tabelaC[i] ){ // Verifica todos os horários da Tabela igual ou maior a hora local
            mostrahora.push(tabelaC[i]) // Adiciona a Segunda lista os horários acima da hora local
          }
        }
        if( mostrahora[0] < 999){//verifica se a hora tem menos que tres digitos pegar no substring
          //console.log("pt1")
          var h = mostrahora[0].toString().substring(0,1);
          var m = mostrahora[0].toString().substring(1,4);
          //console.log(m)
          $('#nb').text("Próximo ônibus às "+h+":"+m); // Mostra o primeiro horário da Segunda lista, ou seja o próximo horário
        }else{
         // console.log("pt2")
          var h = mostrahora[0].toString().substring(0,2);
          var m = mostrahora[0].toString().substring(2,4);
            $('#nb').text("Próximo ônibus às "+h+":"+m); // Mostra o primeiro horário da Segunda lista, ou seja o próximo horário
        }
        mostrahora.splice(0, Number.MAX_VALUE); //Limpa a segunda lista para não conflitar
      });
    });
 //Esse script ficara separado
    $(document).ready(function(){
        $('#y').bind('click',function(){    
        var myClock = new Date();
        var hour = myClock.getHours();
        var min = '';
        if(myClock.getMinutes()<10){
          var min = '0'+myClock.getMinutes();
        }else{
          var min = myClock.getMinutes();
        }
        var now = hour+''+min;
        console.log(now);
        //Tabela tem que ir para o Json separada
        //var horaCacula = [0425,0445,0505,0525,0545,0605,0625,0640,0705,0725,0745,0805,0845,0910,0925,1000,1025,1100,1120,1140,1200,1220,1240,1300,1320,1340,1400,1420,1440,1500,1520,1540,1600,1620,1645,1705,1725, 1745,1810,1830,1850,1915,1940,2020,2100,2140,2210,2245,2320,2355,0010];
        var horaCacula = [425,445,505,525,545,605,625,640,705,725,745,805,845,910,925,1000,1025,1100,1120,1140,1200,1220,1240,1300,1320,1340,1400,1420,1440,1500,1520,1540,1600,1620,1645,1705,1725, 1745,1810,1830,1850,1915,1940,2020,2100,2140,2210,2245,2320,2355,0010];
        var mostrahora = []; //Segunda lista que é adicionada os horários maiores que a hora local
        
        for (var i =0; i <horaCacula.length;i++ ){ 
          if( now <= horaCacula[i] ){ // Verifica todos os horários da Tabela igual ou maior a hora local
            mostrahora.push(horaCacula[i]) // Adiciona a Segunda lista os horários acima da hora local
          }
        }
        if( mostrahora[0] < 999){//verifica se a hora tem menos que tres digitos pegar no substring
          console.log("pt1")
          var h = mostrahora[0].toString().substring(0,1);
          var m = mostrahora[0].toString().substring(1,4);
          //console.log(m)
          $('#nb').text("Próximo ônibus às "+h+":"+m); // Mostra o primeiro horário da Segunda lista, ou seja o próximo horário
        }else{
          console.log("pt2")
          var h = mostrahora[0].toString().substring(0,2);
          var m = mostrahora[0].toString().substring(2,4);
            $('#nb').text("Próximo ônibus às "+h+":"+m); // Mostra o primeiro horário da Segunda lista, ou seja o próximo horário
        }
        mostrahora.splice(0, Number.MAX_VALUE); //Limpa a segunda lista para não conflitar
      });
    });
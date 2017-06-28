<?php
$ch = curl_init();
$timeout = 0;
curl_setopt($ch, CURLOPT_URL, 'http://tempo1.cptec.inpe.br/cidades/previsao.do?parameter=estendida&id=4599');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$conteudo = curl_exec ($ch);
curl_close($ch);

$conteudo = utf8_encode($conteudo);
preg_match_all('/div id="sub3"(.+)div id="mini"/s', $conteudo, $array); 

$dados = $array[0][0];

echo $dados;

?>
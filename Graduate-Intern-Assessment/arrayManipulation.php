function doubleArray($arr) {
  $multiNum  = [ ] ;

 for($i = 0 ;$i < count($arr); $i++ ){
   $num = $arr[$i ] * 2;
  $multiNum [$i ] = $num ;

}
return $multiNum ;

}
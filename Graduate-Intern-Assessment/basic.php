function countWords($str) {
    $numWords  = empty($str) ? 0 : 1; 
     $str = trim($str);
  for ( $i = 0  ;$i< strlen($str) ; $i++ ){
    $char = $str[$i];
       if( ctype_space( $char )) {
         $numWords ++ ;
   }
}
  return $numWords;
}
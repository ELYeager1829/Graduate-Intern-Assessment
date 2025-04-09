public class ArraySquares {
   public static void main (String [] args) {
        int[] numbers = {1,2,3,4,5,6,7,8,9,10};
        int[] squaredNumbers = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            squaredNumbers[i] = numbers[i] * numbers[i];
            
        }
        for(int number : squaredNumbers){
             System.out.println(number+" "); 
        }
           
    }
}

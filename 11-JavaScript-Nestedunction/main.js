<html>
   <head>
      
      <script type="text/javascript">
         <!--
            function hypotenuse(a, b) {
               function square(x) { return x*x; }
               return Math.sqrt(square(a) + square(b));
            }
            
            function secondFunction(){
               var result;
               result = hypotenuse(1,2);
               document.write ( result );
            }
         //-->
      </script>
      
   </head>
   <body>
      <p>Click the following button to call the function</p>
      
      <form>
         <input type="button" onclick="secondFunction()" value="Call Function">
      </form>
      
      <p>Use different parameters inside the function and then try...</p>
   
   </body>
</html>
<script type="text/javascript">
   <!--
      function sayHello()
      {
         alert("Hello there");
      }
   //-->
</script>











Function Parameters

<html>
   <head>
   
      <script type="text/javascript">
         function sayHello(name, age)
         {
            document.write (name + " is " + age + " years old.");
         }
      </script>
      
   </head>
   <body>
      <p>Click the following button to call the function</p>
      
      <form>
         <input type="button" onclick="sayHello('Zara', 7)" value="Say Hello">
      </form>
      
      <p>Use different parameters inside the function and then try...</p>
   </body>
</html>











The return Statement
<html>
   <head>
      
      <script type="text/javascript">
         function concatenate(first, last)
         {
            var full;
            full = first + last;
            return full;
         }
         
         function secondFunction()
         {
            var result;
            result = concatenate('Zara', 'Ali');
            document.write (result );
         }
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













onclick Event Type
<html>
   <head>
      
      <script type="text/javascript">
         <!--
            function sayHello() {
               alert("Hello World")
            }
         //-->
      </script>
      
   </head>
   
   <body>
      <p>Click the following button and see result</p>
      
      <form>
         <input type="button" onclick="sayHello()" value="Say Hello" />
      </form>
      
   </body>
</html>
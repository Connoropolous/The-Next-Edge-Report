<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The Next Edge Report</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Loading Bootstrap -->
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Loading Flat UI -->
    <link href="css/flat-ui.css" rel="stylesheet">
    
    <!-- Loading Isotope & Other CSS -->
    <link rel="stylesheet" type="text/css" href="/css/style.css">

    <link rel="shortcut icon" href="images/favicon.ico">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->
  </head>
  <body>
    <div id="fb-root"></div>
    
    <div class="container">
      <?php include 'header.php'; ?>
      
      <?php include 'postfilters.php'; ?>
      
      <script>
          $(document).ready(function(){
            addFilterHiding();
            TNER.View.init();
            TNER.View.isotope();
            
            function loadWhenReady(){
              var t=setTimeout(function(){
                if (TNER.Ready) {
                  loadPosts();
                }
                else loadWhenReady();
              },1);
            }
            loadWhenReady();
          });
      </script>
    
      <div class="row collection">
        <div class="span12">
            <div id="isotope-container">
              
            </div>
            <p id="noMatches">No matches found</p>
            <button type="button" class="btn" id="loadMore" onclick="loadPosts()">Load 25 more</button>
        </div>
      </div> <!-- /row -->
      
      <div class="row">
        <a class="span12 btn btn-warning download" href="/download.php" >
          Download Our Data
        </a>
      </div> <!-- /row -->
    </div><!-- /container -->
    
    <?php include 'footer.php'; ?>
  </body>
</html>
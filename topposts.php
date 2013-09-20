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
          });
        </script>
      
      <div class="row collection">
        <div class="choosePosts">
          <div class="span6 btn btn-info btn1" onclick="return loadArchive('100mostcommented.json');">
            View 100 Most Commented
          </div>
          <div class="span6 btn btn-danger btn2" onclick="return loadArchive('100mostliked.json');">
            View 100 Most Liked
          </div>
        </div>
        <h3 class="postsTitle"></h3>
        <div class="progress loading archive">
          <div class="bar span12" id="loadingposts" style="width: 0%; height: 30px;">loading posts...</div>
        </div>
        <div class="span12">
            <div id="isotope-container">
              
            </div>
            <p id="noMatches">No matches found</p>
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
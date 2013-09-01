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
      
      <?php include 'peoplefilters.php'; ?>
       
      <div class="postfilters" style="display:none;">  
         <a href="#fakelink" onclick="returnToPeople();">Return To People</a>      
         <?php include 'postfilters.php'; ?>
      </div>
        <script>
          $(document).ready(function(){
            TNER.PeopleView.init();
            TNER.View.init();
            TNER.PeopleView.isotope();
            loadPeople();
            getAllPosts();
          });
        </script>
    
      <div class="row">
        <div class="progress loading">
          <div class="bar span12" id="loadingpeople" style="width: 0%; height: 30px;">loading people...</div>
        </div>
        <div class="progress loading">
          <div class="bar span12" id="loadingposts" style="width: 0%; height: 30px;">loading posts...</div>
        </div>
        <div class="span12">
            <div id="isotope-container">
              
            </div>
            <p id="noMatches">No matches found</p>
        </div>
      </div> <!-- /row -->
      
      <div class="row">
        <a class="span12 btn btn-warning download" href="#fakelink" >
          Download Our Data
        </a>
      </div> <!-- /row -->
    </div><!-- /container -->
    
    <?php include 'footer.php'; ?>
  </body>
</html>
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
      
      <div class="row">
        <div class="span12 homepageIntro">
          <h3 class="demo-panel-title">Download</h3>
          <p>
          Here you can download a full copy of the <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> of all 7976 posts that we retrieved on August 28, 2013 with full metadata for each post, at least everything that facebook provides: all likes, comments, and even tags of others, are included in the data (with the exception of one post that had over 500 comments that we couldn't retrieve). The data was too big for one JSON file so within the downloadable zip file you'll find 8 separate JSON files containing 1000 posts each, except for the last one which has less. The zip file is 9 megabytes. You may want this so that you can do your own playing with the data, or you may just want it for its sentimental value, and/or to ensure that in this case, we do have redundancy of the data, rather than it just being on facebooks servers, which is valuable for The Next Edge community. If you have any questions about how you would go about working with the posts, just tweet <a href="http://twitter.com/connoropolous" target="_blank">@Connoropolous</a>.
          </p>
        </div>
      </div> <!-- /row -->
      
      <div class="row">
        <a class="span3 btn btn-warning" href="/data/NextEdgeArchive10amAug28_2013_7976posts.zip" >
            Download
        </a>
      </div> <!-- /row -->
      
      <div class="row" style="height:50px;"></div>
      
    </div><!-- /container -->
    
    <?php include 'footer.php'; ?>
  </body>
</html>
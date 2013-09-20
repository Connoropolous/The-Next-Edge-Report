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
         <div class="returnToPeople btn btn-primary" onclick="return returnToPeople();">Back To People</div>     
         <?php include 'postfilters.php'; ?>
      </div>
        <script>
          $(document).ready(function(){
            addFilterHiding();
            TNER.PeopleView.init();
            TNER.View.init();
            TNER.PeopleView.isotope();
            //loadPeople();
            //getAllPosts();
          });
        </script>
        
      
    
      <div class="row collection">
        <div class="intro">
          <div class="span12">
            <p class="peopleContent">
          It's within this section that you can find any post whatsoever from the archive if you know who posted it. If you hit explore, it will begin downloading to your page all 7976 posts, as well as all 1425 people who had ever made a contribution of some kind (post, comment, or even a like) to the group. You'll be able to first explore the people, and if you see someone who's posts look like they would interest you, load up all of those for viewing. Beware: exploring this page can be slow, but worth it, it's working with a mass of data. The sum total size of the posts it will load is 32 mb so don't proceed if you can't handle that currently. When you load someone's posts, you can also go 'back to people' without reloading everything, and go back and forth as many times as you like. Enjoy.
            </p>
          </div>
          <div class="span3 btn btn-danger" onclick="return peoplePage();">
            Explore
          </div>
        </div>
        <div class="peopleTypes span12">
          <p>We're using three special icons to identify three interesting types of people who participate. The icons, and the concept, are drawn from <a href="http://emergentbydesign.com/2010/08/04/conceptual-framework-for-online-identity-roles/" target="_blank">this blog post</a>. Listed below are what we used to qualify people for those roles.</p>
          <img src="/images/advocatorClear.png" />
          <p><span class="typeTitle">Advocator</span><br>Upvoting good content<br>> 100 likes left on posts</p>
          <img src="/images/enhancerClear.png" />
          <p><span class="typeTitle">Enhancer</span><br>Generating meaningful dialogue<br>> 40 comments with > 1.5 likes/comment</p>
          <img src="/images/activatorClear.png" />
          <p><span class="typeTitle">Activator</span><br>Injecting quality content<br>>10 posts with > 4 likes/post</p>
          <div class="clearfloat"></div>
        </div>
        <h3 class="postsTitle"></h3>
        <div class="progress loading archive">
          <div class="bar span12" id="loadingpeople" style="width: 0%; height: 30px;">loading people...</div>
        </div>
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
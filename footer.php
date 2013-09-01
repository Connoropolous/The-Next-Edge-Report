    <footer>
      <div class="container">
      
        <div class="row">
          <div class="span7">
            <h3 class="footer-title">The Next Edge Report <span class="pvl">
              <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://tner.metamaps.cc" data-text="Some really neat data to explore on The Next Edge Report" data-via="connoropolous" data-size="large">Tweet</a>
              <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </span></h3>
            <p>The Next Edge is a closed group on Facebook where game-changing thinkers are <br/>
               converging and conversing about what's next for society at large, and how do<br/>
               we steer things in more desirable directions.<br/>
            </p>
            <p>The Next Edge Report exists to liberate our data from facebooks walls,<br/>
              adding searching, filtering and statistical functionality to create value from it.<br/>
              
              Things you should know: <br/>
              <ul>
                <li>The data for exploration and download is a snapshot from 10am, August 28, 2013 backwards to the group creation on June 27, 2011</li>
                <li>The data is likely not a complete set as some post results may have been excluded when I was working with the api for privacy reasons</li>
                <li>While I tried to be very rigorous when running code that was crunching numbers, I can't guarantee that all my calculations were perfect</li>
              </ul>
            </p>
            <h4>For Nerds</h4>
            <p>
              We used a DesignModo <a href="http://designmodo.com/flat-free/" target="_blank">flat ui interface kit</a> for this project. For handling posts, <a href="http://underscorejs.org" target="_blank">underscore</a> and <a href="http://backbonejs.org" target="_blank">backbone</a>. For the grid layout visualizations, <a href="http://isotope.metafizzy.co" target="_blank">isotope</a>. For downloading all the data, the <a href="https://developers.facebook.com/docs/reference/javascript/" target="_blank">Facebook Javascript SDK</a>. Find the code on Github.
            
            </p>
            
          </div> <!-- /span8 -->

          <div class="span5">
            <div class="footer-banner">
              <h3 class="footer-title">Edgers Elsewhere</h3>
              <ul>
                <li> <a href="https://twitter.com/gideonro/the-next-edge" target="_blank">Curated Twitter List by @gideonro</a></li>
                <li> <a href="http://tweetedtimes.com/#!/gideonro/the-next-edge" target="_blank">TweetedTimes Newspaper</a></li>
                <li> <a href="https://maps.google.com/maps/ms?ie=UTF&msa=0&msid=217167764329204376830.0004aaf122993f46df304&dg=feature" target="_blank">A Google Map of Edgers</a></li>
                <li> <a href="http://thenextedge.org" target="_blank">TheNextEdge.org</a></li>
              </ul>
              <h3>Created By</h3>
              <img class="connorprofile" src="https://lh6.googleusercontent.com/-Yykp9BrS5pM/AAAAAAAAAAI/AAAAAAAACsQ/zb1jB3n1Fw8/s120-c/photo.jpg" />
              Connor Turland<br/>
              <a href="http://twitter.com/connoropolous" target="_blank">@connoropolous</a><br/>
              Call me a collective intelligist, context artist, culture crafter, and meta-thinker. Code contributor to <a href=http://metamaps.cc" target="_blank">metamaps.cc</a> in the hopes of making the internet work for humanity. Connect on <a href="https://plus.google.com/u/0/106248613820097570709/posts" target="_blank">G+</a>,
              <a href="http://facebook.com/connor.turland" target="_blank">FB</a>, or my <a href="http://improv-ed.blogspot.com" target="_blank">blog</a>.
              <div style="clear:both;"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    <div class="status_template template">
      <div class='message'>{{ message }}</div>
      <div class='metadata'>
        <div class='fui-heart'></div>
        <div class='likes'>
          <a href='{{ postaddress }}' target='_blank'>{{ like_count }}</a>
        </div>
        <div class='fui-chat'></div>
        <div class='comments'>
          <a href='{{ postaddress }}' target='_blank'>{{ comment_count }}</a>
        </div>
        <div class='fui-user'></div>
        <div class='person'>
          <a href='http://facebook.com/{{ personid }}' target='_blank'>{{ person }}</a>
        </div>
        <div class='clearfloat'></div>
        <div class='time'>{{ time }}</div>
      </div>
      <div class='linknomessage'>{{ linknomessage }}</div>
      <div class='type'>{{ type }}</div>
    </div>
    
    <div class="link_template template">
      <a href="{{ link }}" target="_blank" class="linkLink">
        <img src='{{ picture }}' />
        <div class='name'>{{ name }}</div>
        <div class='description'>{{ description }}</div>
        <div class="clearfloat"></div>
      </a>
      <div class='message'>{{ message }}</div>
      <div class='metadata'>
        <div class='fui-heart'></div>
        <div class='likes'>
          <a href='{{ postaddress }}' target='_blank'>{{ like_count }}</a>
        </div>
        <div class='fui-chat'></div>
        <div class='comments'>
          <a href='{{ postaddress }}' target='_blank'>{{ comment_count }}</a>
        </div>
        <div class='fui-user'></div>
        <div class='person'>
          <a href='http://facebook.com/{{ personid }}' target='_blank'>{{ person }}</a>
        </div>
        <div class='clearfloat'></div>
        <div class='time'>{{ time }}</div>
      </div>
      <div class='linknomessage'>{{ linknomessage }}</div>
      <div class='type'>{{ type }}</div>
    </div>
    
    <div class="video_template template">
      <iframe width="300" height="165" src="{{ source}}" frameborder="0" allowfullscreen></iframe>
      <div class='message'>{{ message }}</div>
      <div class='metadata'>
        <div class='fui-heart'></div>
        <div class='likes'>
          <a href='{{ postaddress }}' target='_blank'>{{ like_count }}</a>
        </div>
        <div class='fui-chat'></div>
        <div class='comments'>
          <a href='{{ postaddress }}' target='_blank'>{{ comment_count }}</a>
        </div>
        <div class='fui-user'></div>
        <div class='person'>
          <a href='http://facebook.com/{{ personid }}' target='_blank'>{{ person }}</a>
        </div>
        <div class='clearfloat'></div>
        <div class='time'>{{ time }}</div>
      </div>
      <div class='linknomessage'>{{ linknomessage }}</div>
      <div class='type'>{{ type }}</div>
    </div>
    
    <div class="photo_template template">
      <a href="{{ link }}" target="_blank" class="photoImage"><img src='{{ picture }}' /></a>
      <div class='name'>{{ name }}</div>
      <div class='caption'>{{ caption }}</div>
      <div class='message'>{{ message }}</div>
      <div class='metadata'>
        <div class='fui-heart'></div>
        <div class='likes'>
          <a href='{{ postaddress }}' target='_blank'>{{ like_count }}</a>
        </div>
        <div class='fui-chat'></div>
        <div class='comments'>
          <a href='{{ postaddress }}' target='_blank'>{{ comment_count }}</a>
        </div>
        <div class='fui-user'></div>
        <div class='person'>
          <a href='http://facebook.com/{{ personid }}' target='_blank'>{{ person }}</a>
        </div>
        <div class='clearfloat'></div>
        <div class='time'>{{ time }}</div>
      </div>
      <div class='linknomessage'>{{ linknomessage }}</div>
      <div class='type'>{{ type }}</div>
    </div>
    
    <div class="person_template template">
      <div class="posts">
        <span class='postsleft'><a href="#{{ id }}" class="personPosts">{{ postsleft }} posts</a></span>
        <span class="received">received</span>
        <div class="clearfloat"></div>
        <span class='commentsreceived'>{{ commentsreceived }} comments</span>
        <span class='postlikesreceived'>{{ postlikesreceived }} likes</span>
      </div>
      <div class="comments">
        <div class="commentsgroup">
          <div class='commentsleft'>{{ commentsleft }} comments</div>
          <span>received </span><span class='commentlikesreceived'>{{ commentlikesreceived }} likes</span>
        </div>
        <div class='postlikesleftwrapper'><span class="postlikesleft">{{ postlikesleft }}</span><div>posts liked</div></div>
        <div class="clearfloat"></div>
      </div>
      <div class="clearfloat"></div>
      
      <div class="person_footer">
        <img src="{{ picture }}" width="50" height="50" />
        <div class='name'>{{ name }}</div>
        <div class="clearfloat"></div>
      </div>
      
      <div class="statRowOne statRow">
        <div class="cell1"></div>
        <div class="rowLabel rowLabelOne">likes/post</div>
        <div class="rowLabel rowLabelTwo">comments/post</div>
        <div class="rowLabel">likes/comment</div>
        <div class="clearfloat"></div>
      </div>
      <div class="statRowTwo statRow">
        <div class="cell1 rowLabel">Avg.</div>
        <div class='avglikespost'>{{ avglikespost }}</div>
        <div class='avgcommentspost rowLabelTwo'>{{ avgcommentspost }}</div>
        <div class='avglikescomment'>{{ avglikescomment }}</div>
        <div class="clearfloat"></div>
      </div>
      <div class="statRowThree statRow">
        <div class="rowLabel">Total Likes Received</div>
        <div class='totallikes'>{{ totallikes }}</div>
        <div class="clearfloat"></div>
      </div>
    </div>
    
    <!-- Load JS here for greater good =============================-->
    <script src="js/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="js/jquery.ui.touch-punch.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap-select.js"></script>
    <script src="js/bootstrap-switch.js"></script>
    <script src="js/flatui-checkbox.js"></script>
    <script src="js/flatui-radio.js"></script>
    <script src="js/jquery.tagsinput.js"></script>
    <script src="js/jquery.placeholder.js"></script>
    <script src="js/jquery.stacktable.js"></script>
    <script type="text/javascript" src="/javascripts/jquery.ba-bbq.min.js"></script>
    <script type="text/javascript" src="/javascripts/underscore.js"></script>
    <script type="text/javascript" src="/javascripts/backbone.js"></script>
    <script type="text/javascript" src="/javascripts/jquery.isotope.min.js"></script>
    <script type="text/javascript" src="/javascripts/App.js"></script>
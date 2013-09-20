<div class="hidefilters btn btn-primary">Hide Panel (ctrl-h)</div>
<div class="row dashboard posts">
        <div class="span6 typefilter">
            <span class="toprow">Show Me: </span>
            <span class="toprow">
              <label class="checkbox checked status" for="checkbox1">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox1" data-toggle="checkbox" checked="checked" data-filter="status">
              Posts
              </label>
            </span>
            <span class="toprow">
              <label class="checkbox checked link" for="checkbox2">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox2" data-toggle="checkbox" checked="checked" data-filter="link">
              Links
              </label>
            </span>
            <span class="toprow">
              <label class="checkbox checked video" for="checkbox3">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox3" data-toggle="checkbox" checked="checked" data-filter="video">
              Videos
              </label>
            </span>
            <span class="toprow">
              <label class="checkbox checked photo" for="checkbox4">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox4" data-toggle="checkbox" checked="checked" data-filter="photo">
              Photos
              </label>
            </span>  
            <div style="clear:both;"></div>
            <span class="exclude">Exclude Posts With: </span>
            <div style="clear:both;"></div>
            <span class="pushdown justcheck">
              <label class="checkbox" for="checkbox1">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox1" data-toggle="checkbox" data-filter="likes">
              </label>
            </span>
            <span class="justselect">
              <= <select name="numberlikes" value="0" class="select-block span1">
                  <option value="0">0</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="30">30</option>
                  <option value="60">60</option>
                </select> likes
            </span>
            <span>
              <select name="likeCOMBOcomment" value="OR" class="select-block span1 changeCOMBO">
                <option value="AND">AND</option>
                <option value="OR" selected="selected">OR</option>
              </select>
            </span>
            <span class="pushdown justcheck">
              <label class="checkbox" for="checkbox3">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox3" data-toggle="checkbox" data-filter="comments">
              </label>
            </span>
            <span class="justselect">
              <= <select name="numbercomments" value="0" class="select-block span1">
                  <option value="0">0</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="30">30</option>
                  <option value="60">60</option>
                </select> comments
            </span>
            <div style="clear:both;"></div>
            <span>
              <select name="likescommentsCOMBOlinknomessage" value="OR" class="select-block span1 changeCOMBO">
                <option value="AND">AND</option>
                <option value="OR" selected="selected">OR</option>
              </select>
            </span>
            <span class="pushdown">
              <label class="checkbox" for="checkbox4">
                <span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span><input type="checkbox" value="" id="checkbox4" data-toggle="checkbox" data-filter="linknomessage">
              a link but no message
              </label>
            </span>
        </div>
        <div class="span3">
          <div id="filterposts">
            <input type="text" id="filterByUser" placeholder="Filter By Person Name" data-filter="personname"></input>
            <input type="text" id="filterByKeyword" placeholder="Filter By Keyword" data-filter="keyword"></input>
          </div>
        </div>
        <div class="span2">
          <select name="sort-by" value="#date" class="select-block span2">
            <option value="#date" selected="selected">By Date</option>
            <option value="#person">By Person</option>
            <option value="#likes">By Likes</option>
            <option value="#comments">By Comments</option>
            <option value="#type">By Type</option>
          </select>
        </div>
        
          
</div> <!-- /row -->
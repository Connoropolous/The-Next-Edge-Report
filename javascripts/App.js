var TNER = {};

TNER.Filter = {
  reset: function() {
    $('.dashboard.posts').html(TNER.View.defaultFilter);
    $('.dashboard.people').html(TNER.PeopleView.defaultFilter);
    TNER.View.init();
    TNER.PeopleView.init();
    TNER.Filter.posts = {
    status: true,
    link: true,
    video: true,
    photo: true,
    personname: '',
    keyword: '',
    likes: false,
    numberlikes: 0,
    likeCOMBOcomment: 'OR',
    comments: false,
    numbercomments: 0,
    likescommentsCOMBOlinknomessage: 'OR',
    linknomessage: false
    };
    TNER.Filter.people = {
    type: 'all',
    person: ''
    };
  },
  posts: {
    status: true,
    link: true,
    video: true,
    photo: true,
    personname: '',
    keyword: '',
    likes: false,
    numberlikes: 0,
    likeCOMBOcomment: 'OR',
    comments: false,
    numbercomments: 0,
    likescommentsCOMBOlinknomessage: 'OR',
    linknomessage: false
  },
  comments: {
    
  },
  people: {
    type: 'all',
    person: ''
  }
};
TNER.allPosts = [];
TNER.Ready = false;

var Post, PostView, Posts, Person, PersonView, People, bigObject = {};

_.templateSettings = {
        interpolate: /{{(.+?)}}/g
};
jQuery.eachCallback = function(arr, process, callback) {
    var cnt = 0;
    function work() {
        var item = arr[cnt];
        process.apply(item);
        callback.apply(item, [cnt]);
        cnt += 1;
        if (cnt < arr.length) {
            setTimeout(work, 1);
        }
    }
    setTimeout(work, 1);
};
// parse a date in yyyy-mm-dd format
function parseDate(input) {
  var parts = input.split('-');
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
function dateToString(d) {
  var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
  return month + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function convertToLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1' target='_blank'>$1</a>"); 
}

function passFilters(jqObj) {
            
            var filters = TNER.Filter.posts;
            
            var passesType = false,
                passesLikes = true,
                passesComments = true,
                passesLinkNoMessage = true,
                passesLikesComments = true,
                passesCombo = true,
                passesUser = false,
                passesKeyword = false;
  
              // filter by type
              var typeclass = [];
              if (filters.status) typeclass.push(".status");
              if (filters.link) typeclass.push(".link");
              if (filters.video) typeclass.push(".video");
              if (filters.photo) typeclass.push(".photo");
              typeclass = typeclass.join(",");
              passesType = jqObj.is(typeclass);
              
              // filter out by likes, comments, and spam
              
              // none are picked
              if (!filters.likes && !filters.comments && !filters.linknomessage) {
                passesCombo = true;
              }
              else {
                if (filters.likes) {
                  passesLikes = parseInt(jqObj.find('.likes').text()) > filters.numberlikes;
                }
                if (filters.comments) {
                  passesComments = parseInt(jqObj.find('.comments').text()) > filters.numbercomments;
                }
                if (filters.linknomessage) {
                  passesLinkNoMessage = jqObj.find('.linknomessage').text() == 'true' ? false : true;
                } 
                
                if (filters.likes && filters.comments) {
                  if (filters.likeCOMBOcomment == "OR") passesLikesComments = passesLikes && passesComments;  // only include if it passes both (exclude if either fails)
                  else if (filters.likeCOMBOcomment == "AND") passesLikesComments = passesLikes || passesComments;  // include if it passes either (exclude if it fails both) 
                }
                else {
                  passesLikesComments = passesLikes && passesComments; // if only one of the two is picked, and one of them is false, we know the one we care about is false
                }
                
                if (filters.linknomessage && !filters.likes && !filters.comments) {
                  passesCombo = passesLinkNoMessage;
                }
                else if (filters.linknomessage) {
                  if (filters.likescommentsCOMBOlinknomessage == "OR") passesCombo = passesLikesComments && passesLinkNoMessage;
                  else if (filters.likescommentsCOMBOlinknomessage == "AND") passesCombo = passesLikesComments || passesLinkNoMessage;
                }
                else {
                  passesCombo = passesLikesComments;
                }
              }
              
              // filter by person
              if (filters.personname != '') { // min 2 chars to execute query:
                if (jqObj.find('.person').text().toLowerCase().indexOf(filters.personname) !== -1) { // keyword matches element
                  passesUser = true;
                } else {
                  passesUser = false;
                }
              } else {
                passesUser = true;
              }
              
              // filter by keyword in message
              if (filters.keyword != '') { // min 2 chars to execute query:
                if (jqObj.find('.message').text().toLowerCase().indexOf(filters.keyword) !== -1) { // keyword matches element
                  passesKeyword = true;
                } else {
                  passesKeyword = false;
                }
              } else {
                passesKeyword = true;
              }
              
              if (passesType && passesCombo && passesUser && passesKeyword) { // keyword matches element
                return true;
              } else {
                return false;
              }
}
function passPeopleFilters(jqObj) {
            
            var filters = TNER.Filter.people;
            
            var passesType = false,
                passesPerson = false;
  
              // filter by type
              passesType = filters.type == 'all' ? true : jqObj.hasClass(filters.type);
            
              // filter by person
              if (filters.person != '') { // min 2 chars to execute query:
                if (jqObj.find('.name').text().toLowerCase().indexOf(filters.person) !== -1) { // keyword matches element
                  passesPerson = true;
                } else {
                  passesPerson = false;
                }
              } else {
                passesPerson = true;
              }

              
              if (passesType && passesPerson) { // keyword matches element
                return true;
              } else {
                return false;
              }
}

    Post = Backbone.Model.extend();
    Person = Backbone.Model.extend();

    var PostCollection = Backbone.Collection.extend({
        model: Post
    });
    var PeopleCollection = Backbone.Collection.extend({
        model: Person
    });

    PostView = Backbone.View.extend({
        tagName: "div",
        className: "post_card " ,
        statusTemplate: _.template($('.status_template').html()),
        linkTemplate: _.template($('.link_template').html()),
        videoTemplate: _.template($('.video_template').html()),
        photoTemplate: _.template($('.photo_template').html()),
        render: function () {
            var t = this.model.get('type');
            if (t == 'status') this.$el.html(this.statusTemplate(this.model.toJSON()));
            if (t == 'link') this.$el.html(this.linkTemplate(this.model.toJSON()));
            if (t == 'video') this.$el.html(this.videoTemplate(this.model.toJSON()));
            if (t == 'photo') this.$el.html(this.photoTemplate(this.model.toJSON()));
            this.$el.addClass(t);
            this.$el.attr('id',this.model.id);
            return this;
        }
    });
    PersonView = Backbone.View.extend({
        tagName: "div",
        className: "person_card " ,
        template: _.template($('.person_template').html()),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var VizPosts = Backbone.View.extend({
        initialized: false,
        defaultFilter: "",
        init: function () {
            if (!TNER.View.initialized) TNER.View.defaultFilter = $('.dashboard.posts').html();
            
            $(".dashboard.posts select[name='sort-by']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
        
            $(".dashboard.posts select[name='sort-by']").change(function () {
                var sortName = $(this).val().slice(1);
                $('#isotope-container').isotope({
                    sortBy: sortName,
                    sortAscending: sortName == 'person' ? true : false
                });
            });
            $(".dashboard.posts .typefilter .justselect select").change(function () {
                TNER.Filter.posts[$(this).attr('name')] = parseInt($(this).val());
                if (TNER.Filter.posts[$(this).attr('name')]) TNER.View.isotopeSearch();
            });
            
            $('.dashboard.posts .typefilter input[type="checkbox"]').change(function() {
              TNER.Filter.posts[$(this).attr("data-filter")] = $(this).attr("checked") ? true : false;
              TNER.View.isotopeSearch();
            });
            
            $('.dashboard.posts .typefilter .changeCOMBO').change(function() {
              TNER.Filter.posts[$(this).attr("name")] = $(this).val();
              TNER.View.isotopeSearch();
            });

            // User types in search box - call our search function and supply lower-case keyword as argument
            $('.dashboard.posts #filterposts input[type="text"]').bind('keyup', function () {
                TNER.Filter.posts[$(this).attr('data-filter')] = $(this).val().toLowerCase();
                if($(this).val().length != 1) TNER.View.isotopeSearch();
            });
            
            TNER.View.initialized = true;
        },
        isotope: function() {
            var $container = $('#isotope-container');
            
            $container.isotope({
                itemSelector: '.post_card',
                sortBy: 'date',
                sortAscending: false
            });
            
            $container.isotope({
                getSortData: {
                    date: function ($elem) {
                        return Date.parse($elem.find('.time').text());
                    },
                    person: function ($elem) {
                        return $elem.find('.person').text();
                    },
                    likes: function ($elem) {
                        return parseInt($elem.find('.likes').text());
                    },
                    comments: function ($elem) {
                        return parseInt($elem.find('.comments').text());
                    },
                    type: function ($elem) {
                        return $elem.find('.type').text();
                    }
                }
            });
        },
        isotopeSearch: function () {
            // reset results arrays
            var matches = [];
            var misses = [];

            $('.isotope-item').removeClass('match miss'); // get rid of any existing classes
            $('#noMatches').hide(); // ensure this is always hidden when we start a new query
            
            $('.isotope-item').each(function () {
              if ( passFilters($(this)) ) { // keyword matches element
                matches.push($(this)[0]);
              } else {
                misses.push($(this)[0]);
              }
            });
            
            // add appropriate classes and call isotope.filter
            $(matches).addClass('match');
            $(misses).addClass('miss');
            $('#isotope-container').isotope({
                filter: $(matches)
            }); // isotope.filter will take a jQuery object instead of a class name as an argument - sweet!

            if (matches.length == 0) {
                $('#noMatches').show(); // deal with empty results set
            }

        },
        initialize: function () {
            this.listenTo(Posts, 'reset', this.addAll);
        },
        addAll: function () {
            $("#isotope-container").isotope('insert', $(TNER.View.elements));
        },
        expand: function(elem) {
          $(elem).closest('.post_card').toggleClass('large');
          $('#isotope-container').isotope('reLayout');
        },
        play: function(elem) {
          var id = $(elem).closest('.post_card').attr('id');
          var p = Posts.get(id);
          $(elem).siblings('.videoImg').replaceWith('<iframe width="300" height="165" src="' + p.get('source') + '" frameborder="0" allowfullscreen></iframe>');
          $(elem).remove();
        }
    });
    var VizPeople = Backbone.View.extend({
        initialized: false,
        elements: "",
        defaultFilter: "",
        init: function () {
            if (!TNER.PeopleView.initialized) TNER.PeopleView.defaultFilter = $('.dashboard.people').html();
            
            $(".dashboard.people select[name='sort-by']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
            
            $(".dashboard.people select[name='sort-by']").change(function () {
                var sortName = $(this).val().slice(1);
                $('#isotope-container').isotope({
                    sortBy: sortName,
                    sortAscending: false
                });
            });
            $(".dashboard.people input[name='optionsRadios']").change(function () {
                TNER.Filter.people.type = $('input[name="optionsRadios"]:checked').val();
                TNER.PeopleView.isotopeSearch();
            });
            $('.dashboard.people #filterpeople input[type="text"]').bind('keyup', function () {
                TNER.Filter.people.person = $(this).val().toLowerCase();
                if($(this).val().length != 1) TNER.PeopleView.isotopeSearch();
            });
            
            TNER.PeopleView.initialized = true;
        },
        isotope: function() {
            var $container = $('#isotope-container');

            $container.isotope({
                itemSelector: '.person_card',
                sortBy: 'postsleft',
                sortAscending: false
            });

            $container.isotope({
                getSortData: {
                    postsleft: function ($elem) {
                        return parseInt($elem.find('.postsleft').text());
                    },
                    commentsleft: function ($elem) {
                        return parseInt($elem.find('.commentsleft').text());
                    },
                    commentsreceived: function ($elem) {
                        return parseInt($elem.find('.commentsreceived').text());
                    },
                    postlikesreceived: function ($elem) {
                        return parseInt($elem.find('.postlikesreceived').text());
                    },
                    totallikes: function ($elem) {
                        return parseInt($elem.find('.totallikes').text());
                    },
                    avglikespost: function ($elem) {
                        return parseFloat($elem.find('.avglikespost').text());
                    },
                    avglikescomment: function ($elem) {
                        return parseFloat($elem.find('.avglikescomment').text());
                    },
                    avglikes: function ($elem) {
                        return parseFloat($elem.find('.avglikes').text());
                    },
                    avgcommentspost: function ($elem) {
                        return parseFloat($elem.find('.avgcommentspost').text());
                    },
                    postlikesleft: function ($elem) {
                        return parseInt($elem.find('.postlikesleft').text());
                    },
                }
            });
        },
        isotopeSearch: function () {
            // reset results arrays
            var matches = [];
            var misses = [];

            $('.isotope-item').removeClass('match miss'); // get rid of any existing classes
            $('#noMatches').hide(); // ensure this is always hidden when we start a new query
            
            $('.isotope-item').each(function () {
              if ( passPeopleFilters($(this)) ) { // keyword matches element
                matches.push($(this)[0]);
              } else {
                misses.push($(this)[0]);
              }
            });
            
            // add appropriate classes and call isotope.filter
            $(matches).addClass('match');
            $(misses).addClass('miss');
            $('#isotope-container').isotope({
                filter: $(matches)
            }); // isotope.filter will take a jQuery object instead of a class name as an argument - sweet!

            if (matches.length == 0) {
                $('#noMatches').show(); // deal with empty results set
            }

        },
        initialize: function () {
            //this.listenTo(People, 'add', this.addOne);
            this.listenTo(People, 'reset', this.addAll);
        },
        addAll: function () {
            $("#isotope-container").isotope('insert', $(TNER.PeopleView.elements));
            $('.posts').mouseenter(function() {
              $(this).siblings('.overlay').show();
            });
            $('.overlay').mouseleave(function() {
              $(this).hide();
            });
            $('.overlay').click(function(event) {
              collectPostsByUser(parseInt($(this).attr('data-link')));
              event.preventDefault();
              return false;
            });
        }
    });

Posts = new PostCollection;
People = new PeopleCollection;
TNER.View = new VizPosts;
TNER.PeopleView = new VizPeople;

var newParams = {}, newParams2 = {};

window.fbAsyncInit = function() {
  FB.init({
    appId      : '320370924773477', // App ID
    channelUrl : '//tner.metamaps.cc/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
  // for any authentication related change, such as login, logout or session refresh. This means that
  // whenever someone who was previously logged out tries to log in again, the correct case below 
  // will be handled. 
  FB.Event.subscribe('auth.authResponseChange', function(response) {
    // Here we specify what we do with the response anytime this event occurs. 
    if (response.status === 'connected') {
      // The response object is returned with a status field that lets the app know the current
      // login status of the person. In this case, we're handling the situation where they 
      // have logged in to the app.
      //TNER.View.init();
      //TNER.PeopleView.init();
      $('.newposts').removeClass('disabled').addClass('btn-primary').attr('href','/feed.php').unbind('click');
      $('.facebook .addSpace p').html("You're logged in. Navigate to the <a href='/feed.php'>new posts</a> page to see the latest posts.");
      $('.fb_iframe_widget').css('background-color','white').css('padding','5px').css('border-radius','6px');
      TNER.Ready = true;
      //loadPosts({limit:25});
    } else if (response.status === 'not_authorized') {
      // In this case, the person is logged into Facebook, but not into the app, so we call
      // FB.login() to prompt them to do so. 
      // In real-life usage, you wouldn't want to immediately prompt someone to login 
      // like this, for two reasons:
      // (1) JavaScript created popup windows are blocked by most browsers unless they 
      // result from direct interaction from people using the app (such as a mouse click)
      // (2) it is a bad experience to be continually prompted to login upon page load.
      FB.login(function(response){}, {scope: 'user_groups'});
    } else {
      // In this case, the person is not logged into Facebook, so we call the login() 
      // function to prompt them to do so. Note that at this stage there is no indication
      // of whether they are logged into the app. If they aren't then they'll see the Login
      // dialog right after they log in to Facebook. 
      // The same caveats as above apply to the FB.login() call here.
      FB.login(function(response){}, {scope: 'user_groups'});
    }
  });
};

  // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));

function loadPosts(params) {
    if (params == undefined) params = newParams;
    
    FB.api('/120497731371323/feed', params, function(response) {
      console.log(response);
      if (response.data.length == 0) {
        document.getElementById("loadMore").innerHTML =
          "No more results";
        //addComments({limit:200, fields: 'id, comments.limit(500), likes.limit(500)'});
      }
      else {
        for (var post in response.data) {
          p = response.data[post];
          //bigObject[p.id] = p;
          var newpost = new Post(createPostJSON(p));
          Posts.add(newpost);
          var view = new PostView({
            model: newpost
          });
          view.render();
          TNER.View.elements += view.$el[0].outerHTML;
        }
        newParams = $.deparam.querystring(response.paging.next);
        TNER.View.addAll();
        TNER.View.elements = "";
        TNER.View.isotopeSearch();
        //loadPosts();
      }   
    });
};

function loadPeople() {    
    $.getJSON('/data/people.json', function(response) {
      response = $.parseJSON(response);
      //response.data = response.data.slice(1,20);
      $.eachCallback(response.data, function() {
          var p = this;
          
          p.totallikes = p.commentlikesreceived + p.postlikesreceived;
          p.avglikespost = (p.postlikesreceived == 0 || p.postsleft == 0) ? 0 : (p.postlikesreceived / p.postsleft).toFixed(2);
          p.avgcommentspost = (p.commentsreceived == 0 || p.postsleft == 0) ? 0 : (p.commentsreceived / p.postsleft).toFixed(2);
          p.avglikescomment = (p.commentlikesreceived == 0 || p.commentsleft == 0) ? 0 : (p.commentlikesreceived / p.commentsleft).toFixed(2);
          p.avglikes = (p.totallikes / (p.postsleft + p.commentsleft)).toFixed(2);
          
            var newperson = new Person(p);
            People.add(newperson);
            var view = new PersonView({
                model: newperson
            });
            view.render();
            if (p.postsleft > 10 && p.avglikespost >= 4) view.$el.addClass('activator');
            if (p.commentsleft > 40 && p.avglikescomment >= 1.5) view.$el.addClass('enhancer');
            if (p.postlikesleft >= 100) view.$el.addClass('advocator');
            TNER.PeopleView.elements += view.$el[0].outerHTML;
            
      }, function(loopcount) {
        $('#loadingpeople').width((((loopcount+1) / response.data.length) * 100) + '%');
        if (loopcount+1 == response.data.length) {
          //$('.progress.loading').hide();
          //TNER.PeopleView.addAll();
        }
      });
    });
};

function loadArchive(which) {
  $('.choosePosts').hide();
  $('.progress.loading').show();
  $.getJSON('/data/' + which, function(response) { 
    response = $.parseJSON(response); 
    $.eachCallback(response.data, function() {
          var newpost = new Post(createPostJSON(this));
          Posts.add(newpost);
          var view = new PostView({
            model: newpost
          });
          view.render();
          TNER.View.elements += view.$el[0].outerHTML; 
      }, function(loopcount) {
        $('#loadingposts').width( (((loopcount+1) / response.data.length) * 100) + '%' );
        if (loopcount+1 == response.data.length) {
          $('.progress.loading').hide();
          TNER.View.addAll();
        }
      });
  });
}

function addComments(params) {
    if (params == undefined) params = newParams2;
    
    FB.api('/120497731371323/feed', params, function(response) {
      console.log(response);
      if (response.data.length == 0) {}
      else {
        for (var post in response.data) {
          p = response.data[post];
          if (p.comments) {
            bigObject[p.id].comments = p.comments;
          }
          if (p.likes) {
            bigObject[p.id].likes = p.likes;
          }
          /*var d = {
                time: p.created_time,
                message: p.message,
                user: p.from.name,
                like_count: p.likes ? p.likes.data.length : 0,
                comment_count: p.comments ? p.comments.data.length : 0
            };
          Posts.add(new Post(d));*/
        }
        newParams2 = $.deparam.querystring(response.paging.next);
        addComments();
      }   
    });
};

function peoplePage() {
  $('.intro').hide();
  $('.peopleTypes, .progress.archive').show();
  loadPeople();
  getAllPosts();
}

function getAllPosts(p) {
  if (p == undefined) p = 1;
  $.getJSON('/data/section' + p + '.json', function(response) { 
    response = $.parseJSON(response); 
    $.eachCallback(response.data, function() {
          TNER.allPosts.push(this);  
      }, function(loopcount) {
        $('#loadingposts').width( (((TNER.allPosts.length+loopcount+1) / 7976) * 100) + '%' );
        if (loopcount+1 == response.data.length) {
          // 7976
          if (TNER.allPosts.length < 7976) getAllPosts(p+1);
          else if(TNER.allPosts.length == 7976) {
            $('.progress.loading').hide();
            TNER.PeopleView.addAll();
          }
        }
      });
  });
}
function collectPostsByUser(id) {
  TNER.Filter.reset();
  $('#isotope-container').isotope('destroy');
  $('#isotope-container').html('');
  $('.row.dashboard.people, .peopleTypes').hide();
  $('.postfilters').show();
  TNER.View.isotope();
  TNER.View.elements = "";
  for (var i = 0; i < TNER.allPosts.length; i++) {
    p = TNER.allPosts[i];
    if (p.from.id == id) {
      var newpost = new Post(createPostJSON(p));
      Posts.add(newpost);
      var view = new PostView({
        model: newpost
      });
      view.render();
      TNER.View.elements += view.$el[0].outerHTML;
    }
  }
  $('.postsTitle').html('All Posts by ' + People.get(id).get('name')).show();
  TNER.View.addAll();
  return TNER.View.isotopeSearch();
}

function returnToPeople(){
  TNER.Filter.reset();
  $('#isotope-container').isotope('destroy');
  $('#isotope-container').html('');
  $('.postfilters').hide();
  $('.postsTitle').hide();
  $('.row.dashboard.people, .peopleTypes').show();
  TNER.PeopleView.isotope();
  TNER.PeopleView.addAll();
  TNER.PeopleView.isotopeSearch();
}

function createPostJSON(p) {
      if (p.type == "status") {
            return {
                id: p.id,
                type: p.type,
                postaddress: p.actions[0].link,
                time: dateToString(parseDate(p.created_time.substring(0,10))),
                message: p.message ? convertToLinks(p.message.replace(/\n/g, "<br>")) : "",
                person: p.from.name,
                personid: p.from.id,
                like_count: p.likes ? p.likes.data.length : 0,
                comment_count: p.comments ? p.comments.data.length : 0,
                linknomessage: p.link && p.message ? p.link == p.message : false
            };
          }
          else if (p.type == "video") {
            return {
                id: p.id,
                type: p.type,
                postaddress: p.actions[0].link,
                time: dateToString(parseDate(p.created_time.substring(0,10))),
                message: p.message ? convertToLinks(p.message.replace(/\n/g, "<br>")) : "",
                person: p.from.name,
                personid: p.from.id,
                like_count: p.likes ? p.likes.data.length : 0,
                comment_count: p.comments ? p.comments.data.length : 0,
                linknomessage: p.link && p.message ? p.link == p.message : false,
                name: p.name,
                description: p.description,
                link: p.link,
                source: p.source,
                picture: p.picture
            };
          }
          else if (p.type == "link") {
            return {
                id: p.id,
                type: p.type,
                postaddress: p.actions[0].link,
                time: dateToString(parseDate(p.created_time.substring(0,10))),
                message: p.message ? convertToLinks(p.message.replace(/\n/g, "<br>")) : "",
                person: p.from.name,
                personid: p.from.id,
                like_count: p.likes ? p.likes.data.length : 0,
                comment_count: p.comments ? p.comments.data.length : 0,
                linknomessage: p.link && p.message ? p.link == p.message : false,
                name: p.name,
                description: p.description,
                link: p.link,
                caption: p.caption,
                picture: p.picture
            };
          }
          else if (p.type == "photo") {
            return {
                id: p.id,
                type: p.type,
                postaddress: p.actions[0].link,
                time: dateToString(parseDate(p.created_time.substring(0,10))),
                message: p.message ? convertToLinks(p.message.replace(/\n/g, "<br>")) : "",
                person: p.from.name,
                personid: p.from.id,
                like_count: p.likes ? p.likes.data.length : 0,
                comment_count: p.comments ? p.comments.data.length : 0,
                linknomessage: p.link && p.message ? p.link == p.message : false,
                name: p.name,
                caption: p.caption,
                link: p.link,
                picture: p.picture
            };
          }
}

(function($) {

  $(function() {
  
    // Placeholders for input/textarea
    $("input, textarea").placeholder();

    $(".btn-group button").on('click', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
    });

    // Disable link clicks to prevent page scrolling
    $('a[href="#fakelink"]').on('click', function (e) {
      e.preventDefault();
    });
    
    // Custom Select
    
    
  });
  
})(jQuery);

function addFilterHiding() {
        var filtersHidden = false;
        
        function switchFilters() {
          $('.dashboard.posts').toggle();
          if (!filtersHidden) {
            $('.hidefilters').html('Show Panel (ctrl-h)');
          }
          else if (filtersHidden) {
           $('.hidefilters').html('Hide Panel (ctrl-h)');
           $('#filterByUser').focus();
          }
          filtersHidden = !filtersHidden;
        }
        
        $('.hidefilters').click(function() {
          switchFilters();
        });
        
        $(window).bind('keydown', function(event) {
          if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
              case 'h':
                event.preventDefault();
                switchFilters();
                break;
            }
          }
        });
      
        $(window).scroll(function() {
          var scrollTop = 328;
          if ($(window).scrollTop() >= scrollTop){
            if ( $('.dashboard.posts').css('position') === "static" && $('.dashboard.posts').css('display') === "block" ) {
              $('.row.dashboard').css({
                position: 'fixed',
                top: '0',
                'z-index': '5',
                'border-top-left-radius': '0px',
                'border-top-right-radius': '0px'
              });
            }
            if ( $('.dashboard.people').css('position') === "static" && $('.dashboard.people').css('display') === "block" ) {
              $('.row.dashboard').css({
                position: 'fixed',
                top: '0',
                'z-index': '5',
                'border-top-left-radius': '0px',
                'border-top-right-radius': '0px'
              });
            }
            if ($('.postfilters').css('display') === "none") {
              $('.row.collection').css({
                'margin-top': '111px'
              });
            } else {
              $('.row.collection').css({
                'margin-top': '208px'
              });
            }
            $('.returnToPeople').css({
              position: 'fixed',
              left: '50%',
              'margin-left': '-590px',
              top: '40px'
            });
            $('.hidefilters').show();
          }
          else if($(window).scrollTop() < scrollTop){
            if ( $('.dashboard.posts').css('position') === "fixed" ) {
              $('.dashboard.posts').css({
                position: 'static',
                display: 'block',
                'border-top-left-radius': '6px',
                'border-top-right-radius': '6px'
              });
            }
            if ( $('.dashboard.people').css('position') === "fixed" && $('.dashboard.people').css('display') === "block" ) {
              $('.dashboard.people').css({
                position: 'static',
                display: 'block',
                'border-top-left-radius': '6px',
                'border-top-right-radius': '6px'
              });
            }
            $('.row.collection').css({
              'margin-top': '0px'
            });
            $('.returnToPeople').css({
              position: 'absolute',
              left: '-125px',
              'margin-left': '0px',
              top: '39px'
            });
            $('.hidefilters').hide();
            $('.hidefilters').html('Hide Panel (ctrl-h)');
            filtersHidden = false;
          }
          lastScroll = $(window).scrollTop();
        });
}

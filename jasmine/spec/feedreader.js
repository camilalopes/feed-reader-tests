/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against this application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? O teste não irá passar!!!
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* it tests if each feed in the allFeeds object
         * has an url defined and not empty
         */
        it('has url', function(){
            for (feed of allFeeds) {
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe('');
            }
        });

         /* it tests if each feed in the allFeeds object
          * has a name defined and not empty
          */
         it('has name', function(){
             for (feed of allFeeds) {
               expect(feed.name).toBeDefined();
               expect(feed.name).not.toBe('');
             }
         });

    });

    describe('The menu', function() {
       // it ensures that the menu element is hidden by default.
       it('the menu is hidden', function(){
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });

       /* it ensures that the menu changes visibility when the menu icon is
        * clicked. This test should have two expectations:
        * does the menu display when clicked and does it hide when clicked again.
        */
        it('the menu hides and shows', function(){
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

      beforeEach(function (done) {
          loadFeed(0, done);
      });

      /* it ensures that when the loadFeed  function is called and completes its work,
      * there is at least a single .entry element within the .feed container.
      */
      it('has at least a single .entry element', function(done){
        expect(($('.feed .entry').length)).not.toBe(0);
        done();
      });

    });


    describe('New Feed Selection', function() {

        var feed1, feed2;

        beforeEach(function(done) {
          loadFeed(0, function() {
              feed1 = $('.feed').html();

              loadFeed(1, function() {
                  done();
              });
          });
        });

        // it ensures that when a new feed is loaded the content changes
        it('feeds should have different contents', function(done) {
            feed2 = $('.feed').html();
            expect(feed1).not.toEqual(feed2);
            done();
        });
    });

}());

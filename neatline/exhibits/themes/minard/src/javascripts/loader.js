
/**
 * @package     omeka
 * @subpackage  neatline-NeatLight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

$(function() {

  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100
  });

  NProgress.start();

  Neatline.vent.on('MAP:ingest', function() {
    NProgress.done();
  });

});

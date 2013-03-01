WHAT & WHY
==========

Forums contain content that is meaningful and relevant to their users. It is not always the case that this content is desirable for advertisers, and it is not always the case that certain types of ads are appropriate to display around this content. This script injects a value into an ad tag, based on the forum you're in, to insert a flag that helps target ads better.

HOW
===

* pcts is an array of forum IDs and the desired value. Get the forumid by looking in the URL (http://forumdomain.dom/forums/f7/Thread-name-here -> 7)
* ct tag is whatever you want to pass to ad server to target, generally a short string that's easy to remember, e.g. 'nsfw'

Call by using:
document.write('<scr'+'ipt src="http://n{account#}ad.doubleclick.net/adj/{site.dom}/'+zone+';sect='+zone+';sz={comma-delimited sizes of ads};ct=section;ci=' + tt + ';tile=' + w.gnm_tile + ';ord=' + w.gnm_ord + '?" type="text/javascript"></scr' + 'ipt>')

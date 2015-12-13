   $(&quot;.contact-button a&quot;).click(function() {
        var e = $(&quot;.contact-sec&quot;);
        if (e.is(&quot;:hidden&quot;)) {
            e.fadeIn(300);
            e.addClass(&quot;contact-show&quot;);
            $(&quot;#outer-wrapper&quot;).addClass(&quot;pop_contact &quot;)
        }
        return false
    });
    $(document).bind(&quot;click&quot;, function(e) {
        if ($(e.target).parents(&quot;.contact-sec&quot;).length === 0) {
            $(&quot;.contact-sec&quot;).fadeOut(300);
            $(&quot;#outer-wrapper&quot;).removeClass(&quot;pop_contact &quot;);
            $(&quot;.contact-sec&quot;).removeClass(&quot;contact-show&quot;)
        }
    });
    $(&quot;.contact-close&quot;).click(function() {
        $(&quot;.contact-sec&quot;).fadeOut(300);
        $(&quot;#outer-wrapper&quot;).removeClass(&quot;pop_contact &quot;);
        $(&quot;.contact-sec&quot;).removeClass(&quot;contact-show&quot;);
        return false
    });

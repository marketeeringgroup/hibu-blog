jQuery(document).on('ready ajaxComplete', function () {
		//Replace read more link text
        jQuery(".featured-post .et_pb_post a.more-link").html(function () {
            return jQuery(this).addClass("et_pb_button et_pb_button_0_tb_body et_pb_custom_button_icon et_hover_enabled et_pb_bg_layout_light")
                                .attr("data-icon", "E")
                                .wrap( "<div class='et_pb_button_module_wrapper et_pb_button_0_tb_body_wrapper  et_pb_module et_had_animation'></div>" )
                                .html().replace('read more', 'Learn More');
		});
	}); 
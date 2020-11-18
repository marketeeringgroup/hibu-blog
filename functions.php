<?php

// Enqueue parent theme styling
function hibu_enqueue_styles() { 
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'hibu_enqueue_styles' );

// Enqueue custom js
function hibu_enqueue_scripts() { 
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'hibu_enqueue_scripts' );
<?php

function coding_challenge_theme_enqueue_styles() {

    wp_enqueue_style('theme-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'coding_challenge_theme_enqueue_styles');

?>
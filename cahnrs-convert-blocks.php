<?php
/**
 *
 * @wordpress-plugin
 * Plugin Name:       CAHNRS Convert Blocks
 * Plugin URI:        https://cahnrs.wsu.edu/
 * Description:       Converts some shortcodes from Spine to Gutenberg blocks
 * Version:           1.0.0
 * Author:            CAHNRS Communications
 * Author URI:        https://cahnrs.wsu.edu/
 * Text Domain:       cahnrs-convert-blocks
 */

 function enqueue_my_block_script() {
    wp_enqueue_script(
        'cahnrs-convert-blocks',
        plugins_url('cahnrs-convert-blocks.js', __FILE__),
        array('wp-blocks', 'wp-editor', 'react', 'react-dom'),
        true
    );
}
add_action('enqueue_block_editor_assets', 'enqueue_my_block_script');

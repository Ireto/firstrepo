<?php
// $Id$

/**
 * @file
 * Demonstrates how to work with JavaScript and jQuery in Drupal.
 */

/**
 * Implements hook_menu().
 */
function interact_menu() {
  $items['interact'] = array(
    'title' => 'Interact example page',
    'description' => 'Demonstration of various JavaScript utilities',
    'page callback' => 'interact_examples',
    'access callback' => TRUE,
  );
  return $items;
}


/**
 * Menu callback; Page to demonstrate JavaScript and jQuery examples.
 */
function interact_examples() {

  // Set the path to our script.
  $script = drupal_get_path('module', 'interact') . '/interact.js';

  // Include a JavaScript file.
  $js = drupal_add_js($script);

  // Same as above, but more explicit.
  //drupal_add_js($script, 'file');

  // Same as above, but even more explicit.
  //drupal_add_js($script, array('type' => 'file'));

  // If 'every_page' is set to TRUE, it will get aggregated into a single file.
  //drupal_add_js($script, array('every_page' => TRUE));

  // Sets the weight of a JavaScript file.
  //drupal_add_js($script, array('group' => JS_DEFAULT));

  // Sets the weight of a JavaScript file within a group.
  //drupal_add_js($script, array('group' => JS_DEFAULT, 'weight' => 10));

  // Sets the weight of a JavaScript file within a group.
  //drupal_add_js($script, array('scope' => 'footer'));

  // Add inline JavaScript.
  //drupal_add_js('alert("This is inline");', 'inline');

  // Same as above, but explicit.
  //drupal_add_js('alert("This is inline");', array('type' => 'inline'));

  // Use the jQuery object inline.
  //drupal_add_js('alert(jQuery("h1 span").text());', array('type' => 'inline'));

  // Same as above, but now we can use the jQuery object as $.
  //drupal_add_js('(function ($) { alert($("h1 span").text())})(jQuery);', array('type' => 'inline'));

  // Adding code to the footer.
  //drupal_add_js($script, array('scope' => 'footer'));

  // Save a variable to use in JavaScript code.
  //global $user;
  //drupal_add_js(array('interact' => array('username' => $user->name)), 'setting');
  //drupal_add_js('alert(Drupal.settings.interact.username);', array('type' => 'inline', 'scope' => 'footer'));

  $build = array(
    '#type' => 'markup',
    '#markup' => '<p>This is an examples page.</p>',
  );

  return $build;
}
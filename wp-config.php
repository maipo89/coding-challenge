<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'coding_challenge' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?6}#I9OXbq9?4pE.}232,RbhJhO?ojXM3Yt#jZ}|>X#1:TBiq9ZbP>y9$a6  7P5' );
define( 'SECURE_AUTH_KEY',  'EV[JN~%A5y<J@aG=6z<eC:|O[7DoQc>Na~?vWQ)(i.#!F{3M}bdB7Ny9b?wp3:F(' );
define( 'LOGGED_IN_KEY',    'gneV!%7:+5,@hT|!tv/3S&06&:%:zKI(vKEnM8G){Qr3d&C]Yq?F(:Zi `T6!]|P' );
define( 'NONCE_KEY',        '%IhH3 ,b]::0%P$JmS_BQ;lRu05b7F7Jqvc/ej5DW~yQTL`(m{;S(v-hM;_})dL*' );
define( 'AUTH_SALT',        'j:7U20c9``U~L&o;4*((|%@3e;LyVnoAqg+y;D^@!0l)!af NNn0iYR=Do+iygeU' );
define( 'SECURE_AUTH_SALT', '})TE]pKDB_C Fa0ZWcyLAYF|mFpZOK%KO@HN(6cP4Hs1_pkt=R7)4ug[K0k-vKQF' );
define( 'LOGGED_IN_SALT',   'wE9iK)*Mg2niKd>~( <)du6ps#vbrwg`,h{D1G#$=w#Ac=*tc*Z^+[EvN.$,QgYs' );
define( 'NONCE_SALT',       '9u`<?*/x<M?i/ M[~T#62B3{n[lW^(hBZ`9M.<o<Wz5e7|5 ^l7A($2$H8t+Xf4f' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

<?php
// this file should be located outside the public directory
if (!isset($_SERVER['SCRIPT_FILENAME']) || !str_contains($_SERVER['SCRIPT_FILENAME'], 'proxy.php')) {
  exit();
}
$api_url = 'https://api.bigcommerce.com/stores/43w18p15ev/v3';
$api_key = 'jy9t64rkrwcgg2rc1kti53ar72bahwd';
$app_url = 'http://localhost:5173';
$app_key = '847f37fd-19da-4262-ac0f-6867710df428';
?>

<?php
// should import from outside public directory
require_once('setup.php');

// cors setup
header('Access-Control-Allow-Origin: '  . $app_url);
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: *');

// exit if no-set/not-equal proxy key or no path query
if (!isset($_SERVER['HTTP_X_PROXY_KEY']) || !isset($_REQUEST['path']) || $_SERVER['HTTP_X_PROXY_KEY'] !== $app_key) {
  exit();
}

// setup headers
$headers = array();
foreach (getallheaders() as $header_name => $header_value) {
  if (strpos($header_name, 'Content-Type') === 0  ||  strpos($header_name, 'Authorization') === 0 || strpos($header_name, 'X-Requested-With') === 0) {
    $header_name = strtolower($header_name);
    $headers[] =  $header_name . ":" . $header_value;
  }
}
$headers[] = 'x-auth-token:' . $api_key;

// method and path variables
$method = $_SERVER['REQUEST_METHOD'];
$path = $_REQUEST['path'];

// http method switch
switch ($method) {
  case 'GET':
    // query parameters
    $get_keys_values = $_GET;
    unset($get_keys_values['path']);
    $keys = '';
    $values = '';
    foreach ($get_keys_values as $key => $value) {
      $keys .= $key . '%%';
      $values .= $value . '%%';
    };
    $get_keys = explode('%%', $keys);
    $get_values = explode('%%', $values);
    $get_parameters = array_combine($get_keys, $get_values);
    $get_params = http_build_query($get_parameters);
    // curl init
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL            => $api_url . $path . '?' . $get_params,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_SSL_VERIFYPEER => false, // remove/toggle on production
      CURLOPT_HTTPHEADER     => $headers
    ));
    break;
  case 'POST':
    // post parameters
    $post_keys_values = (array) json_decode(file_get_contents('php://input'));
    $post_parameters = json_encode($post_keys_values);
    // query parameters
    $get_keys_values = $_GET;
    unset($get_keys_values['path']);
    $keys = '';
    $values = '';
    foreach ($get_keys_values as $key => $value) {
      $keys .= $key . '%%';
      $values .= $value . '%%';
    };
    $get_keys = explode('%%', $keys);
    $get_values = explode('%%', $values);
    $get_parameters = array_combine($get_keys, $get_values);
    $get_params = http_build_query($get_parameters);
    // curl init
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL            => $api_url . $path . '?' . $get_params,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST  => $method,
      CURLOPT_SSL_VERIFYPEER => false, // remove/toggle on production
      CURLOPT_POSTFIELDS     => $post_parameters,
      CURLOPT_HTTPHEADER     => $headers
    ));
    break;
  default:
    echo json_encode('Proxy only allows POST and GET requests currently.');
    exit();
}

// curl action
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

// handle response
if ($err) {
  echo json_encode($err);
} else {
  json_decode($response);
  echo $response;
}
?>
<?php
    require_once('../vendor/autoload.php');

    $client = new \GuzzleHttp\Client();

    $response = $client->request('GET', 'https://testnets-api.opensea.io/assets?asset_contract_address=0x136402d7f58daa0ac76d4f1ebfca7fc662844135&order_direction=asc');

    echo $response->getBody();

?>
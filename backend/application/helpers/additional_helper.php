<?php

function sorry($message){
    $ci = &get_instance();
    $data['title'] = 'Sorry';
    $data['inner_view'] = 'pages/sorry';
    $data['message'] = $message;
    $ci->load->view('template', $data);
}

function fullname($user){
    return $user['lastname'] . ' ' . $user['firstname'] .' ' . $user['secondname'];
}

if (!function_exists('password_verify')){
    function password_verify($password, $hash){
        return (crypt($password, $hash) === $hash);
    }
}


?>
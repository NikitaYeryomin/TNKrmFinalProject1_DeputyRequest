<?php
    function sorry($message){
        $ci = &get_instance();
        $data['title'] = 'Sorry';
        $data['inner_view'] = 'pages/sorry';
        $data['message'] = $message;
        $ci->load->view('template', $data);
    }
?>
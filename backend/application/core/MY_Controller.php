<?php
class MY_Controller extends CI_Controller {
    
    protected $data;
    
    public function __construct(){
        
        parent::__construct();
        $this->load->model('base_model');
        $this->load->model('request_model', 'request');
        $this->load->model('user_model', 'user');

        $this->load->model('place_model', 'place');
        $this->load->model('districts_model', 'districts'); //TODO: rename to district (?)
        $this->data = array();
        date_default_timezone_set('Europe/Kiev');

        $session_data = $this->session->userdata('logged_in');
        if ($session_data)
        {
            $this->data['logged_in'] = $session_data;
        }
    }
    
    function fullname($user){
        return $user['lastname'] . ' ' . $user['firstname'] .' ' . $user['secondname'];
    }

}


class Front_controller extends MY_Controller {

    public function __construct(){

        parent::__construct();


    }
}


class Admin_controller extends MY_Controller {
    
    public function __construct(){
        
        parent::__construct();
        $user = null;
        if (array_key_exists('logged_in', $this->data)) {
            $user = $this->data['logged_in'];
        }
        if (!$user or !($user['role'] == 'admin')) {
            echo json_encode(array(
                'error' => 1,
                'message' => 'Access denied'
            ));
            die;
        }

    }
}
?>
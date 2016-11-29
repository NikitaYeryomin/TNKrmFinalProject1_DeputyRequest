<?php
class MY_Controller extends CI_Controller {
    
    protected $data;
    
    public function __construct(){
        
        parent::__construct();
        $this->load->model('base_model');
        $this->load->model('request_model');
        $this->load->model('user_model');
        $this->data = array();
        date_default_timezone_set('Europe/Kiev');
    }
    
    function fullname($user){
        return $user['lastname'] . ' ' . $user['firstname'] .' ' . $user['secondname'];
    }

}

class Admin_controller extends MY_Controller {
    
    public function __construct(){
        
        parent::__construct();
        
        $session_data = $this->session->userdata('logged_in');
        if ($session_data)
        {
            $this->data['username'] = $session_data['username'];
            $this->data['logged'] = $session_data['logged'];
        }
    }
}
?>
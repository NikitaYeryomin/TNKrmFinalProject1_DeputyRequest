<?php
class Users extends CI_Controller {
    
    public function __construct(){
        
        parent::__construct();
        $this->load->model('base_model');
        $this->load->model('user_model');
        $this->load->helper('url_helper');
    }
    
    public function index(){
        
        $data['users'] = $this->user_model->get_records();
        $data['title'] = 'Users list';
        $data['inner_view'] = 'users/index';
        $this->load->view('template', $data);
    }
    
    /*
    public function create(){

        $this->load->helper('form');
        $this->load->library('form_validation');
        
        $data['title'] = 'Create new user';
        $data['user'] = NULL;
    
        $this->form_validation->set_rules('username', 'User Name', 'required');
        $this->form_validation->set_rules('email', 'Email', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');
        $this->form_validation->set_rules('confirm', 'Confirm', 'required|matches[password]');

        
        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('templates/header', $data);
            $this->load->view('users/create');
            $this->load->view('templates/footer');
        }
        else
        {
            $this->users_model->set_user();
            redirect('users');
        }
    }
    */
    
    public function edit($id = NULL){
        
        $this->load->helper('form');
        $this->load->library('form_validation');

        if ($id === NULL)
        {
            $data['title'] = 'Register new user';
            $data['user'] = NULL;
        }
        else
        {
            $data['title'] = 'Edit user data for ID:'.$id;
            $data['user'] = $this->user_model->get_records($id);
        }
        
        $this->form_validation->set_rules('username', 'User Name', 'required');
        $this->form_validation->set_rules('email', 'Email', 'required');
        
        if (($id === NULL) || ($this->input->post('password')))
        {
            $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
            $this->form_validation->set_rules('password', 'Password', 'required');
            $this->form_validation->set_rules('confirm', 'Confirm', 'required|matches[password]');
        }

        if ($this->form_validation->run() === FALSE)
        {
            $data['inner_view'] = 'users/user';
            $this->load->view('template', $data);
        }
        else
        {
            $this->user_model->set_user($id);
            redirect('users');
        }
    }
    
    public function delete($id){
        $this->user_model->del_user($id);
        redirect('users');
    }
    
    public function sort($field, $order = 'ASC'){
        redirect('users');
    }
    
    public function login(){
        
        $this->load->helper('form');
        $this->load->library('form_validation');
        
        $data['title'] = 'User login';
        $this->form_validation->set_rules('login', 'Login', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');
        $data['inner_view'] = 'users/login';
        
        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('template', $data);
        }
        else
        {
            $data = array(
                'login' => $this->input->post('login'),
                'pass'  => $this->input->post('password')
            );
            $result = $this->user_model->login($data);
            switch ($result)
            {
                case 1:
                {
                    $this->load->view('User not exists');
                    break;
                }
                case 2:
                {
                    sorry('Wrong password');
                    break;
                }
                default:
                {
                    $this->session->set_userdata('logged_in', $result);
                    //$session_data = $this->session->userdata('logged_in');
                    $data['username'] = $result['username'];
                    $data['logged'] = $result['logged'];
                    $this->index();
                }
            }
            /*
            if ($result == 1)
            {
                //user not exists
                
                //show_error('User not exists', 'User not exists');
            }
            if ($result == 2)
            {
                //wrong password
                
            }
            if ($result)
            {
                $this->session->set_userdata('logged_in', $result);
                //$session_data = $this->session->userdata('logged_in');
                $data['username'] = $result['username'];
                $data['logged'] = $result['logged'];
                $this->index();
                //redirect('users');
            }
            else
            {
                //wrong password
                redirect('/');
            }
            */
        }
    }
    
    public function logout(){
        $this->session->unset_userdata('logged_in');
        $this->session->sess_destroy();
        redirect('/');
    }
}
?>
<?php
class Users extends Admin_controller {

    public function index(){
        $this->data['users'] = $this->user_model->get_records();
        $this->data['title'] = 'Users list';
        $this->data['inner_view'] = 'users/index';
        $this->load->view('template', $this->data);
    }

    public function edit($id = NULL){
        if ($id === NULL)
        {
            $this->data['title'] = 'Register new user';
            $this->data['user'] = NULL;
        }
        else
        {
            $this->data['title'] = 'Edit user data for ID:'.$id;
            $this->data['user'] = $this->user_model->get_records($id);
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
            $this->data['inner_view'] = 'users/user';
            $this->load->view('template', $this->data);
        }
        else
        {
            $post = array(
                'username'  => $this->input->post('username'),
                'email'     => $this->input->post('email'),
                'phone'     => $this->input->post('phone')
                );
            if (($id === NULL) || ($this->input->post('password')))
            {
                $post['hash'] = password_hash($this->input->post('password'), PASSWORD_DEFAULT);
            }
            if ($id === NULL)
            {
                $post['joindate'] = date("Y-m-d H:i:s");
            }
            $this->user_model->set_data($id, $post);
            redirect('users');
        }
    }
    
    public function delete($id){
        $this->user_model->delete($id);
        if ($id == $this->session->userdata('logged_in')['id'])
        {
            $this->logout();
        }
        redirect('users');
    }
    
    /*
    public function sort($field, $order = 'ASC'){
        redirect('users');
    }
    */
    
    public function login(){
        $this->data['title'] = 'User login';
        $this->form_validation->set_rules('email', 'Email', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');
        $this->data['inner_view'] = 'users/login';
        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('template', $this->data);
        }
        else
        {
            $this->data = array(
                'email' => $this->input->post('email'),
                'pass'  => $this->input->post('password')
            );
            $result = $this->user_model->login($this->data);
            if ($result)
            {
                $this->session->set_userdata('logged_in', $result);
                $this->data['username'] = $result['username'];
                $this->data['logged'] = $result['logged'];
                redirect('users');
            }
            else
            {
                sorry('Incorrect username and/or password');
            }
        }
    }
    
    public function logout(){
        $this->session->unset_userdata('logged_in');
        $this->session->sess_destroy();
        redirect('/');
    }
}
?>
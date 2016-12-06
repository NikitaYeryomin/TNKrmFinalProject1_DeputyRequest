<?php
class Users extends Admin_controller {

    public function index(){
        $this->data['users'] = $this->user_model->get_records();
        $this->data['title'] = 'Users list';
        $this->data['inner_view'] = 'users/index';
        $this->load->view('template', $this->data);
    }
    
    public function register(){
        $this->data['title'] = 'Register new user';
        $this->data['user'] = NULL;
        $this->_edit();
    }
    
    public function edituser($id){
        $this->data['title'] = 'Edit user data for ID:'.$id;
        $this->data['user'] = $this->user_model->get_records($id);
        $this->_edit($id);
    }

    public function edit($id = NULL){
        if (!$id)
        {
            $this->data['title'] = 'Register new user';
            $this->data['user'] = NULL;
        }
        else
        {
            $this->data['title'] = 'Edit user data for ID:'.$id;
            $this->data['user'] = $this->user_model->get_records($id);
        }
        // setting rules for form validation
        $this->form_validation->set_rules('firstname', 'Имя', 'required');
        $this->form_validation->set_rules('secondname', 'Отчество', 'required');
        $this->form_validation->set_rules('lastname', 'Фамилия', 'required');
        $this->form_validation->set_rules('phone', 'Телефон №', 'required');
        $this->form_validation->set_rules('city', 'Город', 'required');
        $this->form_validation->set_rules('street', 'Улица', 'required');
        $this->form_validation->set_rules('home', '№ дома', 'required|is_natural_no_zero');
        if ($this->input->post('password') || !$id)
        {
            if (!$id)
            {
                $this->form_validation->set_rules('email', 'E-mail', 'required|valid_email|unique');
            }
            else
            {
                $this->form_validation->set_rules('email', 'E-mail', 'required|valid_email');
            }
            $this->form_validation->set_rules('password', 'Пароль', 'required');
            $this->form_validation->set_rules('confirm', 'Подтверждение пароля', 'required|matches[password]');
        }
        //running form
        if (!($this->form_validation->run()))
        {
            $this->data['inner_view'] = 'users/user';
            $this->load->view('template', $this->data);
        }
        else
        {
            $post = array(
                'firstname' => $this->input->post('firstname'),
                'secondname'=> $this->input->post('secondname'),
                'lastname'  => $this->input->post('lastname'),
                'email'     => $this->input->post('email'),
                'phone'     => $this->input->post('phone'),
                'city'      => $this->input->post('city'),
                //'city_id'   => $this->input->post('city'),
                'street'    => $this->input->post('street'),
                'home'      => $this->input->post('home'),
            );
            if ((!$id) || ($this->input->post('password')))
            {
                $post['hash'] = password_hash($this->input->post('password'), PASSWORD_DEFAULT);
            }
            if (!$id)
            {
                $post['joindate'] = date("Y-m-d H:i:s");
            }
            else
            {
                $post['role'] = $this->input->post('role');    
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
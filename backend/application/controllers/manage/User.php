<?php
class User extends Admin_controller {
/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

    public function index(){
        echo json_encode(array(
                'error'    => 0,
                'UserList' => $this->user->get_records(),
                'CityList' => $this->city->get_records()
            ));
    }
    
    public function get($id) {
        $result = $this->user->get_records($id);
        if ($result) {
            echo json_encode(array(
                    'error'    => 0,
                    'User'     => $result,
                    'CityList' => $this->city->get_records(),
                    'Roles'    => $this->user->sqlexec("SHOW COLUMNS FROM user WHERE field = 'role'")
                ));
        } else {
            echo json_encode(array(
                    'error'    => 1,
                    'User'     => null,
                    'CityList' => null,
                    'Roles'    => null
                ));
        }
    }
    
    public function save($id) {
        echo json_encode(array(
                'error' => 0
            ));
    }
    
    /*
    public function register(){
        $this->data['title'] = 'Register new user';
        $this->data['user'] = NULL;
        $this->_edit();
    }
    
    public function edituser($id){
        $this->data['title'] = 'Edit user data for ID:'.$id;
        $this->data['user'] = $this->user->get_records($id);
        $this->_edit($id);
    }
    */
    
    public function edit($id = NULL){
        if (!$id)
        {
            $this->data['title'] = 'Register new user';
            $this->data['user'] = NULL;
        }
        else
        {
            $this->data['title'] = 'Edit user data for ID:'.$id;
            $this->data['user'] = $this->user->get_records($id);
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
            $this->data['inner_view'] = 'user/user';
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
            $this->user->set_data($id, $post);
            redirect('user');
        }
    }
    
    public function delete($id){
        $logged_in = $this->session->userdata('logged_in');
        if ($id == $logged_in['id'])
        {
            $this->logout();
        }
        $this->user->delete($id);
        //redirect('/backend/manage/user');
    }

    public function login(){
        $this->data['title'] = 'User login';
        $this->form_validation->set_rules('email', 'Email', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');
        $this->data['inner_view'] = 'user/login';
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
            $result = $this->user->login($this->data);
            if ($result)
            {
                $this->session->set_userdata('logged_in', $result);
                $this->data['username'] = $result['username'];
                $this->data['logged'] = $result['logged'];
                redirect('user');
            }
            else
            {
                sorry('Incorrect username and/or password');
            }
        }
    }

}
?>